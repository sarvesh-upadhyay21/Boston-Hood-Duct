import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Fan,
  Flame,
  Home,
  Building2,
  Phone,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title:
    "Commercial & Residential Dryer Vent Cleaning Boston MA",
  description:
    "Residential & Commercial dryer vent cleaning in Boston, MA & across Massachusetts. No misleading $99.99 promotions, hidden fees, or surprise charges. Upfront project pricing.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services/dryer-vent-cleaning",
  },
  keywords: [
    "dryer vent cleaning Boston",
    "residential dryer vent cleaning Massachusetts",
    "commercial dryer exhaust cleaning",
    "transparent upfront pricing dryer vent",
    "multifamily dryer duct cleaning Boston",
    "dryer lint removal fire prevention",
  ],
};

export default function DryerVentCleaningPage() {
  const service = servicesData.find(
    (item) => item.id === "dryer-vent-cleaning",
  );

  if (!service) notFound();

  const dryerFaqs = faqsData
    .filter((faq) => faq.category === "dryer-vent-cleaning")
    .slice(0, 5);
  const accordionItems = dryerFaqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <ServiceDetailHero
        title="Professional Dryer Vent Cleaning & Inspection in Boston, MA"
        subtitle="Residential, Commercial & Multi-Family Dryer Vent Services | Fire Safety | Upfront Pricing"
        locationBadge="Serving Greater Boston, MetroWest, North Shore, South Shore & Statewide Massachusetts"
        description="Boston Hood & Duct provides professional residential, commercial, and multi-family dryer vent cleaning and inspection, including lint buildup removal, exhaust duct clearing, and accessible dryer booster fan inspections. Our qualified technicians follow applicable IRC/IMC requirements, manufacturer guidelines, and industry best practices to help reduce fire hazards, improve restricted airflow, and support safe, efficient dryer operation."
        trustLine="Trusted Expertise. Transparent Pricing. No Surprises."
        secondaryNote="No misleading $99.99 promotions, hidden fees, or surprise charges. We provide clear, upfront quotes, and no additional work is performed without your approval."
        primaryCta={{
          text: "REQUEST A FREE QUOTE",
          href: "/contact#contact-form",
        }}
        secondaryCta={{
          text: "CALL NOW FOR SERVICE",
          href: "tel:+18578000890",
          isPhone: true,
        }}
        floatingCard={{
          badge: "Transparent Upfront Pricing",
          text: "No Hidden Fees · Zero Surprise Add-ons",
        }}
        image={service.image}
        features={service.features}
        phone={service.phone || "+1 (857) 800-0890"}
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Intro Box */}
        <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {/* <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
              Residential &amp; Commercial Dryer Vent Cleaning
            </span> */}
            <h2 className="text-2xl font-extrabold leading-tight text-[#0B1F3A] sm:text-3xl">
              Residential &amp; Commercial Dryer Vent Cleaning in Boston, MA &amp; Across Massachusetts
            </h2>
            <p className="text-base font-semibold text-[#E11D2E]">
              Professional Dryer Duct Cleaning, Lint Removal &amp; Fire Prevention for Homes, Apartments &amp; Commercial Properties
            </p>
            <p className="text-sm font-bold text-[#0B1F3A] sm:text-base">
              Reduce Fire Hazards. Improve Airflow. Protect Your Property.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              <BrandText>Boston Hood &amp; Duct</BrandText> provides professional residential and commercial dryer vent cleaning in Boston and throughout Massachusetts. We help homeowners, landlords, property managers, condominium associations, and commercial laundry operators remove combustible lint, address restricted exhaust airflow, and maintain safer, more efficient dryer systems.
            </p>
            <div className="rounded-xl border border-slate-200 bg-[#F4F7FB] p-4 text-sm font-bold text-[#0B1F3A]">
              Safety-Focused Service. Transparent Pricing. No Hidden Fees.
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
              >
                <span>Get a Free, Upfront Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+18578000890"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#16335C] hover:from-[#071629] hover:to-[#0B1F3A] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(11,31,58,0.25)] hover:shadow-[0_8px_25px_rgba(11,31,58,0.4)] transition-all duration-200 hover:-translate-y-0.5 border border-white/10"
              >
                <Phone className="h-4 w-4" />
                <span>Schedule Service</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E11D2E] text-white">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">
                No Misleading $99 Promotions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We do not advertise misleading $99.99 duct or dryer vent cleaning offers only to add unexpected charges. Our experts review your project requirements and provide a clear, upfront quote before work begins.
              </p>
            </div>
            <div className="rounded-2xl border border-red-100 bg-red-50/70 p-6 sm:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F3A] text-white">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A]">
                Lint Removal &amp; Fire Prevention
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Clogged dryer exhaust ducts can contribute to overheating, longer drying cycles, higher energy consumption, and fire hazards. Mechanical lint removal protects your property.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Dryer Vent & Exhaust Duct Cleaning Services */}
        <section>
          <SectionHeading
            centered
            // badge="Comprehensive Lint Removal"
            title="Professional Dryer Vent &amp;"
            highlightedText="Exhaust Duct Cleaning Services"
            description="Comprehensive Lint Removal for Residential, Multifamily & Commercial Properties. Clogged dryer exhaust ducts can contribute to overheating, longer drying cycles, higher energy consumption, and fire hazards. Our professional cleaning services address lint buildup and visible exhaust restrictions using appropriate equipment and manufacturer-guided practices."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Residential Dryer Vent Cleaning",
                description:
                  "Lint removal for houses, condominiums, apartments, townhouses, and rental properties.",
              },
              {
                title: "Commercial Dryer Exhaust Cleaning",
                description:
                  "Exhaust maintenance for laundromats, hotels, shared laundry rooms, and commercial facilities.",
              },
              {
                title: "Multifamily Dryer Duct Cleaning",
                description:
                  "Coordinated cleaning for apartment buildings, condominium associations, and property managers.",
              },
              {
                title: "Mechanical Lint Removal",
                description:
                  "Cleaning accessible exhaust ducts, elbows, and connections using suitable rotary brushes and vacuum equipment.",
              },
              {
                title: "Exterior Vent Cleaning",
                description:
                  "Clearing accessible wall and rooftop exhaust terminations where safe access is available.",
              },
              {
                title: "Exhaust System Condition Review",
                description:
                  "Identifying visible restrictions, damaged ductwork, obstructed outlets, and maintenance concerns.",
              },
            ].map((sub, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E11D2E] text-white">
                    <Fan className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{sub.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{sub.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#E11D2E]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Upfront Pricing Guaranteed</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
            >
              <span>Request Your Dryer Vent Cleaning Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Residential & Commercial Breakdown */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-red-50 text-[#E11D2E] flex items-center justify-center">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
                Homeowners &amp; Condos
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3A]">
              Residential Dryer Vent Cleaning for Massachusetts Homeowners
            </h3>
            <p className="text-sm font-semibold text-slate-700">
              Reduce Lint Buildup &amp; Improve Dryer Exhaust Performance
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Lint accumulation inside dryer ducts can restrict airflow, increase drying times, and contribute to overheating.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              <BrandText>Boston Hood &amp; Duct</BrandText> provides residential dryer vent cleaning for single-family homes, Boston brownstones, condominiums, apartments, and rental properties. Regular cleaning helps reduce combustible lint accumulation and supports proper dryer exhaust operation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                Commercial &amp; Multifamily
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3A]">
              Commercial Dryer Vent Cleaning &amp; Multifamily Laundry Maintenance
            </h3>
            <p className="text-sm font-semibold text-slate-700">
              Professional Exhaust Cleaning for Apartments, Laundromats &amp; Property Managers
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              High-use laundry equipment can accumulate lint rapidly, increasing maintenance needs and potential fire hazards.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We serve apartment communities, condominium associations, laundromats, hotels, senior living facilities, and commercial laundry operations throughout Massachusetts. Our services emphasize coordinated scheduling, accessible duct cleaning, visible deficiency identification, and practical preventive maintenance recommendations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact#contact-form"
                className="text-xs font-bold text-[#E11D2E] hover:underline inline-flex items-center gap-1"
              >
                Request a Commercial Cleaning Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Signs Your Dryer Vent Needs Professional Cleaning */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
          <SectionHeading
            centered
            // badge="Warning Indicators"
            title="Signs Your Dryer Vent"
            highlightedText="Needs Professional Cleaning"
            description="Schedule an inspection or cleaning if you notice any of the following warning signs:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Clothes taking longer than usual to dry",
              "Laundry remaining damp after a full cycle",
              "Excessive dryer heat or a hot laundry area",
              "Weak airflow from the exterior exhaust outlet",
              "Visible lint buildup or an obstructed vent flap",
              "Unusual burning odors or signs of overheating",
            ].map((sign, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F7FB] border border-slate-200"
              >
                <AlertTriangle className="h-5 w-5 text-[#E11D2E] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{sign}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center gap-3 text-center max-w-2xl mx-auto">
            <Flame className="h-5 w-5 text-[#E11D2E] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
              <strong>Safety Reminder:</strong> Stop using the dryer if you notice smoke or burning odors. Arrange appropriate evaluation before restarting.
            </p>
          </div>
        </section>

        {/* Why Choose Boston Hood & Duct? */}
        {/* <section className="space-y-8">
          <SectionHeading
            centered 
            title="Why Choose"
            highlightedText="Boston Hood &amp; Duct?"
            description="Safety Expertise. Honest Pricing. Professional Service. Boston Hood & Duct combines 19+ years of environmental health and safety, fire protection, and facility management experience with a practical approach to residential and commercial dryer exhaust cleaning."
          />

          <div className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-10 space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[#FF6670]" />
              <h3 className="text-xl sm:text-2xl font-bold">
                Oversight by a Multidisciplinary Team of Safety &amp; Compliance Professionals
              </h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-center">
              Our services benefit from oversight by a cross-functional team of professionals holding industry-recognized credentials, including CSP, ASP, CHFM, and CHMM, bringing expertise in fire protection, environmental health and safety, facility management, and preventive maintenance to support safe, professional cleaning practices and fire hazard reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Residential & Commercial Solutions",
                description:
                  "Professional dryer vent cleaning for homeowners, landlords, apartment communities, condominium associations, and commercial laundry operators.",
              },
              {
                title: "Thorough, Professional Cleaning",
                description:
                  "Appropriate cleaning methods focused on removing accessible lint and debris while identifying visible exhaust system concerns.",
              },
              {
                title: "Transparent, Upfront Pricing — No Hidden Fees",
                description:
                  "We do not advertise misleading $99.99 duct or dryer vent cleaning offers only to add unexpected charges. Our experts review your project requirements and provide a clear, upfront quote before work begins. Any additional work or price change requires your approval.",
              },
              {
                title: "No Bait-and-Switch Offers",
                description:
                  "No Bait-and-Switch Offers. No Hidden Fees. No Surprise Charges. Know the Cost Before We Start. Pay Only for the Work You Approve.",
              },
              {
                title: "Clear Communication & Recommendations",
                description:
                  "We explain visible concerns, outline the agreed service scope, and recommend appropriate maintenance or qualified repairs when necessary.",
              },
              {
                title: "Know the Cost Before We Start",
                description:
                  "Pay Only for the Work You Approve. We discuss your dryer layout, access, and pricing before starting any work.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F7FB] border border-slate-200 hover:border-red-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E11D2E] text-white flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#0B1F3A] text-base mb-1.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
            >
              <span>Get Your Free, Upfront Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </section> */}

        {/* Dryer Vent Cleaning in Boston & Throughout Massachusetts */}
        {/* <section className="space-y-6">
          <SectionHeading
            centered
            title="Dryer Vent Cleaning in Boston &amp;"
            highlightedText="Throughout Massachusetts"
            description="Serving Greater Boston, MetroWest, North Shore, South Shore & Statewide Massachusetts. Boston Hood & Duct serves residential and commercial properties across Massachusetts:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {massachusettsRegions.map((region) => (
              <div
                key={region.name}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#E11D2E] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{region.name}</span>
                </div>
                <div className="space-y-1.5">
                  {region.communities.map((comm) => (
                    <p key={comm} className="text-xs text-slate-700 font-medium">
                      {comm}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 text-center max-w-2xl mx-auto">
            From dryer vent cleaning in Boston to commercial laundry exhaust maintenance across Massachusetts, contact our team to confirm availability.
          </p>
        </section> */}

        {/* FAQs */}
        <section>
          <SectionHeading
            centered
            // badge="Frequently Asked Questions"
            // badgeClassName="text-sm sm:text-base font-black tracking-wide"
            title="Frequently Asked Questions About"
            highlightedText="Dryer Vent Cleaning"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-black"
            description="Helpful answers about pricing, safety, scheduling, hidden fees, and maintenance frequencies."
          />
          <div className="mt-8">
            <Accordion items={accordionItems} />
          </div>
        </section>

        {/* Final Schedule Box */}
        <section className="rounded-3xl bg-[#0B1F3A] p-8 sm:p-10 text-white shadow-xl space-y-6 text-center">
          <span className="inline-block rounded-full bg-[#E11D2E] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Schedule Today
          </span>
          <h2 className="text-2xl font-extrabold sm:text-3xl text-center">
            Schedule Dryer Vent Cleaning in Boston &amp; Massachusetts
          </h2>
          <p className="text-lg font-semibold text-slate-200 text-center">
            Safer Dryer Exhaust Systems. Better Airflow. Honest, Upfront Pricing.
          </p>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-slate-300 sm:text-base text-center">
            Whether you own a home, manage multifamily housing, or operate a commercial laundry facility, <BrandText>Boston Hood &amp; Duct</BrandText> delivers safety-focused dryer vent cleaning with clear communication and transparent pricing.
          </p>
          <div className="p-4 rounded-xl bg-white/10 border border-white/15 max-w-2xl mx-auto text-xs sm:text-sm font-bold text-slate-200 text-center">
            No Misleading Promotions. No Hidden Fees. No Unapproved Extra Charges.
            <div className="text-[#FF6670] mt-1">Cleaner Dryer Vents. Safer Properties. Better Drying Performance.</div>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 justify-center">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+18578000890"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-6 py-3.5 text-sm font-extrabold text-white border border-white/25 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm backdrop-blur-sm"
            >
              <Phone className="h-4 w-4" />
              <span>Schedule Dryer Vent Cleaning</span>
            </a>
          </div>
        </section>

      </div>

     {/* <CtaBanner /> */}
    </>
  );
}
