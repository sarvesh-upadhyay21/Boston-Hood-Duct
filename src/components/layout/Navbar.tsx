"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  ChevronDown,
  Menu,
  X,
  Flame,
  Wind,
  Fan,
  ArrowRight,
  Building2,
  Home,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
const servicesList = [
  {
    name: "Commercial Kitchen Hood & Exhaust Cleaning",
    href: "/services/kitchen-hood-cleaning",
    desc: "Massachusetts Type I service aligned with NFPA 96 and 527 CMR 1.00",
    icon: Flame,
  },
  {
    name: "HVAC Air Duct Cleaning",
    href: "/services/air-duct-cleaning",
    desc: "Residential and commercial ventilation cleaning and inspection",
    icon: Wind,
  },
  {
    name: "Dryer Vent Cleaning",
    href: "/services/dryer-vent-cleaning",
    desc: "Residential, multifamily and commercial dryer exhaust maintenance",
    icon: Fan,
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", dropdownType: "services" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-[#071629] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#E11D2E]"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Top Info & Social Bar */}
        <div
          className={cn(
            "bg-[#071629] text-slate-300 text-xs border-b border-white/10 px-4 sm:px-6 lg:px-8 transition-all duration-300 overflow-hidden",
            isScrolled
              ? "max-h-0 py-0 opacity-0 -translate-y-full pointer-events-none border-b-0"
              : "max-h-16 py-1.5 opacity-100 translate-y-0"
          )}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Contact Info */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <a
                href="tel:+18578000890"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Direct Telephone"
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span className="font-semibold">+1 (857) 800-0890</span>
              </a>
              <a
                href="mailto:service@bostonhoodandduct.com"
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Email Correspondence"
              >
                <Mail className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span>service@bostonhoodandduct.com</span>
              </a>
              <span
                className="hidden md:inline-flex items-center gap-1.5 text-slate-300"
                title="Office Location"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span>Wellesley, MA 02482</span>
              </span>
            </div>

            {/* Right Social Links */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-slate-400 text-[11px]">Follow us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E11D2E] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E11D2E] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#E11D2E] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={cn(
            "transition-all duration-300",
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-200 py-2.5 sm:py-3"
              : isHome
                ? "bg-transparent py-3 sm:py-4"
                : "bg-white/45 backdrop-blur-sm py-3 sm:py-4"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Brand Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 group focus:outline-none"
              >
                <div
                  className={cn(
                    "shrink-0 transition-transform duration-200 group-hover:scale-105",
                    !isScrolled && !isHome && "drop-shadow-[0_2px_8px_rgba(11,31,58,0.14)]"
                  )}
                >
                  <Image
                    src="/Boston_Hood_Duct_Logo.webp"
                    alt="BOSTON HOOD & DUCT"
                    width={320}
                    height={119}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 144px, 160px"
                    quality={80}
                    className="h-auto w-36 sm:w-40"
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  if (link.dropdownType === "services") {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "px-3 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-1.5 focus:outline-none",
                            isActive
                              ? "text-[#E11D2E]"
                              : isScrolled
                                ? "text-slate-700 hover:text-[#071629] hover:bg-slate-100"
                                : isHome
                                  ? "text-[#0B1F3A] hover:text-[#E11D2E] hover:bg-black/5"
                                  : "text-[#0B1F3A] hover:text-[#E11D2E] hover:bg-black/5"
                          )}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                        </Link>

                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                          <div className="absolute top-full left-0 w-72 pt-2 z-50">
                            <div className="bg-[#0B1F3A] border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                              {servicesList.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-[#E11D2E]/20 text-[#E11D2E] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#E11D2E] group-hover:text-white transition-colors">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                                        {service.name}
                                      </p>
                                      <p className="text-xs text-slate-400 mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }



                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-bold transition-colors",
                        isActive
                          ? "text-[#E11D2E] bg-[#E11D2E]/10"
                          : isScrolled
                            ? "text-slate-700 hover:text-[#071629] hover:bg-slate-100"
                            : isHome
                              ? "text-[#0B1F3A] hover:text-[#E11D2E] hover:bg-black/5"
                              : "text-[#0B1F3A] hover:text-[#E11D2E] hover:bg-black/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTAs */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+18578000890"
                    className={cn(
                      "group flex items-center gap-2.5 transition-all text-sm font-semibold px-3 py-1.5 rounded-xl border hover:shadow-md hover:-translate-y-0.5",
                      isScrolled
                        ? "bg-slate-50 border-slate-200/80 hover:bg-white text-slate-800"
                        : isHome
                          ? "bg-black/5 border-black/10 hover:bg-white text-[#0B1F3A]"
                          : "bg-white/80 border-[#0B1F3A]/10 hover:bg-white text-[#0B1F3A]"
                    )}
                    title="Commercial Kitchen Hood Cleaning Direct Line"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#E11D2E] to-[#C91424] text-white flex items-center justify-center shadow-md shadow-red-600/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className={cn(
                        "text-[10px] uppercase tracking-wider font-extrabold",
                        "text-slate-500"
                      )}>Direct Line</span>
                      <span className={cn(
                        "text-sm font-black",
                        "text-[#071629]"
                      )}>+1 (857) 800-0890</span>
                    </div>
                  </a>

                </div>

                <Button
                  href="/contact#contact-form"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Free Quote
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center gap-2 lg:hidden">
                <a
                  href="tel:+18578000890"
                  className={cn(
                    "p-2 rounded-lg md:hidden",
                    "bg-slate-100 text-[#071629]"
                  )}
                  aria-label="Call Hood Cleaning Dispatch"
                >
                  <Phone className="w-5 h-5 text-[#E11D2E]" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className={cn(
                    "p-2.5 rounded-lg transition-colors focus:outline-none",
                    isScrolled
                      ? "bg-slate-100 text-[#071629] hover:bg-slate-200"
                      : isHome
                        ? "bg-slate-100 text-[#071629] hover:bg-slate-200"
                        : "bg-slate-100 text-[#071629] hover:bg-slate-200"
                  )}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer Menu */}
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-sm bg-gradient-to-b from-[#0B1E38] via-[#071629] to-[#040C18] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto relative"
            onClick={(event) => {
              if (
                event.target instanceof Element &&
                event.target.closest("a")
              ) {
                setIsMobileOpen(false);
              }
            }}
          >
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-24 left-0 w-48 h-48 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-5 sm:p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                {/* Brand Logo with clean crisp white backdrop for high contrast & elegance */}
                <Link
                  href="/"
                  className="inline-flex items-center bg-white rounded-xl px-3 py-1.5 shadow-md shadow-black/25 hover:scale-[1.02] transition-transform duration-200"
                >
                  <Image
                    src="/Boston_Hood_Duct_Logo.webp"
                    alt="BOSTON HOOD & DUCT"
                    width={280}
                    height={104}
                    className="h-8 w-auto object-contain"
                    priority
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1.5 pt-1">
                {/* Home Item */}
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 border",
                    pathname === "/"
                      ? "bg-gradient-to-r from-[#E11D2E]/20 to-transparent border-[#E11D2E]/40 text-white font-bold"
                      : "border-transparent text-slate-200 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        pathname === "/"
                          ? "bg-[#E11D2E] text-white shadow-md shadow-red-500/30"
                          : "bg-white/10 text-slate-300 group-hover:bg-[#E11D2E]/20 group-hover:text-red-400"
                      )}
                    >
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Home</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* About Us Item */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 border",
                    pathname === "/about"
                      ? "bg-gradient-to-r from-[#E11D2E]/20 to-transparent border-[#E11D2E]/40 text-white font-bold"
                      : "border-transparent text-slate-200 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        pathname === "/about"
                          ? "bg-[#E11D2E] text-white shadow-md shadow-red-500/30"
                          : "bg-white/10 text-slate-300 group-hover:bg-[#E11D2E]/20 group-hover:text-red-400"
                      )}
                    >
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">About Us</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* Collapsible Services Section */}
                <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
                    aria-expanded={isMobileServicesOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/20 text-[#E11D2E] flex items-center justify-center">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold tracking-wide">Services</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                          3 Services
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-slate-400 transition-transform duration-300",
                        isMobileServicesOpen && "rotate-180 text-[#E11D2E]"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="p-2 space-y-1 bg-black/35 border-t border-white/5">
                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        const isCurrent = pathname === service.href;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={cn(
                              "group flex items-start gap-2.5 p-2 rounded-lg transition-all",
                              isCurrent
                                ? "bg-[#E11D2E]/20 text-white font-medium border border-[#E11D2E]/30"
                                : "text-slate-300 hover:text-white hover:bg-white/10"
                            )}
                          >
                            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-slate-300 group-hover:text-red-400 group-hover:bg-red-500/15 transition-colors shrink-0 mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-semibold leading-snug">{service.name}</div>
                              <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{service.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Who We Serve Item */}
                <Link
                  href="/who-we-serve"
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 border",
                    pathname === "/who-we-serve"
                      ? "bg-gradient-to-r from-[#E11D2E]/20 to-transparent border-[#E11D2E]/40 text-white font-bold"
                      : "border-transparent text-slate-200 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        pathname === "/who-we-serve"
                          ? "bg-[#E11D2E] text-white shadow-md shadow-red-500/30"
                          : "bg-white/10 text-slate-300 group-hover:bg-[#E11D2E]/20 group-hover:text-red-400"
                      )}
                    >
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Who We Serve</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>

                {/* Blog Item */}
                <Link
                  href="/blog"
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "group flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 border",
                    pathname === "/blog"
                      ? "bg-gradient-to-r from-[#E11D2E]/20 to-transparent border-[#E11D2E]/40 text-white font-bold"
                      : "border-transparent text-slate-200 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        pathname === "/blog"
                          ? "bg-[#E11D2E] text-white shadow-md shadow-red-500/30"
                          : "bg-white/10 text-slate-300 group-hover:bg-[#E11D2E]/20 group-hover:text-red-400"
                      )}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">Blog & Guides</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>


            </div>

            {/* Bottom Action CTAs */}
            <div className="relative z-10 p-5 sm:p-6 border-t border-white/10 bg-[#071629]/95 backdrop-blur-md space-y-2.5">
              {/* Primary Action Button */}
              <Link
                href="/contact#contact-form"
                onClick={() => setIsMobileOpen(false)}
                className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(225,29,46,0.4)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.55)] transition-all duration-200 active:scale-[0.98] border border-red-400/40"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary Phone Call Action */}
              <a
                href="tel:+18578000890"
                className="group flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/15 text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <div className="w-6 h-6 rounded-md bg-[#E11D2E]/20 text-[#E11D2E] flex items-center justify-center group-hover:bg-[#E11D2E] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call +1 (857) 800-0890</span>
              </a>

              {/* Trust Tagline */}
              <div className="pt-0.5 flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center">
                <span>NFPA 96 &amp; Mass 527 CMR 1.00</span>
                <span>•</span>
                <span>Insured &amp; Bonded</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
