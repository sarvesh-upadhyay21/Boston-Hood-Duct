export interface SubServiceItem {
  title: string;
  description: string;
  items?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  badge?: string;
  phone?: string;
  features: string[];
  nfpaStandard?: string;
  subServices?: SubServiceItem[];
  benefits: {
    title: string;
    description: string;
  }[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  business: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceType: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "compliance" | "pricing" | "emergency" | "hood-cleaning" | "air-duct-cleaning" | "dryer-vent-cleaning";
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: "hood" | "duct" | "fan" | "filters";
  categoryLabel: string;
  description: string;
  location: string;
  greaseLevel: string;
  beforeImage: string;
  afterImage: string;
  tag: string;
}

export interface ServiceArea {
  name: string;
  county: string;
  description: string;
  popularSpots: string[];
  responseTime: string;
  isPrimary?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  tags: string[];
}

export interface QuoteFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  contactMethod: "Phone" | "Email" | "Text message" | "";
  streetAddress: string;
  city: string;
  zipCode: string;
  state: "MA";
  propertyType: string;
  businessHours: string;
  serviceRequired: string[];
  hoodExhaustDetails: string;
  nfpa96Details: string;
  hvacDetails: string;
  dryerVentDetails: string;
  preferredSchedule: string;
  preferredDate?: string;
  preferredHours: string;
  reasonForService: string;
  additionalMessage: string;
  consent: "true";
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
