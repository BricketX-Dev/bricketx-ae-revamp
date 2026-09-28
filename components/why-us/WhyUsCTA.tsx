// src/components/why-us/WhyUsCTA.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUsCTA() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Gold Glow & Micro-Dot Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[250px] bg-[#c39967]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0f141f] to-[#0a0d14] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Top Gold Hairline Highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-3.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#c39967]/10 border border-[#c39967]/25 text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Business Bay, Dubai · Licensed Mainland Company</span>
                </div>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Protect Your Budget. Deliver on Time.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Talk to our team about your next digital project, a billboard campaign on Sheikh Zayed Road, or a plan to streamline your operations under single-vendor accountability.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pt-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all duration-200 font-sans shadow-lg shadow-[#c39967]/10 whitespace-nowrap"
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
  );
}