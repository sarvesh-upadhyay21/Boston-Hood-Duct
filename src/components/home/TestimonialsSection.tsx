"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviewsData } from "@/data/reviews";
import { BrandText } from "@/components/ui/BrandText";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviewsData[currentIndex];

  return (
    <section className="py-24 bg-[#071629] text-white relative overflow-hidden" id="testimonials">
      {/* Background radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E11D2E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0B1F3A]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            // badge="Client Feedback"
            title="Trusted by Boston’s"
            highlightedText="Top Kitchens & Chefs"
            description="From North End bistros to Seaport seafood houses, see what restaurant operators say about our certified grease removal service."
            theme="dark"
          />

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#E11D2E]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-white/20 bg-[#E11D2E] hover:bg-[#B91C2B] text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white shadow-lg shadow-red-600/30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="relative">
          <div
            key={activeReview.id}
            className="rounded-3xl bg-gradient-to-br from-[#0F2544]/90 to-[#0B1F3A]/95 p-8 sm:p-12 border border-white/10 shadow-2xl backdrop-blur-xl relative transition-all duration-300"
          >
              <div className="absolute top-6 right-8 text-white/10 pointer-events-none hidden sm:block">
                <Quote className="w-24 h-24 rotate-180" />
              </div>

              <div className="max-w-3xl">
                {/* 5-Star Rating Visual */}
                <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Verified Commercial Client
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-xl sm:text-2xl text-slate-100 font-medium leading-relaxed italic mb-8">
                  &ldquo;<BrandText>{activeReview.comment}</BrandText>&rdquo;
                </blockquote>

                {/* Author & Business Metadata */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  {/* Customer Avatar Placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E11D2E] to-[#B91C2B] text-white flex items-center justify-center font-extrabold text-xl shadow-lg flex-shrink-0">
                    {activeReview.author.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      {activeReview.author}
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-sm text-red-400 font-medium">
                      {activeReview.role} • <span className="text-slate-200">{activeReview.business}</span>
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E11D2E]" />
                        {activeReview.location}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300 font-medium">{activeReview.serviceType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviewsData.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#E11D2E]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3 Secondary Review Snippet Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                currentIndex === index
                  ? "bg-[#0F2544] border-red-500/50 shadow-lg"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 italic mb-4">
                &ldquo;<BrandText>{item.comment}</BrandText>&rdquo;
              </p>
              <div className="border-t border-white/10 pt-3">
                <p className="text-xs font-bold text-white">{item.business}</p>
                <p className="text-[11px] text-slate-400">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Transparency Notice */}
        <div className="mt-12 p-3.5 rounded-xl bg-white/5 border border-white/10 text-center max-w-xl mx-auto text-xs text-slate-400">
          <strong className="text-white">Demonstration Notice:</strong> Client reviews displayed are development demonstration records designed for layout testing. Verified client references will be published prior to commercial release.
        </div>
      </div>
    </section>
  );
}
