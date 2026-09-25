// src/components/about/AboutGovernance.tsx
"use client";

import { ShieldCheck, Target, Network, Scale } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutGovernance() {
  const standards = [
    {
      title: "Direct Executive Governance",
      desc: "Managing partners remain actively involved in weekly steering committees—no junior hand-offs or diluted communication lines.",
      icon: Network,
    },
    {
      title: "Critical-Path Accountability",
      desc: "Every initiative operates on clear critical paths with defined SLA gates, transparent burn-downs, and objective milestones.",
      icon: Target,
    },
    {
      title: "Mainland Statutory Compliance",
      desc: "Strict adherence to Dubai Economy and Tourism (DET) operational codes, UAE labor laws, and municipal OOH advertising decrees.",
      icon: Scale,
    },
    {
      title: "Capital Protection Mandate",
      desc: "Zero speculative scope creep. We engineer projects around practical budgets, milestone-based payments, and verified deliverables.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#07090e] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
              Institutional Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              Governance Built for <span className="text-[#c39967]">Risk Mitigation</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Operating in Dubai’s fast-moving enterprise market demands structure. Our delivery standards prioritize regulatory precision and commercial clarity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 90}>
                <div className="p-6 rounded-xl bg-[#0f141f] border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] mb-5">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {s.desc}
                    </p>
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