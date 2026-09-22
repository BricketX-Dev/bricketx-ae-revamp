// src/components/home/AboutSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users2,
  GitBranch,
  ShieldCheck,
  Cpu,
  Megaphone,
  Handshake,
  ArrowUpRight,
  Building2,
  Award,
  CheckCircle2,
  PhoneCall,
  FileCheck,
} from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: "100+", label: "Projects Delivered", detail: "Across UAE & GCC" },
    { value: "50+", label: "Enterprise Clients", detail: "Public & Private Sector" },
    { value: "3+", label: "Core Pillars", detail: "PM, Media & Consulting" },
    { value: "100%", label: "Milestone Compliance", detail: "On-Time, On-Budget" },
  ];

  const pillars = [
    {
      id: "01",
      title: "Multidisciplinary Domain Expertise",
      lead: "Cross-Functional Synergy",
      desc: "We bring together certified project managers, media strategists, and business analysts under one accountable command, eliminating vendor silos and operational disconnects.",
      icon: Users2,
      tag: "Governance & Talent",
    },
    {
      id: "02",
      title: "Structured Project Governance",
      lead: "Disciplined Execution",
      desc: "Our delivery framework enforces strict milestone gates, risk-mitigation protocols, and critical path scheduling to safeguard project budgets and timelines across Dubai.",
      icon: GitBranch,
      tag: "Methodology",
    },
    {
      id: "03",
      title: "Radical Transparency & Reporting",
      lead: "Accountable Partnership",
      desc: "Direct stakeholder dashboards and unfiltered reporting mean zero surprises. You retain full visibility over milestone health, expenditures, and compliance approvals.",
      icon: ShieldCheck,
      tag: "Stakeholder Relations",
    },
    {
      id: "04",
      title: "Tailored UAE Market Solutions",
      lead: "Localized Precision",
      desc: "Every operating blueprint and advertising rollout is engineered to comply directly with UAE municipal regulations, economic decrees, and commercial consumer behavior.",
      icon: Cpu,
      tag: "Compliance & Strategy",
    },
    {
      id: "05",
      title: "High-Visibility Media Placement",
      lead: "Commercial Impact",
      desc: "From prime outdoor billboard concessions along Sheikh Zayed Road to targeted digital acquisition funnels, we position your brand directly in front of regional decision-makers.",
      icon: Megaphone,
      tag: "Brand Activation",
    },
    {
      id: "06",
      title: "Long-Term Expansion Focus",
      lead: "Sustainable Value",
      desc: "We reject transactional, one-off vendor handoffs. We build scalable operating infrastructures and governance retainers that compound value over multiple years.",
      icon: Handshake,
      tag: "Enterprise Growth",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#f8f9fb] border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1: ARCHITECTURAL SPLIT (NARRATIVE + ORIGIN + STATS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left: Architectural Visual with Floating Metric Pill */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[4/5] bg-slate-900 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-[#0b0f17]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#c39967]/40 text-[10px] font-bold uppercase tracking-widest text-[#c39967] mb-2.5">
                  <Building2 className="w-3 h-3" />
                  Dubai Corporate Hub
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Transforming Strategic Vision into Measurable Impact Across the UAE
                </h4>
              </div>
            </div>

            {/* Floating Luxury Counter Badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-white rounded-xl shadow-xl border border-slate-100 p-4 sm:p-5 hidden sm:flex items-center gap-4 animate-float">
              <div className="w-12 h-12 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967]">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#111827]">UAE Registered Entity</div>
                <div className="text-xs text-[#64748b]">Full Compliance &amp; Accountability</div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Origin Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                About BricketX
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Delivering Business Excellence Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] to-[#a87d4a]">
                Strategy &amp; Disciplined Execution
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Business success depends on more than good ideas—it requires structured planning,
              effective execution, and continuous optimization. At BricketX Project Management L.L.C,
              we partner with organizations across Dubai and the UAE to simplify complex initiatives,
              strengthen market presence, and drive operational performance.
            </p>

            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Rather than offering isolated deliverables, we build long-term partnerships focused
              on sustainable business development. Every engagement is managed with rigorous
              professionalism, complete transparency, and relentless attention to milestone quality.
            </p>

            {/* Brand Origin Story Card */}
            <div className="rounded-xl bg-white border border-slate-200/90 p-6 shadow-sm relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c39967] rounded-l" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c39967] block mb-1">
                Our Foundation
              </span>
              <h3 className="text-base font-bold text-[#111827] mb-1.5">
                Our Story: Built Around Better Business Management
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                BricketX Project Management L.L.C was established with a clear mandate: to help
                enterprises cut through complexity and achieve structured, predictable growth.
                Today, we operate as a trusted partner for organizations seeking disciplined delivery,
                impactful marketing campaigns, and practical executive consulting.
              </p>
            </div>

            {/* 4 Performance Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#c39967]/50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-[#c39967] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#111827] mt-1">{stat.label}</div>
                  <div className="text-[10px] text-[#94a3b8] mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] px-6 py-3.5 rounded shadow-md transition-all cursor-pointer hover:shadow-lg hover:shadow-[#c39967]/20"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#c39967] px-4 py-3.5 transition-colors"
              >
                <span>Explore Methodology</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 2: WHY BUSINESSES CHOOSE US (BALANCED STICKY SPLIT) */}
        <div className="border-t border-slate-200/80 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Column: Perfectly Balanced with Right Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                  The BricketX Advantage
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
                Why UAE Enterprises <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
                  Trust Our Delivery
                </span>
              </h3>

              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Rather than acting as detached advisors or generic outsourcing vendors, we function as an accountable execution arm embedded directly into your operational fabric.
              </p>

              {/* UAE Assurance Card */}
              <div className="p-6 rounded-2xl bg-[#0b0f17] text-white border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#c39967]">
                    Accountability Standard
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Governance
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <span>Single point of executive contact for all 3 pillars</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <span>Milestone-linked SLA commitments</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                    <span>Fully licensed and regulated under UAE corporate laws</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Dubai, UAE</span>
                  <Link href="#contact" className="text-[#c39967] hover:underline font-semibold flex items-center gap-1">
                    Book scope review →
                  </Link>
                </div>
              </div>

              {/* Secondary Balance Card: Direct Executive Direct Line (Fills remaining height) */}
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111827]">Direct Advisory Desk</div>
                    <div className="text-[11px] text-[#64748b]">+971 54 166 2352</div>
                  </div>
                </div>
                <a
                  href="tel:+971541662352"
                  className="px-3.5 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#b28755] transition-colors"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Right Column: Editorial Tiered Capability List */}
            <div className="lg:col-span-7 divide-y divide-slate-200/90 border-y border-slate-200/90">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeTab === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`py-6 sm:py-7 transition-all duration-300 cursor-pointer group ${
                      isSelected
                        ? "pl-4 bg-white rounded-xl -mx-2 px-4 shadow-sm border border-slate-200/80 my-1"
                        : "hover:pl-2"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Monospace Pillar Index */}
                        <span
                          className={`font-mono text-sm sm:text-base font-bold transition-colors mt-0.5 ${
                            isSelected ? "text-[#c39967]" : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          {item.id}
                        </span>

                        <div className="space-y-1.5">
                          {/* Micro Domain Category Tag */}
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a5adb6]">
                              {item.tag}
                            </span>
                            <span className="text-slate-300 text-xs">•</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#c39967]">
                              {item.lead}
                            </span>
                          </div>

                          {/* Heading */}
                          <h4
                            className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                              isSelected ? "text-[#111827]" : "text-[#111827] group-hover:text-[#c39967]"
                            }`}
                          >
                            {item.title}
                          </h4>

                          {/* Expanded Explanatory Copy */}
                          <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed pt-1 max-w-xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Icon Pill Indicator */}
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-1 ${
                          isSelected
                            ? "bg-[#c39967] text-white shadow-md shadow-[#c39967]/30"
                            : "bg-slate-100 text-slate-500 group-hover:bg-[#c39967]/15 group-hover:text-[#c39967]"
                        }`}
                      >
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}