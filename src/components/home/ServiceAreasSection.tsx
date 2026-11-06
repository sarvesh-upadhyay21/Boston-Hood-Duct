"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/data/areas";

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
          <div className="lg:col-span-8">
            <SectionHeading
              // badge="Massachusetts Statewide Coverage"
              title="Serving Boston, Greater Boston &amp;"
              highlightedText="Massachusetts Statewide"
              description="Boston Hood &amp; Duct provides commercial kitchen hood cleaning, NFPA 96 inspections, residential air duct cleaning, commercial HVAC ventilation, and dryer vent maintenance across all 5 key Massachusetts regions."
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-5 rounded-2xl bg-red-50 border border-red-200/80 text-left w-full sm:w-auto">
              <span className="text-xs font-bold text-[#E11D2E] uppercase tracking-wider block">
                Direct Dispatch Hotline
              </span>
              <p className="text-xs text-slate-700 mt-1">
                Fast coordination for restaurant inspections or building ventilation projects.
              </p>
              <div className="mt-3">
                <a
                  href="tel:+18578000890"
                  className="text-sm font-extrabold text-[#0B1F3A] hover:text-[#E11D2E] inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E11D2E]" />
                  <span>Call +1 (857) 800-0890</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className="group rounded-2xl border border-slate-200 bg-[#F4F7FB] p-4 shadow-sm transition-all duration-300 hover:border-[#E11D2E]/40 hover:bg-[#FFF7F7] hover:shadow-md"
              onMouseEnter={(event) => {
                const details = event.currentTarget as HTMLDivElement;
                details.setAttribute("data-open", "true");
              }}
              onMouseLeave={(event) => {
                const details = event.currentTarget as HTMLDivElement;
                details.setAttribute("data-open", "false");
              }}
            >
              <div className="flex cursor-pointer items-start justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B1F3A] text-white transition-colors group-hover:bg-[#E11D2E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A] transition-colors group-hover:text-[#E11D2E]">
                      {area.name}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {area.county}
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <ArrowRight className="h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:rotate-90 group-hover:text-[#E11D2E]" />
                </div>
              </div>

              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-80 group-hover:opacity-100">
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-xs leading-relaxed text-slate-600">
                    {area.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {area.popularSpots.map((spot) => (
                      <span
                        key={spot}
                        className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3 text-[10px] text-slate-600">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <Clock className="w-3 h-3" />
                      {area.responseTime}
                    </span>
                    <Link
                      href="/contact#contact-form"
                      className="font-bold text-[#0B1F3A] hover:text-[#E11D2E]"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Graphic Banner */}
        {/* <div className="mt-12 rounded-3xl bg-[#0B1F3A] p-8 sm:p-10 text-white relative overflow-hidden border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Service Area Availability
              </span>
              <h4 className="text-2xl sm:text-3xl font-black mt-1">
                Serving Homes, Condominiums, Restaurants &amp; Commercial Facilities
              </h4>
              <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
                Whether you own a home, manage apartment buildings, operate a commercial property, or need specialized kitchen grease exhaust cleaning, Boston Hood &amp; Duct offers assessment-based services tailored to your building. Service availability depends on location, system requirements, and scheduling.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#E11D2E]" /> Commercial Kitchens &amp; Hoods
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#E11D2E]" /> Condos &amp; Residential HVAC
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#E11D2E]" /> Commercial Buildings &amp; Offices
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#E11D2E]" /> Multifamily Dryer Vents
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:justify-end">
              <Link
                href="/contact#contact-form"
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] text-center transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30 flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+18578000890"
                className="group px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 font-extrabold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +1 (857) 800-0890</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-600">
          * Service availability depends on property location, system configuration, access conditions, and schedule.
        </p> */}
      </div>
    </section>
  );
}
