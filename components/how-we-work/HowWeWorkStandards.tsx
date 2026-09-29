// src/components/how-we-work/HowWeWorkStandards.tsx
"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkStandards() {
  const standards = [
    {
      title: "Approval at Every Stage",
      desc: "No phase starts until you've approved the one before it. Your budget is only spent on work you've already signed off.",
      icon: "/images/icons/how-we-work/standards/approval.png", // Update path manually in /public
    },
    {
      title: "Clear Planning, Early Warnings",
      desc: "Every task is mapped with its dependencies. If something gets stuck, we flag it early and act on a backup plan right away.",
      icon: "/images/icons/how-we-work/standards/planning.png", // Update path manually in /public
    },
    {
      title: "One Accountable Team",
      desc: "BricketX is your single point of contact. No juggling multiple agencies, and no one passing blame when things go wrong.",
      icon: "/images/icons/how-we-work/standards/team.png", // Update path manually in /public
    },
    {
      title: "Licensed & Compliant in the UAE",
      desc: "As a licensed Dubai mainland company, we work within UAE business regulations and follow required permit processes for advertising.",
      icon: "/images/icons/how-we-work/standards/compliance.png", // Update path manually in /public
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#f8f9fb] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-8 sm:mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                OUR STANDARDS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              4 Standards Behind Every Engagement
            </h3>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              How we keep budgets under control and progress transparent, from the first milestone to the last.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {standards.map((s, idx) => (
            <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 70}>
              <div className="group p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_8px_24px_rgba(195,153,103,0.1)]">
                <div>
                  {/* Scaled Custom Icon Capsule */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2 mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-[#c39967]/10 transition-all duration-300 flex-shrink-0">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  
                  <span className="text-[8.5px] sm:text-[9.5px] font-mono font-bold text-slate-400 block mb-1">
                    CARD {idx + 1}
                  </span>

                  <h4 className="text-xs sm:text-base font-bold text-[#111827] mb-1.5 sm:mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {s.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#4b5563] leading-relaxed font-normal">
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