"use client";

import React, { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { BeforeAfterItem } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider";
import { Maximize2, ShieldCheck, MapPin, AlertCircle } from "lucide-react";

export function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "hood", label: "Hood Canopies" },
    { id: "duct", label: "Exhaust Ductwork" },
    { id: "fan", label: "Rooftop Exhaust Fans" },
    { id: "filters", label: "Baffle Filters" },
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeTab);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === tab.id
                ? "bg-[#0B1F3A] text-white shadow-lg shadow-[#0B1F3A]/20"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Featured Interactive Comparison Slider for Top Project */}
      {filteredItems.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E11D2E]">
              Interactive Comparison Tool
            </span>
            <span className="text-xs text-slate-600">Drag to inspect bare metal difference</span>
          </div>
          <BeforeAfterSlider
            beforeImage={filteredItems[0].beforeImage}
            afterImage={filteredItems[0].afterImage}
            beforeLabel="Before Service"
            afterLabel="After NFPA 96 Clean"
            title={filteredItems[0].title}
            description={`${filteredItems[0].description} (${filteredItems[0].location})`}
          />
        </div>
      )}

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              {/* After image container */}
              <div className="relative aspect-[16/11] bg-slate-900 overflow-hidden">
                <img
                  src={item.afterImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 text-white text-[11px] font-bold px-3 py-1 rounded-md backdrop-blur-sm shadow">
                  {item.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#0B1F3A] flex items-center justify-center shadow-lg group-hover:bg-[#E11D2E] group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E11D2E]" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-bold text-lg text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  {item.tag}
                </span>
                <span className="text-slate-600 font-semibold group-hover:text-[#E11D2E] transition-colors">
                  Inspect Comparison →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
