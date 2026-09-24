// src/components/home/ServicesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  KanbanSquare,
  Megaphone,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  const [activePractice, setActivePractice] = useState("service-01");
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      icon: KanbanSquare,
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
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      icon: Megaphone,
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
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      icon: TrendingUp,
    },
  ];

  // Dynamic RAF Scroll Engine: Computes exact sub-pixel depth, scale recession & darkening
  useEffect(() => {
    let animationFrameId: number;

    const handleScrollPhysics = () => {
      const windowHeight = window.innerHeight;
      const topOffset = 110; // Aligns with sticky top-28

      cardRefs.forEach((ref, index) => {
        const el = ref.current;
        if (!el) return;

        const nextRef = cardRefs[index + 1]?.current;
        const rect = el.getBoundingClientRect();

        // Calculate active indicator
        if (rect.top <= topOffset + 100 && rect.bottom >= topOffset + 100) {
          setActivePractice(pillars[index].id);
        }

        // If there's a subsequent card, calculate continuous overlap physics
        if (nextRef) {
          const nextRect = nextRef.getBoundingClientRect();
          // Overlap progress (0 = next card just touches bottom, 1 = next card covers this card)
          const progress = Math.max(
            0,
            Math.min(1, (windowHeight - nextRect.top) / (windowHeight - topOffset))
          );

          if (progress > 0) {
            const scale = 1 - progress * 0.06; // Scales from 1.0 down to 0.94
            const translateY = -progress * 24; // Elevates backwards by 24px
            const brightness = 1 - progress * 0.28; // Dims down softly under shadow
            const blur = progress * 2; // Subtle depth of field

            el.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            el.style.filter = `brightness(${brightness}) blur(${blur}px)`;
          } else {
            el.style.transform = "translate3d(0, 0, 0) scale(1)";
            el.style.filter = "none";
          }
        }
      });

      animationFrameId = requestAnimationFrame(handleScrollPhysics);
    };

    animationFrameId = requestAnimationFrame(handleScrollPhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#ffffff] text-[#111827] pb-32 lg:pb-48"
    >
      {/* 1. Header Overview & Floating Precision Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#c39967]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c39967] font-mono">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
              Three Core Services. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
                Uncompromising Execution.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4b5563] max-w-lg leading-relaxed font-normal">
            BricketX Project Management L.L.C brings structure to complexity. Browse our three dedicated practices below to explore how we protect capital, elevate visibility, and drive operational performance.
          </p>
        </div>

        {/* Floating Switcher Rail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-10">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activePractice === p.id;

            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-[#c39967] bg-[#faf8f5] shadow-sm ring-1 ring-[#c39967]/30"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#c39967] text-white shadow-md shadow-[#c39967]/30"
                        : "bg-[#c39967]/10 text-[#c39967] group-hover:bg-[#c39967] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                      Practice {p.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold block transition-colors ${
                        isActive ? "text-[#111827]" : "text-[#4b5563] group-hover:text-[#111827]"
                      }`}
                    >
                      {p.title}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 transition-all ${
                    isActive
                      ? "text-[#c39967] translate-x-0.5 -translate-y-0.5"
                      : "text-slate-300 group-hover:text-[#c39967]"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Real-Time Fold Stacking Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isAlt = index % 2 === 1;

          return (
            <div
              key={pillar.id}
              id={pillar.id}
              ref={cardRefs[index]}
              style={{
                top: "7rem",
                zIndex: 10 + index,
                willChange: "transform, filter",
                transformOrigin: "center top",
              }}
              className="sticky rounded-[32px] border border-slate-200/90 bg-[#ffffff] p-8 sm:p-11 lg:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.12)] scroll-mt-32 transition-[border-color,box-shadow] duration-300"
            >
              {/* Gold Top Hairline Shimmer */}
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-90 shadow-[0_0_12px_rgba(195,153,103,0.5)]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Visual Imagery Canvas */}
                <div
                  className={`lg:col-span-6 relative ${
                    isAlt ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-950 group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${pillar.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/95 via-[#0b0f17]/25 to-transparent" />

                    {/* Top Pill Tag */}
                    <div className="absolute top-5 left-5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest shadow-lg">
                        <Icon className="w-3.5 h-3.5 text-[#c39967]" />
                        <span>Pillar {pillar.number}</span>
                      </div>
                    </div>

                    {/* Bottom KPI Deck */}
                    <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-[#0b0f17]/90 backdrop-blur-md border border-white/10 text-white shadow-xl flex items-center justify-between">
                      <div>
                        <div className="text-2xl sm:text-3xl font-black font-mono text-[#c39967]">
                          {pillar.metricVal}
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5">
                          {pillar.metricLabel}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#c39967]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative & Specification Deck */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isAlt ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block mb-1.5">
                      {pillar.eyebrow}
                    </span>

                    <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111827] tracking-tight leading-[1.2]">
                      {pillar.h2}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  {/* Specializations Badges */}
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5 font-mono">
                      Core Specializations &amp; Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8f9fb] border border-slate-200/90 text-xs font-medium text-[#1e293b] hover:border-[#c39967]/50 hover:bg-white transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link
                      href={pillar.link}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] hover:shadow-lg hover:shadow-[#c39967]/25 transition-all shadow-md group whitespace-nowrap self-start sm:self-auto font-sans font-bold"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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