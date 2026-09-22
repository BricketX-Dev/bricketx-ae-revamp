// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#14171c]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo variant="light" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#c39967] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+971541662352"
              className="text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              +971 54 166 2352
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-all shadow-md"
            >
              Request a Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-[#c39967] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14171c] border-b border-white/10 px-5 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-white/90 hover:text-[#c39967] py-2 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] rounded"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}