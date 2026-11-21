"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Link as LinkIcon,
  MessageCircle,
  Share2,
} from "lucide-react";
import type { BlogPost } from "@/types";

type BlogArticleClientProps = {
  title: string;
  slug: string;
  content: string[];
  relatedPosts: BlogPost[];
};

type ContentUnit = {
  lines: string[];
  words: number;
  kind: "heading" | "subheading" | "list" | "table" | "paragraph";
};

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function splitTableRow(line: string) {
  return line
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function buildUnits(content: string[]) {
  const units: ContentUnit[] = [];
  let index = 0;

  while (index < content.length) {
    if (content[index] === "") {
      index += 1;
      continue;
    }

    if (content[index].startsWith("- ")) {
      const lines: string[] = [];
      while (index < content.length && content[index].startsWith("- ")) {
        lines.push(content[index].slice(2));
        index += 1;
      }
      units.push({
        lines,
        words: lines.reduce((total, line) => total + wordCount(line), 0),
        kind: "list",
      });
      continue;
    }

    if (content[index].startsWith("|")) {
      const lines: string[] = [];
      while (index < content.length && content[index].startsWith("|")) {
        lines.push(content[index]);
        index += 1;
      }
      units.push({
        lines,
        words: lines.reduce((total, line) => total + wordCount(line), 0),
        kind: "table",
      });
      continue;
    }

    const line = content[index];
    if (line.startsWith("## ")) {
      units.push({ lines: [line], words: 0, kind: "heading" });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      units.push({ lines: [line], words: 0, kind: "subheading" });
      index += 1;
      continue;
    }

    units.push({ lines: [line], words: wordCount(line), kind: "paragraph" });
    index += 1;
  }

  return units;
}

export function BlogArticleClient({
  title,
  slug,
  content,
  relatedPosts,
}: BlogArticleClientProps) {
  const [visibleWords, setVisibleWords] = useState(100);
  const [copied, setCopied] = useState(false);

  const units = useMemo(() => buildUnits(content), [content]);
  const tableOfContents = useMemo(
    () =>
      content
        .filter((line) => line.startsWith("## "))
        .map((line) => {
          const text = line.slice(3);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return { text, id };
        }),
    [content],
  );

  let countedWords = 0;
  const visibleUnits: ContentUnit[] = [];
  for (const unit of units) {
    if (countedWords >= visibleWords && unit.words === 0) {
      break;
    }
    visibleUnits.push(unit);
    countedWords += unit.words;
    if (countedWords >= visibleWords && unit.words > 0) {
      break;
    }
  }

  const hasMore = countedWords < units.reduce((total, unit) => total + unit.words, 0);
  const articleUrl =
    typeof window === "undefined"
      ? `https://bostonhoodandduct.com/blog/${slug}`
      : window.location.href;

  const shareUrl = (network: "facebook" | "linkedin" | "twitter" | "whatsapp") => {
    const url = encodeURIComponent(articleUrl);
    const text = encodeURIComponent(title);
    const targets = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };
    window.open(targets[network], "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const nativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: articleUrl });
    } else {
      await copyLink();
    }
  };

  const renderUnit = (unit: ContentUnit, unitIndex: number) => {
    const line = unit.lines[0];

    if (unit.kind === "heading") {
      const text = line.slice(3);
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return (
        <h2 id={id} key={unitIndex} className="scroll-mt-28 mt-10 text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
          {text}
        </h2>
      );
    }

    if (unit.kind === "subheading") {
      return (
        <h3 key={unitIndex} className="mt-7 text-xl font-bold text-[#0B1F3A]">
          {line.slice(4)}
        </h3>
      );
    }

    if (unit.kind === "list") {
      return (
        <ul key={unitIndex} className="list-disc pl-6 space-y-2 text-slate-700 leading-7">
          {unit.lines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (unit.kind === "table") {
      const rows = unit.lines.map(splitTableRow);
      return (
        <div key={unitIndex} className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-slate-300 text-sm">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex === 0 ? "bg-[#F4F7FB] font-bold" : ""}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-slate-300 px-4 py-3 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (unit.lines.length > 1) {
      return (
        <ul key={unitIndex} className="list-disc pl-6 space-y-2 text-slate-700 leading-7">
          {unit.lines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={unitIndex} className="text-slate-700 leading-7">
        {line}
      </p>
    );
  };

  return (
    <>
      <aside className="hidden lg:block sticky top-28 space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0B1F3A]">Table of Contents</h2>
          <nav className="mt-4 space-y-1" aria-label="Table of contents">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block border-l-2 border-transparent pl-3 py-1.5 text-sm leading-5 text-slate-600 hover:border-[#E11D2E] hover:text-[#E11D2E]"
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-5">
          <p className="mb-3 text-sm font-extrabold text-[#0B1F3A]">Share this article</p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={nativeShare} aria-label="Share" className="share-button"><Share2 className="w-4 h-4" /></button>
            <button type="button" onClick={() => shareUrl("facebook")} aria-label="Share on Facebook" className="share-button text-xs font-extrabold">f</button>
            <button type="button" onClick={() => shareUrl("linkedin")} aria-label="Share on LinkedIn" className="share-button text-xs font-extrabold">in</button>
            <button type="button" onClick={() => shareUrl("twitter")} aria-label="Share on X" className="share-button text-xs font-extrabold">X</button>
            <button type="button" onClick={() => shareUrl("whatsapp")} aria-label="Share on WhatsApp" className="share-button"><MessageCircle className="w-4 h-4" /></button>
            <button type="button" onClick={copyLink} aria-label="Copy link" className="share-button"><LinkIcon className="w-4 h-4" /></button>
          </div>
          {copied && <p className="mt-2 text-xs font-bold text-[#E11D2E]">Link copied</p>}
        </div>
      </aside>

      <main className="min-w-0">
        <div className="lg:hidden mb-6 rounded-2xl border border-slate-200 p-5">
          <h2 className="text-sm font-extrabold text-[#0B1F3A]">Table of Contents</h2>
          <nav className="mt-3 grid gap-1" aria-label="Mobile table of contents">
            {tableOfContents.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="py-1 text-sm text-slate-600 hover:text-[#E11D2E]">
                {item.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-5">{visibleUnits.map(renderUnit)}</div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleWords((count) => count + 100)}
              className="rounded-full bg-[#E11D2E] px-7 py-3 text-sm font-extrabold text-white shadow-lg hover:bg-[#B91C2B]"
            >
              Read More
            </button>
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <div className="flex items-center gap-2">
            <button type="button" onClick={nativeShare} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#0B1F3A]">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#0B1F3A]">
              <LinkIcon className="w-4 h-4" /> {copied ? "Copied" : "Copy link"}
            </button>
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0B1F3A]">Related Articles</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {relatedPosts.slice(0, 4).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                  <Image src={post.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-5 text-[#0B1F3A]">{post.title}</p>
                  <p className="mt-1 text-[11px] text-slate-500">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <aside className="hidden lg:block sticky top-28">
        <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-5">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0B1F3A]">Related Articles</h2>
          <div className="mt-4 space-y-4">
            {relatedPosts.slice(0, 4).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex gap-3"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                  <Image src={post.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-5 text-[#0B1F3A] group-hover:text-[#E11D2E]">
                    {post.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
