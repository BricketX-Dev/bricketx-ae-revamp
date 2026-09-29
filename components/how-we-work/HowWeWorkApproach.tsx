// src/components/how-we-work/HowWeWorkApproach.tsx
"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, ArrowRight, Award } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkApproach() {
  const commitments = [
    {
      title: "Deliverables-Gated Financing",
      desc: "Capital is only released for milestones you inspect, test, and formally approve.",
    },
    {
      title: "Single Master Contract",
      desc: "Technology engineering, outdoor media, and strategy unified under one accountable agreement.",
    },
    {
      title: "Direct Partner Stewardship",
      desc: "Senior directors actively guide critical paths and sprint governance with zero hand-offs.",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#ffffff] border-b border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative & Commitments */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal direction="left" distance={20}>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  OUR APPROACH
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                From First Brief to <br className="hidden sm:inline" />
                <span className="text-[#c39967]">Lasting Results</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                No guesswork and no open-ended timelines. Every engagement follows a clear four-step process, and each payment is linked to a milestone you can see and approve, so budget and progress always move together.
              </p>

              {/* Structured Commitments Checklist */}
              <div className="pt-2 space-y-3">
                {commitments.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#f8f9fb] border border-slate-200/80 hover:border-[#c39967]/50 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#64748b] leading-relaxed mt-0.5 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footnote Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#faf8f5] border border-[#c39967]/30 text-xs font-semibold text-[#111827]">
                  <span className="w-2 h-2 rounded-full bg-[#c39967]" />
                  <span>Milestone-based progress · 100% Transparent Billing</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual Composition with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" distance={20} delay={100}>
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-slate-900 group">
                <Image
                  src="/images/how-we-work/approach.webp"
                  alt="BricketX Dubai Team Execution and Strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Contrast Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                
                {/* Top-Left Regulatory Pin */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-[9.5px] sm:text-[10px] font-mono text-slate-200 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Meydan FZ · Dubai, UAE</span>
                  </span>
                </div>

                {/* Bottom-Left Licensed Overlay */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-white/15 text-[10px] sm:text-[10.5px] font-mono text-[#c39967] backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>Commercial Licence No. 2540036.01</span>
                  </span>
                </div>
              </div>

              {/* Floating Bottom-Right Performance Chip (Desktop only) */}
              <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-white rounded-xl shadow-lg border border-slate-200/90 p-3 items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                  <Award className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">Zero Speculative Billing</div>
                  <div className="text-[10px] text-[#64748b] font-mono">100% Sign-Off Delivery</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}