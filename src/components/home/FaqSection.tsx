"use client";

import React, { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsData } from "@/data/faqs";
import { HelpCircle, PhoneCall, Flame, Wind, Fan } from "lucide-react";

type FaqCategory = "hood-cleaning" | "air-duct-cleaning" | "dryer-vent-cleaning";

export function FaqSection() {
  const [filter, setFilter] = useState<FaqCategory>("hood-cleaning");

  const tabs = [
    {
      id: "hood-cleaning" as const,
      label: "Kitchen Hood & NFPA 96",
      icon: Flame,
      count: Math.min(
        faqsData.filter((faq) => faq.category === "hood-cleaning").length,
        5,
      ),
      activeClass: "bg-[#E11D2E] text-white shadow-md shadow-red-500/20",
    },
    {
      id: "air-duct-cleaning" as const,
      label: "Air Duct Cleaning",
      icon: Wind,
      count: Math.min(
        faqsData.filter((faq) => faq.category === "air-duct-cleaning").length,
        5,
      ),
      activeClass: "bg-[#0B1F3A] text-white shadow-md shadow-slate-900/20",
    },
    {
      id: "dryer-vent-cleaning" as const,
      label: "Dryer Vent Cleaning",
      icon: Fan,
      count: Math.min(
        faqsData.filter((faq) => faq.category === "dryer-vent-cleaning").length,
        5,
      ),
      activeClass: "bg-[#0B1F3A] text-white shadow-md shadow-slate-900/20",
    },
  ];

  const filteredFaqs = faqsData
    .filter((faq) => faq.category === filter)
    .slice(0, 5);

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section className="py-20 bg-[#F4F7FB] relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // badge="Frequently Asked Questions"
          // badgeClassName="text-sm sm:text-base font-black tracking-wide"
          title="Frequently Asked Questions About"
          highlightedText="Our Cleaning Services"
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black"
          description="Clear answers regarding commercial kitchen hood fire codes, NFPA 96 inspection schedules, residential HVAC duct cleaning, pricing, and dryer vent safety in Massachusetts."
          centered
        />

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? tab.activeClass
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-[11px] font-semibold transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="mt-10">
          <Accordion items={accordionItems} />
        </div>

        {/* Support Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#0B1F3A] text-base sm:text-lg">
                Have a specific property or code question?
              </h3>
              <p className="text-slate-600 text-sm mt-0.5">
                Our Massachusetts compliance and ventilation specialists are ready to assist.
              </p>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <a
              href="tel:+18578000890"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +1 (857) 800-0890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
