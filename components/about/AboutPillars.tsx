// src/components/about/AboutPillars.tsx
"use client";

import { KanbanSquare, Megaphone, TrendingUp, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPillars() {
  const practices = [
    {
      num: "01",
      title: "Digital Project Management",
      icon: KanbanSquare,
      summary:
        "End-to-end execution of complex technology architectures, web platforms, and digital products with disciplined scope control.",
      capabilities: [
        "Milestone & Timeline Governance",
        "Quality Assurance & Release Management",
        "Technical Resource Allocation",
        "Post-Launch SLA Maintenance",
      ],
    },
    {
      num: "02",
      title: "Strategic Advertising & Media",
      icon: Megaphone,
      summary:
        "High-visibility media acquisition across primary UAE highway concessions, digital funnels, and programmatic growth engines.",
      capabilities: [
        "Billboard & High-Impact OOH",
        "Performance Acquisition (PPC / SEO)",
        "Regional Multi-Channel Distribution",
        "Conversion Funnel Architecture",
      ],
    },
    {
      num: "03",
      title: "Business Consultancy",
      icon: TrendingUp,
      summary:
        "Objective operational diagnostics, corporate workflow streamlining, and change management tailored to UAE commercial decree standards.",
      capabilities: [
        "Operating Model Optimization",
        "Commercial Feasibility & Advisory",
        "Process Re-engineering",
        "Leadership Task-Force Governance",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#ffffff] text-[#111827] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={24}>
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
              Operational Synergy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              The Three-Pillar <span className="text-[#c39967]">Delivery Model</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              Most enterprises lose margin and velocity managing disjointed agencies, consultants, and tech vendors. BricketX merges execution, media, and advisory under one accountable team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.num} direction="up" distance={30} delay={idx * 120}>
                <div className="p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-[#fbfcfd] hover:border-[#c39967]/70 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-lg bg-[#c39967]/10 flex items-center justify-center text-[#c39967]">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {p.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111827] mb-2 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#4b5563] leading-relaxed mb-6 font-normal">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Execution Scope:
                    </span>
                    {p.capabilities.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
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