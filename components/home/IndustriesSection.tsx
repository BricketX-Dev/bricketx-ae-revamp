// src/components/home/IndustriesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      code: "01",
      title: "Construction & Real Estate",
      desc: "Capital project coordination, developer marketing roadmaps, and critical-path milestone governance for UAE prime developments.",
      icon: "/images/icons/industries/construction.png",
      deliverables: ["Off-Plan Launches", "Milestone Tracking", "Highway OOH Media"],
    },
    {
      code: "02",
      title: "Technology & E-commerce",
      desc: "Full-lifecycle platform architectures, enterprise product management, and high-yield acquisition funnels across the GCC.",
      icon: "/images/icons/industries/technology.png",
      deliverables: ["Platform Architecture", "Performance Funnels", "Cloud Scaling"],
    },
    {
      code: "03",
      title: "Healthcare & Education",
      desc: "Institutional workflow optimization, DHA/MOH regulatory advertising adherence, and facility operational planning.",
      icon: "/images/icons/industries/healthcare.png",
      deliverables: ["Operational Audits", "MOH Permitting", "Institutional Branding"],
    },
    {
      code: "04",
      title: "Hospitality & F&B",
      desc: "Concept rollout management, landmark media activations, and multi-location operational streamlining in primary tourist corridors.",
      icon: "/images/icons/industries/hospitality.png",
      deliverables: ["Brand Rollouts", "Prime Footfall Media", "Multi-Site Ops"],
    },
    {
      code: "05",
      title: "Retail & Manufacturing",
      desc: "Omnichannel inventory workflows, nationwide brand visibility campaigns, and supply chain governance for regional brands.",
      icon: "/images/icons/industries/retail.png",
      deliverables: ["Supply Chain Alignment", "Omnichannel Reach", "Retail Media"],
    },
    {
      code: "06",
      title: "Professional Services & Logistics",
      desc: "B2B commercial positioning, cross-emirate transport advisory, and corporate restructuring roadmaps for GCC operators.",
      icon: "/images/icons/industries/logistics.png",
      deliverables: ["Process Engineering", "B2B Acquisition", "Corporate Strategy"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-16 sm:py-24 bg-[#f8f9fb] text-[#0f172a] border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-6 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                Sectors &amp; Practice Scope
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.14]">
              Targeted Practice Solutions Across <br />
              <span className="text-[#c39967]">Key UAE Economic Sectors</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] max-w-md leading-relaxed font-normal">
            Every sector in Dubai operates under unique regulatory frameworks and capital cycles. We adapt project governance and media delivery specifically to your vertical.
          </p>
        </div>

        {/* 
          6 Cards:
          - Mobile (<md): Swipeable horizontal carousel with peeking 2nd card (w-[82vw])
          - Desktop (md+): Original static responsive grid
        */}
        <div
          data-lenis-prevent="true"
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-none touch-pan-x overscroll-x-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {industries.map((ind, i) => {
            const delay = i * 60;

            return (
              <div
                key={ind.code}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group relative flex-shrink-0 w-[82vw] sm:w-[84vw] md:w-auto snap-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(195,153,103,0.12)] transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div>
                  {/* Top Bar: Warm Gold Chamfered Vessel + Monospace Code */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/60 group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={ind.icon}
                        alt={ind.title}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#94a3b8] group-hover:text-[#c39967] transition-colors">
                      {ind.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal mb-6">
                    {ind.desc}
                  </p>
                </div>

                {/* Sub-Specializations Footnote */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-medium">
                    Specialized Delivery Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] font-medium text-[#334155] bg-[#f1f5f9] border border-slate-200/60 px-2.5 py-0.5 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Right margin cushion for snap alignment on mobile */}
          <div className="w-2 flex-shrink-0 md:hidden pointer-events-none" />
        </div>

        {/* Featured Institutional Banner (High-Contrast Anchor) */}
        <div
          className={`mt-10 rounded-2xl bg-[#07090e] border border-white/10 p-7 sm:p-10 text-white transition-all duration-700 delay-200 transform shadow-xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-13 h-13 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/icons/industries/institutional.png"
                  alt="Specialized Institutional Engagements"
                  width={30}
                  height={30}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <div className="space-y-1.5 max-w-2xl">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#c39967] block">
                  Public Sector &amp; Enterprise Governance
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Startups, Corporate Holdings &amp; Municipal Engagements
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                  We configure bespoke cross-functional delivery units to steer high-compliance mainland initiatives, regional brand launches, and multi-entity reorganizations.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors whitespace-nowrap self-start lg:self-center font-sans shadow-md"
            >
              <span>Consult On Your Industry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}