// src/components/how-we-work/HowWeWorkProcess.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkProcess() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    {
      step: "01",
      label: "PHASE 01 · DISCOVERY",
      title: "Discovery & Feasibility Review",
      desc: "Every engagement starts with understanding your business. We review your goals, budget, team and any permits or regulations that apply, then agree on clear milestones before any money is committed.",
      timeline: "Typically 1–2 weeks",
      icon: "/images/icons/how-we-work/phases/discovery.png", // Update path manually in /public
      deliverables: [
        "Project Brief & Scope Document",
        "Permit & Regulation Checklist",
        "Risk Assessment",
        "Budget Estimate",
      ],
    },
    {
      step: "02",
      label: "PHASE 02 · PLANNING",
      title: "Planning & Resource Allocation",
      desc: "We turn the brief into a working plan: sprint schedules for digital projects, media plans and permits for advertising campaigns, or an improvement roadmap for consultancy work.",
      timeline: "Approved plan & scope sign-off",
      icon: "/images/icons/how-we-work/phases/planning.png", // Update path manually in /public
      deliverables: [
        "Project Timeline & Milestones",
        "Media Plan & Permit Applications",
        "Team & Resource Plan",
        "Signed Milestone Agreement",
      ],
    },
    {
      step: "03",
      label: "PHASE 03 · EXECUTION",
      title: "Delivery & Coordination",
      desc: "Our team manages the work day to day, coordinating developers, vendors, media partners and your stakeholders, with regular updates so you always know where things stand.",
      timeline: "Milestone-based progress",
      icon: "/images/icons/how-we-work/phases/execution.png", // Update path manually in /public
      deliverables: [
        "Regular Progress Reports",
        "Live Progress Dashboard",
        "Testing & Quality Checks",
        "One Point of Contact for Issues",
      ],
    },
    {
      step: "04",
      label: "PHASE 04 · HANDOVER & SUPPORT",
      title: "Launch, Training & Ongoing Support",
      desc: "Delivery doesn't end at launch. We verify everything works, train your team, report on campaign results and offer ongoing support to keep things running smoothly.",
      timeline: "Post-launch support available",
      icon: "/images/icons/how-we-work/phases/support.png", // Update path manually in /public
      deliverables: [
        "Complete Handover Documentation",
        "Team Training & SOPs",
        "Campaign Results Report",
        "Ongoing Support Plan",
      ],
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-28 bg-[#07090e] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[600px] h-[200px] sm:h-[350px] bg-[#c39967]/[0.035] blur-[100px] sm:blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-10 sm:mb-16">
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                STEP-BY-STEP PROCESS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              Our 4-Step Working Process
            </h3>
          </div>
        </ScrollReveal>

        {/* Connected Chronological Pipeline */}
        <div className="relative pl-0 md:pl-10 space-y-5 sm:space-y-7">
          {/* Guide Stem */}
          <div className="hidden md:block absolute left-4 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#c39967] via-[#c39967]/30 to-white/10" />

          {phases.map((p, idx) => {
            const isHovered = hoveredPhase === idx;

            return (
              <ScrollReveal key={p.step} direction="up" distance={20} delay={idx * 60}>
                <div
                  onMouseEnter={() => setHoveredPhase(idx)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  className={`group relative rounded-xl sm:rounded-2xl border transition-all duration-300 p-5 sm:p-8 lg:p-10 ${
                    isHovered
                      ? "bg-[#0d121c] border-[#c39967]/70 shadow-[0_12px_40px_rgba(0,0,0,0.6)] md:translate-x-1"
                      : "bg-[#090d14] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Step Node indicator on desktop */}
                  <div
                    className={`hidden md:flex absolute -left-10 top-10 w-7 h-7 rounded-full items-center justify-center border font-mono text-[10px] font-bold transition-all duration-300 ${
                      isHovered
                        ? "bg-[#c39967] border-[#c39967] text-[#07090e] scale-110 shadow-[0_0_15px_rgba(195,153,103,0.5)]"
                        : "bg-[#07090e] border-white/20 text-slate-400"
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Summary & Narrative */}
                    <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3.5">
                        {/* Custom Icon Vessel */}
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center p-2 transition-all duration-300 flex-shrink-0 ${
                            isHovered
                              ? "bg-[#c39967]/20 border-[#c39967] scale-105"
                              : "bg-white/[0.04] border-white/10 group-hover:border-[#c39967]/40"
                          }`}
                        >
                          <Image
                            src={p.icon}
                            alt={p.title}
                            width={24}
                            height={24}
                            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                          />
                        </div>

                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block">
                            {p.label}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            Stage 0{p.step}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-base sm:text-xl font-bold text-white pt-1 leading-snug group-hover:text-[#c39967] transition-colors">
                        {p.title}
                      </h4>

                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                        {p.desc}
                      </p>

                      <div className="pt-1.5 sm:pt-2 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#c39967]" />
                        <span className="text-[10px] sm:text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                          Timeline:
                        </span>
                        <span className="text-xs font-semibold text-white font-mono">
                          {p.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Right: Deliverables Manifest Deck */}
                    <div
                      className={`lg:col-span-5 p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
                        isHovered
                          ? "bg-black/60 border-[#c39967]/40 shadow-inner"
                          : "bg-black/30 border-white/10"
                      }`}
                    >
                      <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-2.5 sm:mb-3 font-bold">
                        WHAT YOU RECEIVE:
                      </span>
                      
                      <div className="space-y-2 sm:space-y-2.5">
                        {p.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs font-medium text-slate-200 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
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