import React from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Building2, Phone } from "lucide-react";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className="p-6 rounded-2xl bg-[#F4F7FB] border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] text-white group-hover:bg-[#E11D2E] flex items-center justify-center transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {area.county}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors">
                  {area.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {area.description}
                </p>

                {/* Popular spots tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.popularSpots.map((spot) => (
                    <span
                      key={spot}
                      className="text-[11px] font-medium text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <Clock className="w-3.5 h-3.5" />
                  {area.responseTime}
                </span>
                <Link
                  href="/contact#contact-form"
                  className="font-bold text-[#0B1F3A] hover:text-[#E11D2E] flex items-center gap-1"
                >
                  Request Quote <ArrowRight className="w-3 h-3" />
                </Link>
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
