"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  Hotel,
  HeartPulse,
  GraduationCap,
  Building2,
  Home,
  Trophy,
  Store,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  FileCheck2,
  MapPin,
  Flame,
} from "lucide-react";
import { whoWeServeSectors, WhoWeServeSector } from "@/data/whoWeServe";
import { cn } from "@/lib/utils";
import { BrandText } from "@/components/ui/BrandText";
import { WhyChooseUs } from "../home/WhyChooseUs";
import { ComplianceTableSection } from "../home/ComplianceTableSection";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Hotel,
  HeartPulse,
  GraduationCap,
  Building2,
  Home,
  Trophy,
  Store,
};

export function SectorExplorer() {
  const [activeSectorId, setActiveSectorId] = useState<string>(
    whoWeServeSectors[0]?.id || "restaurants-dining"
  );

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && whoWeServeSectors.some((s) => s.id === hash || s.slug === hash)) {
        setActiveSectorId(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeSector =
    whoWeServeSectors.find((s) => s.id === activeSectorId) ||
    whoWeServeSectors[0];

  const filteredSectors = activeSector ? [activeSector] : [];

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="mb-12">
        <p className="text-center text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-4">
          Select an industry to explore customized safety protocols
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {whoWeServeSectors.map((sector) => {
            const Icon = iconMap[sector.iconName] || Building2;
            const isSelected = activeSectorId === sector.id;

            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => {
                  setActiveSectorId(sector.id);
                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", `#${sector.slug}`);
                  }
                }}
                className={cn(
                  "px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-200 flex items-center gap-2.5",
                  isSelected
                    ? "bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950"
                )}
              >
                <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isSelected ? "text-white" : "text-[#E11D2E]")} />
                <span>{sector.title.split(",")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sectors Grid / List */}
      <div className="space-y-16">
        {filteredSectors.map((sector, index) => {
          const Icon = iconMap[sector.iconName] || Building2;

          return (
            <article
              key={sector.id}
              id={sector.slug}
              className="scroll-mt-32 rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-2xl"
            >
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-[#071629] via-[#0B1F3A] to-[#142A4A] p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E11D2E] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-900/40">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-red-200 border border-white/20">
                          {sector.badge}
                        </span>
                        <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#E11D2E]" />
                          Greater Boston &amp; Massachusetts
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                        {sector.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact#contact-form"
                      className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white text-sm sm:text-base font-extrabold transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] inline-flex items-center gap-2 border border-red-400/30"
                    >
                      <span>Get Free Estimate</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="tel:+18578000890"
                      className="group px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-extrabold transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 border border-white/20 hover:border-white/35 shadow-sm backdrop-blur-sm"
                    >
                      <Phone className="w-4 h-4 text-red-400" />
                      <span>(857) 800-0890</span>
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed max-w-4xl relative z-10 font-medium">
                  {sector.heroSubtitle}
                </p>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Facilities We Serve Tags */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0B1F3A]" />
                    Specific Facility Types Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {sector.targetFacilities.map((facility, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3.5 py-2 rounded-xl bg-[#F4F7FB] border border-slate-300 text-sm sm:text-base font-bold text-slate-800"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Two Columns: Risks vs Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Key Fire Risks */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
                    <div className="flex items-center gap-2.5 text-amber-950 font-black text-lg sm:text-xl">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center">
                        <Flame className="w-5 h-5 text-amber-600" />
                      </div>
                      <span>Key Fire Hazards &amp; Operational Challenges</span>
                    </div>
                    <ul className="space-y-3.5">
                      {sector.keyChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Our Tailored Solutions */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4">
                    <div className="flex items-center gap-2.5 text-emerald-950 font-black text-lg sm:text-xl">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-700 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span><BrandText>Boston Hood &amp; Duct Tailored Solutions</BrandText></span>
                    </div>
                    <ul className="space-y-3.5">
                      {sector.tailoredSolutions.map((solution, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-900 font-bold leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Services & Frequency Matrix Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Primary Scope */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <h5 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-3.5 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#E11D2E]" />
                      Primary Scope of Service
                    </h5>
                    <ul className="space-y-2.5">
                      {sector.primaryServices.map((svc, sIdx) => (
                        <li key={sIdx} className="text-sm font-bold text-slate-800 flex items-start gap-2.5 leading-snug">
                          <span className="w-2 h-2 rounded-full bg-[#E11D2E] flex-shrink-0 mt-1.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compliance & Local Focus */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h5 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-3.5 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Compliance Standards
                      </h5>
                      <ul className="space-y-2 mb-3">
                        {sector.complianceStandards.slice(0, 3).map((std, idx) => (
                          <li key={idx} className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                            <span className="text-emerald-600 font-black">✓</span>
                            <span>{std}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 italic">
                        {sector.localFocus}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Footer of Sector card */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-800">
                    {sector.benefits.map((b, bIdx) => (
                      <span key={bIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?sector=${encodeURIComponent(sector.title)}#contact-form`}
                    className="text-sm sm:text-base font-extrabold text-[#E11D2E] hover:text-[#B91C2B] transition-colors inline-flex items-center gap-1.5 group whitespace-nowrap"
                  >
                    <span>Request Schedule &amp; Pricing for {sector.title.split(",")[0]}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
        {/* <WhyChooseUs /> */}
        {/* <ComplianceTableSection /> */}

      </div>

    </div>
  );
}
