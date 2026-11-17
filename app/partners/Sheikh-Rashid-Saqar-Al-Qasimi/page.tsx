// app/partners/sheikh-Rashid-Saqar-Al-Qasimi/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, FileText } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnersPortfolioGrid from "@/components/partners/PartnersPortfolioGrid";
import { COLLABORATION_META } from "@/data/developmentProjects";

export const metadata: Metadata = {
  title: "Sheikh Rashid Saqar Al Qasimi | Strategic Partner | BricketX UAE",
  description:
    "BricketX Project Management LLC FZ collaborates with Sheikh Rashid Saqar Al Qasimi to showcase residential, commercial, and mixed-use developments across Sharjah and the UAE.",
};

export default function SheikhRashidPartnerPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      {/* ========================================================
          1. ARCHITECTURAL HERO
         ======================================================== */}
      <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-20 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 sm:opacity-35 hero-zoom-bg">
          <Image
            src="/images/developments/hero1.webp"
            alt="UAE Construction and Real Estate Developments"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/90 via-[#07090e]/65 to-[#07090e] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.07] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal direction="up" distance={18}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    STRATEGIC PARTNERSHIPS · UAE
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]">
                  In Collaboration with <br />
                  <span className="text-[#c39967]">
                    {COLLABORATION_META.partnerName}
                  </span>
                </h1>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                  {COLLABORATION_META.intro}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans shadow-sm"
                  >
                    <span>View Development Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={COLLABORATION_META.profilePdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02] backdrop-blur-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>Download Profile (PDF)</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Portfolio Specification Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={24} delay={100}>
                <div className="rounded-2xl border border-white/15 bg-[#0b0f17]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      PORTFOLIO SPECIFICATION
                    </span>
                    <span className="text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2 py-0.5 rounded border border-[#c39967]/30">
                      UAE Mainland
                    </span>
                  </div>

                  <dl className="divide-y divide-white/10 text-xs">
                    <div className="py-2.5 flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
                        Completed Assets
                      </dt>
                      <dd className="font-mono text-xs sm:text-sm font-bold text-white">
                        06 Landmarks
                      </dd>
                    </div>

                    <div className="py-2.5 flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
                        Flagship Elevation
                      </dt>
                      <dd className="font-mono text-xs sm:text-sm font-bold text-[#c39967]">
                        44 Storeys (Al Khan)
                      </dd>
                    </div>

                    <div className="py-2.5 flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
                        Asset Sectors
                      </dt>
                      <dd className="text-right text-xs font-medium text-slate-200">
                        Residential, Retail &amp; Villas
                      </dd>
                    </div>

                    <div className="py-2.5 flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
                        Key Districts
                      </dt>
                      <dd className="text-right text-xs font-medium text-slate-200">
                        Al Khan, Al Majaz, Al Taawun, Al Rifaah
                      </dd>
                    </div>

                    <div className="pt-2.5 flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
                        Corporate Office
                      </dt>
                      <dd className="text-right text-xs font-medium text-slate-200">
                        Business Bay, Dubai, UAE
                      </dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. EDITORIAL MANDATE & COLLABORATION OVERVIEW
         ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#ffffff] text-[#111827] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Heading Column */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  OUR COLLABORATION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
                Construction Excellence &amp; Strategic Visibility
              </h2>

              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                A documented portfolio of residential and commercial real estate
                assets delivered across Sharjah, United Arab Emirates.
              </p>
            </div>

            {/* Right Two-Column Editorial Split */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="border-t-2 border-[#c39967] pt-4 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#c39967] block">
                  01 · MANDATE
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight leading-snug">
                  Institutional Presentation
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                  {COLLABORATION_META.collaborationScope}
                </p>
              </div>

              <div className="border-t-2 border-slate-200 pt-4 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                  02 · EXECUTION
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight leading-snug">
                  Structural &amp; Functional Standards
                </h3>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                  The featured developments encompass diverse residential and
                  commercial specifications, demonstrating structural planning,
                  space utilisation, and practical functionality across Sharjah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FILTERABLE 6-PROJECT SHOWCASE GRID
         ======================================================== */}
      <PartnersPortfolioGrid />

      {/* ========================================================
          4. BUILDING LASTING VALUE CTA
         ======================================================== */}
      <section className="relative py-14 sm:py-20 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 sm:opacity-30 hero-zoom-bg">
          <Image
            src="/images/services/CTA.webp"
            alt="Dubai and Sharjah Real Estate Collaboration"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/95 via-[#07090e]/80 to-[#07090e] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-[#c39967]/10 blur-[160px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="relative rounded-2xl bg-[#0b0f17]/85 backdrop-blur-xl border border-white/15 p-6 sm:p-9 lg:p-11 shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/70 to-transparent" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                    <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                      BUILDING LASTING VALUE
                    </span>
                  </div>

                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Explore Strategic Partnerships &amp; Development Opportunities
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                    {COLLABORATION_META.closingStatement}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-end gap-3">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all duration-200 font-sans shadow-lg shadow-[#c39967]/15 whitespace-nowrap"
                  >
                    <span>CONNECT WITH OUR DESK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={COLLABORATION_META.profilePdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#c39967] transition-colors py-1 font-sans"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>Download Full PDF Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}