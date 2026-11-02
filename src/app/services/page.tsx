import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Wind,
  Flame,
  Fan,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  FileCheck2,
  Building,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandText } from "@/components/ui/BrandText";
import {
  servicesData,
  inspectionFrequencySchedule,
  commercialCookingFacilitiesServed,
} from "@/data/services";
import { CtaBanner } from "@/components/home/CtaBanner";
import { serviceImages } from "@/data/serviceImages";
import { HeroBanner } from "@/components/ui/HeroBanner";

export const metadata: Metadata = {
  title: "Commercial Hood, HVAC Air Duct & Dryer Vent Cleaning",
  description:
    "Explore Massachusetts Type I commercial kitchen hood and exhaust cleaning, HVAC air duct cleaning, and residential, multifamily, and commercial dryer vent cleaning in Boston.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services",
  },
  keywords: [
    "commercial hood cleaning Boston",
    "HVAC air duct cleaning Massachusetts",
    "dryer vent cleaning Boston",
    "NFPA 96 exhaust cleaning",
    "Massachusetts Type I hood cleaning",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <HeroBanner
        // badge="Our Professional Services"
        title="Commercial Hood, HVAC Air Duct & Dryer Vent Cleaning"
        description="Boston Hood & Duct provides Massachusetts Type I commercial kitchen hood and exhaust cleaning, residential and commercial HVAC air duct cleaning, and dryer vent cleaning across Massachusetts. Cleaner Air. Safer Kitchens. Total Fire Protection."
        image={serviceImages.kitchenHood}
        imageAlt="Commercial Exhaust and Air Duct Cleaning Services"
      />

      {/* Services Detailed Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Comprehensive Capabilities"
            title="Our Professional Services in"
            highlightedText="Boston & Across Massachusetts"
            description="Explore our specialized services below or contact our dispatch team for an itemized inspection and cleaning estimate."
            centered
          />

          <div className="mt-14 space-y-20">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              const detailHref = `/services/${service.slug}`;
              const Icon =
                service.id === "kitchen-hood-cleaning"
                  ? Flame
                  : service.id === "dryer-vent-cleaning"
                    ? Fan
                    : Wind;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-[#F4F7FB] shadow-lg"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Image Column */}
                    <div className={`lg:col-span-5 relative ${isEven ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 bg-slate-900">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-[#0B1F3A]/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                          {service.badge || "Certified Service"}
                        </div>
                        {service.phone && (
                          <a
                            href={`tel:+${service.phone.replace(/[^0-9]/g, "")}`}
                            className="absolute bottom-4 left-4 rounded-md bg-[#E11D2E] px-3 py-1 text-xs font-bold text-white shadow transition-colors hover:bg-[#B91C2B]"
                          >
                            Direct: {service.phone}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E11D2E] text-white flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
                          {service.nfpaStandard}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A]">
                        {service.title}
                      </h2>

                      {service.subtitle && (
                        <p className="text-xs sm:text-sm font-semibold text-[#E11D2E]">
                          {service.subtitle}
                        </p>
                      )}

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Sub-services detail list */}
                      {service.subServices && (
                        <div className="pt-2 space-y-3">
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A]">
                            Scope of Services:
                          </h4>
                          <div className="space-y-2">
                            {service.subServices.map((sub, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                                <div>
                                  <strong className="text-[#0B1F3A]">{sub.title}: </strong>
                                  <span className="text-slate-600">{sub.description}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-6 flex flex-wrap items-center gap-4">
                        <Link
                          href={detailHref}
                          className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#16335C] hover:from-[#071629] hover:to-[#0B1F3A] text-white text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg inline-flex items-center gap-2 border border-white/10"
                        >
                          <span>View Full Service Details</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>

                        <Link
                          href="/contact#contact-form"
                          className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] inline-flex items-center gap-2 border border-red-400/30"
                        >
                          <span>Request Free Estimate</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NFPA 96 & 527 CMR Compliance Table */}
      <section className="py-20 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Inspection Intervals"
            title="NFPA 96 &amp; Massachusetts 527 CMR"
            highlightedText="Kitchen Exhaust Compliance Schedule"
            description="How Often Must Restaurant Hoods Be Inspected in Massachusetts? Commercial kitchen exhaust inspection frequency depends on cooking operations and grease accumulation."
            centered
          />

          <div className="mt-12 overflow-x-auto bg-white rounded-3xl shadow-xl border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B1F3A] text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="p-4 sm:p-5 font-bold">Cooking Operation</th>
                  <th className="p-4 sm:p-5 font-bold">Inspection Frequency</th>
                  <th className="p-4 sm:p-5 font-bold">Regulatory Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {inspectionFrequencySchedule.map((row) => (
                  <tr
                    key={row.operation}
                    className={`hover:bg-slate-50 transition-colors ${
                      row.frequency === "Monthly" ? "bg-red-50/40" : ""
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-800">
                      <div className="flex items-center gap-2">
                        {row.frequency === "Monthly" && <AlertTriangle className="w-4 h-4 text-[#E11D2E]" />}
                        <span>{row.operation}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 font-extrabold text-[#0B1F3A] whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-black">
                        {row.frequency}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 space-y-1.5 max-w-4xl mx-auto text-center">
              <p>
                <strong>Important Notice:</strong> Cleaning obligations depend on applicable state and local requirements and system conditions. Boston restaurants must also follow Boston Fire Department cleaning and documentation requirements.
              </p>
              <p>
                Massachusetts requires applicable inspection and cleaning records to be retained for at least three years. <BrandText>Boston Hood &amp; Duct</BrandText> helps restaurant owners plan recurring inspections, identify exhaust system deficiencies, and maintain organized service documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Industries &amp; Facilities"
            title="Commercial Kitchen Hood Cleaning for"
            highlightedText="Restaurants &amp; Food-Service Facilities"
            description="Boston Hood &amp; Duct serves commercial cooking operations across Boston, Massachusetts, and surrounding communities within our operating area."
            centered
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialCookingFacilitiesServed.map((fac, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F7FB] border border-slate-200/80 flex items-start gap-4 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{fac}</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Customized maintenance programs and compliant photo documentation.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold">Need commercial kitchen hood cleaning or an NFPA 96 inspection in Boston?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Contact us to confirm service availability for your location.</p>
            </div>
            <a
              href="tel:+18578000890"
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap inline-flex items-center gap-2 border border-red-400/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call +1 (857) 800-0890</span>
            </a>
          </div>
        </div>
      </section>

     {/* <CtaBanner /> */}
    </>
  );
}
