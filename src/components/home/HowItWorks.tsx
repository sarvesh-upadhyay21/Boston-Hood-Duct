"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Search, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "Discuss your property, system type, service concerns, and access requirements. We coordinate scheduling around building access and kitchen hours.",
    icon: MessageSquare,
    action: "Scope Definition",
  },
  {
    step: "02",
    title: "Inspection",
    description: "Assess accessible ductwork, identify visible contamination or obstructions, evaluate grease depth or debris, and establish the cleaning scope.",
    icon: Search,
    action: "Condition Assessment",
  },
  {
    step: "03",
    title: "Cleaning",
    description: "Apply appropriate methods based on duct materials, system configuration, manufacturer instructions, and applicable NFPA 96 or mechanical standards.",
    icon: Sparkles,
    action: "Bare Metal & Clean Air",
  },
  {
    step: "04",
    title: "Verification",
    description: "Review completed work, affix official service labels or inspection stickers, and provide complete documentation and maintenance recommendations.",
    icon: CheckCircle2,
    action: "Documented Proof",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // badge="Our Professional Process"
          title="Our 4-Step Professional"
          highlightedText="Inspection & Cleaning Process"
          description="From initial consultation to verified documentation, we ensure rigorous standards across kitchen grease systems and HVAC ductwork."
          centered
        />

        <div className="mt-16 relative">
          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-[#F4F7FB] rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-white group-hover:bg-[#E11D2E] group-hover:scale-105 flex items-center justify-center transition-all duration-200 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#E11D2E]/30 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step Action Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D2E]" />
                    <span>{item.action}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <Link
            href="/contact#contact-form"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-base shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-red-400/30"
          >
            <span>Start Step 1: Request Free Estimate</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
