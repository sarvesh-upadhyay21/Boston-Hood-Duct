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
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { whoWeServeSectors } from "@/data/whoWeServe";
import { cn } from "@/lib/utils";

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
        {filteredSectors.map((sector) => {
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
