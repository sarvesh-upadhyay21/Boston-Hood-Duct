"use client";

import React from "react";
import Image from "next/image";
import {
  Flame,
  FileCheck2,
  AlertTriangle,
  ClipboardList,
  Clock,
  CalendarClock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceImages } from "@/data/serviceImages";
import { BrandText } from "@/components/ui/BrandText";

const priorities = [
  {
    icon: Flame,
    title: "Fire Risk Reduction",
    description: "Address grease accumulation in hoods, ducts, fans, and accessible exhaust components before fire hazards develop.",
  },
  {
    icon: ShieldCheck,
    title: "NFPA 96 Compliance Support",
    description: "Help restaurants understand applicable inspection, cleaning, and documentation requirements under NFPA 96 & 527 CMR 1.00.",
  },
  {
    icon: AlertTriangle,
    title: "Deficiency Resolution",
    description: "Identify problems such as missing access doors or grease pooling, explain findings, and recommend corrective actions.",
  },
  {
    icon: ClipboardList,
    title: "Reliable Documentation",
    description: "Provide certified inspection reports, service labels, and cleaning records meeting municipal and insurance mandates.",
  },
  {
    icon: Clock,
    title: "Operational Continuity",
    description: "Coordinate service scheduling to reduce unnecessary kitchen disruption with flexible overnight shifts.",
  },
  {
    icon: CalendarClock,
    title: "Preventive Maintenance",
    description: "Support recurring inspection schedules, service reminders, and automatic 3-year record retention under Massachusetts law.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual & Commitment */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-[#0B1F3A]">
              <div className="relative h-[480px] sm:h-[560px] w-full">
                <Image
                  src={serviceImages.airDuct}
                  alt="BOSTON HOOD & DUCT Certified Compliance Specialist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#071629]/40 to-transparent" />
              </div>

              {/* Floating Commitment Card on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E11D2E] block">
                    Our Commitment
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0B1F3A] italic leading-snug">
                    &ldquo;We don&apos;t just clean commercial kitchen hoods. We help restaurant owners manage grease-related fire risks, inspection requirements, and ongoing exhaust system compliance.&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-slate-600 pt-1">
                    — <BrandText>Boston Hood &amp; Duct</BrandText> Leadership Team
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent card behind image */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 bg-[#E11D2E]/10 rounded-3xl -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 bg-[#0B1F3A]/10 rounded-3xl -z-10" />
          </div>

          {/* Right Column: 6 Priorities */}
          <div className="lg:col-span-7">
            <SectionHeading
              // badge="Compliance-Focused Service"
              title="Why Boston Restaurants Choose"
              highlightedText="Boston Hood & Duct"
              description="We understand that restaurant owners need more than grease removal. They need reliable service, clear documentation, minimal kitchen disruption, and confidence that their exhaust system is maintained according to applicable requirements."
            />

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              <BrandText>Boston Hood &amp; Duct combines commercial kitchen exhaust service with knowledge of fire prevention, Environmental Health and Safety (EHS), facility management, and restaurant operations.</BrandText>
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {priorities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#F4F7FB] border border-slate-200/80 hover:border-red-200 hover:bg-white hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-white group-hover:bg-[#E11D2E] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] group-hover:text-[#E11D2E] mt-3.5 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
