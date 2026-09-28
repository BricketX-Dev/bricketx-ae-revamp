// src/components/about/AboutLeadershipCTA.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutLeadershipCTA() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Gold Radial Glow & Micro-Dot Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[250px] bg-[#c39967]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={24}>
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0f141f] to-[#0a0d14] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Top Gold Hairline Highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#c39967]/10 border border-[#c39967]/25 text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span>LET&apos;S WORK TOGETHER</span>
                </div>

                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                  Partner with an Accountable Team in Dubai
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                  Whether you need to deliver a digital project, launch an advertising campaign across UAE media concessions, or streamline your operations, BricketX brings everything under single-vendor accountability.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span>Business Bay, Dubai</span>
                  </div>
                  <a
                    href="tel:+971541662352"
                    className="flex items-center gap-2 hover:text-[#c39967] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span>+971 54 166 2352</span>
                  </a>
                  <a
                    href="mailto:info@bricketx.ae"
                    className="flex items-center gap-2 hover:text-[#c39967] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span>info@bricketx.ae</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end pt-2 lg:pt-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all duration-200 font-sans shadow-lg shadow-[#c39967]/10 whitespace-nowrap"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 border border-white/15 hover:border-white/30 hover:text-white active:scale-[0.98] transition-colors font-sans bg-white/[0.02] backdrop-blur-xs whitespace-nowrap"
                >
                  <span>EXPLORE OUR SERVICES</span>
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}