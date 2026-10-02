// src/components/home/ServicesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// Declared outside component to guarantee reference stability
const PILLARS = [
  {
    id: "service-01",
    number: "01",
    eyebrow: "01 · PROJECT MANAGEMENT",
    title: "Project Management",
    h2: "Project Management Services in Dubai, Delivered End-to-End",
    desc: "BricketX is a project management company in Dubai that takes your digital initiatives from plan to launch. We define scope, manage timelines and resources, and keep every stakeholder aligned, so your project is delivered on time, on budget and to standard.",
    tags: [
      "Digital Project Management",
      "Product Development",
      "Technology Project Planning",
      "Project Execution & Delivery",
      "Quality Assurance",
      "Support & Maintenance",
    ],
    link: "/services/project-management",
    linkText: "EXPLORE PROJECT MANAGEMENT",
    statLine: "From discovery to post-launch support, one accountable team.",
    metricVal: "100%",
    metricLabel: "Milestone Delivery SLA",
    image: "/images/services/project-management.webp",
    icon: "/images/icons/services/project-management.png",
  },
  {
    id: "service-02",
    number: "02",
    eyebrow: "02 · ADVERTISING",
    title: "Advertising",
    h2: "Advertising Agency in Dubai for Brands That Want to Be Seen",
    desc: "From billboards on Sheikh Zayed Road to Google Ads and social media campaigns, BricketX connects your brand with the right audience across the UAE. We plan, create and manage campaigns that build visibility and turn attention into real leads.",
    tags: [
      "Billboard Advertising",
      "Outdoor Advertising (OOH)",
      "Digital Marketing",
      "Social Media Marketing",
      "Google Ads",
      "SEO Services",
      "Branding & Creative Design",
      "Lead Generation",
    ],
    link: "/services/advertising",
    linkText: "EXPLORE ADVERTISING SERVICES",
    statLine: "Outdoor, digital and creative, managed by one team.",
    metricVal: "3.2M+",
    metricLabel: "Targeted UAE Impressions",
    image: "/images/services/advertising.webp",
    icon: "/images/icons/services/advertising.png",
  },
  {
    id: "service-03",
    number: "03",
    eyebrow: "03 · BUSINESS CONSULTANCY",
    title: "Business Consultancy",
    h2: "Business Consultancy in Dubai for Smarter, Faster Growth",
    desc: "Our business consultants in Dubai work alongside owners and leadership teams to find what's holding growth back. We analyse your operations, sharpen your strategy and streamline processes, giving you a clear, practical roadmap to improve performance and scale with confidence.",
    tags: [
      "Business Strategy",
      "Operations Consulting",
      "Process Optimization",
      "Business Analysis",
      "Digital Transformation",
      "Change Management",
      "Growth Advisory",
    ],
    link: "/services/business-consultancy",
    linkText: "EXPLORE BUSINESS CONSULTANCY",
    statLine: "Clear strategy. Leaner operations. Measurable growth.",
    metricVal: "35%+",
    metricLabel: "Operational Efficiency Gain",
    image: "/images/services/consulting.webp",
    icon: "/images/icons/services/consulting.png",
  },
];

export default function ServicesSection() {
  const [activePractice, setActivePractice] = useState("service-01");
  const stackContainerRef = useRef<HTMLDivElement | null>(null);

  const cardRef0 = useRef<HTMLDivElement | null>(null);
  const cardRef1 = useRef<HTMLDivElement | null>(null);
  const cardRef2 = useRef<HTMLDivElement | null>(null);
  const cardRefs = [cardRef0, cardRef1, cardRef2];

  // Tab Click Handler with accurate scroll calculation
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, index: number, targetId: string) => {
    e.preventDefault();
    setActivePractice(targetId);

    const el = cardRefs[index].current;
    if (!el) return;

    const isMobile = window.innerWidth < 640;
    const navAndTabsOffset = isMobile ? 120 : 170;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navAndTabsOffset,
      behavior: "smooth",
    });
  };

  // Active Tab Spy with stable constant dependency array
  useEffect(() => {
    const handleObserver = () => {
      const isMobile = window.innerWidth < 640;
      const targetThreshold = isMobile ? 180 : 240;

      cardRefs.forEach((ref, index) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top <= targetThreshold && rect.bottom >= targetThreshold) {
          setActivePractice(PILLARS[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleObserver, { passive: true });
    return () => window.removeEventListener("scroll", handleObserver);
  }, []);

  return (
    <section className="relative bg-[#ffffff] text-[#111827] pb-12 sm:pb-16 lg:pb-24">

      {/* 1. Header Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4 sm:pt-14 sm:pb-6 lg:pt-18 lg:pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.15]">
              Three Core Services. <br />
              <span className="text-[#c39967]">Uncompromising Execution.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4b5563] max-w-lg leading-relaxed font-normal">
            BricketX Project Management L.L.C brings structure to complexity. Browse our three dedicated practices below to explore how we protect capital, elevate visibility, and drive operational performance.
          </p>
        </div>
      </div>

      {/* 2. STICKY TAB CONTROLS */}
      <div className="sticky top-14 sm:top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-y border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-6 sm:mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex sm:grid sm:grid-cols-3 gap-2 sm:gap-3.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none touch-pan-x">
            {PILLARS.map((p, idx) => {
              const isActive = activePractice === p.id;

              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={(e) => handleTabClick(e, idx, p.id)}
                  className={`group flex items-center justify-between p-2 sm:p-3 rounded-xl border transition-all text-left flex-shrink-0 min-w-[210px] sm:min-w-0 cursor-pointer ${
                    isActive
                      ? "border-[#c39967] bg-[#faf8f5] shadow-xs"
                      : "border-slate-200/90 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                        isActive
                          ? "bg-[#07090e] border border-[#07090e] shadow-sm"
                          : "bg-slate-100/80 border border-slate-200/80 group-hover:bg-[#c39967]/10 group-hover:border-[#c39967]/30"
                      }`}
                    >
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={24}
                        height={24}
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[8.5px] sm:text-[9.5px] font-mono text-slate-400 block uppercase font-medium">
                        Practice {p.number}
                      </span>
                      <span
                        className={`text-[11.5px] sm:text-[13px] font-bold block truncate transition-colors ${
                          isActive ? "text-[#111827]" : "text-[#334155] group-hover:text-[#111827]"
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform ${
                      isActive
                        ? "text-[#c39967] translate-x-0.5 -translate-y-0.5"
                        : "text-slate-300 group-hover:text-[#c39967]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. STICKY STACKING CARDS */}
      <div 
        ref={stackContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10"
      >
        {PILLARS.map((pillar, index) => {
          const isAlt = index % 2 === 1;

          return (
            <div
              key={pillar.id}
              ref={cardRefs[index]}
              style={{
                top: `calc(5rem + ${index * 12}px)`,
                zIndex: index + 1,
              }}
              className="sticky rounded-xl sm:rounded-2xl border border-slate-200/90 bg-[#ffffff] p-5 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">

                {/* Visual Imagery Canvas */}
                <div
                  className={`lg:col-span-5 relative ${
                    isAlt ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 bg-slate-900 flex flex-col">
                    <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-slate-950">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />

                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-[#07090e]/85 text-white text-[9.5px] sm:text-[10.5px] font-mono uppercase tracking-wider backdrop-blur-xs border border-white/10">
                          <Image
                            src={pillar.icon}
                            alt={pillar.title}
                            width={16}
                            height={16}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                          />
                          <span>Pillar {pillar.number}</span>
                        </span>
                      </div>
                    </div>

                    {/* Grounded Metric Footer */}
                    <div className="p-3 sm:p-3.5 bg-[#0b0f17] text-white flex items-center justify-between border-t border-white/10">
                      <div>
                        <div className="text-lg sm:text-xl font-bold font-mono text-[#c39967]">
                          {pillar.metricVal}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-300">
                          {pillar.metricLabel}
                        </div>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c39967]">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative & Specification Deck */}
                <div
                  className={`lg:col-span-7 space-y-3 sm:space-y-4 ${
                    isAlt ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#c39967] uppercase block mb-1">
                      {pillar.eyebrow}
                    </span>

                    <Link href={pillar.link} className="group/heading block">
                      <h3 className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-[#111827] group-hover/heading:text-[#c39967] transition-colors tracking-tight leading-[1.25]">
                        {pillar.h2}
                      </h3>
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  {/* Specializations Badges */}
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 sm:mb-2 font-medium">
                      Core Specializations &amp; Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#f8f9fb] border border-slate-200 text-[10px] sm:text-[11px] font-medium text-[#1e293b]"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#c39967] flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={pillar.link}
                      className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-colors whitespace-nowrap font-sans active:scale-[0.98]"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#64748b] font-medium leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] flex-shrink-0" />
                      <span>{pillar.statLine}</span>
                    </div>

                    <Link
                      href={pillar.link}
                      className="sm:hidden inline-flex items-center gap-1 text-[11px] font-semibold text-[#c39967] hover:underline uppercase tracking-wider font-sans ml-auto"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}