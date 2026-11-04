import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Home,
  Building2,
  Search,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title:
    "Residential & Commercial HVAC Air Duct Cleaning Boston MA",
  description:
    "BOSTON HOOD & DUCT offers residential and commercial duct cleaning projects, including HVAC air ducts, dryer exhaust vents, and building exhaust systems across Massachusetts.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services/air-duct-cleaning",
  },
  keywords: [
    "HVAC duct cleaning Boston",
    "residential air duct cleaning Massachusetts",
    "commercial duct cleaning Boston",
    "indoor air quality assessment",
    "dryer exhaust vents and ducts",
    "Massachusetts 527 CMR 1.00 compliance",
  ],
};

export default function AirDuctCleaningPage() {
  const service = servicesData.find((s) => s.id === "air-duct-cleaning");
  if (!service) notFound();

  const ductFaqs = faqsData.filter((faq) => faq.category === "air-duct-cleaning");
  const accordionItems = ductFaqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <ServiceDetailHero
        title="Residential & Commercial HVAC Duct Cleaning | Indoor Air Quality"
        // badge={service.badge}
        description="BOSTON HOOD & DUCT offers residential and commercial duct cleaning projects, including HVAC air ducts, dryer exhaust vents and ducts, and other building exhaust systems. We help remove accumulated dust, lint, debris, and other contaminants that may affect system performance or contribute to fire and environmental concerns."
        image={service.image}
        nfpaStandard={service.nfpaStandard}
        features={service.features}
        phone={service.phone || "+1 (857) 800-0890"}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Intro Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7FB] border border-slate-200 shadow-sm text-center">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] text-center">
              Residential &amp; Commercial HVAC Duct Cleaning | Indoor Air Quality
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              BOSTON HOOD &amp; DUCT offers residential and commercial duct cleaning projects, including HVAC air ducts, dryer exhaust vents and ducts, and other building exhaust systems. We help remove accumulated dust, lint, debris, and other contaminants that may affect system performance or contribute to fire and environmental concerns.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-center max-w-2xl mx-auto">
              <h3 className="font-bold text-[#0B1F3A] text-sm sm:text-base flex items-center justify-center gap-2">
                <Search className="w-4 h-4 text-[#E11D2E]" />
                <span>Complimentary Overall Environmental Assessment</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                As an added value, our cross-functional Safety and Environmental team can provide a complimentary overall environmental assessment during eligible service projects to identify visible conditions or potential safety concerns that may warrant further attention—helping you maintain a cleaner, safer, and healthier environment.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center">
              <a
                href="tel:+18578000890"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call +1 (857) 800-0890</span>
              </a>
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#16335C] hover:from-[#071629] hover:to-[#0B1F3A] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(11,31,58,0.25)] hover:shadow-[0_8px_25px_rgba(11,31,58,0.4)] transition-all duration-200 hover:-translate-y-0.5 border border-white/10"
              >
                <span>Contact Us About Duct Cleaning</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div>
          <SectionHeading
            centered
            // badge="HVAC Cleaning & Inspection"
            title="Professional Air Duct Cleaning &amp;"
            highlightedText="Ventilation Services"
            description="Assessment-based service for homes, condominiums, offices, commercial facilities, and multifamily buildings."
          />

          <div className="mt-12 space-y-8">
            {/* Service 1: Residential */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E11D2E] uppercase tracking-wider">
                    Residential Ventilation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                    Residential Air Duct Cleaning
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    HVAC Duct Cleaning for Homes, Condominiums &amp; Apartments
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Dust, debris, and construction residue may accumulate in residential HVAC ductwork. We help homeowners, landlords, and property managers determine when cleaning is appropriate. Cleaning recommendations are based on observed conditions, system accessibility, and manufacturer instructions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
                {[
                  "Supply and return air duct cleaning",
                  "Air vents, registers, grilles, and diffuser cleaning",
                  "Accessible HVAC component cleaning",
                  "Post-construction and renovation duct cleaning",
                  "Duct inspection and service documentation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D2E] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="text-xs font-bold text-[#E11D2E] hover:underline inline-flex items-center gap-1"
                >
                  Request Residential Duct Cleaning <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2: Commercial */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                    Commercial Properties
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                    Commercial HVAC Duct Cleaning
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    Ventilation Cleaning for Commercial Buildings &amp; Facilities
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                <BrandText>Boston Hood &amp; Duct</BrandText> supports commercial property owners, facility directors, building managers, and multifamily property operators with HVAC duct cleaning services tailored to building conditions and operational requirements. We serve offices, retail centers, hotels, schools, warehouses, apartment buildings, and institutional facilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
                {[
                  "Commercial supply and return duct cleaning",
                  "HVAC ductwork and air handling unit (AHU) assessments",
                  "Accessible ventilation component cleaning",
                  "Post-renovation and construction dust removal",
                  "Project-specific cleaning plans and service reports",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0B1F3A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="text-xs font-bold text-[#0B1F3A] hover:underline inline-flex items-center gap-1"
                >
                  Request Commercial HVAC Cleaning <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3: Environmental Assessment & Building Exhaust */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E11D2E] flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E11D2E] uppercase tracking-wider">
                    Visual Condition Review
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                    Complimentary Environmental Assessment &amp; Exhaust Duct Maintenance
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    Dryer Exhaust Vents, Ducts &amp; Building Exhaust Systems
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Our services include HVAC air ducts, dryer exhaust vents and ducts, and other building exhaust systems. We help remove accumulated dust, lint, debris, and other contaminants that may affect system performance or contribute to fire and environmental concerns. During eligible service projects, our cross-functional Safety and Environmental team can provide a complimentary overall environmental assessment to identify visible conditions or potential safety concerns.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
                {[
                  "Accessible HVAC duct and component inspections",
                  "Dryer exhaust vents and duct lint removal",
                  "Building exhaust systems maintenance",
                  "Dust, debris, and visible moisture assessments",
                  "Documented findings and safety recommendations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E11D2E] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-3">
                <Link
                  href="/contact#contact-form"
                  className="text-xs font-bold text-[#E11D2E] hover:underline inline-flex items-center gap-1"
                >
                  Schedule an Inspection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Boston Hood & Duct */}
        <div>
          <SectionHeading
            centered
            // badge="Safety-Focused Expertise"
            title="Why Choose Boston Hood &amp; Duct?"
            highlightedText="Building-Specific Solutions"
            description="Boston Hood &amp; Duct brings together experience in environmental health and safety, facility management, hazardous materials, fire prevention, and commercial operations to support professional duct cleaning and ventilation maintenance."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F4F7FB] border border-slate-200/90 hover:border-red-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E11D2E] text-white flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#0B1F3A] text-base mb-1.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <SectionHeading
            centered
            // badge="Frequently Asked Questions"
            // badgeClassName="text-sm sm:text-base font-black tracking-wide"
            title="Frequently Asked Questions About"
            highlightedText="Air Duct Cleaning in Massachusetts"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black"
            description="Helpful answers regarding HVAC cleaning costs, inspection frequency, indoor air quality, and commercial scheduling."
          />

          <div className="mt-8">
            <Accordion items={accordionItems.slice(0, 5)} />
          </div>
        </div>

        {/* Related Services */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-lg font-bold text-[#0B1F3A]">
              Looking for dryer vent cleaning?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Explore dedicated residential, multifamily and commercial dryer
              exhaust maintenance.
            </p>
          </div>
          <Link
            href="/services/dryer-vent-cleaning"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-[#0B1F3A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#071629]"
          >
            Dryer Vent Cleaning
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services/kitchen-hood-cleaning"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg border border-[#0B1F3A]/20 bg-white px-5 py-3 text-sm font-bold text-[#0B1F3A] transition-colors hover:border-[#E11D2E] hover:text-[#E11D2E]"
          >
            Commercial Hood Cleaning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

     {/* <CtaBanner /> */}
    </>
  );
}
