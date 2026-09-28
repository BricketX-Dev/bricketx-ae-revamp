// src/components/why-us/WhyUsHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUsHero() {
  const governanceChecklist = [
    {
      title: "Single Master Contract",
      detail: "PM, outdoor media concessions, and advisory unified under UAE mainland commercial law.",
      icon: "/images/icons/why-us/governance/contract.png",
    },
    {
      title: "Milestone Payment Gates",
      detail: "Capital is released exclusively upon verified deliverables and formal stakeholder sign-offs.",
      icon: "/images/icons/why-us/governance/milestones.png",
    },
    {
      title: "Direct Partner Stewardship",
      detail: "Senior leadership actively chairs reviews and critical-path alignments with zero hand-offs.",
      icon: "/images/icons/why-us/governance/stewardship.png",
    },
  ];

  return (
    <section className="relative pt-28 pb-14 sm:pt-40 sm:pb-24 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
      {/* Partnership Image Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 sm:opacity-35 hero-zoom-bg">
        <Image
          src="/images/why-us/hero.webp"
          alt="Dubai Executive Business Partnership"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Multi-Stop Obsidian Scrim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/92 via-[#07090e]/75 to-[#07090e] pointer-events-none" />

      {/* Ambient Gold Radial Glows */}
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
                  WHY BRICKETX UAE
                </span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.14]">
                Why Choose BricketX? <br />
                <span className="text-[#c39967]">
                  Single-Vendor Accountability.
                </span>
              </h1>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                In the UAE’s high-velocity commercial landscape, coordinating separate vendors introduces margin loss and communication breakdown. BricketX unifies project management, advertising, and corporate advisory under one accountable agreement.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all font-sans shadow-sm"
                >
                  <span>TALK TO OUR DIRECTORS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/how-we-work"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white active:scale-[0.98] transition-colors font-sans bg-white/[0.02] backdrop-blur-xs"
                >
                  <span>EXPLORE OUR METHODOLOGY</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Governance Standard Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" distance={24} delay={120}>
              <div className="rounded-2xl border border-white/15 bg-[#0b0f17]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                
                {/* Header with Prominent Badge Icon */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/icons/why-us/governance/badge.png"
                        alt="Governance Badge"
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      GOVERNANCE STANDARD
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2.5 py-1 rounded border border-[#c39967]/30 font-semibold">
                    Dubai Mainland
                  </span>
                </div>

                {/* Checklist with Generous Icon Vessels */}
                <div className="space-y-3.5">
                  {governanceChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#c39967]/40 hover:bg-white/[0.05] transition-all duration-200"
                    >
                      {/* Scaled Icon Vessel */}
                      <div className="w-10 h-10 rounded-xl bg-[#faf6f0]/10 border border-[#c39967]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/20 group-hover:scale-105 transition-all">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={22}
                          height={22}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white group-hover:text-[#c39967] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Bar */}
                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Communication Channel
                  </span>
                  <span className="text-[#c39967] font-semibold">Business Bay, Dubai</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}