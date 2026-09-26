// src/components/home/ProcessSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Compass, Workflow, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discovery & Consultation",
      tagline: "Phase 1: Alignment",
      icon: Search,
      desc: "We begin by learning about your objectives, challenges, target audience, and operational requirements to recommend the best strategy.",
      deliverable: "Strategic Brief & Feasibility",
    },
    {
      num: "02",
      title: "Strategy & Planning",
      tagline: "Phase 2: Blueprint",
      icon: Compass,
      desc: "We develop a structured roadmap outlining timelines, responsibilities, deliverables, and key milestones before execution begins.",
      deliverable: "Work Breakdown & Milestones",
    },
    {
      num: "03",
      title: "Execution & Management",
      tagline: "Phase 3: Delivery",
      icon: Workflow,
      desc: "Our specialists coordinate every stage of the project while maintaining clear communication and monitoring quality standards.",
      deliverable: "Live Dashboard & QA Review",
    },
    {
      num: "04",
      title: "Review & Support",
      tagline: "Phase 4: Governance",
      icon: CheckCircle2,
      desc: "After successful delivery, we review outcomes, gather feedback, and provide ongoing support to build long-term partnerships.",
      deliverable: "Final Audit & Handover SLA",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-12 sm:py-14 lg:py-20 bg-[#07090e] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className={`max-w-2xl mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block mb-2">
            Execution Methodology
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
            A Structured Process That Keeps{" "}
            <span className="text-[#c39967]">Every Project on Track</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            From initial concept through rigorous execution and post-launch governance—our structured framework guarantees transparency and predictability.
          </p>
        </div>

        {/* 
          Process Pipeline:
          - data-lenis-prevent: stops Lenis smooth scroll from blocking X-axis touch swiping
          - touch-pan-x: tells mobile browsers to register horizontal drags immediately
          - overscroll-x-contain: isolates horizontal scroll within this component
        */}
        <div
          data-lenis-prevent="true"
          className="w-full flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-none touch-pan-x overscroll-x-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const delay = idx * 90;

            return (
              <div
                key={idx}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group flex-shrink-0 w-[82vw] xs:w-[75vw] sm:w-[320px] md:w-auto snap-center flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#0f131c] border border-white/10 hover:border-white/20 transition-all duration-300 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div>
                  {/* Top Bar: Icon Capsule & Monospace Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#07090e] transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xl font-bold font-mono text-slate-500 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                    {step.tagline}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#c39967] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Key Deliverable */}
                <div className="pt-3.5 border-t border-white/10">
                  <span className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Right margin buffer so the last card snaps cleanly */}
          <div className="w-2 flex-shrink-0 md:hidden pointer-events-none" />
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex items-center justify-center gap-1.5 mt-3 md:hidden">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            Swipe cards horizontally →
          </span>
        </div>

      </div>
    </section>
  );
}