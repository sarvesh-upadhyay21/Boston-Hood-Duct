
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { BrandText } from "@/components/ui/BrandText";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Fire Safety & Ventilation Blog", href: "/blog" },
  { name: "Massachusetts Service Areas", href: "/#service-areas" },
];

const services = [
  {
    name: "Commercial Kitchen Hood Cleaning",
    detail: "NFPA 96 Compliance",
    href: "/services/kitchen-hood-cleaning",
  },
  {
    name: "HVAC Air Duct Cleaning",
    href: "/services/air-duct-cleaning",
  },
  {
    name: "Dryer Vent Cleaning",
    href: "/services/dryer-vent-cleaning",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: LinkedinIcon,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#071629] text-slate-300">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">

          {/* Brand Column */}
          <div className="lg:col-span-3">
            <Link
              href="/"
              aria-label="Boston Hood and Duct Home"
              className="inline-flex flex-col items-start gap-3"
            >
              <div className="rounded-xl bg-white p-3 shadow-xl shadow-black/20">
                <Image
                  src="/Boston_Hood_Duct_Logo.webp"
                  alt="Boston Hood & Duct"
                  width={300}
                  height={112}
                  priority={false}
                  className="h-auto w-52 sm:w-56"
                />
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                <BrandText>Hood Cleaning &amp; Air Duct Services</BrandText>
              </span>
            </Link>

            {/* Social Links */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                Follow Us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-red-500 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <BrandText>{link.name}</BrandText>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex flex-col gap-1"
                  >
                    <span className="text-sm font-bold leading-6 text-slate-200 transition-colors duration-200 group-hover:text-red-400">
                      {service.name}
                    </span>

                    {service.detail && (
                      <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-300">
                        {service.detail}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-300">
                NFPA 96 Compliance Focused
              </span>
            </div>
          </div>

          {/* Contact / Operations */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider text-white">
              Boston Operations
            </h3>

            <div className="space-y-5">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <MapPin className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    Wellesley, MA 02482
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <Mail className="h-5 w-5 text-red-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>
                  <a
                    href="mailto:service@bostonhoodandduct.com"
                    className="mt-1 block break-all text-sm font-semibold text-slate-200 transition-colors hover:text-red-400"
                  >
                    service@bostonhoodandduct.com
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <Clock className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    24/7 Service Availability
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Off-Hours &amp; Overnight Scheduling
                  </p>
                  
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">

          <p className="text-center text-xs leading-6 text-slate-500 md:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-slate-300">
              <BrandText>Boston Hood &amp; Duct LLC</BrandText>
            </span>
            . All rights reserved.
            <span className="hidden lg:inline">
              {" "}Registered commercial service provider in Massachusetts.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-400 md:justify-end">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>

            <span className="inline-flex items-center gap-1.5 font-bold text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              NFPA 96
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
