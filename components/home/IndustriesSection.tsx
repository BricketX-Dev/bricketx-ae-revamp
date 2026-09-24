// src/components/home/IndustriesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Building2,
  Cpu,
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Landmark,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

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
      title: "Construction & Real Estate",
      desc: "Capital project coordination, developer marketing roadmaps, and milestone governance for UAE prime properties.",
      icon: Building2,
      tags: ["Off-Plan Launches", "Milestone Tracking", "OOH Billboards"],
    },
    {
      title: "Technology & E-commerce",
      desc: "Full-lifecycle digital platform delivery, performance marketing, and conversion architecture for tech ventures.",
      icon: Cpu,
      tags: ["Digital Transformation", "Performance PPC", "Platform Delivery"],
    },
    {
      title: "Healthcare & Education",
      desc: "Institutional workflow optimization, healthcare marketing compliance, and facility management planning.",
      icon: HeartPulse,
      tags: ["Operational Review", "Brand Positioning", "Regulatory Compliance"],
    },
    {
      title: "Hospitality & F&B",
      desc: "Concept rollout management, guest acquisition strategies, and multi-location operational streamlining.",
      icon: UtensilsCrossed,
      tags: ["Brand Activations", "Location Expansion", "Digital Campaigns"],
    },
    {
      title: "Retail & Manufacturing",
      desc: "Omnichannel inventory workflows, consumer advertising campaigns, and operational supply chain alignment.",
      icon: ShoppingBag,
      tags: ["Supply Optimization", "Omnichannel Growth", "Brand Visibility"],
    },
    {
      title: "Professional Services & Logistics",
      desc: "B2B lead generation, fleet and distribution workflow advisory, and corporate transformation roadmaps.",
      icon: Truck,
      tags: ["Process Engineering", "Corporate Branding", "B2B Growth"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-24 lg:py-32 bg-[#f8f9fb] border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Ingress Reveal */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] shadow-[0_0_8px_#c39967]" />
              <span className="text-[10.5px] font-bold tracking-[0.25em] uppercase text-[#c39967] font-mono">
                Sectors &amp; Expertise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Tailored Solutions Across <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
                Key UAE Economic Sectors
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748b] max-w-md leading-relaxed font-normal">
            Supporting businesses across Dubai and the Emirates with sector-specific operational models, regulatory insight, and measurable growth frameworks.
          </p>
        </div>

        {/* 6 Core Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const delayStyle = { transitionDelay: `${i * 75}ms` };

            return (
              <div
                key={i}
                style={delayStyle}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-[#c39967]/70 hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 shadow-xs overflow-hidden transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Top Gold Hover Hairline */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Sector Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-white group-hover:shadow-[0_0_16px_rgba(195,153,103,0.4)] group-hover:scale-105 transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#c39967] transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-lg font-bold text-[#111827] mb-2.5 group-hover:text-[#c39967] transition-colors leading-snug">
                    {ind.title}
                  </h3>

                  {/* Sector Description */}
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
                    {ind.desc}
                  </p>
                </div>

                {/* Specific Capability Pills */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-[#475569] bg-slate-100/90 group-hover:bg-[#c39967]/10 group-hover:text-[#a87d4a] px-2.5 py-1 rounded-md transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Institutional Banner */}
        <div
          className={`mt-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0b0f17] via-[#121622] to-[#0b0f17] border border-white/10 p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Ambient Gold Glow Halo */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c39967]/15 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#c39967]/20 border border-[#c39967]/40 flex items-center justify-center text-[#c39967] shadow-lg flex-shrink-0">
                <Landmark className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#c39967] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Specialized Institutional Engagements</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Startups, Corporate Enterprises &amp; Government Support Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                  We configure bespoke cross-functional task forces capable of managing high-compliance public sector initiatives, rapid-scaling venture frameworks, and enterprise reorganization.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#d6b48a] hover:shadow-[0_0_25px_rgba(195,153,103,0.35)] transition-all duration-200 cursor-pointer whitespace-nowrap self-start lg:self-center font-sans group shadow-lg"
            >
              <span>Consult On Your Industry</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}