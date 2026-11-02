import React from "react";
import { cn } from "@/lib/utils";
import { BrandText } from "@/components/ui/BrandText";

interface SectionHeadingProps {
  badge?: string;
  badgeClassName?: string;
  title: string;
  titleClassName?: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeClassName,
  title,
  titleClassName,
  highlightedText,
  description,
  centered = false,
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* {badge && (
        <div className={cn("inline-flex items-center gap-2 mb-3.5", centered ? "justify-center" : "")}>
          <span className="h-2 w-2 rounded-full bg-[#E11D2E] animate-pulse" />
          <span
            className={cn(
              "text-xs sm:text-sm font-extrabold uppercase tracking-wider",
              isDark ? "text-red-400" : "text-[#E11D2E]",
              badgeClassName
            )}
          >
            {badge}
          </span>
        </div>
      )} */}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-[#0B1F3A]",
          titleClassName
        )}
      >
        <BrandText>{title}</BrandText>
        {highlightedText && (
          <>
            {" "}
            <BrandText>{highlightedText}</BrandText>
          </>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          <BrandText>{description}</BrandText>
        </p>
      )}
    </div>
  );
}
