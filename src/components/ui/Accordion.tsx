"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { BrandText } from "@/components/ui/BrandText";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-xl border transition-all duration-200 overflow-hidden bg-white",
              isOpen
                ? "border-[#E11D2E]/40 shadow-md ring-1 ring-[#E11D2E]/20"
                : "border-slate-200/90 hover:border-slate-300 shadow-sm"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3.5">
                <span
                  className={cn(
                    "flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors",
                    isOpen
                      ? "bg-[#E11D2E] text-white"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-extrabold text-base sm:text-lg transition-colors leading-snug",
                    isOpen ? "text-[#0B1F3A]" : "text-slate-900"
                  )}
                >
                  <BrandText>{item.question}</BrandText>
                </span>
              </span>
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                  isOpen
                    ? "bg-red-50 text-[#E11D2E] rotate-180"
                    : "bg-slate-100 text-slate-400"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 whitespace-pre-line pl-14 sm:pl-16">
                    <BrandText>{item.answer}</BrandText>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
