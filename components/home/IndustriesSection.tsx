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
      className="py-14 lg:py-20 bg-[#f8f9fb] border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block mb-2">
              Sectors &amp; Expertise
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              Tailored Solutions Across{" "}
              <span className="text-[#c39967]">Key UAE Economic Sectors</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748b] max-w-md leading-relaxed font-normal">
            Supporting businesses across Dubai and the Emirates with sector-specific operational models, regulatory insight, and measurable growth frameworks.
          </p>
        </div>

        {/* 6 Clean Editorial Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const delay = i * 70;

            return (
              <div
                key={i}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group flex flex-col justify-between p-6 rounded-xl border border-slate-200/90 bg-white hover:border-[#c39967]/60 transition-all duration-300 shadow-2xs transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div>
                  {/* Top: Icon & Numeric Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#c39967]/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#c39967] transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed mb-6 font-normal">
                    {ind.desc}
                  </p>
                </div>

                {/* Capability Tags */}
                <div className="pt-3.5 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
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
          className={`mt-8 rounded-2xl bg-[#090d14] border border-white/10 p-6 sm:p-8 text-white relative transition-all duration-700 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
                <Landmark className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c39967] block">
                  Specialized Institutional Engagements
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Startups, Corporate Enterprises &amp; Government Support Projects
                </h3>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed font-normal">
                  We configure bespoke cross-functional task forces capable of managing high-compliance public sector initiatives, rapid-scaling venture frameworks, and enterprise reorganization.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors cursor-pointer whitespace-nowrap self-start lg:self-center font-sans"
            >
              <span>Consult On Your Industry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}