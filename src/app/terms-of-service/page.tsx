import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BOSTON HOOD & DUCT commercial service terms and service performance guidelines.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white pb-20">
      <HeroBanner
        // badge="Legal & Compliance"
        title="Terms of Service"
        description="Boston Hood & Duct commercial service terms, performance standards, and operational guidelines across Massachusetts."
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D2E] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
      </HeroBanner>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-slate-600 mb-8">Last Updated: October 2026</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">1. Agreement to Terms</h2>
            <p>
              By accessing our website or engaging <BrandText>Boston Hood &amp; Duct</BrandText> LLC for commercial kitchen exhaust system cleaning, you agree to these Terms of Service and applicable NFPA 96, Boston Fire Department, and Massachusetts fire safety regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">2. Scope of Service & Standards</h2>
            <p>
              All cleaning services are performed in accordance with NFPA Standard 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations). Work involves degreasing accessible exhaust components to bare metal. Inaccessible duct runs without code-compliant access panels will be documented in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">3. Site Access & Utilities</h2>
            <p>
              Clients are responsible for providing unobstructed access to kitchen cooklines, electrical panels, rooftop terminations, and operational water and power supplies during agreed service windows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">4. Certification & Documentation</h2>
            <p>
              Upon successful service completion and receipt of invoice payment, <BrandText>Boston Hood &amp; Duct</BrandText> affixes an official Certificate of Performance to the hood canopy and provides digital before/after photographic documentation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">5. Inquiries & Dispatch</h2>
            <p>
              Direct all contractual inquiries to: <strong>service@bostonhoodandduct.com</strong> or call <strong>+1 (857) 800-0890</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
