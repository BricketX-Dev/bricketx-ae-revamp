// src/components/home/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  Award,
} from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once cleanly
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "100+", label: "Projects Delivered", detail: "UAE & GCC Region" },
    { value: "50+", label: "Enterprise Partners", detail: "Public & Private Sector" },
    { value: "3", label: "Core Practices", detail: "PM, Media & Advisory" },
    { value: "100%", label: "Milestone SLA", detail: "On-Time & On-Budget" },
  ];

  const highlights = [
    "Disciplined critical-path milestone governance",
    "UAE municipal decree & commercial law compliance",
    "Direct executive oversight with zero vendor silos",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-28 bg-[#f8f9fb] border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Visual Frame with Slide & Scale Animation
             ======================================================== */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-10 scale-95"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/5] bg-slate-900 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-[#0b0f17]/25 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#c39967]/40 text-[10px] font-bold uppercase tracking-widest text-[#c39967] mb-2">
                  <Building2 className="w-3 h-3" />
                  Dubai Corporate Office
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Transforming Strategic Initiatives into Measurable Impact
                </h4>
              </div>
            </div>

            {/* Floating Luxury Counter Badge */}
            <div
              className={`absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 hidden sm:flex items-center gap-3.5 transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0 animate-float"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-11 h-11 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                <Award className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#111827]">UAE Registered Entity</div>
                <div className="text-[11px] text-[#64748b]">Full Commercial Licensing</div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Staggered Content Cascade
             ======================================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 transition-all duration-700 delay-100 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                Institutional Overview
              </span>
            </div>

            {/* 2. Main Heading */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] transition-all duration-700 delay-200 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Delivering Business Excellence Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] to-[#a87d4a]">
                Strategy &amp; Disciplined Execution
              </span>
            </h2>

            {/* 3. Narrative Copy */}
            <p
              className={`text-sm sm:text-base text-[#4b5563] leading-relaxed transition-all duration-700 delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              At BricketX Project Management L.L.C, we partner with enterprises and government-backed entities across Dubai and the UAE to simplify complex initiatives, expand regional brand presence, and safeguard capital through rigorous project governance.
            </p>

            {/* 4. Core Highlights Checklist */}
            <div
              className={`space-y-2.5 pt-1 transition-all duration-700 delay-400 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1e293b]">
                  <CheckCircle2 className="w-4 h-4 text-[#c39967] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 5. 4 Performance Metric Counters */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 transition-all duration-700 delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#c39967]/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="text-2xl font-black text-[#c39967] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#111827] mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#94a3b8] mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* 6. Action Button Links */}
            <div
              className={`pt-2 flex flex-wrap items-center gap-4 transition-all duration-700 delay-600 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] px-6 py-3.5 rounded-lg shadow-md transition-all cursor-pointer hover:shadow-lg hover:shadow-[#c39967]/20"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-[#c39967] px-3 py-3.5 transition-colors font-semibold"
              >
                <span>Read Full Company Profile</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}