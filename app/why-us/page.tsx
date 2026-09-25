// src/app/why-us/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Scale,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Why BricketX | Strategic Advantages & UAE Governance",
  description:
    "Discover why UAE enterprises partner with BricketX Project Management L.L.C: unified single-vendor accountability, critical-path governance, and capital protection.",
};

export default function WhyUsPage() {
  const coreDifferentiators = [
    {
      code: "01",
      title: "Single-Vendor Accountability",
      subtitle: "Eliminating Multi-Agency Friction",
      desc: "Traditional approaches require managing separate digital agencies, outdoor media buyers, and operational consultants. BricketX unifies execution, media, and advisory under one master agreement with zero finger-pointing.",
      icon: Layers,
    },
    {
      code: "02",
      title: "Capital Protection Mandate",
      subtitle: "Milestone-Gated Expenditures",
      desc: "We operate on objective milestone release gates. Capital is only deployed when preceding critical-path deliverables meet rigorous QA standards, preventing runaway scope and budget leakage.",
      icon: ShieldCheck,
    },
    {
      code: "03",
      title: "Direct Leadership Governance",
      subtitle: "Zero Junior Account Hand-offs",
      desc: "Our senior partners directly lead project steering committees and client briefing sessions. You engage with experienced decision-makers who understand GCC corporate nuances, not junior account managers.",
      icon: Award,
    },
    {
      code: "04",
      title: "Mainland Regulatory Mastery",
      subtitle: "Full Statutory Compliance",
      desc: "Operating from Business Bay under full Dubai mainland licensing, our delivery adheres strictly to municipal billboard codes, RTA guidelines, and DET regulatory requirements across all seven Emirates.",
      icon: Scale,
    },
  ];

  const operatingDilemmas = [
    {
      domain: "Delivery & Accountability",
      conventionalRisk: "Fragmented vendors work in isolation. When timelines slip, technical contractors, media agencies, and internal coordinators deflect responsibility onto one another.",
      bricketxResolution: "Unified prime contractor model. BricketX assumes single-point statutory and operational responsibility for the entire project roadmap.",
    },
    {
      domain: "Budget Governance",
      conventionalRisk: "Open-ended retainers and speculative time-and-materials invoicing frequently dilute client budgets without guaranteed functional deliverables.",
      bricketxResolution: "Strict milestone release gates. Capital disbursements are tied to verified deliverables, code sign-offs, or municipal permit receipts.",
    },
    {
      domain: "Leadership & Advisory",
      conventionalRisk: "Commercial pitches are led by senior leadership, but accounts are quietly handed down to junior staff with limited market experience.",
      bricketxResolution: "Managing partners remain active on weekly steering committees, directly driving risk assessments and steering committees.",
    },
    {
      domain: "Regulatory Execution",
      conventionalRisk: "External teams treat UAE municipal compliance and advertising approvals as an afterthought, causing costly delays at launch.",
      bricketxResolution: "Direct in-house handling of RTA, Dubai Economy & Tourism, and municipal decree frameworks from day one of discovery.",
    },
  ];

  const trackMetrics = [
    { value: "100%", label: "Milestone Delivery SLA", sublabel: "Strict critical-path adherence" },
    { value: "1", label: "Master Agreement", sublabel: "For PM, Media, and Consultancy" },
    { value: "24h", label: "Executive Response SLA", sublabel: "Direct partner escalation channel" },
    { value: "7", label: "Emirates Covered", sublabel: "Federal & local municipal compliance" },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      {/* 1. Header Hero: Grounded Dark Anchor */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#07090e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  The BricketX Advantage
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
                Engineered for Certainty <br />
                <span className="text-[#c39967]">in Complex Markets.</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                In Dubai’s dynamic commercial landscape, execution risk is the highest cost. We replace agency fragmentation and speculative advisory with unified governance, disciplined critical paths, and direct accountability.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                >
                  <span>Engage Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="#standards"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans"
                >
                  <span>The Operating Standard</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Institutional Track Record Strip */}
      <section className="py-8 sm:py-10 bg-[#f8f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trackMetrics.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-mono font-black text-[#c39967]">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-[#111827] mt-1">{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Differentiators Grid: Clean White */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Strategic Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                Four Principles That Define Our Delivery
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                How our integrated approach protects client capital and accelerates project velocity across the UAE.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coreDifferentiators.map((d, idx) => {
              const Icon = d.icon;
              return (
                <ScrollReveal key={idx} direction="up" distance={24} delay={idx * 80}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-xs hover:border-[#c39967]/60 transition-colors flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#c39967]/10 flex items-center justify-center text-[#c39967]">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {d.code}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-1 font-bold">
                        {d.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5 leading-snug">
                        {d.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Professional Institutional Operating Contrast (No Ticks / Crosses) */}
      <section id="standards" className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Operational Realities
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                The BricketX Governance Standard
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                How we systematically address common commercial and operational failures in regional enterprise initiatives.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {operatingDilemmas.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 60}>
                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Domain Label */}
                    <div className="lg:col-span-3">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Domain 0{idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-[#111827]">
                        {item.domain}
                      </h3>
                    </div>

                    {/* Conventional Practice vs BricketX Standard */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5 pt-1 lg:pt-0">
                      <div className="border-l-2 border-slate-200 pl-4 py-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                          Industry Conventional Risk
                        </span>
                        <p className="text-xs text-[#64748b] leading-relaxed">
                          {item.conventionalRisk}
                        </p>
                      </div>

                      <div className="border-l-2 border-[#c39967] pl-4 py-0.5 bg-[#faf8f5]/60 -my-1 p-3 rounded-r-lg">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-1 font-bold">
                          The BricketX Resolution
                        </span>
                        <p className="text-xs text-[#111827] leading-relaxed font-medium">
                          {item.bricketxResolution}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Executive Consultation Banner */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-8 sm:p-10 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10.5px] font-mono text-[#c39967]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Business Bay Headquarters · Dubai Mainland</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Protect Your Capital. Deliver on Time.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed font-normal">
                    Connect with our practice leads to discuss upcoming technology roadmaps, billboard campaigns along Sheikh Zayed Road, or operational consulting initiatives.
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                  >
                    <span>Request Executive Consultation</span>
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