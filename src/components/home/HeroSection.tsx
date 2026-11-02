"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Fan,
  Flame,
  Pause,
  Play,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { serviceImages } from "@/data/serviceImages";

const heroSlides = [
  {
    image: serviceImages.landingHero,
    alt: "Leading provider of kitchen hood & exhaust cleaning services",
    label: "Leading provider of kitchen hood & exhaust cleaning services",
  },
  {
    image: serviceImages.kitchenHood,
    alt: "Technician pressure-washing a commercial kitchen hood and exhaust system",
    label: "Commercial kitchen hood & exhaust cleaning",
  },
  {
    image: serviceImages.airDuct,
    alt: "Technician inspecting and cleaning HVAC ventilation ductwork",
    label: "HVAC air duct cleaning",
  },
  {
    image: serviceImages.dryerVent,
    alt: "Technician cleaning a residential dryer vent",
    label: "Residential & commercial dryer vent cleaning",
  },

];

const serviceTypes = [
  {
    label: "Kitchen Hood & Exhaust",
    Icon: Flame,
    href: "/services/kitchen-hood-cleaning",
  },
  {
    label: "HVAC Air Duct",
    Icon: Wind,
    href: "/services/air-duct-cleaning",
  },
  {
    label: "Dryer Vent",
    Icon: Fan,
    href: "/services/dryer-vent-cleaning",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      aria-label="BOSTON HOOD & DUCT cleaning services"
      className="relative isolate flex min-h-[92svh] lg:min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EBF1F7] pb-24 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      {/* Soft White Radial Gradient & Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,#ffffff_45%,rgba(235,241,247,0.75)_100%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main 2-Column Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="max-w-4xl text-[clamp(1.4rem,3vw,2.5rem)] font-black leading-[1.1] tracking-tight text-[#0B1F3A]">
              <span className="block">Commercial Kitchen Hood &amp;
              </span>
              <span className="block">Exhaust Vent Cleaning &amp;
              </span>
              <span className="block">Inspection in Boston
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-extrabold uppercase text-[#0B1F3A] sm:gap-x-3 sm:gap-y-2 sm:text-sm lg:text-base">
              {serviceTypes.map(({ label, Icon, href }, index) => (
                <div key={label} className="inline-flex items-center gap-2.5">
                  {index > 0 && (
                    <span className="h-4 w-0.5 bg-[#E11D2E]" aria-hidden="true" />
                  )}
                  <Link
                    href={href}
                    className="group/service inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#E11D2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] focus-visible:ring-offset-2 rounded-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#E11D2E] transition-transform duration-200 group-hover/service:scale-110 sm:h-4 sm:w-4" aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </div>
              ))}
            </div>

            <p className="max-w-2xl text-sm font-semibold leading-relaxed text-slate-700 sm:text-base lg:text-lg">
              Boston Hood & Duct provides professional commercial kitchen hood and exhaust vent cleaning and inspection, residential and commercial HVAC air duct cleaning and inspection, and dryer vent cleaning and inspection throughout Greater Boston and Massachusetts. Our certified professionals bring specialized expertise in NFPA 96 and 527 CMR 1.00 fire code compliance, with qualifications from the Massachusetts State Fire Marshal and Boston Fire Prevention Division to help your business meet applicable regulatory requirements.
            </p>

            <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#0B1F3A] sm:text-sm lg:text-base">
              Local support <span className="mx-2 text-[#E11D2E]">|</span> Fast
              scheduling <span className="mx-2 text-[#E11D2E]">|</span> Clear
              quotes
            </p>

            <div className="pt-2 flex flex-col gap-2.5 sm:gap-3 sm:flex-row">
              <Button
                href="/contact#contact-form"
                variant="primary"
                size="lg"
                className="w-full text-sm font-extrabold uppercase shadow-xl shadow-red-950/20 sm:w-auto"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Request a Commercial Quote
              </Button>
              <Button
                href="/services"
                variant="navy"
                size="lg"
                className="w-full text-sm font-extrabold uppercase sm:w-auto"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Slider */}
          <div className="lg:col-span-5 xl:col-span-5 relative w-full">
            <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 ring-1 ring-slate-200/80">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={slide.label}
                  animate={{
                    opacity: index === activeSlide ? 1 : 0,
                    scale: index === activeSlide ? 1 : 1.05,
                  }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  aria-hidden={index !== activeSlide}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-center"
                  />
                </motion.div>
              ))}

              {/* Slider Arrows - Only visible on hover / focus */}
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-[#0B1F3A]/70 p-2.5 text-white backdrop-blur-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 focus-visible:opacity-100 focus-visible:translate-x-0 transition-all duration-300 hover:bg-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1F3A]"
                aria-label="Show previous hero image"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-[#0B1F3A]/70 p-2.5 text-white backdrop-blur-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 focus-visible:opacity-100 focus-visible:translate-x-0 transition-all duration-300 hover:bg-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B1F3A]"
                aria-label="Show next hero image"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress & Controls Bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <span className="shrink-0 text-xs font-bold text-[#0B1F3A] sm:text-sm">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            className="shrink-0 rounded-full bg-[#0B1F3A]/80 p-2.5 text-white transition-colors hover:bg-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
            aria-label={isPlaying ? "Pause hero slideshow" : "Play hero slideshow"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className={`h-2 flex-1 rounded-full transition-colors ${index === activeSlide
                  ? "bg-[#E11D2E]"
                  : "bg-slate-200 hover:bg-slate-300"
                  }`}
              />
            ))}
          </div>
          <span className="hidden min-w-0 truncate text-xs font-semibold text-[#0B1F3A] sm:block sm:text-sm">
            {heroSlides[activeSlide].label}
          </span>
        </div>
      </div>
    </section>
  );
}
