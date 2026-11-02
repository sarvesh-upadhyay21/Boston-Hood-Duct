
import React from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Flame,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BrandText } from "@/components/ui/BrandText";

export interface ServiceDetailHeroProps {
  title: string;
  subtitle?: string | React.ReactNode;
  badge?: string;
  tag?: string;
  locationBadge?: string;
  description: string;
  trustLine?: string | React.ReactNode;
  secondaryNote?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
    isPhone?: boolean;
  };
  image: string;
  imageAlt?: string;
  nfpaStandard?: string;
  features?: string[];
  phone?: string;
  floatingCard?: {
    badge?: string;
    text?: string;
  };
}

export function ServiceDetailHero({
  title,
  subtitle,
  badge,
  tag,
  locationBadge,
  description,
  trustLine,
  secondaryNote,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  nfpaStandard,
  floatingCard,
}: ServiceDetailHeroProps) {
  // Preserve original HeroBanner behavior when rich hero options are not used
  if (!subtitle && !locationBadge && !primaryCta && !trustLine) {
    return (
      <HeroBanner
        badge={badge}
        tag={tag || nfpaStandard}
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt || title}
      />
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-blue-200/50 bg-gradient-to-br from-[#F8FBFF] via-[#EDF5FF] to-[#DCEBFF] shadow-[0_18px_48px_-32px_rgba(11,31,58,0.22)] pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
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

      {/* Decorative Blue Gradient Accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-white via-[#60A5FA]/70 to-[#2563EB]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            {/* Top Location or Tag Badge */}
            {locationBadge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E11D2E]/20 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#0B1F3A] shadow-xs">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#E11D2E]" />
                <span><BrandText>{locationBadge}</BrandText></span>
              </div>
            )}

            {(tag || nfpaStandard || badge) && !locationBadge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E11D2E]/20 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C5162A] shadow-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                <span><BrandText>{tag || nfpaStandard || badge}</BrandText></span>
              </div>
            )}

            {/* H1 Title */}
            <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
              <BrandText>{title}</BrandText>
            </h1>

            {/* H2 Subtitle */}
            {subtitle && (
              <h2 className="pt-1 text-base font-bold leading-relaxed text-[#0B1F3A]/90 sm:text-lg">
                {typeof subtitle === "string" ? <BrandText>{subtitle}</BrandText> : subtitle}
              </h2>
            )}

            {/* Description Paragraph */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              <BrandText>{description}</BrandText>
            </p>

            {/* Trust Line or Badges */}
            {trustLine && typeof trustLine === "string" && (
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-extrabold text-[#0B1F3A] sm:gap-2.5 sm:text-sm">
                {trustLine.includes("|") ? (
                  trustLine.split("|").map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/95 px-3 py-1.5 shadow-xs"
                    >
                      {idx === 0 && (
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      )}
                      {idx === 1 && (
                        <Flame className="h-4 w-4 text-[#E11D2E]" />
                      )}
                      {idx >= 2 && (
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      )}
                      {item.trim()}
                    </span>
                  ))
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-3.5 py-1.5 font-black text-[#0B1F3A] shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {trustLine}
                  </span>
                )}
              </div>
            )}

            {trustLine && typeof trustLine !== "string" && trustLine}

            {/* Secondary Note */}
            {secondaryNote && (
              <div className="max-w-2xl rounded-2xl border border-blue-100 bg-white/90 p-4 text-xs leading-relaxed text-slate-700 shadow-xs sm:text-sm">
                <p className="font-medium">{secondaryNote}</p>
              </div>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:gap-4">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {primaryCta.text}
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="navy"
                    size="lg"
                    leftIcon={
                      secondaryCta.isPhone ? (
                        <PhoneCall className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )
                    }
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/90 bg-[#0B1F3A] shadow-[0_26px_65px_rgba(11,31,58,0.16),0_10px_30px_rgba(37,99,235,0.12)] ring-1 ring-blue-200/50 sm:aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/70 via-transparent to-transparent" />

              {/* Floating Badge Card */}
              {floatingCard && (
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#E11D2E] text-white shadow-md">
                      <Award className="h-6 w-6" />
                    </div>

                    <div>
                      {floatingCard.badge && (
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#E11D2E]">
                          {floatingCard.badge}
                        </p>
                      )}

                      {floatingCard.text && (
                        <p className="mt-0.5 text-xs font-semibold text-slate-700">
                          {floatingCard.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
