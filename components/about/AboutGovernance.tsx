// src/components/about/AboutGovernance.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutGovernance() {
  const standards = [
    {
      code: "01",
      title: "Senior Leadership, Directly Involved",
      desc: "Our leadership stays hands-on in every engagement through regular progress reviews. No junior hand-offs, no lost messages, just direct access to decision-makers.",
      icon: "/images/icons/governance/leadership.png", // Update path manually in /public
    },
    {
      code: "02",
      title: "Clear Milestones, Full Visibility",
      desc: "Every project runs on a defined plan with clear milestones, regular updates and measurable progress, so you always know exactly where things stand.",
      icon: "/images/icons/governance/milestones.png", // Update path manually in /public
    },
    {
      code: "03",
      title: "Licensed & Compliant in the UAE",
      desc: "BricketX is a licensed Dubai mainland company. We work within UAE business regulations and follow the required permit processes for outdoor advertising.",
      icon: "/images/icons/governance/compliance.png", // Update path manually in /public
    },
    {
      code: "04",
      title: "Budget Discipline, No Surprises",
      desc: "We plan every project around a realistic budget, milestone-based payments and agreed deliverables, so scope stays controlled and costs stay predictable.",
      icon: "/images/icons/governance/budget.png", // Update path manually in /public
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#07090e] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c39967]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                WHY BRICKETX UAE
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              Built on Accountability, <span className="text-[#c39967]">Trusted in Dubai</span>
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Businesses in Dubai move fast, and they need a partner who delivers with structure and transparency. Here is why companies across the UAE choose BricketX.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {standards.map((s, idx) => (
            <ScrollReveal key={s.code} direction="up" distance={24} delay={idx * 80}>
              <div className="group p-6 sm:p-7 rounded-2xl bg-[#0f141f] border border-white/10 hover:border-[#c39967]/50 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <div>
                  {/* Top Bar: Icon Vessel + Monospace Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#c39967]/40 group-hover:scale-105 transition-all">
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

                  <h4 className="text-sm sm:text-[15px] font-bold text-white mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
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