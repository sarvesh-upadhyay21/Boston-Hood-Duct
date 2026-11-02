import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServiceProcessProps {
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  processTitle?: string;
  processDescription?: string;
  processBadge?: string;
  benefitsTitle?: string;
  benefitsDescription?: string;
  benefitsBadge?: string;
  showBenefits?: boolean;
}

export function ServiceProcess({
  steps,
  benefits,
  processTitle = "Our Step-by-Step",
  processDescription = "A clear sequence from consultation and system inspection through cleaning, verification, and service documentation.",
  processBadge = "Service Process",
  benefitsTitle = "Practical Service",
  benefitsDescription = "Service benefits depend on system condition, the agreed scope, and regular maintenance.",
  benefitsBadge = "Key Benefits",
  showBenefits = true,
}: ServiceProcessProps) {
  return (
    <div className="space-y-16 py-12">
      {/* Step by Step Breakdown */}
      <div>
        <SectionHeading
          // badge={processBadge}
          title={processTitle}
          highlightedText="Cleaning Process"
          description={processDescription}
          centered
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                0{st.step}
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A] text-base">{st.title}</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">{st.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showBenefits && (
        <div>
          <SectionHeading
            // badge={benefitsBadge}
            title={benefitsTitle}
            highlightedText="Benefits"
            description={benefitsDescription}
            centered
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F4F7FB] border border-slate-200/80 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2.5 text-[#E11D2E] mb-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <h4 className="font-bold text-[#0B1F3A] text-base">{benefit.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pl-7">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
