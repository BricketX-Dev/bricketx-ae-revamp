// src/components/how-we-work/HowWeWorkHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Workflow, FileCheck2, Clock, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkHero() {
  return (
    <section className="relative pt-28 pb-14 sm:pt-40 sm:pb-24 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
      {/* Background Skyline Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 sm:opacity-35 hero-zoom-bg">
        <Image
          src="/images/how-we-work/hero.webp"
          alt="Dubai Commercial Towers Architectural Angle"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft Multi-Stop Gradient Scrim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/92 via-[#07090e]/70 to-[#07090e] pointer-events-none" />

      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[600px] h-[200px] sm:h-[350px] bg-[#c39967]/[0.06] blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[200px] sm:h-[300px] bg-[#c39967]/[0.03] blur-[100px] sm:blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <ScrollReveal direction="up" distance={20}>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  HOW WE WORK
                </span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.15]">
                How BricketX Works. <br />
                <span className="text-[#c39967]">
                  Clear Steps, No Surprises.
                </span>
              </h1>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                Every project, advertising campaign and consultancy engagement at BricketX follows the same clear process. From your first call to ongoing support, you know exactly what happens next, who&apos;s responsible and what you&apos;ll receive at every step.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all font-sans shadow-sm"
                >
                  <span>TALK TO OUR TEAM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white active:scale-[0.98] transition-colors font-sans bg-white/[0.02] backdrop-blur-xs"
                >
                  <span>EXPLORE 4-STEP PROCESS</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Execution Protocol Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={24} delay={120}>
              <div className="rounded-2xl border border-white/15 bg-[#0b0f17]/90 backdrop-blur-md p-5 sm:p-7 shadow-2xl relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#c39967]" />
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      EXECUTION PROTOCOL
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2.5 py-0.5 rounded border border-[#c39967]/30">
                    Standard SLA
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <FileCheck2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Milestone Gate Approval</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Budget is allocated strictly to deliverables you inspect and sign off.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Fixed Reporting Schedule</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Structured weekly burndowns eliminate communication gaps.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <Building2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Dubai Mainland Licensing</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Full municipal adherence for physical billboards and commercial agreements.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    100% Critical Path Adherence
                  </span>
                  <span className="text-[#c39967] font-semibold">Port Saeed, Dubai</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}