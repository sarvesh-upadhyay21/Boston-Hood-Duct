import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider";
import { CtaBanner } from "@/components/home/CtaBanner";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Commercial Kitchen Exhaust Duct Cleaning Boston MA",
  description:
    "Comprehensive commercial exhaust duct cleaning from hood collar to rooftop fan. Certified NFPA 96 grease removal and fire-rated access panel installations.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/services/exhaust-duct-cleaning",
  },
};

export default function ExhaustDuctCleaningPage() {
  const service = servicesData.find((s) => s.slug === "exhaust-duct-cleaning");
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
              Concealed Ductwork Before & After Transformation
            </h3>
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              afterImage="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=80"
              beforeLabel="Before (Heavy Grease Buildup)"
              afterLabel="After (Bare Metal Bare Steel)"
              title="Vertical Multi-Story Duct Riser Decontamination"
              description="Eliminating dangerous structural grease fuel reservoirs through NFPA-compliant access doors."
            />
          </div>
        </div>

        {/* Multi-step Procedure & Advantages */}
        <ServiceProcess steps={service.steps} benefits={service.benefits} />

      </div>

     {/* <CtaBanner /> */}
    </>
  );
}
