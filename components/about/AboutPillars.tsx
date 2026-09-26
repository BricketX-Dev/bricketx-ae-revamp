// src/components/about/AboutPillars.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPillars() {
  const practices = [
    {
      num: "01",
      code: "PRJ-MGT",
      title: "Project Management",
      icon: "/images/icons/services/project-management.png",
      href: "/services/project-management",
      buttonText: "Explore Practice",
      summary:
        "End-to-end management of digital initiatives, software platforms, and technology infrastructure delivered with disciplined scope control.",
      deliverables: [
        "Critical-path scheduling & risk mitigation",
        "Technical QA governance & acceptance testing",
        "Cross-functional developer & vendor coordination",
        "Post-launch SLA stability & maintenance",
      ],
    },
    {
      num: "02",
      code: "ADV-OOH",
      title: "Advertising & Media",
      icon: "/images/icons/services/advertising.png",
      href: "/services/advertising",
      buttonText: "Explore Practice",
      summary:
        "High-visibility highway billboard concessions on Sheikh Zayed Road paired with high-intent digital acquisition funnels across the GCC.",
      deliverables: [
        "Highway unipoles, bridge banners & transit media",
        "RTA & Dubai Municipality permit governance",
        "High-conversion Google Ads & paid search funnels",
        "Bilingual Arabic & English creative direction",
      ],
    },
    {
      num: "03",
      code: "BUS-CON",
      title: "Business Consultancy",
      icon: "/images/icons/services/consulting.png",
      href: "/services/business-consultancy",
      buttonText: "Explore Practice",
      summary:
        "Operational diagnostics, standard operating procedure blueprints, and restructuring advisory designed to remove cost leaks and scale operations.",
      deliverables: [
        "Operational bottleneck & workflow mapping",
        "Standard Operating Procedure (SOP) blueprints",
        "Unit economics & commercial feasibility studies",
        "Executive change management & KPI scorecards",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fafbfc] text-[#0f172a] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967]">
                  Operational Framework
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090d16] tracking-tight leading-[1.12]">
                The Three-Pillar <br />
                <span className="text-[#c39967]">Delivery Model</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
              Most enterprises lose capital juggling disjointed agencies, consultants, and contractors. BricketX unifies delivery under single-vendor legal accountability in Dubai.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((p, idx) => (
            <ScrollReveal key={p.num} direction="up" distance={24} delay={idx * 100}>
              <div className="group relative bg-[#ffffff] border border-slate-200/90 rounded-xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                
                {/* Structural Accent Top-Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#c39967] transition-colors duration-300 rounded-t-xl" />

                <div>
                  {/* Top Technical Header */}
                  <div className="flex items-start justify-between pb-6 mb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-lg bg-[#07090e] border border-black/10 flex items-center justify-center p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <div className="text-right">
                      <span className="block font-mono text-[10.5px] font-semibold text-[#c39967] tracking-wider uppercase">
                        // {p.code}
                      </span>
                      <span className="block font-mono text-[22px] font-extrabold text-slate-200 group-hover:text-slate-300 transition-colors leading-none mt-1">
                        {p.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Editorial Description */}
                  <h3 className="text-xl font-bold text-[#090d16] tracking-tight mb-2.5">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-8">
                    {p.summary}
                  </p>

                  {/* Structured Deliverables Specification */}
                  <div className="space-y-0 border-t border-slate-100 mb-8">
                    <div className="py-2.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">
                        Operational Scope:
                      </span>
                    </div>
                    {p.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="py-2.5 border-t border-slate-100/80 flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug group/item"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                        <span className="group-hover/item:text-[#090d16] transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Refined Institutional Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#090d16] hover:text-[#c39967] transition-colors py-1 group/btn"
                  >
                    <span>{p.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c39967] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>

                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    UAE Mandate
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}