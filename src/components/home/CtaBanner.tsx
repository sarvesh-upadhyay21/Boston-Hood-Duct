
import React from "react";
import Link from "next/link";
import { BrandText } from "@/components/ui/BrandText";
import { ArrowRight, Phone, ShieldCheck, CheckCircle } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF5F5] to-[#FFE1E4] py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#E11D2E]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#FF6975]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#E11D2E]/15 bg-gradient-to-br from-white via-[#FFF7F7] to-[#FFDDE1] p-8 shadow-[0_20px_60px_rgba(185,28,43,0.12)] sm:p-14">

          {/* Decorative Red Gradient */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#E11D2E]/20 to-transparent blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-white via-[#E11D2E] to-[#FF8992]" />

          <div className="relative z-10 max-w-3xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E11D2E]/20 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#B91C2B] shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#E11D2E]" />
              Protect Your Kitchen. Reduce Fire Risks. Stay Inspection-Ready.
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              Cleaner Ductwork.
              <span className="block bg-gradient-to-r from-[#E11D2E] via-[#C5162A] to-[#FF6975] bg-clip-text text-transparent">
                Safer Buildings.
              </span>
              Professional Service.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Don&apos;t wait for grease buildup, overdue inspections, or missing cleaning records to put your restaurant or property at risk. <BrandText>Boston Hood &amp; Duct</BrandText> helps commercial kitchens and residential facilities manage exhaust system cleaning, fire prevention, and ongoing compliance.
            </p>

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-xs font-semibold text-[#26364B] sm:text-sm">
              {[
                "Commercial Hood & Grease Duct Cleaning",
                "NFPA 96 & Mass 527 CMR Compliance",
                "Residential & Commercial HVAC Ducts",
                "Dryer Vent Cleaning & IAQ",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#E11D2E]" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">

              <Link
                href="/contact#contact-form"
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#CC172B] to-[#A80F22] px-8 py-4 text-center text-base font-black text-white shadow-[0_10px_30px_rgba(225,29,46,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(225,29,46,0.35)]"
              >
                Contact Us for an Estimate
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+18578000890"
                className="group flex items-center justify-center gap-3 rounded-xl border border-[#0B1F3A]/15 bg-white/80 px-7 py-4 text-sm font-extrabold text-[#0B1F3A] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E11D2E]/40 hover:bg-white sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E11D2E] to-[#A80F22] transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4 text-white" />
                </span>
                Call +1 (857) 800-0890
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}