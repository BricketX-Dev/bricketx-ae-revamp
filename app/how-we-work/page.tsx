// src/app/how-we-work/page.tsx
import type { Metadata } from "next";
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
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "How We Work | Execution Framework & Governance | BricketX Dubai",
  description:
    "Explore BricketX's 4-phase execution methodology, critical-path governance, and milestone delivery SLA across Dubai and the UAE.",
};

export default function HowWeWorkPage() {
  const phases = [
    {
      step: "01",
      name: "Phase 1: Alignment & Scrutiny",
      title: "Discovery, Feasibility & Regulatory Audit",
      desc: "Every engagement begins with deep technical and operational due diligence. We audit internal capacity, define concrete milestone gates, review statutory UAE municipal decrees, and identify dependencies before committing capital or executing roadmaps.",
      icon: Search,
      deliverables: [
        "Strategic Brief & Work Breakdown (WBS)",
        "Municipal & Statutory Compliance Audit",
        "Risk Mitigation & Dependency Matrix",
        "Fixed-Milestone Budget Allocation",
      ],
      slaCommitment: "10-14 Business Days to Sign-off",
    },
    {
      step: "02",
      name: "Phase 2: Blueprint & Critical Path",
      title: "Architecture, Resource Allocation & Media Planning",
      desc: "We construct the execution architecture. For technology initiatives, this entails sprint schedules and system blueprints; for media campaigns, RTA billboard concession licensing and production proofs; for consultancy, target operating models.",
      icon: Compass,
      deliverables: [
        "Critical-Path GANTT Architecture",
        "RTA / Municipality Permitting Dossier",
        "Sprint Backlog & Resource Matrix",
        "Mutual SLA Milestone Schedule",
      ],
      slaCommitment: "Locked Scope & Architecture Sign-off",
    },
    {
      step: "03",
      name: "Phase 3: Disciplined Execution",
      title: "Single-Vendor Coordination & Sprint Cadence",
      desc: "Our directors take direct command of cross-functional teams, subcontractors, and technical engineers. We manage daily blockers, perform rigorous QA verification, and eliminate vendor silos under strict critical-path governance.",
      icon: Workflow,
      deliverables: [
        "Weekly Steering Committee Decks",
        "Real-Time Milestone Burndown Dashboard",
        "Staging Platform & QA Verification Audits",
        "Continuous Escalation Management",
      ],
      slaCommitment: "100% Critical-Path Adherence",
    },
    {
      step: "04",
      name: "Phase 4: Handover & Governance",
      title: "Production Verification, Training & Retainer Support",
      desc: "Delivery is never complete at launch. We verify production environments, conduct stakeholder training, measure campaign acquisition attribution, and institute SLA retainers for continuous operational stability.",
      icon: CheckCircle2,
      deliverables: [
        "Comprehensive Architecture Documentation",
        "Stakeholder Standard Operating Procedures (SOPs)",
        "Post-Launch Audit & Attribution Dossier",
        "Long-Term Maintenance SLA Retainer",
      ],
      slaCommitment: "30-Day Guaranteed Handover Support",
    },
  ];

  const governanceGates = [
    {
      title: "Phase Gate Approvals",
      desc: "No initiative moves to execution without sign-off on previous milestone criteria, protecting capital from premature spend.",
      icon: FileCheck2,
    },
    {
      title: "Critical Path Scheduling",
      desc: "All activities are mapped against strict dependencies. If a blocker emerges, contingency pathways deploy immediately.",
      icon: GitBranch,
    },
    {
      title: "Single-Vendor Clarity",
      desc: "BricketX serves as your sole accountable counterpart, removing the finger-pointing typical of multi-agency arrangements.",
      icon: Layers,
    },
    {
      title: "Statutory UAE Compliance",
      desc: "Contracting, data handling, and advertising placements comply strictly with mainland Dubai (DET/DED) and federal laws.",
      icon: Scale,
    },
  ];

  const cadenceSchedule = [
    {
      interval: "Daily",
      action: "Standups & Blocker Resolution",
      audience: "Project Leads & Technical Teams",
    },
    {
      interval: "Weekly",
      action: "Sprint Progress & Budget Burndown Review",
      audience: "Project Sponsor & Steering Group",
    },
    {
      interval: "Bi-Weekly",
      action: "Milestone Verification & QA Sign-off",
      audience: "Executive Committee & Lead Director",
    },
    {
      interval: "Monthly",
      action: "Strategic ROI & Long-term Forecast Audit",
      audience: "Board of Directors / Enterprise Leadership",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      
      {/* 1. Header Hero: Restrained Dark Anchor */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-[#07090e] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  Delivery Governance
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
                Structure Eliminates <br />
                <span className="text-[#c39967]">Project Ambiguity.</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                How an initiative is managed determines whether it delivers return on capital or gets bogged down in scope creep. Discover the 4-phase framework BricketX applies to every digital build, media campaign, and advisory engagement across the UAE.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Methodology Intro: Crisp Clean White */}
      <section className="py-14 sm:py-20 bg-[#ffffff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <ScrollReveal direction="left" distance={24}>
                <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967] block">
                  Methodology Overview
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-snug">
                  From Strategic Brief to Sustained Governance
                </h2>
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                  We don’t rely on speculative plans or unchecked timelines. Every initiative follows a rigorous four-phase pipeline where budget release and technical progression are gated to tangible milestone achievements.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#111827]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span>100% Critical-Path Schedule Adherence</span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right" distance={24} delay={100}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"
                    alt="Strategic Project Management Cadence"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded bg-black/80 border border-white/10 text-[10.5px] font-mono text-[#c39967] backdrop-blur-xs">
                      Dubai Mainland Operating Standard
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Deep Dive: The 4-Phase Delivery Pipeline (Off-White Background) */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Step-by-Step Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                The 4 Execution Phases
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {phases.map((p, idx) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.step} direction="up" distance={24} delay={idx * 80}>
                  <div className="rounded-2xl border border-slate-200/90 bg-[#ffffff] p-6 sm:p-8 lg:p-10 shadow-xs hover:border-[#c39967]/60 transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                      
                      {/* Left: Summary */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967]">
                            <Icon className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block">
                              {p.name}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              Milestone Gate {p.step}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#111827] pt-1">
                          {p.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                          {p.desc}
                        </p>

                        <div className="pt-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                            SLA Guarantee:
                          </span>
                          <span className="text-xs font-semibold text-[#111827]">
                            {p.slaCommitment}
                          </span>
                        </div>
                      </div>

                      {/* Right: Deliverables Card */}
                      <div className="lg:col-span-5 bg-[#faf8f5] border border-slate-200 p-5 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                            Phase Deliverables &amp; Artifacts:
                          </span>
                          <div className="space-y-2">
                            {p.deliverables.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
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

      {/* 4. Governance Standards: Clean White */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Risk Management
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                Our 4 Governance Standards
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                How we maintain zero cost overruns and preserve transparency across the project lifecycle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {governanceGates.map((g, idx) => {
              const Icon = g.icon;
              return (
                <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 70}>
                  <div className="p-6 rounded-xl bg-[#f8f9fb] border border-slate-200/90 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#c39967] mb-4 shadow-2xs">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#111827] mb-2 leading-snug">
                        {g.title}
                      </h3>
                      <p className="text-xs text-[#4b5563] leading-relaxed font-normal">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Communication & Reporting Cadence Table: Clean Light Architecture */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl mb-10">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block mb-2">
                Stakeholder Reporting
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Structured Communication Cadence
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={20} delay={100}>
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f1f3f7] text-[#4b5563] font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-5 sm:px-6 font-bold">Frequency</th>
                      <th className="py-3.5 px-5 sm:px-6 font-bold">Action &amp; Focus</th>
                      <th className="py-3.5 px-5 sm:px-6 font-bold">Target Stakeholders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-[#111827]">
                    {cadenceSchedule.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-5 sm:px-6 font-mono font-bold text-[#c39967] whitespace-nowrap">
                          {row.interval}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 font-medium text-[#111827]">
                          {row.action}
                        </td>
                        <td className="py-3.5 px-5 sm:px-6 text-[#64748b]">
                          {row.audience}
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

      {/* 6. Closing Executive CTA Deck: Grounded Dark Finish */}
      <section className="py-14 sm:py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-white">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block">
                  Have an Upcoming Project?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Bring Predictability to Your Initiatives
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed font-normal">
                  Schedule an introductory briefing with our managing directors in Dubai to review your scope and receive a formal feasibility assessment.
                </p>
              </div>

              <Link
                href="/contact"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors whitespace-nowrap font-sans self-start lg:self-center"
              >
                <span>Request Project Scoping</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}