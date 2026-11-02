import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User, ArrowRight, BookOpen, ShieldCheck, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { serviceImages } from "@/data/serviceImages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/home/CtaBanner";
import { HeroBanner } from "@/components/ui/HeroBanner";

export const metadata: Metadata = {
  title: "Commercial Kitchen Fire Safety Blog & Guides",
  description:
    "Expert insights on NFPA 96 fire compliance, commercial kitchen ventilation, rooftop fan maintenance, and passing Boston Fire Department inspections.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/blog",
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        // badge="Restaurant Fire Safety Knowledge Base"
        title="Commercial Hood & Exhaust Safety Insights"
        description="Stay ahead of city inspections and insurance requirements with our practical guides written for Massachusetts restaurant owners and culinary facility managers."
        image={serviceImages.kitchenHood}
        imageAlt="Commercial Kitchen Fire Safety Insights and Guides"
      />

      {/* Main Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Card */}
          {featuredPost && (
            <div className="mb-16 rounded-3xl overflow-hidden border border-slate-200/90 bg-[#F4F7FB] shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-slate-900">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#E11D2E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Featured Guide
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold">
                    <span className="text-[#E11D2E]">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] hover:text-[#E11D2E] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                    <div>
                      <p className="text-xs font-bold text-[#0B1F3A]">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-600">{featuredPost.author.role}</p>
                    </div>

                    <Link
                      href="/get-a-quote"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D2E] hover:text-[#B91C2B]"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Articles */}
          <SectionHeading
            // badge="Latest Safety Publications"
            title="More Commercial"
            highlightedText="Kitchen Resources"
            description="Practical checklists, code breakdowns, and preventive maintenance guides for commercial kitchens."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-600 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-[#0B1F3A] group-hover:text-[#E11D2E] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">
                      {post.author.name}
                    </span>
                    <Link
                      href="/get-a-quote"
                      className="text-xs font-bold text-[#E11D2E] group-hover:text-[#B91C2B] inline-flex items-center gap-1"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     {/* <CtaBanner /> */}
    </>
  );
}
