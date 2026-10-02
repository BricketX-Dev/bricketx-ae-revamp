// src/components/home/ProcessSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProcessSection() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01",
      phase: "PHASE 1: DISCOVER",
      title: "Discovery & Consultation",
      desc: "We learn about your goals, challenges, audience and budget, then recommend the right approach for your business.",
      deliverable: "Project Brief & Feasibility",
      icon: "/images/icons/process/discovery.png",
    },
    {
      num: "02",
      phase: "PHASE 2: PLAN",
      title: "Strategy & Planning",
      desc: "We build a clear roadmap with timelines, responsibilities, deliverables and milestones, agreed with you before any work begins.",
      deliverable: "Roadmap & Milestone Plan",
      icon: "/images/icons/process/planning.png",
    },
    {
      num: "03",
      phase: "PHASE 3: DELIVER",
      title: "Execution & Management",
      desc: "Our team manages every stage day to day, with regular updates, quality checks and one point of contact throughout.",
      deliverable: "Progress Reports & Quality Checks",
      icon: "/images/icons/process/execution.png",
    },
    {
      num: "04",
      phase: "PHASE 4: SUPPORT",
      title: "Review & Ongoing Support",
      desc: "After delivery, we review the results with you, hand over everything your team needs and stay on hand for ongoing support.",
      deliverable: "Results Review & Handover",
      icon: "/images/icons/process/support.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-14 sm:py-20 lg:py-24 bg-[#07090e] text-white border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className={`max-w-2xl mb-8 sm:mb-12 lg:mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967]">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
            A Clear Process That Keeps{" "}
            <span className="text-[#c39967]">Every Project on Track</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            From the first conversation to post-launch support, every project, campaign and consultancy engagement follows the same four steps, so you always know what&apos;s happening and what comes next.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden -mt-3 mb-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>← Swipe phases</span>
          <span className="text-[#c39967]">01 / 04</span>
        </div>

        {/* Responsive Grid / Mobile Swipe Carousel */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none">
          {steps.map((step, idx) => {
            const delay = idx * 60;

            return (
              <div
                key={step.num}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group flex flex-col justify-between h-full p-5 sm:p-6 rounded-xl bg-[#0f131c] border border-white/10 hover:border-[#c39967]/50 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(195,153,103,0.1)] w-[82vw] xs:w-[78vw] sm:w-auto flex-shrink-0 sm:flex-shrink snap-start sm:snap-align-none ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div>
                  {/* Top Bar: Icon Capsule & Monospace Number */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:bg-[#c39967]/20 group-hover:border-[#c39967]/50 group-hover:scale-105 transition-all flex-shrink-0">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    <span className="text-xl font-bold font-mono text-slate-500 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                    {step.num} · {step.phase}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5 sm:mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Key Output Footer */}
                <div className="pt-3.5 border-t border-white/10">
                  <span className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Key Output
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contextual CTA Link */}
        <div className="mt-8 sm:mt-12 flex justify-start sm:justify-end">
          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#c39967] transition-colors font-mono"
          >
            <span>See How We Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#c39967]" />
          </Link>
        </div>

      </div>
    </section>
  );
}