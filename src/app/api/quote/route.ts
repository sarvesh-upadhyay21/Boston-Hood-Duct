import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation";

const maxFileCount = 5;
const maxFileSize = 10 * 1024 * 1024;
const maxRequestSize = 55 * 1024 * 1024;

const supportedFileSignatures = {
  ".jpg": (bytes: Buffer) =>
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff,
  ".jpeg": (bytes: Buffer) =>
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff,
  ".png": (bytes: Buffer) =>
    bytes.length >= 8 &&
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
  ".pdf": (bytes: Buffer) => bytes.subarray(0, 5).toString() === "%PDF-",
};

function getFileExtension(fileName: string) {
  return fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
}

function formatQuoteEmail(
  data: ReturnType<typeof quoteFormSchema.parse>,
  referenceId: string,
  attachmentNames: string[]
) {
  const serviceDetails = [
    {
      service: "Hood & Exhaust Cleaning",
      details: data.hoodExhaustDetails,
    },
    { service: "NFPA 96 Inspection", details: data.nfpa96Details },
    { service: "HVAC Air Duct Cleaning", details: data.hvacDetails },
    { service: "Dryer Vent Cleaning", details: data.dryerVentDetails },
  ] as const;
  const requestedServiceDetails = serviceDetails
    .filter(({ service }) => data.serviceRequired.includes(service))
    .map(({ service, details }) => `${service}: ${details || "Not provided"}`);

  return [
    `Quote request ${referenceId}`,
    "",
    `Name: ${data.fullName}`,
    `Business / property: ${data.businessName || "Not provided"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Preferred contact method: ${data.contactMethod || "Not provided"}`,
    "",
    `Service address: ${data.streetAddress}, ${data.city}, ${data.state} ${data.zipCode}`,
    `Property type: ${data.propertyType}`,
    `Operating hours: ${data.businessHours || "Not provided"}`,
    "",
    `Requested services: ${data.serviceRequired.join(", ")}`,
    ...requestedServiceDetails,
    "",
    `Preferred schedule: ${data.preferredSchedule}`,
    `Preferred date: ${data.preferredDate || "Not provided"}`,
    `Preferred cleaning hours: ${data.preferredHours || "Not provided"}`,
    `Reason for service: ${data.reasonForService || "Not provided"}`,
    "",
    "Service requirements:",
    data.additionalMessage,
    "",
    `Attachments: ${attachmentNames.length ? attachmentNames.join(", ") : "None"}`,
    `Contact consent: ${data.consent === "true" ? "Yes" : "No"}`,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxRequestSize) {
    return NextResponse.json(
      { success: false, message: "The total upload size must be 55 MB or less." },
      { status: 413 }
    );
  }

  if (!req.headers.get("content-type")?.includes("multipart/form-data")) {
    return NextResponse.json(
      { success: false, message: "Submit the quote request using the form." },
      { status: 415 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "The submitted form data could not be read." },
      { status: 400 }
    );
  }

  const validationResult = quoteFormSchema.safeParse({
    fullName: formData.get("fullName"),
    businessName: formData.get("businessName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    contactMethod: formData.get("contactMethod"),
    streetAddress: formData.get("streetAddress"),
    city: formData.get("city"),
    zipCode: formData.get("zipCode"),
    state: formData.get("state"),
    propertyType: formData.get("propertyType"),
    businessHours: formData.get("businessHours"),
    serviceRequired: formData.getAll("serviceRequired"),
    hoodExhaustDetails: formData.get("hoodExhaustDetails") ?? "",
    nfpa96Details: formData.get("nfpa96Details") ?? "",
    hvacDetails: formData.get("hvacDetails") ?? "",
    dryerVentDetails: formData.get("dryerVentDetails") ?? "",
    preferredSchedule: formData.get("preferredSchedule"),
    preferredDate: formData.get("preferredDate"),
    preferredHours: formData.get("preferredHours"),
    reasonForService: formData.get("reasonForService"),
    additionalMessage: formData.get("additionalMessage"),
    consent: formData.get("consent"),
  });

  if (!validationResult.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please review the form and correct the highlighted details.",
        errors: validationResult.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const submittedFiles = formData.getAll("files");
  if (
    submittedFiles.length > maxFileCount ||
    submittedFiles.some((entry) => typeof entry === "string")
  ) {
    return NextResponse.json(
      { success: false, message: "Upload no more than 5 supported files." },
      { status: 400 }
    );
  }

  const fileEntries = submittedFiles.filter(
    (entry): entry is File => typeof entry !== "string"
  );
  const files: { name: string; content: string }[] = [];
  for (const entry of fileEntries) {
    const extension = getFileExtension(entry.name);
    const signatureCheck =
      supportedFileSignatures[
        extension as keyof typeof supportedFileSignatures
      ];

    if (
      !signatureCheck ||
      entry.size === 0 ||
      entry.size > maxFileSize
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Each attachment must be a non-empty JPG, PNG, or PDF up to 10 MB.",
        },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await entry.arrayBuffer());
    if (!signatureCheck(bytes)) {
      return NextResponse.json(
        {
          success: false,
          message: `${entry.name} does not match its file type. Upload a valid JPG, PNG, or PDF.`,
        },
        { status: 400 }
      );
    }

    files.push({
      name: entry.name.replace(/[^\w.-]/g, "_"),
      content: bytes.toString("base64"),
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Quote submissions are temporarily unavailable. Please call +1 (857) 800-0890.",
      },
      { status: 503 }
    );
  }

  const validData = validationResult.data;
  const referenceId = `BHD-${Date.now().toString(36).toUpperCase()}-${randomBytes(3).toString("hex").toUpperCase()}`;

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.SENDER_EMAIL ??
          "Boston Hood & Duct <quotes@bostonhoodandduct.com>",
        to: [
          process.env.DISPATCH_NOTIFICATION_EMAIL ??
            "dispatch@bostonhoodandduct.com",
        ],
        reply_to: validData.email,
        subject: `Quote request ${referenceId}: ${validData.serviceRequired.join(", ")}`,
        text: formatQuoteEmail(
          validData,
          referenceId,
          files.map((file) => file.name)
        ),
        ...(files.length > 0 ? { attachments: files } : {}),
      }),
    });

    if (!emailResponse.ok) {
      console.error(
        "[Quote API] Email provider rejected delivery",
        emailResponse.status
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "We could not deliver your quote request right now. Please call +1 (857) 800-0890.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Your quote request was sent to our team.",
    });
  } catch (error) {
    console.error("[Quote API] Email delivery failed", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We could not deliver your quote request right now. Please call +1 (857) 800-0890.",
      },
      { status: 502 }
    );
  }
}
