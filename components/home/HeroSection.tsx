// src/components/home/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center bg-[#07090e] text-white overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-32 lg:pb-36"
    >
      {/* 1. Visible Local Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 hero-zoom-bg">
        <Image
          src="/images/home/hero.webp"
          alt="Dubai Skyline Business District"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Soft Gradient Scrim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07090e]/80 via-[#07090e]/50 to-[#07090e] pointer-events-none" />

      {/* 3. Subtle Warm Ambient Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c39967]/15 blur-[150px] pointer-events-none rounded-full hero-glow-pulse" />

      {/* 4. Main Centered Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Drop Item 1: Eyebrow Capsule */}
        <div
          className="hero-drop inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full border border-[#c39967]/30 bg-[#c39967]/10 backdrop-blur-md mb-6 sm:mb-8 mx-auto shadow-sm max-w-[90vw] sm:max-w-none"
          style={{ animationDelay: "100ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] flex-shrink-0" />
          
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#c39967] whitespace-nowrap">
            Project Management
          </span>
          <span className="text-[#c39967]/40 text-xs select-none">•</span>
          
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#c39967] whitespace-nowrap">
            Advertising
          </span>
          <span className="text-[#c39967]/40 text-xs select-none">•</span>
          
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#c39967] whitespace-nowrap">
            Business Consultancy
          </span>
        </div>

        {/* Drop Item 2: H1 Heading */}
        <div className="overflow-hidden">
          <h1
            className="hero-drop text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto"
            style={{ animationDelay: "220ms" }}
          >
            Project Management &amp; Advertising Company in Dubai,{" "}
            <span className="inline-block">
              Built{" "}
              <span className="text-[#c39967]">
                for Growth
              </span>
            </span>
          </h1>
        </div>

        {/* Drop Item 3: Subheading */}
        <div className="overflow-hidden mt-5 sm:mt-6">
          <p
            className="hero-drop text-xs sm:text-base lg:text-[18px] text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto px-2 sm:px-0"
            style={{ animationDelay: "360ms" }}
          >
            BricketX UAE is a Dubai-based project management, advertising and business consultancy company. We help UAE businesses deliver projects on time, reach the right audience and grow with confidence.
          </p>
        </div>

        {/* Drop Item 4: Trust Chips with Direct Verification */}
        <div
          className="hero-drop mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-[#a5adb6]"
          style={{ animationDelay: "480ms" }}
        >
          {/* Interactive Licensed Pill */}
          <div className="relative group inline-flex">
            <a
              href="https://app.invest.dubai.ae/dul/dul-ET3713?bk=1"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify Official License on Invest in Dubai"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#c39967]/60 hover:bg-white/[0.08] backdrop-blur-sm whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c39967] flex-shrink-0" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs">
                Licence No. 2540036.01
              </span>
              
              {/* Micro Verify Badge */}
              <span className="inline-flex items-center gap-0.5 text-[9px] font-mono uppercase tracking-wider text-[#c39967] bg-[#c39967]/15 border border-[#c39967]/30 px-1.5 py-0.5 rounded-full font-semibold group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors">
                Verify
                <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* Hover Tooltip (Zero Layout Shift) */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0b0f17] border border-white/15 text-[10px] text-slate-200 shadow-xl pointer-events-none whitespace-nowrap z-30 font-mono animate-in fade-in duration-150">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span>Invest in Dubai (Gov.ae) Verified</span>
            </div>
          </div>

          <span className="text-white/20 select-none">•</span>

          {/* Location Chip */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c39967] flex-shrink-0" />
            <span className="text-white/90 font-medium text-[10px] sm:text-xs">Port Saeed, Dubai</span>
          </div>
        </div>

        {/* Drop Item 5: Primary & Secondary CTAs */}
        <div
          className="hero-drop mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          style={{ animationDelay: "620ms" }}
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] hover:shadow-[0_0_25px_rgba(195,153,103,0.3)] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md font-sans"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white border border-white/15 hover:border-[#c39967] hover:text-[#c39967] hover:bg-white/[0.04] bg-white/[0.02] backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 group cursor-pointer font-sans"
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