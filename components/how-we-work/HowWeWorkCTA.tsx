// src/components/how-we-work/HowWeWorkCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* 1. Full-Bleed Outer Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 sm:opacity-30 hero-zoom-bg">
        <Image
          src="/images/how-we-work/CTA.webp"
          alt="Dubai Executive Business Landscape"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Outer Multi-Stop Obsidian Depth Scrim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/95 via-[#07090e]/80 to-[#07090e] pointer-events-none" />

      {/* 3. Ambient Gold Lighting & Micro-Dot Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[300px] bg-[#c39967]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          {/* Executive Glass Card Floating on top of the outer background */}
          <div className="relative rounded-2xl bg-[#0b0f17]/85 backdrop-blur-xl border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
            
            {/* Top Gold Hairline Highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/70 to-transparent" />

            {/* Inner Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-3.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#c39967]/10 border border-[#c39967]/25 text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967] backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span>HAVE A PROJECT IN MIND?</span>
                </div>

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Let&apos;s Plan It the Right Way
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Book an introductory briefing with our Dubai team. We will review your goals, scope, and target milestones, then provide a structured commercial roadmap with transparent costs.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pt-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] active:scale-[0.98] transition-all duration-200 font-sans shadow-lg shadow-[#c39967]/15 whitespace-nowrap"
                >
                  <span>BOOK A FREE CONSULTATION</span>
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