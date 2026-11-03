import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { serviceImages } from "@/data/serviceImages";
import { Phone, Mail, MapPin, Clock, PhoneCall } from "lucide-react";
import { HeroBanner } from "@/components/ui/HeroBanner";

export const metadata: Metadata = {
  title: "Contact Us & 24/7 Emergency Dispatch",
  description:
    "Get in touch with Boston Hood & Duct for commercial kitchen hood cleaning, exhaust duct degreasing, or urgent Boston Fire Department inspection remediation.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        // badge="Connect With Our Team"
        title="Contact Boston Hood & Duct"
        description="Have questions about your hood cleaning schedule, need an itemized quote, or facing a sudden inspection deadline? Our Boston dispatch is here to help 24/7."
        image={serviceImages.landingHero}
        imageAlt="Contact Boston Hood & Duct"
      />

      {/* Main Contact Section */}
      <section className="bg-[#F4F7FB] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div>
              <ContactForm />
            </div>

            <section aria-labelledby="direct-contact-heading" className="space-y-6">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#E11D2E]">
                  Direct Contact
                </p>
                <h2
                  id="direct-contact-heading"
                  className="text-2xl font-black leading-tight text-[#0B1F3A] sm:text-3xl"
                >
                  We&apos;re here when your kitchen needs support.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Speak directly with our Massachusetts team for scheduling,
                  service questions, or urgent inspection needs.
                </p>
              </div>

              <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
                <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#E11D2E] to-[#B91C2B] p-6 text-white shadow-xl shadow-red-950/10 sm:p-8">
                  <div>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-inset ring-white/20">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/75">
                      24/7 Urgent Dispatch
                    </p>
                    <h3 className="mt-2 text-xl font-black sm:text-2xl">
                      Need urgent help?
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85">
                      For failed fire inspections or time-sensitive kitchen
                      exhaust issues, call us to discuss the next available
                      service.
                    </p>
                  </div>

                  <a
                    href="tel:+18578000890"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-[#0B1F3A] shadow-md transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B91C2B] sm:w-auto"
                  >
                    <Phone className="h-4 w-4 text-[#E11D2E]" />
                    +1 (857) 800-0890
                  </a>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-lg font-extrabold text-[#0B1F3A]">
                    Contact Information
                  </h3>
                  <div className="mt-6 grid gap-x-6 gap-y-7 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <MapPin className="h-5 w-5 text-[#E11D2E]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Office Location
                        </h4>
                        <p className="mt-1 text-sm font-semibold text-[#0B1F3A]">
                          Wellesley, MA 02482
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <Phone className="h-5 w-5 text-[#E11D2E]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Direct Telephone
                        </h4>
                        <a
                          href="tel:+18578000890"
                          className="mt-1 block text-sm font-semibold text-[#0B1F3A] transition-colors hover:text-[#E11D2E]"
                        >
                          +1 (857) 800-0890
                        </a>
                      </div>
                    </div>

                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <Mail className="h-5 w-5 text-[#E11D2E]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email
                        </h4>
                        <a
                          href="mailto:service@bostonhoodandduct.com"
                          className="mt-1 block break-all text-sm font-semibold text-[#0B1F3A] transition-colors hover:text-[#E11D2E]"
                        >
                          service@bostonhoodandduct.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <Clock className="h-5 w-5 text-[#E11D2E]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Service Hours
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#0B1F3A]">
                          <strong>Crews:</strong> 24 hours, 7 days<br />
                          <strong>Office:</strong> Mon–Fri, 7 AM–7 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
