// src/app/how-we-work/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Compass,
  Workflow,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  GitBranch,
  Layers,
  Scale,
  Calendar,
  Clock,
  Building2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkPage() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    {
      step: "01",
      label: "PHASE 01 · DISCOVERY",
      title: "Discovery & Feasibility Review",
      desc: "Every engagement starts with understanding your business. We review your goals, budget, team and any permits or regulations that apply, then agree on clear milestones before any money is committed.",
      timeline: "Typically 1–2 weeks",
      icon: Search,
      deliverables: [
        "Project Brief & Scope Document",
        "Permit & Regulation Checklist",
        "Risk Assessment",
        "Budget Estimate",
      ],
    },
    {
      step: "02",
      label: "PHASE 02 · PLANNING",
      title: "Planning & Resource Allocation",
      desc: "We turn the brief into a working plan: sprint schedules for digital projects, media plans and permits for advertising campaigns, or an improvement roadmap for consultancy work.",
      timeline: "Approved plan & scope sign-off",
      icon: Compass,
      deliverables: [
        "Project Timeline & Milestones",
        "Media Plan & Permit Applications",
        "Team & Resource Plan",
        "Signed Milestone Agreement",
      ],
    },
    {
      step: "03",
      label: "PHASE 03 · EXECUTION",
      title: "Delivery & Coordination",
      desc: "Our team manages the work day to day, coordinating developers, vendors, media partners and your stakeholders, with regular updates so you always know where things stand.",
      timeline: "Milestone-based progress",
      icon: Workflow,
      deliverables: [
        "Regular Progress Reports",
        "Live Progress Dashboard",
        "Testing & Quality Checks",
        "One Point of Contact for Issues",
      ],
    },
    {
      step: "04",
      label: "PHASE 04 · HANDOVER & SUPPORT",
      title: "Launch, Training & Ongoing Support",
      desc: "Delivery doesn't end at launch. We verify everything works, train your team, report on campaign results and offer ongoing support to keep things running smoothly.",
      timeline: "Post-launch support available",
      icon: CheckCircle2,
      deliverables: [
        "Complete Handover Documentation",
        "Team Training & SOPs",
        "Campaign Results Report",
        "Ongoing Support Plan",
      ],
    },
  ];

  const standards = [
    {
      title: "Approval at Every Stage",
      desc: "No phase starts until you've approved the one before it. Your budget is only spent on work you've already signed off.",
      icon: FileCheck2,
    },
    {
      title: "Clear Planning, Early Warnings",
      desc: "Every task is mapped with its dependencies. If something gets stuck, we flag it early and act on a backup plan right away.",
      icon: GitBranch,
    },
    {
      title: "One Accountable Team",
      desc: "BricketX is your single point of contact. No juggling multiple agencies, and no one passing blame when things go wrong.",
      icon: Layers,
    },
    {
      title: "Licensed & Compliant in the UAE",
      desc: "As a licensed Dubai mainland company, we work within UAE business regulations and follow required permit processes for advertising.",
      icon: Scale,
    },
  ];

  const cadenceSchedule = [
    {
      frequency: "Daily",
      whatHappens: "Team check-ins to solve blockers quickly",
      whosInvolved: "Your project lead & our delivery team",
    },
    {
      frequency: "Weekly",
      whatHappens: "Progress and budget update",
      whosInvolved: "Your key contact & BricketX project lead",
    },
    {
      frequency: "Every Two Weeks",
      whatHappens: "Milestone review and quality sign-off",
      whosInvolved: "Your decision-makers & BricketX leadership",
    },
    {
      frequency: "Monthly",
      whatHappens: "Results review and next-step planning",
      whosInvolved: "Your leadership team & BricketX leadership",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      
      {/* ========================================================
          1. HEADER HERO: Executive Dark Anchor
         ======================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.05] blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#c39967]/[0.03] blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="up" distance={20}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    HOW WE WORK
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.14]">
                  How BricketX Works. <br />
                  <span className="text-[#c39967]">
                    Clear Steps, No Surprises.
                  </span>
                </h1>

                <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  Every project, advertising campaign and consultancy engagement at BricketX follows the same clear process. From your first call to ongoing support, you know exactly what happens next, who&apos;s responsible and what you&apos;ll receive at every step.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-sm"
                  >
                    <span>TALK TO OUR TEAM</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#process"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02]"
                  >
                    <span>EXPLORE 4-STEP PROCESS</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Execution Protocol Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={24} delay={120}>
                <div className="rounded-2xl border border-white/15 bg-[#0b0f17] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                  
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-[#c39967]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                        EXECUTION PROTOCOL
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2.5 py-0.5 rounded border border-[#c39967]/30">
                      Standard SLA
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <FileCheck2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Milestone Gate Approval</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Budget is allocated strictly to deliverables you inspect and sign off.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Fixed Reporting Schedule</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Structured weekly burndowns eliminate communication gaps.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <Building2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Dubai Mainland Licensing</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Full municipal adherence for physical billboards and commercial agreements.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      100% Critical Path Adherence
                    </span>
                    <span className="text-[#c39967] font-semibold">Business Bay, Dubai</span>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR APPROACH: Editorial White Canvas
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="left" distance={20}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    OUR APPROACH
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                  From First Brief to Lasting Results
                </h2>

                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                  No guesswork and no open-ended timelines. Every engagement follows a clear four-step process, and each payment is linked to a milestone you can see and approve, so budget and progress always move together.
                </p>

                <div className="pt-3">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#faf8f5] border border-[#c39967]/30 text-xs font-semibold text-[#111827]">
                    <span className="w-2 h-2 rounded-full bg-[#c39967]" />
                    <span>Milestone-based payments, approved by you</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right" distance={20} delay={100}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-slate-900">
                  <Image
                    src="/images/about/about-main.webp"
                    alt="BricketX Dubai Team Execution and Strategy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-white/15 text-[10.5px] font-mono text-[#c39967] backdrop-blur-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Licensed Dubai Mainland Company</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. STEP-BY-STEP PROCESS: Executive Chronological Track
         ======================================================== */}
      <section id="process" className="py-20 sm:py-28 bg-[#07090e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.035] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-14 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  STEP-BY-STEP PROCESS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Our 4-Step Working Process
              </h3>
            </div>
          </ScrollReveal>

          {/* Connected Chronological Pipeline */}
          <div className="relative pl-0 md:pl-10 space-y-7">
            {/* The Left Vertical Progress Stem */}
            <div className="hidden md:block absolute left-4 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#c39967] via-[#c39967]/30 to-white/10" />

            {phases.map((p, idx) => {
              const Icon = p.icon;
              const isHovered = hoveredPhase === idx;

              return (
                <ScrollReveal key={p.step} direction="up" distance={20} delay={idx * 60}>
                  <div
                    onMouseEnter={() => setHoveredPhase(idx)}
                    onMouseLeave={() => setHoveredPhase(null)}
                    className={`group relative rounded-2xl border transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                      isHovered
                        ? "bg-[#0d121c] border-[#c39967]/70 shadow-[0_12px_40px_rgba(0,0,0,0.6)] md:translate-x-1"
                        : "bg-[#090d14] border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Architectural Node on the Guide Stem */}
                    <div
                      className={`hidden md:flex absolute -left-10 top-10 w-7 h-7 rounded-full items-center justify-center border font-mono text-[10px] font-bold transition-all duration-300 ${
                        isHovered
                          ? "bg-[#c39967] border-[#c39967] text-[#07090e] scale-110 shadow-[0_0_15px_rgba(195,153,103,0.5)]"
                          : "bg-[#07090e] border-white/20 text-slate-400"
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      
                      {/* Left: Summary & Narrative */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                              isHovered
                                ? "bg-[#c39967]/20 border-[#c39967] text-[#c39967]"
                                : "bg-white/[0.05] border-white/10 text-slate-400 group-hover:text-white"
                            }`}
                          >
                            <Icon className="w-5 h-5 stroke-[1.8]" />
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block">
                              {p.label}
                            </span>
                            <span className="text-xs font-mono text-slate-500">
                              Stage 0{p.step}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-white pt-1 leading-snug group-hover:text-[#c39967] transition-colors">
                          {p.title}
                        </h4>

                        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                          {p.desc}
                        </p>

                        <div className="pt-2 flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#c39967]" />
                          <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider">
                            Timeline:
                          </span>
                          <span className="text-xs font-semibold text-white font-mono">
                            {p.timeline}
                          </span>
                        </div>
                      </div>

                      {/* Right: Deliverables Manifest Deck */}
                      <div
                        className={`lg:col-span-5 p-5 sm:p-6 rounded-xl border transition-all duration-300 ${
                          isHovered
                            ? "bg-black/60 border-[#c39967]/40 shadow-inner"
                            : "bg-black/30 border-white/10"
                        }`}
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-3 font-bold">
                          WHAT YOU RECEIVE:
                        </span>
                        
                        <div className="space-y-2.5">
                          {p.deliverables.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs font-medium text-slate-200 leading-snug"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. OUR STANDARDS (Soft Light Gray)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  OUR STANDARDS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                4 Standards Behind Every Engagement
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                How we keep budgets under control and progress transparent, from the first milestone to the last.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {standards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 70}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_8px_24px_rgba(195,153,103,0.1)]">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center text-[#c39967] mb-4">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      
                      <span className="text-[9.5px] font-mono font-bold text-slate-400 block mb-1">
                        CARD {idx + 1}
                      </span>

                      <h4 className="text-sm sm:text-base font-bold text-[#111827] mb-2 leading-snug">
                        {s.title}
                      </h4>

                      <p className="text-xs text-[#4b5563] leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. STAYING IN TOUCH (Clean White Matrix)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-10 sm:mb-12">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  STAYING IN TOUCH
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                How We Keep You Updated
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                You&apos;ll never have to chase us for an update. Here&apos;s how and when we report on your project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={100}>
            <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f8f9fb] text-[#4b5563] font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-4 px-5 sm:px-6 font-bold">Frequency</th>
                      <th className="py-4 px-5 sm:px-6 font-bold">What Happens</th>
                      <th className="py-4 px-5 sm:px-6 font-bold">Who&apos;s Involved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-[#111827]">
                    {cadenceSchedule.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-5 sm:px-6 font-mono font-bold text-[#c39967] whitespace-nowrap">
                          {row.frequency}
                        </td>
                        <td className="py-4 px-5 sm:px-6 font-medium text-[#111827]">
                          {row.whatHappens}
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-[#64748b]">
                          {row.whosInvolved}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================
          6. CLOSING CTA (Grounded Dark Finish)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#07090e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#0d121c] border border-white/10 p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-white shadow-2xl">
              
              <div className="space-y-2.5 max-w-xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block">
                  HAVE A PROJECT IN MIND?
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Let&apos;s Plan It the Right Way
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  Book a free introductory call with our team in Dubai. We&apos;ll review your goals and scope, then share a clear proposal with timelines and costs.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-md self-start lg:self-center"
              >
                <span>BOOK A FREE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}