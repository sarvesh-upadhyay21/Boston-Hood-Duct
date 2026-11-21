import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ComplianceTableSection } from "@/components/home/ComplianceTableSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: {
    absolute: "Kitchen Hood & Duct Cleaning Boston, MA | Get a Free Quote",
  },
  description:
    "Need kitchen hood, air duct or dryer vent cleaning in Boston, MA? Get certified cleaning, NFPA 96 compliance support & fast scheduling. Request a free quote!",
  alternates: {
    canonical: "https://bostonhoodandduct.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      {/* <WhyChooseUs /> */}
      {/* <ComplianceTableSection /> */}
      {/* <HowItWorks /> */}
      <ServiceAreasSection />
      <FaqSection />
    </>
  );
}
