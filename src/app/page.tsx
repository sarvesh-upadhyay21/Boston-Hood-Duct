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
    absolute: "BOSTON HOOD & DUCT | Hood, HVAC & Dryer Vent Cleaning MA",
  },
  description:
    "NFPA 96 certified commercial kitchen exhaust hood cleaning, HVAC air duct cleaning, and dryer vent cleaning in Greater Boston and Massachusetts. 24/7 dispatch.",
  alternates: {
    canonical: "https://bostonhoodandduct.com",
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
