// src/components/about/AboutHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutHero() {
  const registryFields = [
    { field: "LEGAL NAME", value: "BricketX Project Management L.L.C" },
    { field: "JURISDICTION", value: "Dubai Mainland (DET)" },
    { field: "HEAD OFFICE", value: "Business Bay, Dubai, UAE" },
    { field: "SERVICE MODEL", value: "Single-Vendor Accountability" },
  ];

  return (
    <section className="relative h-[100dvh] min-h-[720px] max-h-[960px] flex items-center bg-[#07090e] text-white border-b border-white/10 pt-20 pb-8 sm:pt-24 sm:pb-10 lg:py-0 overflow-hidden">
      {/* Ambient background depth flare */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#c39967]/[0.045] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#c39967]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Proportional Header, Stats & Actions
             ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <ScrollReveal direction="up" distance={18}>
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  BRICKETX UAE
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight text-white leading-[1.14]">
                About BricketX UAE. <br />
                <span className="text-[#c39967]">
                  One Partner for Projects, Brands &amp; Growth.
                </span>
              </h1>

              {/* Body with Added Bottom Spacing */}
              <p className="mt-4 mb-6 sm:mb-8 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal max-w-xl">
                BricketX Project Management L.L.C is a Dubai-based company delivering project management, advertising and business consultancy services across the UAE. One accountable team takes your initiatives from strategy to results.
              </p>

              {/* 3 Balanced Stat Tiles */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mb-6 sm:mb-7">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967]/40 transition-colors">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">
                    3 Pillars
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Projects, Advertising &amp; Consultancy
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967]/40 transition-colors">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">
                    1 Team
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Single Point of Accountability
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967]/40 transition-colors">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">
                    End-to-End
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Strategy to Post-Delivery
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/company-profile.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-[0_4px_16px_rgba(195,153,103,0.25)] hover:shadow-[0_6px_20px_rgba(195,153,103,0.35)]"
                >
                  <span>DOWNLOAD COMPANY PROFILE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02]"
                >
                  <span>EXPLORE OUR SERVICES</span>
                </Link>
              </div>

            </ScrollReveal>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Scaled Institutional Corporate Dossier
             ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center">
            <ScrollReveal direction="left" distance={24} delay={150}>
              <div className="rounded-2xl border border-white/15 bg-[#0b0f17] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                
                {/* Visual Chamber */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                  <Image
                    src="/images/about/about-hero.webp" // Update path manually in /public
                    alt="BricketX UAE office location in Business Bay, Dubai"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between gap-2 text-xs">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-slate-200 font-mono text-[10.5px]">
                      <Building2 className="w-3.5 h-3.5 text-[#c39967]" />
                      <span>Business Bay, Dubai Mainland</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-emerald-400 font-mono text-[10.5px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Licensed Entity</span>
                    </div>
                  </div>
                </div>

                {/* Statutory Registry Deck */}
                <div className="p-5 sm:p-6 border-t border-white/10 bg-[#080c14]">
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                      <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#c39967] font-bold">
                        COMPANY REGISTRY
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      Licence No. Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                    {registryFields.map((item, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-medium">
                          {item.field}
                        </span>
                        <span className="text-white font-medium text-xs sm:text-[13px] block leading-snug">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}