// src/components/how-we-work/HowWeWorkStandards.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkStandards() {
  const standards = [
    {
      index: "01",
      tag: "MILESTONE GOVERNANCE",
      title: "Approval at Every Stage",
      desc: "No phase commences until you have formally approved the preceding milestone. Budgets are released strictly for verified progress.",
      icon: "/images/icons/how-we-work/standards/approval.png",
    },
    {
      index: "02",
      tag: "DEPENDENCY CONTROL",
      title: "Clear Planning, Early Warnings",
      desc: "Critical dependencies and deliverables are mapped upfront. If a blocker emerges, we flag it immediately and execute an agreed mitigation plan.",
      icon: "/images/icons/how-we-work/standards/planning.png",
    },
    {
      index: "03",
      tag: "SINGLE ACCOUNTABILITY",
      title: "One Accountable Team",
      desc: "BricketX serves as your direct point of contact across digital, outdoor media, and strategy—eliminating blame-shifting between fragmented vendors.",
      icon: "/images/icons/how-we-work/standards/team.png",
    },
    {
      index: "04",
      tag: "DUBAI REGULATORY",
      title: "Licensed & Regulated in Dubai",
      desc: "Operating as an official Dubai LLC-FZ entity, we comply with UAE commercial guidelines and manage required municipal permits for campaigns.",
      icon: "/images/icons/how-we-work/standards/compliance.png",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                CORE STANDARDS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              Standards Behind Every Engagement
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              How we protect your commercial capital, eliminate scope drift, and ensure transparent governance from kickoff to final sign-off.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Professional Executive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {standards.map((s, idx) => (
            <ScrollReveal key={s.index} direction="up" distance={20} delay={idx * 60}>
              <div className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#c39967]/75 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_12px_32px_rgba(195,153,103,0.12)]">
                <div>
                  {/* Top Bar: Icon Vessel + Technical Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2.5 group-hover:scale-105 group-hover:bg-[#c39967]/15 transition-all duration-300 flex-shrink-0 shadow-xs">
                      <Image
                        src={s.icon}
                        alt={s.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    
                    <div className="text-right">
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#c39967] block">
                        {s.tag}
                      </span>
                      <span className="font-mono text-lg font-extrabold text-slate-300 group-hover:text-slate-900 transition-colors leading-none mt-1 block">
                        {s.index}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {s.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Footer Verification Tag */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Verified Standard</span>
                  <span className="text-[#c39967] font-semibold">Active SLA</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}