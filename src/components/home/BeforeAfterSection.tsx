"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { BeforeAfterItem } from "@/types";
import { ArrowRight, Maximize2, ShieldCheck, Flame } from "lucide-react";

export function BeforeAfterSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "hood", label: "Commercial Hoods" },
    { id: "duct", label: "Exhaust Ductwork" },
    { id: "fan", label: "Rooftop Fans" },
  ];

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const featuredItem = galleryItems[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="gallery-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            // badge="Inspection Proof"
            title="Real Commercial Results:"
            highlightedText="Before & After"
            description="Interact with our comparison slider below to see how we restore grease-laden exhaust equipment to clean, fire-safe bare metal."
          />

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:text-[#B91C2B] transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>View Full 40+ Project Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Interactive Comparison Slider */}
        <div className="mb-14">
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage={featuredItem.beforeImage}
              afterImage={featuredItem.afterImage}
              beforeLabel="Before (Heavy Grease)"
              afterLabel="After (Bare Metal Restored)"
              title={featuredItem.title}
              description={`${featuredItem.description} Location: ${featuredItem.location}.`}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0B1F3A] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3 Grid Project Preview Cards with Lightbox Trigger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {item.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-[#0B1F3A] flex items-center justify-center shadow-md group-hover:bg-[#E11D2E] group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-bold text-base text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {item.tag}
                  </span>
                  <span className="text-slate-600 font-normal">Click to Inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Transparency Notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-600">
          <strong className="text-slate-700">Demonstration Showcase:</strong> Visual assets displayed above are demonstration media configured for slider interaction testing. Client projects will showcase verified on-site field results upon deployment.
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
