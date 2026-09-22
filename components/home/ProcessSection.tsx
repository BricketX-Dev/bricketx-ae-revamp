// src/components/home/ProcessSection.tsx
import { Search, Compass, Workflow, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessSection() {
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
    <section id="process" className="py-24 lg:py-32 bg-[#080b11] text-white relative overflow-hidden">
      {/* Background Lighting & Subtle Radial Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c39967]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
              Execution Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            A Structured Process That Keeps <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#e2c5a2] to-[#c39967]">
              Every Project on Track
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From initial concept through rigorous execution and post-launch governance—our structured framework guarantees transparency and predictability.
          </p>
        </div>

        {/* 4-Step Connected Pipeline */}
        <div className="relative">
          {/* Visible Glowing Gold Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#c39967]/20 via-[#c39967] to-[#c39967]/20 z-0 shadow-[0_0_10px_#c39967]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#121722] border border-white/15 hover:border-[#c39967] hover:bg-[#161d2b] transition-all duration-300 shadow-xl"
                >
                  {/* Top Step Number Badge & Step Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#c39967]/15 border border-[#c39967]/40 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#080b11] transition-colors duration-300 shadow-md">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-3xl font-black font-mono text-white/90 group-hover:text-[#c39967] transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c39967] block mb-1.5">
                      {step.tagline}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c39967] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Milestone Key Deliverable Strip */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Deliverable:
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#c39967] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-[#c39967]" />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}