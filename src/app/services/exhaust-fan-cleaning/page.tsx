import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider";
import { CtaBanner } from "@/components/home/CtaBanner";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Rooftop Exhaust Fan Cleaning & Degreasing Boston MA",
  description:
    "Commercial rooftop exhaust fan degreasing, impeller blade balancing, fan belt inspection, and rooftop grease containment service for Boston commercial kitchens.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services/exhaust-fan-cleaning",
  },
};

export default function ExhaustFanCleaningPage() {
  const service = servicesData.find((s) => s.slug === "exhaust-fan-cleaning");
  if (!service) notFound();

  return (
    <>
      <ServiceDetailHero
        title={service.title}
        // badge={service.badge}
        description={service.fullDescription}
        image={service.image}
        nfpaStandard={service.nfpaStandard}
        features={service.features}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Interactive Comparison Slider */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-black text-[#0B1F3A] mb-4 text-center">
              Rooftop Upblast Exhaust Fan Before & After Transformation
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              afterImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              beforeLabel="Before (Caked Impeller Grease)"
              afterLabel="After (Balanced & Bare Metal)"
              title="Centrifugal Fan Wheel & Shroud Restored"
              description="Eliminating vibration, motor strain, and hazardous roof membrane grease pools."
            />
          </div>
        </div>

        {/* Multi-step Procedure & Advantages */}
        <ServiceProcess steps={service.steps} benefits={service.benefits} />

        {/* Embedded Quote Form */}
      </div>

     {/* <CtaBanner /> */}
    </>
  );
}
