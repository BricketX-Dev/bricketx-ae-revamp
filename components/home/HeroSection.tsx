// src/components/home/HeroSection.tsx
import Link from "next/link";
import { ArrowUpRight, Play, ShieldCheck, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center bg-[#07090e] text-white overflow-hidden pt-32 pb-32 lg:pb-40"
    >
      {/* 1. Centered High-Resolution Cinematic Skyline with Slow Zoom */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity hero-zoom-bg pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* 2. Symmetrical Radial & Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e] via-[#07090e]/75 to-[#07090e] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(195,153,103,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* 3. Center Atmospheric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c39967]/15 blur-[160px] pointer-events-none rounded-full hero-glow-pulse" />

      {/* 4. Main Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Drop Item 1: Eyebrow Tags */}
        <div
          className="hero-drop inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8 mx-auto shadow-lg"
          style={{ animationDelay: "100ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39967]" />
          </span>
          <span className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-[#c39967]">
            Project Management
          </span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-white/90">
            Advertising
          </span>
          <span className="text-white/20 text-xs">•</span>
          <span className="text-[10.5px] font-bold tracking-[0.22em] uppercase text-white/90">
            Investment
          </span>
        </div>

        {/* Drop Item 2: H1 Heading */}
        <div className="overflow-hidden">
          <h1
            className="hero-drop text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] max-w-4xl mx-auto"
            style={{ animationDelay: "220ms" }}
          >
            Project Management &amp; Advertising Company in Dubai,{" "}
            <span className="inline-block">
              Built{" "}
              <span className="gold-gradient-text drop-shadow-[0_4px_24px_rgba(195,153,103,0.3)]">
                for Growth
              </span>
            </span>
          </h1>
        </div>

        {/* Drop Item 3: Subheading */}
        <div className="overflow-hidden mt-6">
          <p
            className="hero-drop text-base sm:text-lg lg:text-[19px] text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
            style={{ animationDelay: "360ms" }}
          >
            BricketX UAE is a Dubai-based project management, advertising and business consultancy company. We help UAE businesses deliver projects on time, reach the right audience and grow with confidence.
 
          </p>
        </div>

        {/* Drop Item 4: Trust Chips */}
        <div
          className="hero-drop mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#a5adb6]"
          style={{ animationDelay: "480ms" }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-[#c39967] flex-shrink-0" />
            <span className="text-white/90 font-medium">UAE Licensed Company</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#c39967] flex-shrink-0" />
            <span className="text-white/90 font-medium">Headquartered in Business Bay, Dubai</span>
          </div>
        </div>

        {/* Drop Item 5: Primary & Secondary CTAs */}
        <div
          className="hero-drop mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          style={{ animationDelay: "620ms" }}
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#d6b48a] hover:shadow-[0_0_30px_rgba(195,153,103,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-lg font-sans"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white border border-white/15 hover:border-[#c39967] hover:text-[#c39967] hover:bg-white/[0.04] hover:-translate-y-0.5 active:translate-y-0 bg-white/[0.02] backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer font-sans"
          >
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#c39967]/20 transition-colors">
              <Play className="w-2.5 h-2.5 fill-current text-[#c39967] ml-0.5" />
            </div>
            <span>EXPLORE OUR SERVICES</span>
          </Link>
        </div>

      </div>
    </section>
  );
}