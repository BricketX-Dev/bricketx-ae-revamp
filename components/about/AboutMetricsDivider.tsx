// src/components/about/AboutMetricsDivider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutMetricsDivider() {
  const metrics = [
    {
      value: "100%",
      label: "Milestone-Gated SLA",
      detail: "Budgets committed strictly upon verified approvals",
      code: "METRIC · 01",
      icon: "/images/icons/metrics/sla.png", // Update path manually in /public
    },
    {
      value: "01",
      label: "Unified Agreement",
      detail: "PM, media concessions & corporate advisory under 1 contract",
      code: "METRIC · 02",
      icon: "/images/icons/metrics/contract.png", // Update path manually in /public
    },
    {
      value: "24h",
      label: "Executive Desk SLA",
      detail: "Direct partner access with zero junior intermediary lag",
      code: "METRIC · 03",
      icon: "/images/icons/metrics/clock.png", // Update path manually in /public
    },
    {
      value: "UAE",
      label: "Licensed Mainland",
      detail: "Full municipal compliance, RTA/MOH permits & commercial standing",
      code: "METRIC · 04",
      icon: "/images/icons/metrics/license.png", // Update path manually in /public
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#f4f6fa] border-y border-slate-200/90 text-[#0f172a] overflow-hidden">
      {/* Subtle Background Radial Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#c39967]/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Institutional Header Card */}
            <div className="lg:col-span-4 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    PERFORMANCE BENCHMARKS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
                  Operational Standards That Protect Your Investment
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                  Every engagement is backed by institutional SLAs, single-contract legal accountability, and transparent milestone governance.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Audit Ready
                </span>

                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#c39967] hover:text-[#0f172a] transition-colors uppercase tracking-wider"
                >
                  <span>Our Framework</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right 4-Metric Command Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.code}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#c39967]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(195,153,103,0.1)]"
                >
                  <div>
                    {/* Metric Header Bar with Scaled Icon Vessel */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-[#c39967] transition-colors tracking-wider">
                        {m.code}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2 group-hover:scale-105 group-hover:bg-[#c39967]/10 transition-all duration-300 flex-shrink-0">
                        <Image
                          src={m.icon}
                          alt={m.label}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    </div>

                    {/* Prominent Stat Figure */}
                    <div className="text-3xl sm:text-4xl font-mono font-bold text-[#0f172a] tracking-tight mb-1.5">
                      <span className="text-[#c39967]">{m.value}</span>
                    </div>

                    {/* Metric Description */}
                    <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] mb-1 leading-snug">
                      {m.label}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}