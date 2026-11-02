import { z } from "zod";

export const quoteServices = [
  "Hood & Exhaust Cleaning",
  "NFPA 96 Inspection",
  "HVAC Air Duct Cleaning",
  "Dryer Vent Cleaning",
] as const;

const optionalContactMethodSchema = z.union([
  z.enum(["Phone", "Email", "Text message"]),
  z.literal(""),
]);

const optionalServiceChoiceSchema = z.union([
  z.enum([
    "Before opening",
    "During operating hours",
    "After closing",
    "Overnight",
    "Flexible",
  ]),
  z.literal(""),
]);

const optionalReasonSchema = z.union([
  z.enum([
    "Routine maintenance",
    "Upcoming inspection",
    "Failed inspection / violation",
    "New property / first service",
    "Other",
  ]),
  z.literal(""),
]);

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Name is too long." }),
  businessName: z
    .string()
    .trim()
    .max(120, { message: "Business name is too long." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(254, { message: "Email address is too long." }),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
      { message: "Please enter a valid phone number." }
    ),
  contactMethod: optionalContactMethodSchema,
  streetAddress: z
    .string()
    .trim()
    .min(3, { message: "Please enter the service street address." })
    .max(200, { message: "Street address is too long." }),
  city: z
    .string()
    .trim()
    .min(2, { message: "Please enter a city or town." })
    .max(100, { message: "City or town is too long." }),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}(?:-\d{4})?$/, {
      message: "Enter a valid Massachusetts ZIP code.",
    }),
  state: z.literal("MA"),
  propertyType: z.enum(
    [
      "Restaurant / commercial kitchen",
      "Other commercial property",
      "Multi-unit residential",
      "Single-family residential",
      "Other",
    ],
    { message: "Please select a property or business type." }
  ),
  businessHours: z
    .string()
    .trim()
    .max(200, { message: "Operating hours are too long." }),
  serviceRequired: z
    .array(z.enum(quoteServices))
    .min(1, { message: "Select at least one service." }),
  hoodExhaustDetails: z
    .string()
    .trim()
    .max(1000, { message: "Service details cannot exceed 1000 characters." }),
  nfpa96Details: z
    .string()
    .trim()
    .max(1000, { message: "Service details cannot exceed 1000 characters." }),
  hvacDetails: z
    .string()
    .trim()
    .max(1000, { message: "Service details cannot exceed 1000 characters." }),
  dryerVentDetails: z
    .string()
    .trim()
    .max(1000, { message: "Service details cannot exceed 1000 characters." }),
  preferredSchedule: z.enum(
    [
      "As soon as possible",
      "Within 1–2 weeks",
      "Within 1 month",
      "Recurring service",
      "Flexible",
    ],
    { message: "Please select a preferred service schedule." }
  ),
  preferredDate: z
    .string()
    .refine(
      (value) =>
        value === "" ||
        (/^\d{4}-\d{2}-\d{2}$/.test(value) &&
          !Number.isNaN(Date.parse(`${value}T00:00:00`))),
      { message: "Enter a valid preferred service date." }
    ),
  preferredHours: optionalServiceChoiceSchema,
  reasonForService: optionalReasonSchema,
  additionalMessage: z
    .string()
    .trim()
    .min(10, { message: "Please describe your service requirements." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  consent: z.literal("true", {
    message: "Please agree to be contacted about this service request.",
  }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(3, { message: "Subject is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1500, { message: "Message is too long." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
