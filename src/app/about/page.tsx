import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  ArrowRight,
  Flame,
  CheckCircle2,
  PhoneCall,
  Wind,
  Fan,
  Building,
  Building2,
  Home,
  GraduationCap,
  MapPin,
  Calendar,
  Zap,
  Moon,
  AlertTriangle,
  FileCheck2,
  BadgeCheck,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { serviceImages } from "@/data/serviceImages";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title: "About BOSTON HOOD & DUCT | Certified Hood, Duct & Vent Experts",
  description:
    "BOSTON HOOD & DUCT specializes in commercial kitchen hood cleaning, HVAC air duct cleaning, and professional dryer vent cleaning backed by certified fire protection expertise in Massachusetts.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/about",
  },
};

const serviceCards = [
  {
    title: "Commercial Kitchen Hood & Exhaust Vent Cleaning & Inspection",
    href: "/services/kitchen-hood-cleaning",
    icon: Flame,
    image: serviceImages.kitchenHood,
    badge: "NFPA 96 · 527 CMR 1.00",
    description:
      "Professional NFPA 96 hood cleaning, grease duct cleaning, rooftop exhaust fan cleaning, and system inspections. Our services include accessible grease removal, bare-metal cleaning where required, photographic documentation, applicable service labels, and identification of visible fire safety deficiencies.",
  },
  {
    title: "Residential & Commercial HVAC Air Duct Cleaning",
    href: "/services/air-duct-cleaning",
    icon: Wind,
    image: serviceImages.airDuct,
    badge: "IAQ & System Cleanliness",
    description:
      "Professional cleaning of accessible HVAC ductwork to remove accumulated dust and debris. Our inspections help identify visible moisture intrusion, mold-like growth, and airflow restrictions that may require additional attention, supporting proper HVAC maintenance and indoor environmental quality.",
  },
  {
    title: "Dryer Vent Cleaning & Inspection",
    href: "/services/dryer-vent-cleaning",
    icon: Fan,
    image: serviceImages.dryerVent,
    badge: "Lint & Fire Hazard Mitigation",
    description:
      "Residential and commercial dryer vent cleaning, lint removal, and inspection services that help reduce fire hazards, improve restricted airflow, and limit unnecessary drying time and energy waste.",
  },
];

const whoWeServeItems = [
  {
    title: "Restaurants & Commercial Kitchens",
    description:
      "Restaurants, food halls, catering facilities, and institutional kitchens.",
    icon: Building,
  },
  {
    title: "Healthcare & Education",
    description:
      "Hospitals, clinics, schools, universities, and long-term care facilities.",
    icon: GraduationCap,
  },
  {
    title: "Commercial Properties",
    description:
      "Hotels, offices, industrial facilities, and property management companies.",
    icon: Building2,
  },
  {
    title: "Residential Communities",
    description:
      "Homeowners, condominiums, apartments, and multifamily properties.",
    icon: Home,
  },
];

const whyChooseUsPillars = [
  {
    title: "NFPA 96 & Massachusetts Fire Code",
    description:
      "IKECA Boston Certified Cleaning Specialist (BCCS) & Certified System Inspector (BCSI) | NFPA 96 | NFPA 10 | 527 CMR 1.00.",
    icon: Award,
  },
  {
    title: "Bare-Metal Grease Removal & Fire Code Compliance",
    description:
      "Our certified team removes grease and buildup from kitchen hoods, exhaust ducts, and ventilation systems using industrial-grade equipment. We ensure NFPA 96 and local fire safety compliance while reducing fire hazards, violations, and costly fine",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Documentation",
    description:
      "Professional cleaning records, photographic reports, and applicable inspection labels.",
    icon: FileCheck2,
  },
  {
    title: "Fire Safety & Indoor Air Quality Awareness",
    description:
      "Services focused on grease hazards, duct cleanliness, moisture-related concerns, and dryer vent restrictions.",
    icon: Wind,
  },
  {
    title: "Transparent Upfront Pricing",
    description:
      "Clear quotes, honest communication, and no misleading promotional pricing.",
    icon: CheckCircle2,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Overnight and off-hours service options to minimize business disruption.",
    icon: Clock,
  },
];

const overnightPrinciples = [
  {
    title: "Uncompromising Fire Safety",
    description:
      "We clean to the metal, not to the eye. Every horizontal run, vertical drop, and fan housing is cleared of flammable fuel sources.",
    icon: ShieldCheck,
  },
  {
    title: "Overnight Reliability",
    description:
      "Our certified technicians arrive on time after your dinner rush and complete work with zero interruption to your lunch service.",
    icon: Clock,
  },
  {
    title: "100% Code Compliance",
    description:
      "Strict alignment with NFPA Standard 96, Boston Fire Department (BFD) rules, and Massachusetts building and health codes.",
    icon: Award,
  },
  {
    title: "Client-First Transparency",
    description:
      "Comprehensive photographic reports with every service so you, your landlord, and your fire marshal see the exact results.",
    icon: Users,
  },
];

const serviceTierCards = [
  {
    icon: AlertTriangle,
    badgeEmoji: "🚨",
    title: "Same-Day Emergency Cleaning",
    tagline: "Rapid Response | Urgent Hood & Exhaust Cleaning",
    description:
      "Emergency 24/7 commercial kitchen hood and exhaust cleaning in Boston, MA. Fast response to urgent grease buildup, fire safety concerns, and unexpected inspection findings.",
    buttonText: "REQUEST EMERGENCY SERVICE",
    buttonHref: "/contact#contact-form",
    accentColor: "border-red-200 bg-red-50/40 hover:border-red-300",
    buttonVariant: "primary" as const,
  },
  {
    icon: Zap,
    badgeEmoji: "⚡",
    title: "Priority Cleaning — 24–48 Hours",
    tagline: "Fast Scheduling | Minimize Kitchen Downtime",
    description:
      "Priority NFPA 96 hood and exhaust cleaning within 24–48 hours, subject to availability. Ideal for upcoming inspections, overdue maintenance, and urgent compliance needs.",
    buttonText: "BOOK PRIORITY CLEANING",
    buttonHref: "/contact#contact-form",
    accentColor: "border-amber-200 bg-amber-50/40 hover:border-amber-300",
    buttonVariant: "primary" as const,
  },
  {
    icon: Moon,
    badgeEmoji: "🌙",
    title: "After-Hours & Overnight Cleaning",
    tagline: "Flexible Scheduling | Minimal Business Disruption",
    description:
      "Professional commercial kitchen exhaust cleaning during evenings, overnight hours, and weekends to minimize disruption to restaurant operations.",
    buttonText: "SCHEDULE OVERNIGHT SERVICE",
    buttonHref: "/contact#contact-form",
    accentColor: "border-blue-200 bg-blue-50/40 hover:border-blue-300",
    buttonVariant: "navy" as const,
  },
  {
    icon: Calendar,
    badgeEmoji: "📅",
    title: "Routine & Preventive Cleaning",
    tagline: "Scheduled Maintenance | NFPA 96 Compliance",
    description:
      "Monthly, quarterly, semiannual and annual hood and exhaust cleaning & inspection programs tailored to your cooking operations, inspection findings, and applicable NFPA 96 requirements.",
    buttonText: "SCHEDULE ROUTINE CLEANING",
    buttonHref: "/contact#contact-form",
    accentColor: "border-emerald-200 bg-emerald-50/40 hover:border-emerald-300",
    buttonVariant: "navy" as const,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ========================================================
          SECTION 1 — HERO BANNER
      ======================================================== */}
      <section className="relative overflow-hidden border-b border-blue-200/50 bg-gradient-to-br from-[#F8FBFF] via-[#EDF5FF] to-[#DCEBFF] shadow-[0_18px_48px_-32px_rgba(11,31,58,0.32)] pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Soft Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,31,58,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Left Blue Glow */}
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(147,197,253,0.08) 40%, transparent 70%)",
          }}
        />

        {/* Bottom Right Blue Glow */}
        <div
          className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Decorative Gradient Accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-white via-[#FF6975]/70 to-[#E11D2E]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6 lg:col-span-7">
              {/* Region Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E11D2E]/20 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#0B1F3A] shadow-xs">
                <MapPin className="h-3.5 w-3.5 text-[#E11D2E] flex-shrink-0" />
                <span>
                  Serving Greater Boston, MetroWest, North Shore, South Shore &amp; Statewide Massachusetts
                </span>
              </div>

              {/* Main H1 */}
              <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
                About <BrandText>Boston Hood &amp; Duct</BrandText> | Certified Hood, Duct &amp; Vent Experts
              </h1>

              {/* Supporting H2 with 3 Clickable Service Links */}
              <h2 className="text-base sm:text-lg font-bold leading-relaxed text-[#0B1F3A]/90 pt-1">
                <Link
                  href="/services/kitchen-hood-cleaning"
                  className="text-[#0B1F3A] hover:text-[#E11D2E] transition-colors underline decoration-[#E11D2E]/40 hover:decoration-[#E11D2E] underline-offset-4"
                >
                  Commercial Kitchen Hood &amp; Exhaust Vent Cleaning &amp; Inspection
                </Link>
                <span className="text-[#E11D2E] mx-2 font-black inline">|</span>
                <Link
                  href="/services/air-duct-cleaning"
                  className="text-[#0B1F3A] hover:text-[#E11D2E] transition-colors underline decoration-[#E11D2E]/40 hover:decoration-[#E11D2E] underline-offset-4"
                >
                  HVAC Air Duct Cleaning
                </Link>
                <span className="text-[#E11D2E] mx-2 font-black inline">|</span>
                <Link
                  href="/services/dryer-vent-cleaning"
                  className="text-[#0B1F3A] hover:text-[#E11D2E] transition-colors underline decoration-[#E11D2E]/40 hover:decoration-[#E11D2E] underline-offset-4"
                >
                  Dryer Vent Cleaning
                </Link>
              </h2>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 max-w-2xl">
                <BrandText>Boston Hood &amp; Duct</BrandText> specializes in commercial kitchen hood and exhaust vent cleaning and inspection, residential and commercial HVAC air duct cleaning, and professional dryer vent cleaning and inspection. Backed by certified professionals and multidisciplinary fire safety expertise, we help restaurants, businesses, healthcare facilities, and homeowners maintain safer, cleaner properties.
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 text-xs sm:text-sm font-extrabold text-[#0B1F3A]">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-1.5 shadow-xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Certified Expertise
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-1.5 shadow-xs">
                  <Flame className="h-4 w-4 text-[#E11D2E]" />
                  Fire Safety Compliance
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-1.5 shadow-xs">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Transparent Upfront Pricing
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button
                  href="/contact#contact-form"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  REQUEST A FREE QUOTE
                </Button>
                <Button
                  href="tel:+18578000890"
                  variant="navy"
                  size="lg"
                  leftIcon={<PhoneCall className="w-4 h-4" />}
                >
                  CALL FOR SERVICE
                </Button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white bg-[#0B1F3A] shadow-[0_26px_65px_rgba(11,31,58,0.18),0_10px_30px_rgba(185,28,43,0.16)] ring-1 ring-[#E11D2E]/15 sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src={serviceImages.aboutHero}
                  alt="BOSTON HOOD & DUCT Certified Exhaust Cleaning Specialists"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/70 via-transparent to-transparent" />

                {/* Floating Credential Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#E11D2E] text-white shadow-md">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#E11D2E]">
                        19+ Years Multidisciplinary Oversight
                      </p>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">
                        CSP · CHFM · CHMM · FPS · NFPA 96 &amp; 527 CMR Aligned
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — CERTIFIED EXPERTISE
      ======================================================== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
              Certified Professionals &amp; Regulatory Expertise
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our operations are supported by multidisciplinary professionals with 19+ years of experience in fire protection, environmental health and safety, facilities management, and regulatory compliance.
            </p>
          </div>

          {/* Credentials & Technical Standards Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Professional Credentials Card */}
            <div className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1F3A] text-white flex items-center justify-center shadow-sm">
                  <BadgeCheck className="w-6 h-6 text-[#FF6670]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B1F3A]">
                    Professional Credentials
                  </h3>
                  <p className="text-xs font-bold text-[#E11D2E] uppercase tracking-wider">
                    Board-Certified Safety &amp; Facility Oversight
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { code: "CSP", label: "Certified Safety Professional" },
                  { code: "CHFM", label: "Certified Healthcare Facility Manager" },
                  { code: "CHMM", label: "Certified Hazardous Materials Manager" },
                  { code: "FPS", label: "Fire Protection Specialist" },
                ].map((cred) => (
                  <div
                    key={cred.code}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-2xs"
                  >
                    <p className="text-lg font-black text-[#0B1F3A]">{cred.code}</p>
                    <p className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                      {cred.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Expertise Card */}
            <div className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E11D2E] text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B1F3A]">
                    Technical Expertise &amp; Standards
                  </h3>
                  <p className="text-xs font-bold text-[#0B1F3A]/70 uppercase tracking-wider">
                    City, State &amp; National Codes
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    code: "NFPA 96",
                    title: "Commercial Cooking Fire Safety",
                    desc: "Ventilation Control and Fire Protection standards",
                  },
                  {
                    code: "NFPA 10",
                    title: "Portable Fire Extinguishers",
                    desc: "Installation, inspection & maintenance standards",
                  },
                  {
                    code: "MA 527 CMR 1.00",
                    title: "Massachusetts Comprehensive Fire Code",
                    desc: "State Fire Marshal compliance mandates",
                  },
                  {
                    code: "Boston Fire Prevention",
                    title: "BFD Municipal Inspection Requirements",
                    desc: "Inspectional Services Department (ISD) & BFD criteria",
                  },
                ].map((tech) => (
                  <div
                    key={tech.code}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#0B1F3A] text-white text-xs font-bold">
                        {tech.code}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#0B1F3A] mt-2">{tech.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualified Personnel Highlight Banner */}
          <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0D2444] to-[#122E54] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#E11D2E]/20 border border-[#E11D2E]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF717D]">
                  <Award className="w-3.5 h-3.5" />
                  State Fire Marshal &amp; IKECA Aligned
                </div> */}
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  State Competency &amp; Examination Verified
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Our qualified commercial kitchen exhaust personnel have completed applicable Massachusetts State Fire Marshal competency requirements and Boston NFPA 96 examinations through IKECA.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  We combine technical expertise with documented service practices to help businesses address fire hazards, meet applicable regulatory requirements, and protect people and property.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
                <Button
                  href="/contact#contact-form"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Verify Compliance
                </Button>
                <Button
                  href="tel:+18578000890"
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto"
                  leftIcon={<PhoneCall className="w-4 h-4" />}
                >
                  +1 (857) 800-0890
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — OUR SERVICES
      ======================================================== */}
      <section className="py-20 bg-[#F4F7FB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
              Professional Cleaning &amp; Inspection Services
            </h2>
          </div>

          {/* 3 Core Services Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Card Photo Header */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#E11D2E]" />
                        {service.badge}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-black text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="p-6 pt-0">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D2E] hover:text-[#B91C2B] transition-colors pt-4 border-t border-slate-100 w-full"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Button */}
          <div className="mt-12 text-center">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE OUR SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — WHO WE SERVE
      ======================================================== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
              Serving Businesses &amp; Homeowners Across Massachusetts
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide specialized cleaning and inspection services for:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServeItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-[#F4F7FB] p-6 shadow-xs hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#E11D2E] border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-[#0B1F3A] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/who-we-serve"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:underline"
            >
              <span>View full list of industries &amp; commercial facility solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — WHY CHOOSE US?
      ======================================================== */}
      <section className="py-20 bg-[#F4F7FB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="max-w-3xl">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
              Why Choose <BrandText>Boston Hood &amp; Duct</BrandText>?
            </h2>
          </div>

          {/* 6 Core Pillars Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#E11D2E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0B1F3A] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Full-Width Regulatory & Manufacturer Compliance Box */}
          <div className="mt-8 rounded-3xl border-2 border-emerald-500/30 bg-emerald-50/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-emerald-950">
                  Regulatory &amp; Manufacturer Compliance
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  Expert cleaning and inspection services aligned with applicable NFPA standards, manufacturer guidelines, Massachusetts State Fire Marshal requirements, and local Fire Department/Authority Having Jurisdiction (AHJ) regulations to support system compliance, fire safety, and protection of people and property.
                </p>
              </div>
            </div>
          </div>

          {/* Sub-Section: The Principles That Drive Every Overnight Shift */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {/* <span className="text-xs font-extrabold uppercase tracking-widest text-[#E11D2E] block mb-2">
                Our Operational Commitments
              </span> */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] tracking-tight">
                Zero Business Interruption | Flexible Overnight Hood Cleaning Around Your Schedule
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overnightPrinciples.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E11D2E] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base sm:text-lg text-[#0B1F3A]">{val.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sub-Section: NEW Cards ("Replace & Create these new cards") */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
              {/* <span className="text-xs font-extrabold uppercase tracking-widest text-[#E11D2E] block mb-2">
                Flexible Scheduling &amp; Rapid Dispatch
              </span> */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] tracking-tight">
                Select Your Required Service Speed &amp; Frequency
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceTierCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`rounded-3xl border ${card.accentColor} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Emoji & Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl" role="img" aria-label={card.title}>
                          {card.badgeEmoji}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white text-[#0B1F3A] border border-slate-200/80 flex items-center justify-center shadow-2xs">
                          <Icon className="w-5 h-5 text-[#E11D2E]" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-black text-[#0B1F3A] leading-snug">
                        {card.title}
                      </h4>

                      {/* Tagline / Subtitle */}
                      <p className="text-xs font-bold text-[#E11D2E] mt-1.5 uppercase tracking-wide">
                        {card.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                      <Button
                        href={card.buttonHref}
                        variant={card.buttonVariant}
                        size="sm"
                        className="w-full text-xs py-2.5 font-bold"
                      >
                        [ {card.buttonText} ]
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — OUR MISSION & CALL TO ACTION
      ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#0D2444] to-[#122E54] text-white relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D2E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Protecting People. Preserving Property. Supporting Compliance.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            At <BrandText>Boston Hood &amp; Duct</BrandText>, our mission is to deliver dependable cleaning and inspection services backed by technical expertise, professional integrity, and a commitment to fire safety.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Whether you need NFPA 96 commercial kitchen exhaust cleaning, HVAC air duct cleaning, or dryer vent services, we are ready to help throughout Greater Boston and Massachusetts.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact#contact-form"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              REQUEST A FREE QUOTE
            </Button>
            <Button
              href="/contact#contact-form"
              variant="secondary"
              size="lg"
              leftIcon={<Clock className="w-4 h-4" />}
            >
              SCHEDULE SERVICE
            </Button>
          </div>

          {/* Trust Footer Bar */}
          <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-300 uppercase">
              Certified Expertise | Reliable Service | Transparent Pricing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
