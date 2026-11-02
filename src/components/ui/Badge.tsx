import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "red" | "navy" | "outline" | "success" | "gray";
  children: React.ReactNode;
}

export function Badge({
  variant = "red",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    red: "bg-red-50 text-[#E11D2E] border-red-200/80",
    navy: "bg-[#0B1F3A]/10 text-[#0B1F3A] border-[#0B1F3A]/20",
    outline: "bg-white text-slate-700 border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gray: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
