// src/components/services/ServicePageLayout.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Workflow,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ServiceDetailProps {
  number: string;
  category: string;
  title: string;
  subheadline: string;
  description: string;
  heroImage: string;
  slaMetrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  workflow: {
    step: string;
    phase: string;
    title: string;
    deliverable: string;
  }[];
  governanceSpecs: string[];
}

export default function ServicePageLayout({ data }: { data: ServiceDetailProps }) {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      {/* ========================================================
          1. HEADER OVERVIEW & PRIMARY SCOPE (Executive Dark Anchor)
         ======================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.05] blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#c39967]/[0.03] blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="up" distance={20}>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    SERVICE {data.number} · {data.category}
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                  {data.title}
                </h1>

                {/* Lead Paragraph */}
                <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
                  {data.subheadline}
                </p>

                {/* Supporting Paragraph */}
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-xl">
                  {data.description}
                </p>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-sm"
                  >
                    <span>BOOK A PROJECT CONSULTATION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02]"
                  >
                    <span>SEE OUR SERVICES</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Chamber + SLA Metrics Deck */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={24} delay={150}>
                <div className="rounded-2xl border border-white/15 bg-[#0b0f17] overflow-hidden shadow-2xl">
                  
                  {/* Photo Canvas */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent opacity-90 pointer-events-none" />

                    {/* Image Header Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-slate-200 font-mono text-[10px]">
                        <Building2 className="w-3 h-3 text-[#c39967]" />
                        <span>Business Bay, Dubai</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-emerald-400 font-mono text-[10px]">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Licensed Entity</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Metrics Rows */}
                  <div className="p-4 sm:p-5 divide-y divide-white/10 bg-[#080c14] text-xs">
                    {data.slaMetrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="font-semibold text-white block text-xs sm:text-[13px]">
                            {m.label}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {m.sublabel}
                          </span>
                        </div>
                        <span className="text-base sm:text-lg font-mono font-bold text-[#c39967] whitespace-nowrap">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOW WE DELIVER: 3 STAGES DECK (Crisp White Canvas)
         ======================================================== */}
      <section id="stages" className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  HOW WE DELIVER
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                Our Project Management Process in Three Stages
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                A clear, step-by-step approach that takes your digital project from first idea to a stable, fully supported launch.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.capabilities.map((cap, idx) => (
              <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 100}>
                <div className="p-7 sm:p-8 rounded-2xl bg-[#ffffff] border border-slate-200/90 hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(195,153,103,0.1)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-[#c39967] tracking-wider uppercase">
                        Stage 0{idx + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-slate-200" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5 leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed mb-6 font-normal">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-bold">
                      WHAT YOU GET:
                    </span>
                    {cap.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. OUR ROADMAP: 4-PHASE TIMELINE (Soft Light Gray)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  OUR ROADMAP
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                Step-by-Step Project Delivery Roadmap
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                Four clear phases, each ending with a defined output, so you always know what&apos;s done and what comes next.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Workflow Phase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.workflow.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 80}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-slate-200/90 hover:border-[#c39967]/60 transition-all duration-300 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase">
                        {item.phase}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-400">
                        0{item.step}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-1 font-bold">
                      KEY OUTPUT
                    </span>
                    <span className="text-xs font-semibold text-[#111827] block leading-snug">
                      {item.deliverable}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. GOVERNANCE SPECIFICATIONS & TRUST BANNER (Grounded Dark Terminal)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-7 sm:p-10 lg:p-12 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10.5px] font-mono text-[#c39967]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Licensed Dubai Mainland Company</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Why Businesses Trust Us with Their Projects
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-slate-300">
                    {data.governanceSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] flex-shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-md"
                  >
                    <span>REQUEST A PROJECT PROPOSAL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}