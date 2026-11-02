"use client";

import { useState, type ChangeEvent } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandText } from "@/components/ui/BrandText";
import {
  quoteFormSchema,
  type QuoteFormValues,
} from "@/lib/validation";

const serviceOptions = [
  "Hood & Exhaust Cleaning",
  "NFPA 96 Inspection",
  "HVAC Air Duct Cleaning",
  "Dryer Vent Cleaning",
] as const;

const serviceDetailFields = {
  "Hood & Exhaust Cleaning": {
    name: "hoodExhaustDetails",
    label: "Hood & exhaust details",
    placeholder: "Number of hoods, kitchen type, or access notes",
  },
  "NFPA 96 Inspection": {
    name: "nfpa96Details",
    label: "NFPA 96 inspection details",
    placeholder: "Inspection deadline, prior findings, or documentation needed",
  },
  "HVAC Air Duct Cleaning": {
    name: "hvacDetails",
    label: "HVAC air duct details",
    placeholder: "Approximate square footage, number of systems, or access notes",
  },
  "Dryer Vent Cleaning": {
    name: "dryerVentDetails",
    label: "Dryer vent details",
    placeholder: "Number of vents, floors, or residential/commercial property notes",
  },
} as const;

const inputClassName =
  "w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-[#0B1F3A] placeholder:text-slate-400 focus:border-[#E11D2E] focus:outline-none focus:ring-2 focus:ring-[#E11D2E]/20";

const labelClassName =
  "mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#0B1F3A]";

const maxFileSize = 10 * 1024 * 1024;
const allowedExtensions = /\.(jpe?g|png|pdf)$/i;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      state: "MA",
      serviceRequired: [],
      contactMethod: "",
      preferredHours: "",
      reasonForService: "",
      hoodExhaustDetails: "",
      nfpa96Details: "",
      hvacDetails: "",
      dryerVentDetails: "",
    },
  });

  const selectedServices = useWatch({ control, name: "serviceRequired" }) ?? [];

  const onFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    const issue =
      selectedFiles.length > 5
        ? "Please select no more than 5 files."
        : selectedFiles.find((file) => !allowedExtensions.test(file.name))
          ? "Only JPG, PNG, and PDF files are accepted."
          : selectedFiles.find((file) => file.size > maxFileSize)
            ? "Each file must be 10 MB or smaller."
            : null;

    setAttachmentError(issue);
    setFiles(issue ? [] : selectedFiles);
    if (issue) event.target.value = "";
  };

  const onSubmit = async (values: QuoteFormValues) => {
    if (attachmentError) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([name, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(name, item));
        } else if (value !== undefined) {
          formData.append(name, String(value));
        }
      });
      files.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as {
        success?: boolean;
        referenceId?: string;
        message?: string;
      };

      if (!response.ok || !result.success || !result.referenceId) {
        throw new Error(
          result.message ??
            "We could not submit your request. Please call +1 (857) 800-0890."
        );
      }

      setReferenceId(result.referenceId);
      setFiles([]);
      reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your request. Please call +1 (857) 800-0890."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"
    >
      {referenceId ? (
        <div className="space-y-4 py-8 text-center" role="status">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#0B1F3A]">
            Quote Request Received
          </h3>
          <p className="mx-auto max-w-md text-sm text-slate-600">
            Thank you. Our team will review your request and contact you using
            your preferred method. Your reference number is{" "}
            <strong>{referenceId}</strong>.
          </p>
          <p className="text-xs text-slate-500">
            Submitting a request does not confirm an appointment. Emergency and
            priority services are subject to availability.
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={() => setReferenceId(null)}
            className="mt-2"
          >
            Send Another Request
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
          noValidate
        >
          <div>
            <h2 className="text-2xl font-extrabold text-[#0B1F3A]">
              Request a Free Quote
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Commercial Kitchen Hood &amp; Exhaust Cleaning &amp; Inspection ·
              HVAC Air Duct Cleaning · Dryer Vent Cleaning
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Serving Boston &amp; Statewide Massachusetts · Flexible Scheduling
              · Residential &amp; Commercial
            </p>
          </div>

          {(errorMessage || attachmentError) && (
            <div
              className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              role="alert"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D2E]" />
              <span>{attachmentError ?? errorMessage}</span>
            </div>
          )}

          <section className="space-y-4" aria-labelledby="contact-information">
            <h3
              id="contact-information"
              className="border-b border-slate-100 pb-2 text-lg font-bold text-[#0B1F3A]"
            >
              1. Contact Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClassName}>
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="fullName"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={`${inputClassName} pl-10`}
                    aria-invalid={Boolean(errors.fullName)}
                    {...register("fullName")}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="businessName" className={labelClassName}>
                  Business / Property Name
                </label>
                <input
                  id="businessName"
                  autoComplete="organization"
                  placeholder="Business or property name"
                  className={inputClassName}
                  {...register("businessName")}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClassName}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className={`${inputClassName} pl-10`}
                    aria-invalid={Boolean(errors.email)}
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 555-5555"
                    className={`${inputClassName} pl-10`}
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contactMethod" className={labelClassName}>
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  className={inputClassName}
                  {...register("contactMethod")}
                >
                  <option value="">Select contact method</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                  <option value="Text message">Text message</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4" aria-labelledby="service-location">
            <h3
              id="service-location"
              className="border-b border-slate-100 pb-2 text-lg font-bold text-[#0B1F3A]"
            >
              2. Service Location &amp; Property
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="streetAddress" className={labelClassName}>
                  Service Street Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    id="streetAddress"
                    autoComplete="street-address"
                    placeholder="Street address and unit"
                    className={`${inputClassName} pl-10`}
                    aria-invalid={Boolean(errors.streetAddress)}
                    {...register("streetAddress")}
                  />
                </div>
                {errors.streetAddress && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.streetAddress.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="city" className={labelClassName}>
                  City / Town *
                </label>
                <input
                  id="city"
                  autoComplete="address-level2"
                  placeholder="City or town"
                  className={inputClassName}
                  aria-invalid={Boolean(errors.city)}
                  {...register("city")}
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className={labelClassName}>
                  ZIP Code *
                </label>
                <input
                  id="zipCode"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  placeholder="02108"
                  className={inputClassName}
                  aria-invalid={Boolean(errors.zipCode)}
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="state" className={labelClassName}>
                  State *
                </label>
                <select
                  id="state"
                  className={inputClassName}
                  {...register("state")}
                >
                  <option value="MA">Massachusetts</option>
                </select>
              </div>
              <div>
                <label htmlFor="propertyType" className={labelClassName}>
                  Property / Business Type *
                </label>
                <select
                  id="propertyType"
                  className={inputClassName}
                  aria-invalid={Boolean(errors.propertyType)}
                  {...register("propertyType")}
                >
                  <option value="">Select property type</option>
                  <option value="Restaurant / commercial kitchen">
                    Restaurant / commercial kitchen
                  </option>
                  <option value="Other commercial property">
                    Other commercial property
                  </option>
                  <option value="Multi-unit residential">
                    Multi-unit residential
                  </option>
                  <option value="Single-family residential">
                    Single-family residential
                  </option>
                  <option value="Other">Other</option>
                </select>
                {errors.propertyType && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.propertyType.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="businessHours" className={labelClassName}>
                  Business / Property Operating Hours
                </label>
                <input
                  id="businessHours"
                  placeholder="e.g. Mon–Fri, 9 AM–5 PM"
                  className={inputClassName}
                  {...register("businessHours")}
                />
              </div>
            </div>
          </section>

          <section className="space-y-4" aria-labelledby="select-services">
            <h3
              id="select-services"
              className="border-b border-slate-100 pb-2 text-lg font-bold text-[#0B1F3A]"
            >
              3. Select Service(s) *
            </h3>
            <p className="-mt-2 text-sm text-slate-600">
              Select one or more. Relevant questions will appear automatically.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceOptions.map((service) => (
                <label
                  key={service}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3.5 text-sm font-medium text-[#0B1F3A] hover:border-[#E11D2E]/50"
                >
                  <input
                    type="checkbox"
                    value={service}
                    className="mt-0.5 h-4 w-4 accent-[#E11D2E]"
                    {...register("serviceRequired")}
                  />
                  {service}
                </label>
              ))}
            </div>
            {errors.serviceRequired && (
              <p className="text-xs text-red-600">
                {errors.serviceRequired.message}
              </p>
            )}
            {selectedServices.length > 0 && (
              <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
                {serviceOptions
                  .filter((service) => selectedServices.includes(service))
                  .map((service) => {
                    const detail = serviceDetailFields[service];
                    return (
                      <div key={service}>
                        <label
                          htmlFor={detail.name}
                          className={labelClassName}
                        >
                          {detail.label} (optional)
                        </label>
                        <textarea
                          id={detail.name}
                          rows={2}
                          placeholder={detail.placeholder}
                          className={inputClassName}
                          {...register(detail.name)}
                        />
                      </div>
                    );
                  })}
              </div>
            )}
          </section>

          <section className="space-y-4" aria-labelledby="scheduling">
            <h3
              id="scheduling"
              className="border-b border-slate-100 pb-2 text-lg font-bold text-[#0B1F3A]"
            >
              4. Scheduling &amp; Service Priority
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="preferredSchedule" className={labelClassName}>
                  Preferred Service Schedule *
                </label>
                <select
                  id="preferredSchedule"
                  className={inputClassName}
                  aria-invalid={Boolean(errors.preferredSchedule)}
                  {...register("preferredSchedule")}
                >
                  <option value="">Select scheduling preference</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Recurring service">Recurring service</option>
                  <option value="Flexible">Flexible</option>
                </select>
                {errors.preferredSchedule && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.preferredSchedule.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="preferredDate" className={labelClassName}>
                  Preferred Service Date
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  className={inputClassName}
                  aria-invalid={Boolean(errors.preferredDate)}
                  {...register("preferredDate")}
                />
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.preferredDate.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="preferredHours" className={labelClassName}>
                  Preferred Cleaning Hours
                </label>
                <select
                  id="preferredHours"
                  className={inputClassName}
                  {...register("preferredHours")}
                >
                  <option value="">Select time window</option>
                  <option value="Before opening">Before opening</option>
                  <option value="During operating hours">
                    During operating hours
                  </option>
                  <option value="After closing">After closing</option>
                  <option value="Overnight">Overnight</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label htmlFor="reasonForService" className={labelClassName}>
                  Reason for Service
                </label>
                <select
                  id="reasonForService"
                  className={inputClassName}
                  {...register("reasonForService")}
                >
                  <option value="">Select reason</option>
                  <option value="Routine maintenance">Routine maintenance</option>
                  <option value="Upcoming inspection">Upcoming inspection</option>
                  <option value="Failed inspection / violation">
                    Failed inspection / violation
                  </option>
                  <option value="New property / first service">
                    New property / first service
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4" aria-labelledby="additional-information">
            <h3
              id="additional-information"
              className="border-b border-slate-100 pb-2 text-lg font-bold text-[#0B1F3A]"
            >
              5. Additional Information &amp; Photos
            </h3>
            <div>
              <label htmlFor="additionalMessage" className={labelClassName}>
                Describe Your Service Requirements *
              </label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <textarea
                  id="additionalMessage"
                  rows={4}
                  placeholder="Tell us about the system, access requirements, current condition, or any deadlines."
                  className={`${inputClassName} pl-10`}
                  aria-invalid={Boolean(errors.additionalMessage)}
                  {...register("additionalMessage")}
                />
              </div>
              {errors.additionalMessage && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.additionalMessage.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="files" className={labelClassName}>
                Upload Photos / Inspection Reports (Optional)
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center hover:border-[#E11D2E]/60">
                <Upload className="h-5 w-5 text-[#E11D2E]" />
                <span className="text-sm font-semibold text-[#0B1F3A]">
                  Choose files
                </span>
                <span className="text-xs text-slate-500">
                  JPG, PNG, PDF · Maximum 5 files, 10 MB each
                </span>
                <input
                  id="files"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                  multiple
                  className="sr-only"
                  onChange={onFilesChange}
                />
              </label>
              {files.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                  {files.map((file) => (
                    <li key={`${file.name}-${file.lastModified}`}>
                      {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <div className="space-y-4">
            <label className="flex items-start gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                value="true"
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#E11D2E]"
                aria-invalid={Boolean(errors.consent)}
                {...register("consent")}
              />
              <span>
                I agree to be contacted by <BrandText>Boston Hood &amp; Duct</BrandText> regarding this
                service request. *
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-red-600">{errors.consent.message}</p>
            )}
            <p className="text-xs leading-relaxed text-slate-500">
              Submitting a request does not confirm an appointment. Emergency
              and priority services are subject to availability. Final pricing
              depends on the system, access, condition, and scope of work.
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full text-base font-bold shadow-lg shadow-red-600/20"
          >
            PREPARE EMAIL QUOTE REQUEST →
          </Button>
          <p className="flex items-center justify-center gap-1 text-center text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5 text-[#E11D2E]" />
            Your request is sent securely to our quote team.
          </p>
        </form>
      )}
    </div>
  );
}
