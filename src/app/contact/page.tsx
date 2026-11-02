import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { serviceImages } from "@/data/serviceImages";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building,
  PhoneCall,
  AlertTriangle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <section className="py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Emergency Hotline */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  // badge="Direct Communication"
                  title="We're Always Ready to"
                  highlightedText="Support Your Kitchen"
                  description="Reach out directly to speak with a Massachusetts commercial hood safety consultant."
                />
              </div>

              {/* Emergency Hotline Alert */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E11D2E] to-[#B91C2B] text-white shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-extrabold text-base">24/7 Urgent Dispatch Hotline</h4>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Failed an unannounced Boston Fire Department or ISD inspection? Call immediately for priority same-day or next-day emergency remediation.
                </p>
                <a
                  href="tel:+18578000890"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0B1F3A] hover:bg-slate-100 font-extrabold text-sm shadow transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E11D2E]" />
                  +1 (857) 800-0890
                </a>
              </div>

              {/* Contact Information Cards */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1F3A]">Office Location</h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Wellesley, MA 02482
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1F3A]">Direct Telephone</h5>
                    <a
                      href="tel:+18578000890"
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#E11D2E] font-medium"
                    >
                      +1 (857) 800-0890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1F3A]">Email Correspondence</h5>
                    <a
                      href="mailto:service@bostonhoodandduct.com"
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#E11D2E] font-medium"
                    >
                      service@bostonhoodandduct.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#E11D2E]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#0B1F3A]">Service Hours</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <strong>Cleaning Crews:</strong> 24 Hours / 7 Days / 365 Days<br />
                      <strong>Office Dispatch:</strong> Mon–Fri, 7:00 AM – 7:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
