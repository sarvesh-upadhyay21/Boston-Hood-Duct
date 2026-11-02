"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-2",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] hover:-translate-y-0.5 focus-visible:ring-[#E11D2E] border border-red-400/30",
      navy:
        "bg-gradient-to-r from-[#0B1F3A] to-[#16335C] hover:from-[#071629] hover:to-[#0B1F3A] text-white shadow-[0_4px_14px_rgba(11,31,58,0.25)] hover:shadow-[0_8px_25px_rgba(11,31,58,0.4)] hover:-translate-y-0.5 focus-visible:ring-[#0B1F3A] border border-white/10",
      secondary:
        "bg-white hover:bg-[#F4F7FB] text-[#0B1F3A] border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-slate-400",
      outline:
        "bg-transparent hover:bg-[#0B1F3A]/5 text-[#0B1F3A] border-2 border-[#0B1F3A] hover:-translate-y-0.5 focus-visible:ring-[#0B1F3A]",
      ghost:
        "bg-transparent hover:bg-slate-100 text-[#0B1F3A] focus-visible:ring-slate-300",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex items-center transition-transform duration-200 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
