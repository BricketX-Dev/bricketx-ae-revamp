// src/components/why-us/WhyUsComparison.tsx
"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUsComparison() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const comparisons = [
    {
      domain: "Vendor Accountability",
      usualProblem:
        "Separate tech agencies, billboard brokers, and consultants operate in isolation. When delivery schedules slip, cross-vendor finger-pointing starts.",
      bricketxSolution:
        "One multidisciplinary practice assumes total end-to-end responsibility for every deliverable, timeline, and launch date.",
    },
    {
      domain: "Budget Control & Billing",
      usualProblem:
        "Open-ended monthly retainers and vague hourly timesheets slowly deplete budgets with zero performance guarantees or verified assets.",
      bricketxSolution:
        "Capital disbursements are bound strictly to tangible deliverables: live software builds, approved media creative, and secured permits.",
    },
    {
      domain: "Stewardship & Governance",
      usualProblem:
        "Senior executives sell the proposal, but day-to-day coordination is delegated to junior coordinators unfamiliar with UAE commercial operations.",
      bricketxSolution:
        "Your project is directed by senior management who lead milestone reviews, eliminate bottlenecks, and ensure institutional execution.",
    },
    {
      domain: "Regulatory Approvals",
      usualProblem:
        "Municipal media permits and compliance certifications are treated as an afterthought, causing costly launch stalls right before campaign dates.",
      bricketxSolution:
        "Regulatory compliance, licensing approvals, and permit lead times are integrated into the project schedule from day one.",
    },
  ];

  return (
    <section id="comparison" className="py-16 sm:py-28 bg-[#07090e] text-white border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[600px] h-[200px] sm:h-[350px] bg-[#c39967]/[0.035] blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-8 sm:mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                EXECUTIVE BENCHMARK MATRIX
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              Typical Multi-Agency Fragility vs. <br className="hidden sm:inline" />
              <span className="text-[#c39967]">BricketX Single-Vendor Precision</span>
            </h3>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              How fragmented procurement introduces risk into Dubai campaigns—and how our structured delivery model neutralizes it.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Rows */}
        <div className="space-y-3.5 sm:space-y-4">
          {comparisons.map((item, idx) => {
            const isHovered = activeRow === idx;

            return (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 60}>
                <div
                  onMouseEnter={() => setActiveRow(idx)}
                  onMouseLeave={() => setActiveRow(null)}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-300 p-4 sm:p-7 ${
                    isHovered
                      ? "bg-[#0d121c] border-[#c39967]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:translate-x-1"
                      : "bg-[#090d14] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
                    
                    <div className="lg:col-span-3">
                      <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-0.5 sm:mb-1">
                        Domain 0{idx + 1}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.domain}
                      </h4>
                    </div>

                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 pt-1 lg:pt-0">
                      
                      {/* Usual Problem */}
                      <div className="border-l-2 border-white/15 pl-3.5 sm:pl-4 py-1">
                        <div className="flex items-center gap-1.5 mb-1 sm:mb-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                          <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                            THE FRAGMENTED MODEL
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {item.usualProblem}
                        </p>
                      </div>

                      {/* BricketX Solution */}
                      <div
                        className={`border-l-2 border-[#c39967] pl-3.5 sm:pl-4 py-2 sm:py-2.5 rounded-r-xl transition-colors duration-300 ${
                          isHovered ? "bg-[#c39967]/10" : "bg-white/[0.03]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 sm:mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                          <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[#c39967] font-bold">
                            THE BRICKETX STANDARD
                          </span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-white leading-relaxed font-medium">
                          {item.bricketxSolution}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}