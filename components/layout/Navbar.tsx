// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronDown,
  KanbanSquare,
  Megaphone,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const serviceItems = [
    {
      code: "PRACTICE 01",
      title: "Digital Project Management",
      desc: "Scope governance, critical-path milestones, and platform engineering.",
      href: "/services/project-management",
      icon: KanbanSquare,
    },
    {
      code: "PRACTICE 02",
      title: "Advertising & Media",
      desc: "Sheikh Zayed Rd billboards, transit concessions, and digital acquisition.",
      href: "/services/advertising",
      icon: Megaphone,
    },
    {
      code: "PRACTICE 03",
      title: "Business Consultancy",
      desc: "Operational restructuring, SOPs, and UAE commercial market entry.",
      href: "/services/business-consultancy",
      icon: TrendingUp,
    },
  ];

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "py-3 px-4 sm:px-6 lg:px-8"
          : "py-5 px-4 sm:px-6 lg:px-8 bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ease-out rounded-xl relative ${
          isScrolled
            ? "bg-[#070a11]/90 backdrop-blur-xl border border-white/10 shadow-lg px-4 sm:px-6 py-2.5"
            : "px-0 py-0"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* 1. Brand Identity */}
          <div className="flex items-center gap-3">
            <Logo variant="light" />
          </div>

          {/* 2. Executive Navigation Dock (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                pathname === "/"
                  ? "bg-[#c39967] text-[#070a11]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                pathname === "/about"
                  ? "bg-[#c39967] text-[#070a11]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Premium Two-Panel Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isServicesActive || servicesOpen
                    ? "bg-[#c39967] text-[#070a11]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Invisible bridge to prevent mouse-leave jitter */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[580px] h-3 pointer-events-auto ${
                  servicesOpen ? "block" : "hidden"
                }`}
              />

              {/* Editorial Two-Column Menu Panel */}
              {servicesOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] rounded-2xl bg-[#090d14] border border-white/10 shadow-2xl p-6 z-50 text-white animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left Architectural Summary Column */}
                    <div className="col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Layers className="w-3.5 h-3.5 text-[#c39967]" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#c39967] font-bold">
                            Integrated Scope
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          Unified Practice Delivery in Dubai
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-normal">
                          We manage project governance, media placements, and corporate advisory under single-vendor accountability[cite: 2].
                        </p>
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#c39967] hover:text-white transition-colors pt-3 border-t border-white/10 mt-4"
                      >
                        <span>All Practices Hub</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Right Practice Links Column */}
                    <div className="col-span-7 space-y-1.5 flex flex-col justify-center">
                      {serviceItems.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = pathname === item.href;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`group flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                              isCurrent
                                ? "bg-white/[0.08] border-[#c39967]/50"
                                : "bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/10"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                              <Icon className="w-4 h-4 stroke-[1.8]" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                                  {item.code}
                                </span>
                                <ArrowUpRight className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <h5 className="text-xs font-bold text-white group-hover:text-[#c39967] transition-colors truncate">
                                {item.title}
                              </h5>
                              <p className="text-[10.5px] text-slate-400 line-clamp-1 leading-snug mt-0.5 font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/how-we-work"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                pathname === "/how-we-work"
                  ? "bg-[#c39967] text-[#070a11]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              How We Work
            </Link>

            <Link
              href="/why-us"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                pathname === "/why-us"
                  ? "bg-[#c39967] text-[#070a11]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Why Us
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                pathname === "/contact"
                  ? "bg-[#c39967] text-[#070a11]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Executive Action Suite (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href="tel:+971541662352"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
              <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white tracking-tight">
                +971 54 166 2352
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#070a11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#c39967] p-2 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2.5 max-w-7xl mx-auto rounded-xl bg-[#070a11]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-xl space-y-2">
          <Link
            href="/"
            className={`block text-xs font-semibold px-3 py-2 rounded-lg ${
              pathname === "/" ? "bg-[#c39967] text-[#070a11]" : "text-slate-200"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`block text-xs font-semibold px-3 py-2 rounded-lg ${
              pathname === "/about" ? "bg-[#c39967] text-[#070a11]" : "text-slate-200"
            }`}
          >
            About
          </Link>

          {/* Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                isServicesActive ? "text-[#c39967]" : "text-slate-200"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pr-1 py-1 space-y-1 bg-white/[0.02] rounded-lg mt-1 border-l-2 border-[#c39967]">
                <Link
                  href="/services"
                  className="block text-[11px] font-mono uppercase tracking-wider text-[#c39967] px-2 py-1.5"
                >
                  All Services Overview →
                </Link>
                {serviceItems.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block text-xs text-slate-300 hover:text-white px-2 py-1.5"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/how-we-work"
            className={`block text-xs font-semibold px-3 py-2 rounded-lg ${
              pathname === "/how-we-work" ? "bg-[#c39967] text-[#070a11]" : "text-slate-200"
            }`}
          >
            How We Work
          </Link>

          <Link
            href="/why-us"
            className={`block text-xs font-semibold px-3 py-2 rounded-lg ${
              pathname === "/why-us" ? "bg-[#c39967] text-[#070a11]" : "text-slate-200"
            }`}
          >
            Why Us
          </Link>

          <Link
            href="/contact"
            className={`block text-xs font-semibold px-3 py-2 rounded-lg ${
              pathname === "/contact" ? "bg-[#c39967] text-[#070a11]" : "text-slate-200"
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:+971541662352"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-semibold text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#c39967]" />
              <span className="font-mono">+971 54 166 2352</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#070a11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors font-sans"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}