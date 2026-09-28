// src/components/how-we-work/HowWeWorkApproach.tsx
"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkApproach() {
  return (
    <section className="py-14 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal direction="left" distance={20}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                  OUR APPROACH
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
                From First Brief to Lasting Results
              </h2>

              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                No guesswork and no open-ended timelines. Every engagement follows a clear four-step process, and each payment is linked to a milestone you can see and approve, so budget and progress always move together.
              </p>

              <div className="pt-2 sm:pt-3">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#faf8f5] border border-[#c39967]/30 text-xs font-semibold text-[#111827]">
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
                
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/80 border border-white/15 text-[10px] sm:text-[10.5px] font-mono text-[#c39967] backdrop-blur-md">
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
  );
}