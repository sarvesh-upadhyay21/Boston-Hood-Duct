"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POSTS_PER_PAGE = 3;

export function BlogListing({ posts }: { posts: BlogPost[] }) {
  const [activePage, setActivePage] = useState(1);
  const firstPost = posts.find((post) => post.id === "nfpa-96-boston-guide");
  const verifiedSecondPost = posts.find((post) => post.id === "seven-kitchen-exhaust-cleaning-warning-signs");
  const orderedPosts = [
    ...(firstPost ? [firstPost] : []),
    ...(verifiedSecondPost ? [verifiedSecondPost] : []),
    ...posts.filter((post) => post.id !== firstPost?.id && post.id !== verifiedSecondPost?.id),
  ];
  const totalPages = Math.max(1, Math.ceil(orderedPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = orderedPosts.slice(
    (activePage - 1) * POSTS_PER_PAGE,
    activePage * POSTS_PER_PAGE,
  );

  const changePage = (page: number) => {
    setActivePage(page);
    document.getElementById("blog-resources")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="blog-resources">
          <SectionHeading
            title="Commercial Kitchen"
            highlightedText="Safety Resources"
            description="Expert guidance on grease fire prevention, NFPA 96, Massachusetts fire codes, inspections, and commercial exhaust maintenance."
          />

          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <article
                key={post.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(11,31,58,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(11,31,58,0.13)]"
              >
                <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-[#0B1F3A]/95 px-3 py-1.5 text-[11px] font-bold text-white shadow-md backdrop-blur-sm">
                    {post.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold leading-snug text-[#0B1F3A] transition-colors group-hover:text-[#E11D2E]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
                    <span className="max-w-[55%] text-xs font-bold leading-5 text-slate-500">{post.author.name}</span>
                    <Link href={`/blog/${post.slug}`} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-extrabold text-[#E11D2E]">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
              <button type="button" onClick={() => changePage(activePage - 1)} disabled={activePage === 1} aria-label="Previous page" className="flex h-11 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-bold text-[#0B1F3A] disabled:text-slate-300">
                <ChevronLeft className="h-4 w-4" /><span className="hidden sm:inline">Previous</span>
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button key={page} type="button" onClick={() => changePage(page)} aria-current={page === activePage ? "page" : undefined} className={`flex h-11 w-11 items-center justify-center rounded-lg border text-sm font-extrabold ${page === activePage ? "border-[#E11D2E] bg-[#E11D2E] text-white" : "border-slate-200 bg-white text-[#0B1F3A] hover:border-[#E11D2E] hover:text-[#E11D2E]"}`}>
                  {page}
                </button>
              ))}
              <button type="button" onClick={() => changePage(activePage + 1)} disabled={activePage === totalPages} aria-label="Next page" className="flex h-11 items-center gap-1 rounded-lg border border-slate-200 px-3 text-sm font-bold text-[#0B1F3A] disabled:text-slate-300">
                <span className="hidden sm:inline">Next</span><ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
