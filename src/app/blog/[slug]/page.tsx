import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { BlogArticleClient } from "@/components/blog/BlogArticleClient";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://bostonhoodandduct.com/blog/${post.slug}/`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="border-b border-slate-200 bg-[#F4F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-36 sm:pb-20 sm:pt-40 lg:pt-44">
          <p className="text-sm font-bold text-[#E11D2E] mb-4">{post.category}</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[#0B1F3A]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#E11D2E]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,720px)_260px] xl:grid-cols-[240px_minmax(0,760px)_280px] gap-8 xl:gap-10 items-start">
          <BlogArticleClient
            title={post.title}
            slug={post.slug}
            content={post.content}
            relatedPosts={blogPosts.filter((item) => item.slug !== post.slug)}
          />
        </div>
      </div>
    </article>
  );
}
