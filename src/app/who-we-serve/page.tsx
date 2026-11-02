import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  FileCheck2,
  Building,
  Camera,
  Calendar,
  AlertTriangle,
  Building2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Accordion } from "@/components/ui/Accordion";
import { serviceImages } from "@/data/serviceImages";
import { SectorExplorer } from "@/components/who-we-serve/SectorExplorer";
import {
  whoWeServeSectors,
  complianceFrequencyGuide,
  propertyManagerAssurances,
  whoWeServeFaqs,
} from "@/data/whoWeServe";

export const metadata: Metadata = {
  title: "Industries & Commercial Facilities We Serve",
  description:
    "Specialized kitchen exhaust hood cleaning, HVAC air duct sanitization, and dryer vent maintenance for restaurants, hotels, hospitals, universities, and commercial properties across Greater Boston & Massachusetts.",
  keywords: [
    "commercial kitchen hood cleaning Boston",
    "restaurant exhaust cleaning Massachusetts",
    "hotel kitchen exhaust cleaning Boston",
    "hospital kitchen fire code compliance",
    "university dining hall hood cleaning",
    "multifamily dryer vent bank cleaning Boston",
    "property management duct cleaning MA",
    "NFPA 96 compliance Boston",
  ],
  alternates: {
    canonical: "https://bostonhoodandduct.com/who-we-serve",
  },
  openGraph: {
    title: "Who We Serve | BOSTON HOOD & DUCT",
    description:
      "Certified kitchen exhaust and ventilation cleaning engineered for Boston restaurants, hotels, healthcare facilities, universities, and multifamily properties.",
    url: "https://bostonhoodandduct.com/who-we-serve",
    siteName: "BOSTON HOOD & DUCT",
    locale: "en_US",
    type: "website",
  },
};

export default function WhoWeServePage() {
  const faqItems = whoWeServeFaqs.map((faq, index) => ({
    id: `serve-faq-${index}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bostonhoodandduct.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Who We Serve",
            "item": "https://bostonhoodandduct.com/who-we-serve",
          },
        ],
      },
      {
        "@type": "Service",
        "name": "Commercial Kitchen Exhaust & Ventilation Cleaning for Greater Boston Facilities",
        "provider": {
          "@type": "LocalBusiness",
          "name": "BOSTON HOOD & DUCT",
          "telephone": "+1-857-800-0890",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wellesley",
            "addressRegion": "MA",
            "postalCode": "02482",
            "addressCountry": "US",
          },
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Greater Boston and Massachusetts Statewide",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industries Served",
          "itemListElement": whoWeServeSectors.map((sector) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${sector.title} Kitchen Exhaust & Duct Cleaning`,
              "description": sector.shortDesc,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": whoWeServeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Banner */}
      <HeroBanner
        // badge="WHO WE SERVE ACROSS MASSACHUSETTS"
        title="Commercial Kitchen & Ventilation Solutions Tailored for Every Facility"
        description="From historic North End restaurants and bustling Seaport hotel kitchens to major medical centers, university dining commons, and high-rise apartment towers—Boston Hood & Duct provides certified NFPA 96 exhaust cleaning, air duct sanitization, and dryer vent fire safety."
        image={serviceImages.kitchenHood}
        imageAlt="Commercial Kitchen Hood & Duct Cleaning for Boston Facilities"
      />

      {/* Main Sector Explorer Section */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Tailored By Industry"
            title="Fire Safety &amp; Clean Air Solutions for"
            highlightedText="Commercial &amp; Institutional Leaders"
            description="Every commercial cooking and multi-unit ventilation setup has distinct grease load profiles, municipal code oversight, and operational hours. Select your facility type below to explore how we engineer customized fire protection."
            centered
          />

          <div className="mt-14">
            <SectorExplorer />
          </div>
        </div>
      </section>

      {/* Code Frequency Schedule Matrix */}
      <section className="py-20 bg-white border-t border-slate-200" id="compliance-schedule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Inspection Schedules"
            title="Massachusetts Fire Code &amp; NFPA 96"
            highlightedText="Required Cleaning Frequency Matrix"
            description="Massachusetts 527 CMR 1.00 (Chapter 50) and NFPA Standard 96 Table 12.4 legally mandate minimum inspection and cleaning frequencies based on commercial cooking fuel and volume."
            centered
          />

          <div className="mt-12 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-lg bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-[#071629] text-white">
                    <tr>
                      <th scope="col" className="py-4 px-6 text-sm font-black uppercase tracking-wider text-slate-100">
                        Cooking Operation / Facility Type
                      </th>
                      <th scope="col" className="py-4 px-6 text-sm font-black uppercase tracking-wider text-slate-100">
                        Mandated Frequency
                      </th>
                      <th scope="col" className="py-4 px-6 text-sm font-black uppercase tracking-wider text-slate-100">
                        Fire Hazard Level
                      </th>
                      <th scope="col" className="py-4 px-6 text-sm font-black uppercase tracking-wider text-slate-100">
                        Governing Code
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {complianceFrequencyGuide.map((item, idx) => {
                      const isHigh = item.frequency.includes("Monthly");
                      const isQuarterly = item.frequency.includes("Quarterly");

                      return (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                        >
                          <td className="py-4 px-6 text-sm sm:text-base font-extrabold text-[#0B1F3A]">
                            {item.category}
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold ${
                                isHigh
                                  ? "bg-red-100 text-[#E11D2E]"
                                  : isQuarterly
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-slate-100 text-[#0B1F3A]"
                              }`}
                            >
                              <Calendar className="w-4 h-4 mr-1.5" />
                              {item.frequency}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                              <AlertTriangle
                                className={`w-4 h-4 ${
                                  isHigh
                                    ? "text-[#E11D2E]"
                                    : isQuarterly
                                    ? "text-amber-500"
                                    : "text-slate-400"
                                }`}
                              />
                              {item.riskLevel}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-mono text-xs sm:text-sm font-bold text-slate-600">
                            {item.codeRef}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-[#F4F7FB] border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-extrabold text-[#0B1F3A] text-lg sm:text-xl">
                Unsure which frequency bracket your facility falls under?
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
                Our certified exhaust inspectors can review your menu, cooking equipment, and fuel types to design a compliant, cost-effective service plan.
              </p>
            </div>
            <Link
              href="/contact#contact-form"
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white text-sm sm:text-base font-extrabold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] inline-flex items-center gap-2 border border-red-400/30"
            >
              <span>Schedule Compliance Assessment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Managers & Facilities Assurance Section */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EDF2F7] border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
              Built for Boston Property Managers, Landlords &amp; Facility Directors
            </h2>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
              We understand commercial leasing requirements, risk mitigation, and the administrative burden of vendor management. Here is how we make facility oversight seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyManagerAssurances.map((item, idx) => {
              const icons = [ShieldCheck, Clock, Camera, FileCheck2, Award, PhoneCall];
              const Icon = icons[idx % icons.length];

              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(11,31,58,0.06)] hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)] hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#E11D2E]/10 text-[#E11D2E] flex items-center justify-center mb-6 group-hover:bg-[#E11D2E] group-hover:text-white transition-colors duration-200 shadow-sm ring-1 ring-red-500/20">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] mb-3 group-hover:text-[#E11D2E] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white border border-slate-200/90 shadow-md px-7 py-5 rounded-2xl">
              <span className="text-base sm:text-lg font-extrabold text-[#0B1F3A]">
                Managing a commercial real estate portfolio or multi-restaurant group?
              </span>
              <Link
                href="/contact"
                className="text-base sm:text-lg font-black text-[#E11D2E] hover:text-[#B91C2B] transition-colors underline underline-offset-4 flex items-center gap-1.5"
              >
                Inquire about Portfolio Master Service Agreements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve FAQs */}
      <section className="py-20 bg-[#F4F7FB]" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            // badge="Facility Director FAQ"
            title="Common Questions from Commercial"
            highlightedText="Kitchen &amp; Property Leaders"
            description="Clear answers regarding building security, COI issuance, vertical shaft cleaning, and municipal fire marshal inspections."
            centered
          />

          <div className="mt-12">
            <Accordion items={faqItems} />
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm sm:text-base font-medium text-slate-700">
              Have a specific question about your building or lease requirements?{" "}
              <Link
                href="/contact"
                className="font-extrabold text-[#E11D2E] hover:underline"
              >
                Speak directly with our senior field supervisor
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      {/* <CtaBanner /> */}
    </>
  );
}
