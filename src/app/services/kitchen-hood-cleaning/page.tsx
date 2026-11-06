import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  Building,
  Calendar,
  Clock,
  ChevronDown,
} from "lucide-react";
import {
  servicesData,
  inspectionFrequencySchedule,
  commercialCookingFacilitiesServed,
} from "@/data/services";
import { faqsData } from "@/data/faqs";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { notFound } from "next/navigation";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title:
    "Kitchen Hood Cleaning & NFPA 96 Certification Boston MA",
  description:
    "Professional kitchen hood cleaning, grease duct scraping & rooftop exhaust fan degreasing in Greater Boston and Massachusetts. NFPA 96 & MA 527 CMR 1.00 compliant.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services/kitchen-hood-cleaning",
  },
  keywords: [
    "commercial kitchen exhaust hood cleaning Boston",
    "NFPA 96 inspections Massachusetts",
    "grease duct scraping Boston MA",
    "rooftop exhaust fan degreasing",
    "Massachusetts Type 1 kitchen exhaust services",
    "BFD required service labels",
    "restaurant hood cleaning Boston",
  ],
};

export default function KitchenHoodCleaningPage() {
  const service = servicesData.find((s) => s.id === "kitchen-hood-cleaning");
  if (!service) notFound();

  const hoodFaqs = faqsData
    .filter((faq) => faq.category === "hood-cleaning")
    .slice(0, 5);
  const accordionItems = hoodFaqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <ServiceDetailHero
        title="Commercial Kitchen Hood & Exhaust Vent Cleaning & Inspection in Boston"
        subtitle="Certified NFPA 96 Cleaning & Inspection Experts | 527 CMR 1.00 Massachusetts Fire Code & Manufacturer Guidelines Compliance"
        description="Boston Hood & Duct provides professional commercial kitchen hood, grease duct, and exhaust fan cleaning and inspection throughout Greater Boston and Massachusetts. Our qualified specialists deliver thorough grease removal, fire safety inspections, and documented services to help restaurants and commercial kitchens reduce fire hazards and meet applicable State Fire Marshal and local Fire Department (AHJ) requirements."
        trustLine="Certified Expertise | Fire Safety Compliance | Reliable Documentation"
        primaryCta={{
          text: "REQUEST A FREE QUOTE",
          href: "/contact#contact-form",
        }}
        secondaryCta={{
          text: "SCHEDULE AN INSPECTION",
          href: "/contact#contact-form",
        }}
        image={service.image}
        nfpaStandard={service.nfpaStandard}
        features={service.features}
        phone={service.phone || "+1 (857) 800-0890"}
        floatingCard={{
          badge: "NFPA 96 & 527 CMR 1.00",
          text: "State Fire Marshal & BFD Compliance",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Intro Highlight Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F7FB] border border-slate-200 shadow-sm text-center">
          <div className="max-w-3xl mx-auto space-y-4">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] text-center">
              More Than a Cleaning Sticker. Complete Kitchen Exhaust Fire Safety Support.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <BrandText>Boston Hood &amp; Duct</BrandText>, we specialize in commercial kitchen exhaust hood cleaning and inspections, grease duct scraping, rooftop exhaust fan degreasing, and fire code compliance support for restaurants, hotels, healthcare facilities, schools, universities, and institutional kitchens throughout Greater Boston and Massachusetts.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our services focus on removing combustible grease, inspecting accessible exhaust system components, documenting findings, and supporting applicable NFPA 96, Massachusetts 527 CMR 1.00 (Chapter 50), and Boston Fire Department (BFD) requirements.
            </p>
            <p className="text-sm sm:text-base font-bold text-[#0B1F3A]">
              Cleaner Exhaust Systems. Reduced Fire Hazards. Greater Peace of Mind.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
              >
                <span>Request a Free Commercial Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+18578000890"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#16335C] hover:from-[#071629] hover:to-[#0B1F3A] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(11,31,58,0.25)] hover:shadow-[0_8px_25px_rgba(11,31,58,0.4)] transition-all duration-200 hover:-translate-y-0.5 border border-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>Call <BrandText>Boston Hood &amp; Duct</BrandText></span>
              </a>
            </div>
          </div>
        </div>

        {/* Commercial Kitchen Hood Cleaning & Fire Prevention */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <SectionHeading
            // badge="Fire Prevention"
            title="Commercial Kitchen Hood Cleaning &amp;"
            highlightedText="Fire Prevention"
            description="Why Professional Kitchen Exhaust Cleaning Matters"
            centered
          />
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              Commercial cooking produces grease-laden vapors that accumulate inside hood canopies, plenums, grease ducts, filters, and rooftop exhaust fans. Without proper inspection and cleaning, these combustible deposits can increase fire risk, contribute to regulatory violations, and cause costly operational disruptions.
            </p>
            <p className="font-semibold text-[#0B1F3A] bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
              A visibly clean hood canopy does not necessarily mean concealed ductwork or rooftop fans are free of grease.
            </p>
            <p>
              <BrandText>Boston Hood &amp; Duct</BrandText> goes beyond surface cleaning, focusing on accessible exhaust system components, grease removal, service documentation, and identification of conditions requiring corrective action.
            </p>
            <p>
              Our objective is to help restaurant owners and facility managers reduce grease-related fire hazards, maintain inspection-ready exhaust systems, and support ongoing fire code compliance.
            </p>
          </div>
        </div>

        {/* 9 Core Commercial Kitchen Exhaust Services */}
        <div>
          <SectionHeading
            // badge="From Hood Canopy to Rooftop Exhaust Fan"
            title="Complete Commercial Kitchen"
            highlightedText="Exhaust Cleaning &amp; Inspection Services"
            description="Our comprehensive commercial kitchen exhaust services cover every accessible component from hood canopy to rooftop exhaust fan."
            centered
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {service.subServices?.map((sub, idx) => (
              <details
                key={sub.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#E11D2E]/40 hover:bg-[#FFF7F7] hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F7FB] text-sm font-extrabold text-[#E11D2E] transition-colors group-hover:bg-[#E11D2E] group-hover:text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 pt-1 text-base font-bold leading-snug text-[#0B1F3A] sm:text-lg">
                    {sub.title.replace(/^\d+\.\s*/, "")}
                  </span>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-hover:text-[#E11D2E]" />
                </summary>

                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-open:max-h-60 group-open:opacity-100 group-hover:max-h-60 group-hover:opacity-100">
                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {sub.description}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D2E]">
                      <CheckCircle2 className="h-4 w-4" />
                      NFPA 96 &amp; 527 CMR Aligned
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold">
              Ready to schedule your Massachusetts commercial kitchen exhaust service?
            </p>
            <Link
              href="/contact#contact-form"
              className="px-6 py-2.5 rounded-xl bg-[#E11D2E] hover:bg-[#B91C2B] text-white font-bold text-sm transition-colors whitespace-nowrap"
            >
              Request a Commercial Hood Cleaning Quote
            </Link>
          </div>
        </div>

        {/* NFPA 96 & Massachusetts 527 CMR 1.00 Fire Code Requirements */}
        <div>
          <SectionHeading
            // badge="Fire Code Requirements"
            title="NFPA 96 &amp; Massachusetts 527 CMR 1.00"
            highlightedText="Fire Code Requirements"
            description="Commercial kitchen exhaust systems in Massachusetts are regulated under 527 CMR 1.00, Chapter 50, including applicable NFPA 96 provisions. Massachusetts requires appropriate individual Certificates of Competency and business Certificates of Registration for regulated commercial cooking exhaust inspection and cleaning services. Commercial kitchens in Boston must also meet applicable Boston Fire Department requirements."
            centered
          />

          {/* Inspection Frequency & Code Compliance Table Container */}
          <div className="mt-10 overflow-hidden bg-white rounded-3xl shadow-xl border border-slate-200/90">
            {/* Header with Title & Badge */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#071629] via-[#0B1F3A] to-[#142A4A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF6670] mb-1.5">
                  <Flame className="w-4 h-4 text-[#E11D2E]" />
                  <span>NFPA 96 Table 12.4 &amp; MA 527 CMR 1.00 Mandate</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Commercial Kitchen Exhaust Inspection Frequency Schedule
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/15 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mandatory Massachusetts Standard</span>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[#0B1F3A] text-xs font-black uppercase tracking-wider border-b border-slate-200">
                    <th scope="col" className="py-4 px-6 sm:px-8">Cooking Operation &amp; Fuel Profile</th>
                    <th scope="col" className="py-4 px-6">Mandated Frequency</th>
                    <th scope="col" className="py-4 px-6 sm:px-8 hidden md:table-cell">Hazard Level &amp; Grease Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {inspectionFrequencySchedule.map((row) => {
                    const isMonthly = row.frequency.toLowerCase().includes("month") && !row.frequency.includes("3") && !row.frequency.includes("6");
                    const isQuarterly = row.frequency.includes("3");
                    const isSemiAnnual = row.frequency.includes("6");

                    const badgeStyle = isMonthly
                      ? "bg-red-50 text-[#E11D2E] border-red-200 ring-1 ring-red-500/20"
                      : isQuarterly
                      ? "bg-amber-50 text-amber-800 border-amber-200 ring-1 ring-amber-500/20"
                      : isSemiAnnual
                      ? "bg-blue-50 text-[#0B1F3A] border-blue-200 ring-1 ring-blue-500/20"
                      : "bg-slate-100 text-slate-700 border-slate-200";

                    return (
                      <tr
                        key={row.operation}
                        className={`transition-colors hover:bg-slate-50/80 ${
                          isMonthly ? "bg-red-50/20" : ""
                        }`}
                      >
                        <td className="py-5 px-6 sm:px-8">
                          <div className="flex items-start gap-3">
                            <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                              isMonthly ? "bg-red-100 text-[#E11D2E]" : "bg-slate-100 text-[#0B1F3A]"
                            }`}>
                              {isMonthly ? (
                                <AlertTriangle className="h-4 w-4" />
                              ) : (
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                              )}
                            </span>
                            <div>
                              <p className="font-extrabold text-[#0B1F3A] text-base leading-snug">
                                {row.operation}
                              </p>
                              {/* Mobile subtext */}
                              {row.notes && (
                                <p className="mt-1 text-xs text-slate-600 font-medium md:hidden leading-relaxed">
                                  {row.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6 whitespace-nowrap align-top">
                          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black border ${badgeStyle}`}>
                            <Calendar className="w-3.5 h-3.5" />
                            {row.frequency}
                          </span>
                        </td>
                        <td className="py-5 px-6 sm:px-8 hidden md:table-cell align-top">
                          <p className="text-sm font-medium text-slate-700 leading-relaxed max-w-md">
                            {row.notes}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom 2-Card Guidance Grid (Replacing dull grey text block) */}
            <div className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Guidance Card 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h4 className="font-extrabold text-[#0B1F3A] text-base sm:text-lg">
                        Inspection vs. Cleaning Intervals
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      The schedule above sets mandatory <strong>inspection intervals</strong>. Actual bare-metal grease cleaning is triggered when grease depth exceeds NFPA 96 thresholds (typically 50 microns / 0.002 in). In Greater Boston, local municipal fire prevention regulations may mandate accelerated cleaning frequencies for high-capacity kitchens.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>NFPA 96 Chapter 12 grease accumulation thresholds apply</span>
                  </div>
                </div>

                {/* Guidance Card 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E11D2E]/10 text-[#E11D2E]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h4 className="font-extrabold text-[#0B1F3A] text-base sm:text-lg">
                        Deficiency Documentation &amp; BFD Labels
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      When inspections reveal excessive combustible grease, inaccessible duct runs, or missing NFPA-approved access panels, our certified team provides photographic reports and corrective action plans. Every completed service is certified with official Massachusetts &amp; BFD compliance labels affixed directly to your hood canopy.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes timestamped Before/After digital report</span>
                  </div>
                </div>
              </div>

              {/* Callout Action Banner */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#0B1F3A] text-white">
                <div className="text-center sm:text-left">
                  <p className="font-extrabold text-sm sm:text-base text-white">
                    Not sure which frequency schedule applies to your cooking volume?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Our Massachusetts Type I certified technicians will audit your system for NFPA 96 &amp; 527 CMR compliance.
                  </p>
                </div>
                <Link
                  href="/contact#contact-form"
                  className="shrink-0 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white text-xs sm:text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2"
                >
                  <span>Request Inspection Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        
        {/* Serving Restaurants & Institutional Kitchens */}
        <div>
          <SectionHeading
            // badge="Who We Serve"
            title="Serving Restaurants &amp; Institutional Kitchens"
            highlightedText="Across Greater Boston and Across Massachusetts"
            description="Boston Hood &amp; Duct provides commercial kitchen exhaust cleaning and inspection services for:"
            centered
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialCookingFacilitiesServed.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F4F7FB] border border-slate-200 flex items-center gap-3.5"
              >
                <Building className="w-5 h-5 text-[#E11D2E] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-slate-600">
              We serve Greater Boston and Massachusetts, helping commercial kitchen operators address grease buildup, maintain appropriate service records, and plan preventive maintenance.
            </p>
            <Link
              href="/contact#contact-form"
              className="px-6 py-2.5 rounded-xl bg-[#E11D2E] hover:bg-[#B91C2B] text-white font-bold text-sm transition-colors whitespace-nowrap"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Why Choose BOSTON HOOD & DUCT? */}
        <div className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-8">
          <SectionHeading
            title="Why Choose"
            highlightedText="BOSTON HOOD &amp; DUCT?"
            description="More Than Cleaning. A Fire Prevention–Focused Approach."
            centered
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "Massachusetts Type 1 Kitchen Exhaust Expertise",
              "Fire Hazard Reduction",
              "NFPA 96 & BFD Regulatory Awareness",
              "Kitchen Equipment Protection",
              "Clear Service Documentation",
              "Flexible Scheduling",
              "Preventive Maintenance Support",
            ].map((item, idx) => (
              <details
                key={item}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#E11D2E]/40 hover:bg-[#FFF7F7] hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2">
                  <span className="text-base font-bold text-[#0B1F3A] sm:text-lg">
                    {item}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-hover:text-[#E11D2E]" />
                </summary>

                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-open:max-h-36 group-open:opacity-100 group-hover:max-h-36 group-hover:opacity-100">
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {[
                        "Commercial kitchen exhaust cleaning and inspection services focused on applicable Massachusetts competency and registration requirements.",
                        "Removal of combustible grease accumulation from applicable exhaust system components to help reduce kitchen exhaust fire risk.",
                        "Attention to applicable NFPA 96, Massachusetts Fire Code, and Boston Fire Department inspection, cleaning, and documentation requirements.",
                        "Use of appropriate equipment covering, grease containment, and cleaning precautions to help protect kitchen equipment and surrounding areas.",
                        "Service reports, inspection findings, and identification of deficiencies requiring additional attention.",
                        "Service coordination around kitchen operating hours, with off-hours appointments subject to availability.",
                        "Recommendations for recurring inspection and cleaning schedules based on cooking operations and system conditions.",
                      ][idx]}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <SectionHeading
            // badge="Frequently Asked Questions"
            // badgeClassName="text-sm sm:text-base font-black tracking-wide"
            title="Frequently Asked Questions About"
            highlightedText="Kitchen Hood Cleaning"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black"
            description="Straightforward answers about pricing, inspection frequency, rooftop fans, violations, and hiring a qualified hood cleaning company."
            centered
          />

          <div className="mt-8">
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Final Schedule Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#061b2f] text-white shadow-xl space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
            Schedule Commercial Kitchen Hood Cleaning &amp; NFPA 96 Inspections in Boston, MA
          </h2>
          <p className="text-lg text-slate-200 font-semibold text-center">
            Protect Your Kitchen. Reduce Fire Hazards. Maintain Your Exhaust System.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center">
            From commercial hood cleaning and grease duct scraping to rooftop exhaust fan degreasing and inspection documentation, <BrandText>Boston Hood &amp; Duct</BrandText> provides comprehensive kitchen exhaust cleaning and inspection services. Request Your Free Commercial Quote Today.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 items-center justify-center">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
            >
              <span>Request a Commercial Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+18578000890"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/25 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call <BrandText>Boston Hood &amp; Duct</BrandText></span>
            </a>
          </div>
          <div className="pt-6 border-t border-white/15 text-xs sm:text-sm text-slate-400">
            <p className="font-bold text-white"><BrandText>Boston Hood &amp; Duct</BrandText></p>
            <p>Commercial Kitchen Exhaust Hood Cleaning &amp; Inspection Services Across Greater Boston and Massachusetts.</p>
            <p className="text-[#FF6670] font-semibold mt-1">Cleaner Systems. Safer Kitchens. Greater Peace of Mind.</p>
          </div>
        </div>

        {/* Related Services */}
        <section className="grid gap-5 rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
              Related service
            </p>
            <h2 className="mt-2 text-lg font-bold text-[#0B1F3A]">
              HVAC air duct cleaning
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Learn about residential and commercial ventilation system
              inspections and cleaning.
            </p>
            <Link
              href="/services/air-duct-cleaning"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:text-[#B91C2B]"
            >
              View HVAC service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="border-t border-slate-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
              Related service
            </p>
            <h2 className="mt-2 text-lg font-bold text-[#0B1F3A]">
              Dryer vent cleaning
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Explore lint removal and dryer exhaust maintenance for residential,
              multifamily, and commercial laundry systems.
            </p>
            <Link
              href="/services/dryer-vent-cleaning"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:text-[#B91C2B]"
            >
              View dryer vent service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

     {/* <CtaBanner /> */}
    </>
  );
}
