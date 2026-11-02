"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Fan,
  Flame,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandText } from "@/components/ui/BrandText";

export function ServicesGrid() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#F4F7FB] py-20" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // badge="MULTIDISCIPLINARY EXPERTISE | MORE THAN A CLEANING COMPANY"
          title="Safety-Driven Expertise. Fire Code Compliance Support."
          description="Backed by extensive experience in Environmental Health & Safety (EHS), fire protection,
facility management, and commercial restaurant operations, Boston Hood & Duct delivers
professional commercial kitchen hood cleaning & inspections, HVAC air duct cleaning, and
dryer vent cleaning across Greater Boston and Massachusetts."
          centered
        />

        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#132D52] text-white shadow-[0_20px_60px_rgba(11,31,58,0.18)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E11D2E]/15 text-[#FF6670] ring-1 ring-[#FF6670]/25">
                <BadgeCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Oversight by a Multidisciplinary Team
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Our services benefit from direct oversight by a multidisciplinary
                team holding industry-recognized safety, healthcare, and fire
                protection credentials, helping your facility meet applicable
                municipal and state fire code requirements.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Massachusetts Type I Certified Technicians (mandatory state commercial kitchen exhaust licensing)",
                "Board of Certified Safety Professionals (CSP, ASP)",
                "Institute of Hazardous Materials Management (CHMM)",
                "Certified Healthcare Facility Managers (CHFM)",
                "NFPA 96 & NFPA 10 trained and certified (commercial cooking fire safety and portable fire extinguishers)",
                "Expertise in Boston Fire Department (BFD) fire prevention codes, Massachusetts 527 CMR 1.00, and manufacturer maintenance standards",
              ].map((credential) => (
                <li
                  key={credential}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-relaxed text-slate-100"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF6670]"
                    aria-hidden="true"
                  />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 bg-black/10 px-6 py-4 text-center sm:px-8">
            <p className="text-sm font-extrabold tracking-wide text-white sm:text-base">
              Cleaner Systems.{" "}
              <span className="text-[#FF6670]">Safer Properties.</span> Total
              Peace of Mind.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {servicesData.map((service, index) => {
            const Icon =
              service.id === "kitchen-hood-cleaning"
                ? Flame
                : service.id === "dryer-vent-cleaning"
                  ? Fan
                  : Wind;

            const detailHref = `/services/${service.slug}`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                onClick={() => router.push(detailHref)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(detailHref);
                  }
                }}
                role="link"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(11,31,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,31,58,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D2E] md:last:col-span-2 md:last:mx-auto md:last:w-full md:last:max-w-md lg:last:col-span-1 lg:last:max-w-none"
              >
                <div className="relative block h-52 overflow-hidden bg-slate-200 sm:h-60 lg:h-48 xl:h-60">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/55 via-transparent to-transparent" />

                  {service.id === "kitchen-hood-cleaning" && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#0B1F3A] shadow-sm backdrop-blur">
                      NFPA 96 · MA 527 CMR 1.00
                    </span>
                  )}

                  <span className="absolute bottom-4 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E11D2E] text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-5 xl:p-7">
                  <h3 className="text-lg font-extrabold leading-snug text-[#0B1F3A] sm:text-xl xl:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    <BrandText>{service.shortDescription}</BrandText>
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-4 sm:gap-3 sm:pt-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#E11D2E] transition-colors group-hover:text-[#B91C2B] sm:text-sm">
                      Learn Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>

                    <Link
                      href="/contact#contact-form"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 rounded-xl border border-white/10 bg-gradient-to-r from-[#0B1F3A] to-[#16335C] px-3 py-2 text-[11px] font-extrabold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-[#071629] hover:to-[#0B1F3A] hover:shadow-md sm:px-4 sm:text-xs"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#E11D2E]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B1F3A] sm:text-lg">
                Protect Your Kitchen &amp; Building. Stay Inspection-Ready.
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Our compliance-focused approach supports NFPA 96, Massachusetts
                527 CMR 1.00, and applicable Boston Fire Department requirements.
              </p>
            </div>
          </div>
          <a
            href="tel:+18578000890"
            className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E11D2E] via-[#E82536] to-[#C91424] hover:from-[#C91424] hover:to-[#B91C2B] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(225,29,46,0.35)] hover:shadow-[0_8px_25px_rgba(225,29,46,0.5)] transition-all duration-200 hover:-translate-y-0.5 border border-red-400/30"
          >
            <Phone className="w-4 h-4" />
            <span>Call +1 (857) 800-0890</span>
          </a>
        </div>
      </div>
    </section>
  );
}
