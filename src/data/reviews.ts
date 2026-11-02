import { Review } from "@/types";

/**
 * DEVELOPMENT NOTICE:
 * The following customer testimonials are illustrative mock demonstration reviews
 * formatted for user experience layout testing. Real customer reviews and verified
 * testimonials will replace these mock placeholders prior to commercial deployment.
 */

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    author: "Marco Rossi",
    role: "Executive Chef & Owner",
    business: "Trattoria Della Nonna",
    location: "North End, Boston, MA",
    rating: 5,
    date: "March 2026",
    comment: "Boston Hood & Duct arrived at 11:30 PM after our kitchen closed and by 5:00 AM our hoods looked brand new out of the crate. The photo report sent to our fire inspector passed immediately without a single correction.",
    serviceType: "Commercial Kitchen Hood Cleaning",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sarah Jenkins",
    role: "General Manager",
    business: "Harborview Seafood & Grill",
    location: "Seaport District, Boston, MA",
    rating: 5,
    date: "February 2026",
    comment: "With 4 deep fryers running non-stop, grease buildup is a constant fire risk. Boston Hood & Duct set us up on a quarterly maintenance plan. Professional crew, completely sealed work area, zero mess on our prep tables.",
    serviceType: "Exhaust System & Duct Cleaning",
    verified: true
  },
  {
    id: "rev-3",
    author: "David Chen",
    role: "Director of Culinary Operations",
    business: "The Cambridge Commonwealth Club",
    location: "Cambridge, MA",
    rating: 5,
    date: "January 2026",
    comment: "Our rooftop fan was shaking the entire 4th floor due to heavy grease buildup on the impeller wheel. The team cleaned the entire fan assembly, replaced the grease containment pillow, and the vibration ceased completely.",
    serviceType: "Rooftop Exhaust Fan Cleaning",
    verified: true
  },
  {
    id: "rev-4",
    author: "Elena Rostova",
    role: "Hospitality Operations Lead",
    business: "Back Bay Boutique Hotel & Lounge",
    location: "Back Bay, Boston, MA",
    rating: 5,
    date: "April 2026",
    comment: "Clear communication, punctual arrival, and comprehensive NFPA 96 certification stickers applied right to the hood. Their digital portal makes submitting proof of compliance to our insurance underwriter effortless.",
    serviceType: "Complete Hood & Duct Cleaning",
    verified: true
  },
  {
    id: "rev-5",
    author: "Marcus Vance",
    role: "Kitchen Operations Manager",
    business: "Somerville Craft Smokehouse",
    location: "Somerville, MA",
    rating: 5,
    date: "February 2026",
    comment: "As a wood-smoke BBQ kitchen, solid fuel creates heavy creosote and grease that many cleaners refuse to touch. Boston Hood & Duct handled our heavy-duty duct run down to the bare steel. Outstanding work.",
    serviceType: "Solid-Fuel Exhaust Cleaning",
    verified: true
  },
  {
    id: "rev-6",
    author: "Anthony DeLuca",
    role: "Franchise Owner",
    business: "Boston Burger & Brew Co.",
    location: "Fenway-Kenmore, Boston, MA",
    rating: 5,
    date: "March 2026",
    comment: "Fair, transparent pricing with no hidden fees or surprise add-ons. They showed up right on time for our overnight shift and left the cookline cleaner than they found it. Highly recommend to any Boston GM.",
    serviceType: "Scheduled Preventive Maintenance",
    verified: true
  }
];

export const trustRatingStats = {
  averageRating: "5.0",
  totalReviewsLabel: "Sample Client Rating Demonstration",
  isDemonstrationData: true,
  badges: [
    { title: "NFPA 96 Standards", description: "Follows strict NFPA 96 fire safety cleaning protocols" },
    { title: "Fully Insured", description: "$2M commercial liability coverage for complete protection" },
    { title: "Overnight Scheduling", description: "Available 24/7/365 to fit your kitchen closing hours" },
    { title: "Photo Inspection Proof", description: "Comprehensive before & after documentation with every job" }
  ]
};
