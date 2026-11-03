
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BrandText } from "@/components/ui/BrandText";

export interface HeroBannerProps {
  badge?: string;
  tag?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  imageFit?: "cover" | "contain";
  className?: string;
  children?: React.ReactNode;
}

export function HeroBanner({
  badge,
  tag,
  title,
  description,
  image,
  imageAlt,
  imagePriority = true,
  imageFit = "cover",
  className,
  children,
}: HeroBannerProps) {
  const badgeContent = (
    <>
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E11D2E]/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C5162A] shadow-sm backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
          <BrandText>{badge}</BrandText>
        </span>
      )}

      {tag && (
        <span className="inline-flex items-center rounded-full border border-blue-200/80 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
          <BrandText>{tag}</BrandText>
        </span>
      )}
    </>
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-blue-200/50 bg-gradient-to-br from-[#F8FBFF] via-[#EDF5FF] to-[#DCEBFF] pt-28 pb-12 shadow-[0_18px_48px_-32px_rgba(11,31,58,0.22)] sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20",
        className
      )}
    >
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

      {/* Top Decorative Blue Accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-white via-[#60A5FA]/70 to-[#2563EB]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {image ? (
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              {children && <div className="mb-1">{children}</div>}

              {(badge || tag) && (
                <div className="flex flex-wrap items-center gap-2.5">
                  {badgeContent}
                </div>
              )}

              <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-[1.12] tracking-tight text-[#0B1F3A]">
                <BrandText>{title}</BrandText>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                <BrandText>{description}</BrandText>
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/90 bg-white/80 shadow-[0_26px_65px_rgba(11,31,58,0.16),0_10px_30px_rgba(37,99,235,0.12)] ring-1 ring-blue-200/50 sm:aspect-[16/10] sm:rounded-3xl lg:aspect-[4/3]">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  priority={imagePriority}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className={cn(
                    "transition-transform duration-500",
                    imageFit === "contain"
                      ? "object-contain p-4"
                      : "object-cover hover:scale-[1.03]"
                  )}
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 sm:rounded-3xl" />
              </div>
            </div>
          </div>
        ) : (
          /* Text Only Layout */
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            {children && <div className="mb-1">{children}</div>}

            {(badge || tag) && (
              <div className="flex flex-wrap items-center gap-2.5">
                {badgeContent}
              </div>
            )}

            <h1 className="text-[clamp(2rem,3.8vw,3rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#0B1F3A]">
              <BrandText>{title}</BrandText>
            </h1>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              <BrandText>{description}</BrandText>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
