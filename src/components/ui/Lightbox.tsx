"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, AlertTriangle, ShieldCheck } from "lucide-react";
import { BeforeAfterItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { BrandText } from "@/components/ui/BrandText";

interface LightboxProps {
  item: BeforeAfterItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#071629]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
                {item.categoryLabel} Project Detail
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A]">{item.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Side by Side Photos */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50">
            {/* Before Card */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="relative aspect-[4/3] bg-slate-900">
                <Image
                  src={item.beforeImage}
                  alt={`${item.title} - Before Cleaning`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#E11D2E] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  BEFORE SERVICE
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-slate-600 uppercase">Condition Encountered</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{item.greaseLevel}</p>
              </div>
            </div>

            {/* After Card */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="relative aspect-[4/3] bg-slate-900">
                <Image
                  src={item.afterImage}
                  alt={`${item.title} - After NFPA 96 Cleaning`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  AFTER NFPA 96 SERVICE
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-slate-600 uppercase">Standard Achieved</p>
                <p className="text-sm font-semibold text-emerald-700 mt-0.5">{item.tag}</p>
              </div>
            </div>
          </div>

          {/* Info Details */}
          <div className="p-6 bg-white space-y-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-[#E11D2E]" />
              <span>{item.location}</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-100 text-xs text-red-800">
              <strong>Demonstration Notice:</strong> Sample project imagery presented for interactive UI and visual testing. Verified field photography will be deployed for <BrandText>Boston Hood &amp; Duct</BrandText> production portfolio.
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
