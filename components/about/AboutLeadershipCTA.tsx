// src/components/about/AboutLeadershipCTA.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutLeadershipCTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#ffffff] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="rounded-2xl bg-[#07090e] border border-white/10 p-8 sm:p-10 lg:p-14 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967] block">
                  Direct Leadership Access
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                  Partner with an Accountable UAE Practice
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed font-normal">
                  Explore how BricketX can manage your digital implementations, launch high-yield media campaigns, or reorganize operational workflows.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>Business Bay, Dubai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>+971 54 166 2352</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>info@bricketx.ae</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services/project-management"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white border border-white/15 hover:border-white/30 transition-colors"
                >
                  <span>Explore Practices</span>
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}