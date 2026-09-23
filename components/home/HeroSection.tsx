// src/components/home/HeroSection.tsx
import Link from "next/link";
import { ArrowUpRight, Play, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-[#07090e] text-white overflow-hidden pt-28 pb-28 lg:pb-36"
    >
      {/* 1. Cinematic Skyline with Slow-Zoom Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center opacity-40 mix-blend-luminosity hero-zoom-bg pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* 2. Layered Vignette Overlays for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/90 md:via-[#07090e]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#07090e] via-transparent to-[#07090e]/70 pointer-events-none" />

      {/* 3. Breathing Golden Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[350px] bg-[#c39967] blur-[150px] pointer-events-none rounded-full hero-glow-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          
          {/* Main Hero Content */}
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div
              className="hero-fade-in inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8"
              style={{ animationDelay: "100ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39967]" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c39967]">
                Strategy
              </span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                Technology
              </span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
                Management
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="hero-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
              style={{ animationDelay: "250ms" }}
            >
              Building Smarter Solutions <br className="hidden sm:inline" />
              for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#f0d6b5] to-[#c39967] text-gold-shimmer">
                Stronger Future
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p
              className="hero-fade-in mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
              style={{ animationDelay: "400ms" }}
            >
              BricketX UAE is a forward-thinking project management and consulting firm.
              We partner with businesses to transform complex digital initiatives, strategic advertising,
              and operational visions into measurable, sustainable growth.
            </p>

            {/* Trust Badge */}
            <div
              className="hero-fade-in mt-6 flex items-center gap-6 text-xs text-[#a5adb6]"
              style={{ animationDelay: "550ms" }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c39967]" />
                <span>UAE Licensed &amp; Accountable</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div>Dubai Headquartered</div>
            </div>

            {/* Action Buttons */}
            <div
              className="hero-fade-in mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
              style={{ animationDelay: "700ms" }}
            >
              <Link
                href="#contact"
                className="px-7 py-3.5 rounded text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] hover:shadow-xl hover:shadow-[#c39967]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-[#c39967]/25 flex items-center gap-2 group cursor-pointer"
              >
                Request a Consultation
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#services"
                className="px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider text-white/90 border border-white/15 hover:border-[#c39967] hover:text-[#c39967] hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 bg-white/[0.03] backdrop-blur-sm transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#c39967]/20 transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current text-[#c39967] ml-0.5" />
                </div>
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Upgraded Dubai Geographic & Status Anchor (Never cut, aligned to grid) */}
          <div
            className="hero-fade-in hidden lg:flex flex-col items-end pb-2 select-none"
            style={{ animationDelay: "850ms" }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-right group hover:border-[#c39967]/40 transition-colors">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c39967] font-semibold">
                  25.2048° N, 55.2708° E
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-white/90 flex items-center gap-1.5 mt-0.5">
                  Dubai, United Arab Emirates
                </span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967]">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}