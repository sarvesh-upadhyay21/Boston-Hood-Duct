import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { serviceImages } from "@/data/serviceImages";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BlogListing } from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Kitchen Fire Safety & Hood Cleaning Blog | Boston",
  },
  description:
    "Explore expert guides on NFPA 96, kitchen hood cleaning, fire safety codes and exhaust maintenance. Get practical tips for Boston restaurants and businesses.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/blog/",
  },
};

export default function BlogPage() {
  return (
    <>
      <HeroBanner
        title="Commercial Hood & Exhaust Safety Insights"
        description="Stay ahead of city inspections and insurance requirements with our practical guides written for Massachusetts restaurant owners and culinary facility managers."
        image={serviceImages.kitchenHood}
        imageAlt="Commercial Kitchen Fire Safety Insights and Guides"
      />

      <BlogListing posts={blogPosts} />
    </>
  );
}

/* Legacy paginated implementation removed: pagination is now handled client-side. */
