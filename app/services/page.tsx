// src/app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  KanbanSquare,
  Megaphone,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Integrated Practices & Services | BricketX Dubai",
  description:
    "Explore BricketX's core practices across Dubai and the UAE: Digital Project Management, Strategic Advertising & Media, and Business Consultancy.",
};

export default function ServicesPage() {
  const practices = [
    {
      id: "project-management",
      number: "01",
      title: "Digital Project Management",
      eyebrow: "PRACTICE 01 · TECHNOLOGY & DELIVERY",
      desc: "End-to-end execution of complex technology architectures, web platforms, and digital products with disciplined critical-path governance.",
      href: "/services/project-management",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      metrics: "100% Milestone SLA",
      deliverables: [
        "Work Breakdown & Critical Path",
        "Technical Resource Allocation",
        "Quality Assurance & Testing Audits",
        "Post-Launch SLA Maintenance",
      ],
      icon: KanbanSquare,
    },
    {
      id: "advertising",
      number: "02",
      title: "Strategic Advertising & Media",
      eyebrow: "PRACTICE 02 · VISIBILITY & GROWTH",
      desc: "Prime highway billboard concessions along Sheikh Zayed Road combined with high-intent digital performance funnels across the UAE.",
      href: "/services/advertising",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      metrics: "3.2M+ Targeted Reach",
      deliverables: [
        "Prime Highway & Urban OOH Billboards",
        "RTA & Municipal Permitting",
        "Precision Search & Social Acquisition",
        "Bilingual Arabic/English Creative",
      ],
      icon: Megaphone,
    },
    {
      id: "business-consultancy",
      number: "03",
      title: "Business Consultancy",
      eyebrow: "PRACTICE 03 · ADVISORY & RESTRUCTURING",
      desc: "Pragmatic operational diagnostics, process streamlining, and commercial restructuring engineered for UAE mainland and freezone growth.",
      href: "/services/business-consultancy",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      metrics: "35%+ Operational Gain",
      deliverables: [
        "As-Is vs. To-Be Workflow Blueprints",
        "Standard Operating Procedures (SOPs)",
        "UAE Market Go-To-Market Plans",
        "Task-Force Leadership Steering",
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* 1. Header Overview */}
      <section className="relative border-b border-white/10 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  Three Core Practices
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Integrated Practices. <br />
                <span className="text-[#c39967]">Single-Vendor Delivery.</span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                BricketX eliminates vendor fragmentation by uniting disciplined technology project execution, high-impact UAE media acquisition, and executive business advisory under one accountable mainland practice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Practice Cards Stack */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {practices.map((p, idx) => {
          const Icon = p.icon;
          const isAlt = idx % 2 === 1;

          return (
            <ScrollReveal key={p.id} direction="up" distance={30} delay={idx * 100}>
              <div className="rounded-2xl border border-white/10 bg-[#0f141f] p-6 sm:p-9 lg:p-12 hover:border-white/20 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Imagery */}
                  <div className={`lg:col-span-5 ${isAlt ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 text-white text-[10px] font-mono uppercase tracking-wider backdrop-blur-xs">
                            <Icon className="w-3.5 h-3.5 text-[#c39967]" />
                            <span>Pillar {p.number}</span>
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-[#090d14] flex items-center justify-between border-t border-white/10">
                        <div>
                          <div className="text-xl font-bold font-mono text-[#c39967]">{p.metrics}</div>
                          <div className="text-[11px] text-slate-400">Verified SLA Metric</div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#c39967]">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specification & Content */}
                  <div className={`lg:col-span-7 space-y-4 ${isAlt ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="text-[10.5px] font-mono font-bold tracking-widest text-[#c39967] uppercase block">
                      {p.eyebrow}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {p.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {p.desc}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Core Capabilities &amp; Workstreams:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                      <Link
                        href={p.href}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors"
                      >
                        <span>Explore Full Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        Inquire Directly →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* 3. The Single Partner Value Proposition */}
      <section className="py-16 bg-[#090d14] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#0f141f] border border-white/10 p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#c39967]" />
                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                      The BricketX Advantage
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Need Multi-Practice Scope Coordination?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                    Many of our clients combine digital platform development with a targeted UAE billboard rollout and operational advisory. We configure bespoke multi-disciplinary task forces under a unified master service agreement.
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors"
                  >
                    <span>Request Multi-Pillar Scoping</span>
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