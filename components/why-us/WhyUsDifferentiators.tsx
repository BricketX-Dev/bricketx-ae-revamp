// src/components/why-us/WhyUsDifferentiators.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUsDifferentiators() {
  const differentiators = [
    {
      code: "01",
      tag: "SINGLE-SOURCE EXECUTION",
      title: "Complete Ecosystem Alignment",
      text: "Most UAE enterprises split accountability between a digital agency, outdoor media brokers, and strategy consultants. We consolidate all three disciplines into one cohesive roadmap so milestones never slip between vendors.",
      icon: "/images/icons/why-us/differentiators/ecosystem.png",
    },
    {
      code: "02",
      tag: "CAPITAL PROTECTION",
      title: "Deliverables-Gated Budgeting",
      text: "Retainer bleed and speculative billing have no place in disciplined operations. Client funds are protected by milestone payment gates—next stages only initiate once previous deliverables pass quality inspection.",
      icon: "/images/icons/why-us/differentiators/budget.png",
    },
    {
      code: "03",
      tag: "EXECUTIVE DIRECTORS",
      title: "Direct Access to Decision Makers",
      text: "Engagements are led directly by managing partners with extensive GCC commercial and technical experience. No intermediary layers or junior message-relaying—you get senior-level strategic velocity.",
      icon: "/images/icons/why-us/differentiators/leadership.png",
    },
    {
      code: "04",
      tag: "LOCAL JURISDICTION",
      title: "Mainland Licensed & Compliant",
      text: "Operating out of Business Bay, we are a fully licensed Dubai mainland company. From RTA billboard permits to commercial registrations, we navigate UAE regulatory channels swiftly and compliantly.",
      icon: "/images/icons/why-us/differentiators/licensed.png",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-8 sm:mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                STRATEGIC VALUE PROPOSITION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              4 Pillars of the BricketX Difference
            </h2>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              How single-vendor management transforms performance and capital efficiency compared to coordinating fragmented agencies across Dubai.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {differentiators.map((d, idx) => (
            <ScrollReveal key={d.code} direction="up" distance={24} delay={idx * 80}>
              <div className="group p-5 sm:p-8 rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_12px_32px_rgba(195,153,103,0.1)]">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={d.icon}
                        alt={d.title}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#c39967] transition-colors">
                      {d.code}
                    </span>
                  </div>

                  <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-1 sm:mb-1.5 font-bold">
                    {d.tag}
                  </span>

                  <h3 className="text-base sm:text-xl font-bold text-[#111827] mb-2 sm:mb-2.5 leading-snug group-hover:text-[#c39967] transition-colors">
                    {d.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-normal">
                    {d.text}
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