import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BrandText } from "@/components/ui/BrandText";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BOSTON HOOD & DUCT commercial service privacy policy and data governance practices.",
  alternates: {
    canonical: "https://bostonhoodandduct.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white pb-20">
      <HeroBanner
        // badge="Legal & Compliance"
        title="Privacy Policy"
        description="Boston Hood & Duct commercial service privacy policy, data protection, and governance practices across Massachusetts."
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
            <h2 className="text-xl font-bold text-[#0B1F3A]">1. Introduction & Overview</h2>
            <p>
              <BrandText>Boston Hood &amp; Duct</BrandText> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) operates in the Commonwealth of Massachusetts providing commercial kitchen exhaust cleaning, hood degreasing, and fire code compliance services. We respect your business privacy and are committed to safeguarding commercial records and personal contact information submitted via this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">2. Information We Collect</h2>
            <p>
              When requesting quotes or contacting our dispatch, we may collect: business name, physical kitchen address, phone numbers, email addresses, cooking equipment details, and service logs. We do not sell, rent, or trade your contact or business information to third-party marketing firms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">3. Use of Information</h2>
            <p>
              We use collected information solely to: generate accurate commercial proposals, schedule mobile service crews, deliver compliance photo audits, communicate inspection reminders, and provide documentation to your designated fire marshal or insurance provider upon your written request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">4. Security of Data</h2>
            <p>
              We implement administrative, technical, and physical measures to protect submitted information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">5. Contact Us</h2>
            <p>
              For questions regarding privacy, please contact: <strong>service@bostonhoodandduct.com</strong> or call <strong>+1 (857) 800-0890</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
