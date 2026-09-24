// src/components/layout/Footer.tsx
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Digital Project Management", href: "/services/project-management" },
    { label: "Advertising & Media", href: "/services/advertising" },
    { label: "Business Consultancy", href: "/services/business-consultancy" },
  ];

  const portfolio = [
    { label: "Digital Projects", href: "/portfolio/digital-projects" },
    { label: "Advertising Campaigns", href: "/portfolio/advertising-campaigns" },
    { label: "Consulting Projects", href: "/portfolio/consulting-projects" },
  ];

  const navigation = [
    { label: "About Us", href: "#about" },
    { label: "Execution Process", href: "#process" },
    { label: "Sectors & Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
    { label: "Request Consultation", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#05070b] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#c39967]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Top Gold Border Hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Identity & Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              BricketX Project Management L.L.C is a premier Dubai-based holding firm integrating digital project management, strategic advertising concessions, and corporate growth consultancy across the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <span>UAE Licensed Commercial Entity</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <span>Business Bay, Dubai</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Practices (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
              Practices
            </span>
            <ul className="space-y-2.5 text-xs">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio Sectors (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
              Portfolio
            </span>
            <ul className="space-y-2.5 text-xs">
              {portfolio.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institutional Direct Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
              Direct Inquiries
            </span>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+971541662352"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white group transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono">+971 54 166 2352</span>
              </a>

              <a
                href="mailto:info@bricketx.ae"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white group transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>info@bricketx.ae</span>
              </a>

              <Link
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#d6b48a] transition-all font-sans"
              >
                <span>Book Executive Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} BricketX Project Management L.L.C. All rights reserved. Registered in Dubai, UAE.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/compliance" className="hover:text-slate-400 transition-colors">
              UAE Regulatory Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}