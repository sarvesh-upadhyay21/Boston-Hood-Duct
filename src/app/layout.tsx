import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatBot } from "@/components/ui/ChatBot";
import { serviceImages } from "@/data/serviceImages";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071629",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bostonhoodandduct.com"),
  title: {
    default:
      "BOSTON HOOD & DUCT | Hood, HVAC & Dryer Vent Cleaning in Massachusetts",
    template: "%s | BOSTON HOOD & DUCT",
  },
  description:
    "Massachusetts Type I commercial kitchen hood cleaning, HVAC air duct cleaning, and dryer vent cleaning in Boston and across Massachusetts. Service aligned with NFPA 96 and 527 CMR 1.00.",
  alternates: {
    canonical: "https://bostonhoodandduct.com",
  },
  keywords: [
    "commercial kitchen hood cleaning Boston",
    "exhaust duct cleaning Massachusetts",
    "NFPA 96 hood certification Boston",
    "HVAC air duct cleaning Boston",
    "dryer vent cleaning Massachusetts",
    "restaurant grease removal",
    "rooftop exhaust fan cleaning",
    "commercial kitchen fire prevention Boston MA",
  ],
  authors: [{ name: "BOSTON HOOD & DUCT LLC" }],
  creator: "BOSTON HOOD & DUCT",
  publisher: "BOSTON HOOD & DUCT",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bostonhoodandduct.com",
    siteName: "BOSTON HOOD & DUCT",
    title: "BOSTON HOOD & DUCT | Hood, HVAC & Dryer Vent Cleaning",
    description:
      "Massachusetts Type I commercial kitchen hood and exhaust cleaning, HVAC air duct cleaning, and dryer vent cleaning in Boston and across Massachusetts.",
    images: [
      {
        url: serviceImages.kitchenHood,
        width: 1200,
        height: 630,
        alt: "BOSTON HOOD & DUCT Commercial Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOSTON HOOD & DUCT | Hood, HVAC & Dryer Vent Cleaning",
    description:
      "Massachusetts Type I commercial hood cleaning, residential and commercial HVAC duct cleaning, and dryer vent cleaning in Boston.",
    images: [serviceImages.kitchenHood],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOSTON HOOD & DUCT",
  "image": "https://bostonhoodandduct.com/images/commercial-kitchen-hood-exhaust-cleaning.webp",
  "telephone": "+18578000890",
  "email": "service@bostonhoodandduct.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wellesley",
    "addressRegion": "MA",
    "postalCode": "02482",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.3584,
    "longitude": -71.0598
  },
  "url": "https://bostonhoodandduct.com",
  "priceRange": "$$",
  "areaServed": [
    "Boston",
    "Cambridge",
    "Somerville",
    "Brookline",
    "Newton",
    "Quincy",
    "Waltham",
    "Eastern Massachusetts"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#0B1F3A] antialiased selection:bg-[#E11D2E] selection:text-white">
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
