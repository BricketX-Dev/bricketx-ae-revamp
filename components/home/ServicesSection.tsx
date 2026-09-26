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

export default function ServicesSection() {
  const [activePractice, setActivePractice] = useState("service-01");
  const stackContainerRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const pillars = [
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
      image: "/images/services/project-management.webp", // Update path manually in /public
      icon: "/images/icons/services/project-management.png", // Update path manually in /public
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
      image: "/images/services/advertising.webp", // Update path manually in /public
      icon: "/images/icons/services/advertising.png", // Update path manually in /public
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
      image: "/images/services/consulting.webp", // Update path manually in /public
      icon: "/images/icons/services/consulting.png", // Update path manually in /public
    },
  ];

  // 1. Instant Button Click Handler
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, index: number, targetId: string) => {
    e.preventDefault();
    setActivePractice(targetId);

    if (!stackContainerRef.current) return;
    
    // Determine the baseline top of the entire section
    const containerTop = stackContainerRef.current.getBoundingClientRect().top + window.scrollY;
    const gap = window.innerWidth >= 640 ? 48 : 40; // matches sm:space-y-12 vs space-y-10
    
    // Sum up the untransformed heights of preceding cards to find exact target
    let targetScroll = containerTop;
    for (let i = 0; i < index; i++) {
      const el = cardRefs[i].current;
      if (el) {
        targetScroll += el.offsetHeight + gap;
      }
    }

    // The sticky offset where the card docks on the screen (160px = top-[10rem])
    const stickyOffset = 160; 

    window.scrollTo({
      top: targetScroll - stickyOffset + 2, // +2px buffer ensures scroll spy trips active state
      behavior: "auto", // Instant sudden snap
    });
  };

  // 2. Mathematical Scroll Physics Engine (Immune to CSS transform distortions)
  useEffect(() => {
    let animationFrameId: number;

    const handleScrollPhysics = () => {
      if (!stackContainerRef.current) {
        animationFrameId = requestAnimationFrame(handleScrollPhysics);
        return;
      }

      const windowHeight = window.innerHeight;
      const containerTop = stackContainerRef.current.getBoundingClientRect().top;
      const gap = window.innerWidth >= 640 ? 48 : 40;
      const stickyOffset = 160; // top-[10rem]

      let currentNativeTop = containerTop;

      cardRefs.forEach((ref, index) => {
        const el = ref.current;
        if (!el) return;

        const cardHeight = el.offsetHeight;
        const nativeTop = currentNativeTop;
        const nativeBottom = nativeTop + cardHeight + gap; 

        // Update Active Practice Indicator Tab
        if (nativeTop <= stickyOffset + 50 && nativeBottom > stickyOffset + 50) {
          setActivePractice(pillars[index].id);
        }

        // Compute Visual Overlap Shrink/Darken Physics
        if (index < pillars.length - 1) {
          const nextNativeTop = currentNativeTop + cardHeight + gap;
          const overlapDistance = windowHeight - nextNativeTop;
          const maxOverlap = windowHeight - stickyOffset;
          
          const progress = Math.max(0, Math.min(1, overlapDistance / maxOverlap));

          if (progress > 0) {
            const scale = 1 - progress * 0.04;
            const translateY = -progress * 16;
            const brightness = 1 - progress * 0.18;

            el.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            el.style.filter = `brightness(${brightness})`;
          } else {
            el.style.transform = "translate3d(0, 0, 0) scale(1)";
            el.style.filter = "none";
          }
        }

        currentNativeTop += cardHeight + gap;
      });

      animationFrameId = requestAnimationFrame(handleScrollPhysics);
    };

    animationFrameId = requestAnimationFrame(handleScrollPhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative bg-[#ffffff] text-[#111827] pb-16 lg:pb-20">
      
      {/* 1. Header Overview & Precision Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 lg:pt-16 lg:pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.12]">
              Three Core Services. <br />
              <span className="text-[#c39967]">Uncompromising Execution.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4b5563] max-w-lg leading-relaxed font-normal">
            BricketX Project Management L.L.C brings structure to complexity. Browse our three dedicated practices below to explore how we protect capital, elevate visibility, and drive operational performance.
          </p>
        </div>
      </div>

      {/* ========================================================
          STICKY TAB CONTROLS (Always visible, clean white glass)
         ======================================================== */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md py-3 border-y border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {pillars.map((p, idx) => {
              const isActive = activePractice === p.id;

              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={(e) => handleTabClick(e, idx, p.id)}
                  className={`group flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all text-left flex-shrink-0 min-w-[240px] sm:min-w-0 ${
                    isActive
                      ? "border-[#c39967] bg-[#faf8f5] shadow-xs"
                      : "border-slate-200/90 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
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
                        className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[9.5px] font-mono text-slate-400 block uppercase font-medium">
                        Practice {p.number}
                      </span>
                      <span
                        className={`text-xs sm:text-[13px] font-bold block truncate transition-colors ${
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

      {/* ========================================================
          INTERACTIVE FOLD STACKING STAGE (Cards)
         ======================================================== */}
      <div 
        ref={stackContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 pb-[20vh]"
      >
        {pillars.map((pillar, index) => {
          const isAlt = index % 2 === 1;

          return (
            <div
              key={pillar.id}
              ref={cardRefs[index]}
              style={{
                top: "10rem", // 160px: Locks cleanly underneath the sticky tabs above
                zIndex: 10 + index,
                willChange: "transform, filter",
                transformOrigin: "center top",
              }}
              className="sticky rounded-2xl border border-slate-200 bg-[#ffffff] p-6 sm:p-8 lg:p-10 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                {/* Visual Imagery Canvas */}
                <div
                  className={`lg:col-span-5 relative ${
                    isAlt ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      />
                      
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#07090e]/85 text-white text-[10.5px] font-mono uppercase tracking-wider backdrop-blur-xs border border-white/10">
                          <Image
                            src={pillar.icon}
                            alt={pillar.title}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain"
                          />
                          <span>Pillar {pillar.number}</span>
                        </span>
                      </div>
                    </div>

                    {/* Grounded Metric Footer */}
                    <div className="p-3.5 bg-[#0b0f17] text-white flex items-center justify-between border-t border-white/10">
                      <div>
                        <div className="text-xl font-bold font-mono text-[#c39967]">
                          {pillar.metricVal}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          {pillar.metricLabel}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#c39967]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative & Specification Deck */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isAlt ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#c39967] uppercase block mb-1">
                      {pillar.eyebrow}
                    </span>

                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#111827] tracking-tight leading-[1.25]">
                      {pillar.h2}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  {/* Specializations Badges */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Core Specializations &amp; Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f8f9fb] border border-slate-200 text-[11px] font-medium text-[#1e293b]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#c39967] flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <Link
                      href={pillar.link}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-colors whitespace-nowrap self-start sm:self-auto font-sans"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2 text-xs text-[#64748b] font-medium leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] flex-shrink-0" />
                      <span>{pillar.statLine}</span>
                    </div>
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