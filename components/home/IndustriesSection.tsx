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
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      code: "01",
      title: "Real Estate & Property",
      desc: "Launch campaigns, lead generation and digital platforms for developers and brokerages, from off-plan launches to ongoing sales.",
      icon: "/images/icons/industries/construction.png",
      tags: ["Off-Plan Launch Campaigns", "Real Estate Lead Generation", "Billboard Advertising"],
    },
    {
      code: "02",
      title: "Technology & E-commerce",
      desc: "Product development, platform delivery and performance marketing for tech companies and online brands growing across the UAE.",
      icon: "/images/icons/industries/technology.png",
      tags: ["Product Development", "Performance Marketing", "Platform Delivery"],
    },
    {
      code: "03",
      title: "Healthcare & Education",
      desc: "Digital projects, brand building and operations support for clinics, hospitals, schools and training providers.",
      icon: "/images/icons/industries/healthcare.png",
      tags: ["Process Optimization", "Patient & Student Acquisition", "Brand Identity"],
    },
    {
      code: "04",
      title: "Hospitality & F&B",
      desc: "Brand launches, high-footfall outdoor advertising and multi-location operations support for hotels, restaurants and cafés.",
      icon: "/images/icons/industries/hospitality.png",
      tags: ["Brand Launches", "Outdoor Advertising", "Multi-Location Operations"],
    },
    {
      code: "05",
      title: "Retail & Trading",
      desc: "Omnichannel campaigns, e-commerce projects and smoother operations for retail brands and trading companies.",
      icon: "/images/icons/industries/retail.png",
      tags: ["Omnichannel Marketing", "E-commerce Projects", "Workflow Improvement"],
    },
    {
      code: "06",
      title: "Professional Services",
      desc: "B2B positioning, lead generation and business strategy for consultancies, legal, financial and logistics firms.",
      icon: "/images/icons/industries/logistics.png",
      tags: ["B2B Lead Generation", "Business Strategy", "Process Optimization"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="py-14 sm:py-24 bg-[#f8f9fb] text-[#0f172a] border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                INDUSTRIES WE SERVE
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.14]">
              Tailored Solutions for <br />
              <span className="text-[#c39967]">Key UAE Industries</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] max-w-md leading-relaxed font-normal">
            Every industry in Dubai has its own audience, regulations and pace. We shape our project management, advertising and consultancy around how your sector works.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden -mt-4 mb-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>← Swipe to explore</span>
          <span className="text-[#c39967]">01 / 06</span>
        </div>

        {/* Responsive Container: Equal-Height Cards in Grid & Swipe Carousel */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none items-stretch">
          {industries.map((ind, i) => {
            const delay = i * 40;

            return (
              <div
                key={ind.code}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group relative p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(195,153,103,0.12)] w-[82vw] xs:w-[78vw] min-w-[82vw] xs:min-w-[78vw] max-w-[82vw] xs:max-w-[78vw] sm:w-auto sm:min-w-0 sm:max-w-none flex-shrink-0 sm:flex-shrink snap-start sm:snap-align-none ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Bar: Icon + Monospace Code */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/60 group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={ind.icon}
                        alt={ind.title}
                        width={26}
                        height={26}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#94a3b8] group-hover:text-[#c39967] transition-colors">
                      {ind.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#c39967] transition-colors min-h-[1.75rem]">
                    {ind.title}
                  </h3>

                  {/* Description: Uniform Clamped Baseline */}
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal mb-5 sm:mb-6 line-clamp-3 min-h-[3.75rem]">
                    {ind.desc}
                  </p>
                </div>

                {/* Focus Tags Footnote: Unified Baseline */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100 min-h-[4.75rem] flex flex-col justify-end">
                  <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-medium">
                    Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10.5px] sm:text-[11px] font-medium text-[#334155] bg-[#f1f5f9] border border-slate-200/60 px-2 sm:px-2.5 py-0.5 rounded-md leading-tight"
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

        {/* Featured Institutional Banner: Don't See Your Industry? */}
        <div
          className={`mt-6 sm:mt-10 rounded-xl sm:rounded-2xl bg-[#07090e] border border-white/10 p-5 sm:p-8 lg:p-10 text-white transition-all duration-700 delay-150 shadow-xl relative overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#c39967]/10 blur-[90px] pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-start gap-3.5 sm:gap-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/icons/industries/institutional.png"
                  alt="Specialized Sector Consultation"
                  width={28}
                  height={28}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div className="space-y-1 sm:space-y-1.5 max-w-2xl">
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#c39967] block">
                  DON&apos;T SEE YOUR INDUSTRY?
                </span>
                <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                  From Startups to Established Enterprises
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  Whether you&apos;re launching a new brand, scaling a growing business or improving how a larger organisation runs, our team shapes the right solution for your industry and goals.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all whitespace-nowrap self-start lg:self-center font-sans shadow-md"
            >
              <span>TALK TO US ABOUT YOUR INDUSTRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}