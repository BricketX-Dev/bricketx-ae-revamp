// src/components/about/AboutGovernance.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutGovernance() {
  const standards = [
    {
      code: "01",
      title: "Senior Leadership, Directly Involved",
      desc: "Our partners stay hands-on through milestone reviews. No junior hand-offs, no lost directives—just direct access to decision-makers.",
      icon: "/images/icons/governance/leadership.png",
    },
    {
      code: "02",
      title: "Clear Milestones, Full Visibility",
      desc: "Every project runs on a critical-path blueprint with gated sign-offs and regular progress reports so deliverables are transparent.",
      icon: "/images/icons/governance/milestones.png",
    },
    {
      code: "03",
      title: "Licensed & Compliant in the UAE",
      desc: "BricketX is a licensed Dubai mainland firm. We navigate municipal advertising permits and local business regulations seamlessly.",
      icon: "/images/icons/governance/compliance.png",
    },
    {
      code: "04",
      title: "Budget Discipline, No Surprises",
      desc: "We structure engagements around realistic budgets and deliverables-linked payments. Scope stays governed and costs stay predictable.",
      icon: "/images/icons/governance/budget.png",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#c39967]/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-10 sm:mb-16">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                INSTITUTIONAL GOVERNANCE
              </span>
            </div>

            <h3 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
              Built on Accountability, <br />
              <span className="text-[#c39967]">Trusted Across Dubai</span>
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Operating in the UAE requires speed and regulatory rigor. We manage projects and campaigns with disciplined milestones and senior-led accountability.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Architectural Standards Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {standards.map((s, idx) => (
            <ScrollReveal key={s.code} direction="up" distance={20} delay={idx * 70}>
              <div className="group relative p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0f141f] to-[#0a0d14] border border-white/10 hover:border-[#c39967]/60 transition-all duration-300 flex flex-col justify-between h-full shadow-lg hover:shadow-[0_8px_24px_rgba(195,153,103,0.12)]">
                <div>
                  {/* Top Bar: Icon Vessel + Monospace Index */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/40 group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-[#c39967] transition-colors">
                      {s.code}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {s.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}