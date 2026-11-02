"use client";

import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  FileCheck2,
  Building,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandText } from "@/components/ui/BrandText";
import {
  inspectionFrequencySchedule,
  commercialCookingFacilitiesServed,
} from "@/data/services";

export function ComplianceTableSection() {
  return (
    <section className="py-20 bg-[#F4F7FB] relative overflow-hidden" id="compliance-schedule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // badge="Fire Code Compliance"
          title="NFPA 96 &amp; Massachusetts 527 CMR"
          highlightedText="Kitchen Exhaust Compliance"
          description="How Often Must Restaurant Hoods Be Inspected in Massachusetts? Commercial kitchen exhaust inspection frequency depends on the type and volume of cooking."
          centered
        />

        {/* The Inspection Frequency Table from User's Original Content */}
        <div className="mt-12 overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0B1F3A] to-[#071629] text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E11D2E] text-white inline-block mb-2">
                  Mandatory Inspection Schedule
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Commercial Cooking Exhaust Inspection Frequencies
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <FileCheck2 className="w-4 h-4 flex-shrink-0" />
                <span>3-Year Record Retention Mandated in Massachusetts</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 text-xs sm:text-sm uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 sm:p-5 font-extrabold text-[#0B1F3A]">Cooking Operation</th>
                  <th className="p-4 sm:p-5 font-extrabold text-[#0B1F3A]">Inspection Frequency</th>
                  <th className="p-4 sm:p-5 font-extrabold text-[#0B1F3A]">Compliance &amp; Risk Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {inspectionFrequencySchedule.map((row, i) => {
                  const isMonthly = row.frequency === "Monthly";
                  return (
                    <tr
                      key={row.operation}
                      className={`hover:bg-slate-50 transition-colors ${
                        isMonthly ? "bg-red-50/40" : ""
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        <div className="flex items-center gap-2.5">
                          {isMonthly ? (
                            <AlertTriangle className="w-4 h-4 text-[#E11D2E] flex-shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          )}
                          <span>{row.operation}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 font-black text-[#0B1F3A] whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold ${
                            isMonthly
                              ? "bg-red-100 text-[#E11D2E]"
                              : "bg-slate-100 text-[#0B1F3A]"
                          }`}
                        >
                          {row.frequency}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        {row.notes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <p className="leading-relaxed">
              <strong>Massachusetts Compliance Notice:</strong> Cleaning obligations depend on applicable state and local requirements and system conditions. Boston restaurants must also follow Boston Fire Department cleaning and documentation requirements. Massachusetts requires applicable inspection and cleaning records to be retained for at least three years.
            </p>
            <Link
              href="/services/kitchen-hood-cleaning"
              className="whitespace-nowrap font-bold text-[#E11D2E] hover:underline flex items-center gap-1"
            >
              Learn More About NFPA 96 Compliance <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Commercial Cooking Operations Served Grid */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
             
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Commercial Kitchen Hood Cleaning for Restaurants &amp; Food-Service Facilities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <BrandText>Boston Hood &amp; Duct</BrandText> serves commercial cooking operations across Boston, Massachusetts, and surrounding communities within our operating area.
              </p>
              {/* <div className="pt-2">
                <a
                  href="tel:+18578000890"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Call +1 (857) 800-0890 to confirm service for your facility
                </a>
              </div> */}
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {commercialCookingFacilitiesServed.map((facility, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/80 flex items-start gap-3 hover:border-red-200 hover:bg-red-50/20 transition-colors"
                >
                  <Building className="w-5 h-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
