// src/components/home/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
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
          observer.disconnect();
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
    { value: "100%", label: "Digital Delivery", detail: "Software, Web & Apps" },
    { value: "01", label: "Unified Team", detail: "PM, Media & Advisory" },
    { value: "Dubai", label: "Licensed Entity", detail: "Meydan FZ · 2540036.01" },
    { value: "100%", label: "Milestone Gates", detail: "Pay for Approved Progress" },
  ];

  const highlights = [
    "Disciplined milestone-based project governance",
    "Outdoor billboard concessions across Sheikh Zayed Road & digital media",
    "Business strategy, operations consulting & digital transformation",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-14 lg:py-20 bg-[#f8f9fb] border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Visual Frame with Local Next.js Image
             ======================================================== */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/5] min-h-[440px] bg-slate-900 group">
              <Image
                src="/images/about/about-main.webp"
                alt="BricketX Dubai Corporate Headquarters"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Deep smooth gradient to maintain text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/95 via-[#0b0f17]/40 to-transparent pointer-events-none" />

              {/* Bottom Card Copy */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-[10.5px] font-medium text-white mb-2.5">
                  <Building2 className="w-3.5 h-3.5 text-[#c39967]" />
                  <span>Dubai Commercial Entity</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  One Accountable Partner for Delivery, Media & Operations
                </h4>
              </div>
            </div>

            {/* Clean Institutional Floating Badge */}
            <div
              className={`absolute -bottom-4 right-4 bg-white rounded-xl shadow-lg border border-slate-200/90 p-3 hidden sm:flex items-center gap-3 transition-all duration-700 delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                <Award className="w-4 h-4 stroke-[2]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#111827]">Licence No. 2540036.01</div>
                <div className="text-[10.5px] text-[#64748b]">BricketX PM LLC-FZ</div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Structured Editorial Copy
             ======================================================== */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. Eyebrow */}
            <div
              className={`flex items-center gap-2 transition-all duration-700 delay-100 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                ABOUT BRICKETX UAE
              </span>
            </div>

            {/* 2. Main Heading */}
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.2] transition-all duration-700 delay-200 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Connecting Strategy, Delivery &amp; Marketing Through{" "}
              <span className="text-[#c39967]">
                One Accountable Team
              </span>
            </h2>

            {/* 3. Narrative Copy */}
            <p
              className={`text-xs sm:text-sm text-[#4b5563] leading-relaxed transition-all duration-700 delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              BricketX Project Management LLC-FZ is a Dubai-based company offering digital project management, advertising, and business consultancy services. We help businesses across the UAE deliver technology projects on time, reach prime audiences through billboard and digital campaigns, and optimize strategic operations under one cohesive team.
            </p>

            {/* 4. Core Highlights Checklist */}
            <div
              className={`space-y-2 pt-1 transition-all duration-700 delay-400 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-[#1e293b]">
                  <CheckCircle2 className="w-4 h-4 text-[#c39967] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 5. Performance Metric Counters */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 transition-all duration-700 delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#c39967]/50 transition-colors"
                >
                  <div className="text-xl font-black text-[#c39967] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#111827] mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-[#94a3b8] mt-0.5 leading-tight">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* 6. Action Button Links */}
            <div
              className={`pt-3 flex flex-wrap items-center gap-4 transition-all duration-700 delay-600 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] px-5 py-3 rounded-lg shadow-sm transition-all font-sans active:scale-[0.98]"
              >
                <span>Book an Introductory Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#111827] hover:text-[#c39967] px-2 py-3 transition-colors font-sans"
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