// src/app/why-us/page.tsx
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Award,
  Building2,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileCheck2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUsPage() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const statMetrics = [
    {
      value: "3",
      title: "Core Services",
      subtext: "Project Management, Advertising & Consultancy",
    },
    {
      value: "1",
      title: "Agreement",
      subtext: "One contract covering every service you need",
    },
    {
      value: "1",
      title: "Point of Contact",
      subtext: "A dedicated lead from start to finish",
    },
    {
      value: "End-to-End",
      title: "Delivery",
      subtext: "From first brief to post-launch support",
    },
  ];

  const differentiators = [
    {
      code: "01",
      label: "ONE TEAM, NOT THREE",
      title: "Everything Under One Roof",
      text: "Most businesses in Dubai juggle a tech agency, an outdoor media buyer and a consultant, each with its own contract and priorities. BricketX brings all three together under one agreement, so nothing gets lost between teams.",
      icon: Layers,
    },
    {
      code: "02",
      label: "PAY FOR PROGRESS",
      title: "Your Budget Stays Protected",
      text: "Payments are tied to milestones you can see and approve. Each stage is checked for quality before the next one begins, so scope stays controlled and there are no surprise costs.",
      icon: ShieldCheck,
    },
    {
      code: "03",
      label: "NO JUNIOR HAND-OFFS",
      title: "Direct Access to Senior Leadership",
      text: "Our senior team leads your project reviews and briefings. You work with experienced decision-makers who understand how business is done in the UAE, not junior account managers passing messages along.",
      icon: Award,
    },
    {
      code: "04",
      label: "LOCAL & LICENSED",
      title: "Based in Dubai, Built for the UAE",
      text: "We're a licensed Dubai mainland company based in Business Bay. From advertising permits to local business practices, we know how things work here, and we plan every project around it.",
      icon: Building2,
    },
  ];

  const comparisons = [
    {
      domain: "Accountability",
      usualProblem:
        "Separate tech, media and consulting vendors work in isolation. When deadlines slip, everyone blames someone else.",
      bricketxSolution:
        "One team takes full responsibility for the whole project, from first plan to final delivery.",
    },
    {
      domain: "Budget Control",
      usualProblem:
        "Open-ended retainers and hourly billing slowly eat into budgets, with no guarantee of what you'll actually get.",
      bricketxSolution:
        "Payments are tied to agreed deliverables, such as approved builds, signed-off creatives or secured permits.",
    },
    {
      domain: "Communication",
      usualProblem:
        "Updates are irregular, and you often find out about problems only when it's too late to fix them cheaply.",
      bricketxSolution:
        "A fixed reporting schedule and one point of contact, so issues are flagged early and you always know where things stand.",
    },
    {
      domain: "Permits & Launch",
      usualProblem:
        "Advertising permits and approvals are left until the last minute, causing costly delays right before launch.",
      bricketxSolution:
        "We plan permits and approvals from day one, so your campaign or project launches on schedule.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      
      {/* ========================================================
          1. HEADER HERO: Executive Architectural Terminal
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
                    WHY BRICKETX UAE
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white leading-[1.14]">
                  Why Choose BricketX? <br />
                  <span className="text-[#c39967]">
                    One Trusted Partner in Dubai.
                  </span>
                </h1>

                <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  In Dubai&apos;s fast-moving market, working with too many vendors costs time and money. BricketX brings project management, advertising and business consultancy under one accountable team, with clear plans, transparent progress and direct access to decision-makers.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-sm"
                  >
                    <span>TALK TO OUR TEAM</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/how-we-work"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02]"
                  >
                    <span>SEE HOW WE WORK</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Governance Standard Card */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={24} delay={120}>
                <div className="rounded-2xl border border-white/15 bg-[#0b0f17] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                  
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c39967]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                        GOVERNANCE STANDARD
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2.5 py-0.5 rounded border border-[#c39967]/30">
                      Dubai Mainland
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <FileCheck2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Single Unified Agreement</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">PM, media and advisory governed under one UAE legal contract.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Milestone Payment Gates</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Funds are released only when verified project milestones are delivered.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <Award className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Executive Desk Involvement</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Managing partners actively steer milestone reviews with zero hand-offs.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Direct Communication Channel
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
          2. STAT METRICS STRIP (Crisp Soft Light Gray)
         ======================================================== */}
      <section className="py-8 sm:py-10 bg-[#f8f9fb] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statMetrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#c39967]/50 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#c39967] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#111827] mt-1.5">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHAT SETS US APART: 4 REASONS (Clean White Grid)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  WHAT SETS US APART
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                4 Reasons Businesses Choose BricketX
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                What makes working with BricketX different from hiring separate agencies, media buyers and consultants in Dubai.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((d, idx) => {
              const Icon = d.icon;
              return (
                <ScrollReveal key={d.code} direction="up" distance={24} delay={idx * 80}>
                  <div className="group p-7 sm:p-8 rounded-2xl bg-[#ffffff] border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[0_12px_32px_rgba(195,153,103,0.1)]">
                    <div>
                      {/* Top Bar: Icon Chamber + Code */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center text-[#c39967] group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#c39967] transition-colors">
                          {d.code}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c39967] block mb-1.5 font-bold">
                        {d.label}
                      </span>

                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5 leading-snug group-hover:text-[#c39967] transition-colors">
                        {d.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-normal">
                        {d.text}
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
          4. THE BRICKETX DIFFERENCE: Executive Dark Comparison Matrix
         ======================================================== */}
      <section id="comparison" className="py-20 sm:py-28 bg-[#07090e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.035] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12 sm:mb-16">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  THE BRICKETX DIFFERENCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Typical Agencies vs. BricketX
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                The most common problems Dubai businesses face with multiple vendors, and how we solve them.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, idx) => {
              const isHovered = activeRow === idx;

              return (
                <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 60}>
                  <div
                    onMouseEnter={() => setActiveRow(idx)}
                    onMouseLeave={() => setActiveRow(null)}
                    className={`rounded-2xl border transition-all duration-300 p-6 sm:p-7 ${
                      isHovered
                        ? "bg-[#0d121c] border-[#c39967]/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:translate-x-1"
                        : "bg-[#090d14] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Domain Title */}
                      <div className="lg:col-span-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                          Domain 0{idx + 1}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {item.domain}
                        </h4>
                      </div>

                      {/* Problem vs Solution Split */}
                      <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1 lg:pt-0">
                        
                        {/* The Usual Problem */}
                        <div className="border-l-2 border-white/15 pl-4 py-1">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                              THE USUAL PROBLEM
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {item.usualProblem}
                          </p>
                        </div>

                        {/* How BricketX Solves It */}
                        <div
                          className={`border-l-2 border-[#c39967] pl-4 py-2.5 rounded-r-xl transition-colors duration-300 ${
                            isHovered ? "bg-[#c39967]/10" : "bg-white/[0.03]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967]" />
                            <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#c39967] font-bold">
                              HOW BRICKETX SOLVES IT
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-white leading-relaxed font-medium">
                            {item.bricketxSolution}
                          </p>
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
          5. CLOSING CONSULTATION BANNER (Crisp White Canvas Anchor)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-7 sm:p-10 lg:p-12 text-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10.5px] font-mono text-[#c39967]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Business Bay, Dubai · Licensed Mainland Company</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Protect Your Budget. Deliver on Time.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                    Talk to our team about your next digital project, a billboard campaign on Sheikh Zayed Road or a plan to streamline your operations.
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-md"
                  >
                    <span>BOOK A CONSULTATION</span>
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