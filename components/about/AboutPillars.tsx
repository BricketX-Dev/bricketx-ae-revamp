// src/components/about/AboutPillars.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPillars() {
  const practices = [
    {
      num: "01",
      category: "Technology & Digital",
      title: "Digital Project Management",
      icon: "/images/icons/services/project-management.png",
      href: "/services/project-management",
      summary:
        "Full project governance for web platforms, custom software, and enterprise systems, delivered on milestone schedules with clear deliverables.",
      deliverables: [
        "Milestone scheduling & sprint governance",
        "Technical quality assurance & user testing",
        "Developer, vendor, and partner coordination",
        "Post-launch SLA stability & team handoff",
      ],
    },
    {
      num: "02",
      category: "Outdoor & Media",
      title: "Advertising & Media",
      icon: "/images/icons/services/advertising.png",
      href: "/services/advertising",
      summary:
        "Prime outdoor billboard locations across Sheikh Zayed Road paired with targeted digital campaigns to reach high-value audiences across the UAE.",
      deliverables: [
        "Sheikh Zayed Road unipoles, bridges & transit spots",
        "RTA and Dubai Municipality permit handling",
        "Search, paid acquisition, and performance marketing",
        "Bilingual Arabic and English creative design",
      ],
    },
    {
      num: "03",
      category: "Corporate Advisory",
      title: "Business Consultancy",
      icon: "/images/icons/services/consulting.png",
      href: "/services/business-consultancy",
      summary:
        "Practical business advice and operating blueprints that help businesses streamline their teams, cut waste, and enter the UAE commercial market.",
      deliverables: [
        "Workflow mapping & operational audits",
        "Standard operating procedure (SOP) manuals",
        "Unit economics and financial feasibility",
        "Executive KPI scorecards and team alignment",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fafbfc] text-[#0f172a] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  Core Capabilities
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090d16] tracking-tight leading-[1.12]">
                Our Three Core <br />
                <span className="text-[#c39967]">Practices in Dubai</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
              Most businesses waste time and budget coordinating separate vendors. BricketX delivers project governance, media placements, and business advisory under one accountable agreement.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((p, idx) => (
            <ScrollReveal key={p.num} direction="up" distance={24} delay={idx * 90}>
              <div className="group relative bg-[#ffffff] border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#c39967]/60 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
                
                {/* Structural Accent Top-Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#c39967] transition-colors duration-300 rounded-t-2xl" />

                <div>
                  {/* Top Card Header */}
                  <div className="flex items-start justify-between pb-5 mb-5 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-[#090d16] border border-black/10 flex items-center justify-center p-2.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <div className="text-right">
                      <span className="block text-[11px] font-semibold text-[#c39967] tracking-wider uppercase">
                        {p.category}
                      </span>
                      <span className="block font-mono text-xl font-bold text-slate-300 group-hover:text-slate-400 transition-colors leading-none mt-1">
                        {p.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#090d16] tracking-tight mb-2 group-hover:text-[#c39967] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                    {p.summary}
                  </p>

                  {/* Core Inclusions Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables:
                    </span>
                    {p.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#c39967]/10 flex items-center justify-center text-[#c39967] flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#090d16] group-hover:text-[#c39967] transition-colors"
                  >
                    <span>View Practice Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c39967] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="text-[10.5px] font-mono text-slate-400">
                    Dubai, UAE
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