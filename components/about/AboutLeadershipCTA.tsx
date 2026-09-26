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
                  LET&apos;S WORK TOGETHER
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                  Partner with an Accountable Team in Dubai
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed font-normal">
                  Whether you need to deliver a digital project, launch an advertising campaign or streamline your operations, BricketX UAE is ready to help. Talk to our team today.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-4 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>Business Bay, Dubai</span>
                  </div>
                  <a
                    href="tel:+971541662352"
                    className="flex items-center gap-2 hover:text-[#c39967] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>+971 54 166 2352</span>
                  </a>
                  <a
                    href="mailto:info@bricketx.ae"
                    className="flex items-center gap-2 hover:text-[#c39967] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c39967]" />
                    <span>info@bricketx.ae</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white border border-white/15 hover:border-white/30 transition-colors font-sans"
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