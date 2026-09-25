// src/components/services/ServicePageLayout.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
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
      {/* 1. Header Overview & Primary Scope: Executive Dark Anchor */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#07090e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Title Block */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={20}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    Practice {data.number} · {data.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
                  {data.title}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                  {data.subheadline}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl font-normal">
                  {data.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                  >
                    <span>Commission Practice Review</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans"
                  >
                    <span>View Specifications</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Imagery & Live Metric Frame */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={30} delay={150}>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f141f]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Grounded Metric Footer */}
                  <div className="p-5 sm:p-6 divide-y divide-white/10 text-xs">
                    {data.slaMetrics.map((m, idx) => (
                      <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-white block">{m.label}</span>
                          <span className="text-[11px] text-slate-400">{m.sublabel}</span>
                        </div>
                        <span className="text-lg font-mono font-bold text-[#c39967]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Structured Capabilities & Deliverables: Crisp Clean White */}
      <section id="capabilities" className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Operational Scope
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                Specialized Functional Workstreams
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                Detailed breakdowns of our day-to-day deliverables and execution parameters across the UAE.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {data.capabilities.map((cap, idx) => (
              <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 100}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-xs hover:border-[#c39967]/60 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#c39967] block mb-2">
                      Stream 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#4b5563] leading-relaxed mb-6 font-normal">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2 bg-[#f8f9fb] -mx-6 -mb-6 p-6 rounded-b-2xl">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Output Deliverables:
                    </span>
                    {cap.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
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

      {/* 3. Governance Lifecycle / Phased Execution: Soft Light Gray */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Execution Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                Step-by-Step Delivery Roadmap
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.workflow.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 80}>
                <div className="p-5 sm:p-6 rounded-xl bg-[#ffffff] border border-slate-200/90 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase">
                        {item.phase}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-400">
                        0{item.step}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#111827] mb-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Milestone SLA
                    </span>
                    <span className="text-xs font-semibold text-[#111827]">
                      {item.deliverable}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mainland Statutory & Institutional Standards: White Canvas with Dark Action Card */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-6 sm:p-10 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10.5px] font-mono text-[#c39967]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>UAE Mainland Commercial Compliance</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Governance Assurances &amp; Risk Safeguards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                    {data.governanceSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                  >
                    <span>Request Proposal</span>
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