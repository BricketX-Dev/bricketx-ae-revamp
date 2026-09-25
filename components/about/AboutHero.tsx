// src/components/about/AboutHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutHero() {
  const credentials = [
    { label: "Jurisdiction", val: "Dubai Mainland (DET / DED)" },
    { label: "Operating Hub", val: "Business Bay, Dubai, UAE" },
    { label: "Service Model", val: "Single-Vendor Accountability" },
    { label: "Coverage", val: "All 7 Emirates & GCC Corridors" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center bg-[#07090e] text-white border-b border-white/10 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Header, Core Thesis & Action
             ======================================================== */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <ScrollReveal direction="up" distance={16}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  Institutional Profile
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                Disciplined Governance. <br />
                <span className="text-[#c39967]">Measurable Regional Impact.</span>
              </h1>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                BricketX Project Management L.L.C is a premier Dubai-based holding firm integrating digital project management, strategic advertising concessions, and corporate growth consultancy across the UAE.
              </p>

              {/* Metric Quick Stats */}
              <div className="pt-3 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-md border-t border-white/10">
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">100%</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">Milestone SLA</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">1 MSA</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">Prime Contractor</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-base sm:text-lg font-mono font-bold text-[#c39967]">7 / 7</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">Emirates Scope</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                >
                  <span>Request Corporate Prospectus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans"
                >
                  <span>Explore Practices</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Compact Visual + Statutory Registry Card
             ======================================================== */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <ScrollReveal direction="left" distance={20} delay={100}>
              
              {/* Grounded Corporate Imagery */}
              <div className="relative aspect-[16/9] lg:aspect-[21/10] rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
                  alt="Dubai Financial & Corporate District"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/90 via-[#07090e]/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-xs border border-white/15 text-slate-200 font-mono text-[10px]">
                    <Building2 className="w-3 h-3 text-[#c39967]" />
                    <span>Business Bay, Dubai Mainland</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-white/80 font-mono text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Active Entity</span>
                  </div>
                </div>
              </div>

              {/* Compact Statutory Credentials List */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0b0f17] border border-white/10">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c39967] font-bold">
                    Statutory Registry
                  </span>
                  <span className="text-[9.5px] font-mono text-slate-400">
                    Gov Code: UAE-DET-DXB
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  {credentials.map((c, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium">{c.label}</span>
                      <span className="text-white font-mono text-[11px] truncate font-semibold">
                        {c.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}