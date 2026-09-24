// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-3 sm:py-4 px-4 sm:px-6 lg:px-8"
          : "py-5 sm:py-6 px-4 sm:px-6 lg:px-8 bg-transparent"
      }`}
    >
      {/* Floating Precision Glass Dock */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out rounded-2xl relative ${
          isScrolled
            ? "bg-[#070a11]/80 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65)] ring-1 ring-white/10 px-4 sm:px-6 py-2.5"
            : "px-0 py-0"
        }`}
      >
        {/* Dynamic Bezel Prismatic Hairline (Active on Scroll) */}
        {isScrolled && (
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/80 to-transparent pointer-events-none shadow-[0_0_8px_#c39967]" />
        )}

        <div className="flex items-center justify-between">
          
          {/* 1. Brand Identity */}
          <div className="flex items-center gap-3">
            <Logo variant="light" />
          </div>

          {/* 2. Executive Navigation Dock (Desktop) */}
          <nav
            onMouseLeave={() => setHoveredIdx(null)}
            className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-inner relative"
          >
            {navLinks.map((link, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isHovered
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {/* Subtle Floating Pill Glow on Hover */}
                  {isHovered && (
                    <span className="absolute inset-0 rounded-full bg-[#c39967]/15 border border-[#c39967]/30 transition-all -z-10 shadow-[0_0_12px_rgba(195,153,103,0.3)]" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Executive Action Suite (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* UAE Direct Line with Live Pulse Indicator */}
            <a
              href="tel:+971541662352"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#c39967]/40 hover:bg-white/[0.06] transition-all group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <Phone className="w-3.5 h-3.5 text-[#c39967] group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white tracking-tight">
                +971 54 166 2352
              </span>
            </a>

            {/* Premium Gold CTA */}
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#070a11] bg-gradient-to-r from-[#c39967] via-[#e2c5a2] to-[#c39967] hover:brightness-110 hover:shadow-[0_0_24px_rgba(195,153,103,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-sans shadow-md cursor-pointer overflow-hidden group"
            >
              {/* Shimmer line inside button */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* 4. Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#c39967] p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xl focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Frosted Glass Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto rounded-2xl bg-[#070a11]/95 backdrop-blur-3xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-medium text-slate-200 hover:text-[#c39967] hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <a
              href="tel:+971541662352"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-semibold text-slate-200"
            >
              <Phone className="w-4 h-4 text-[#c39967]" />
              <span>+971 54 166 2352</span>
            </a>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#070a11] bg-gradient-to-r from-[#c39967] via-[#e2c5a2] to-[#c39967] shadow-lg transition-all font-sans"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}