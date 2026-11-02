import React from "react";
import { Star, Shield, Clock, Flame, MapPin, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
          {/* Google Style Rating Card (Clearly marked demonstration) */}
          <div className="lg:col-span-1 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-extrabold text-2xl text-[#0B1F3A]">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-800">Five-Star Rated Service</p>
            <span className="text-[10px] text-slate-600 mt-0.5">
              (UI Rating Demonstration)
            </span>
          </div>

            {/* 4 Trust Pillars */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Pillar 1 */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] leading-tight">NFPA 96 & 527 CMR</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Fire Code Compliance</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] leading-tight">Air Duct & Dryer Vents</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Residential & Commercial</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] leading-tight">EHS Safety Expertise</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Facility Management</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] leading-tight">Massachusetts Statewide</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Boston to Western MA</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
