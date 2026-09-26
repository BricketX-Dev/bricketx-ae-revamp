// src/components/layout/Footer.tsx
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Project Management", href: "/services/project-management" },
    { label: "Advertising & Media", href: "/services/advertising" },
    { label: "Business Consultancy", href: "/services/business-consultancy" },
    { label: "All Practices Hub", href: "/services" },
  ];

  const company = [
    { label: "About BricketX", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bricketx-uae",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bricketx",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/bricketx/",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/bricketxuae",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/bricketx/",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.94-.13-2.38.03-3.41.14-.93.9-3.83.9-3.83s-.23-.46-.23-1.14c0-1.07.62-1.87 1.4-1.87.66 0 .97.49.97 1.09 0 .66-.42 1.65-.64 2.57-.18.77.39 1.39 1.15 1.39 1.38 0 2.44-1.46 2.44-3.56 0-1.86-1.34-3.16-3.25-3.16-2.22 0-3.52 1.66-3.52 3.38 0 .67.26 1.39.58 1.78.06.08.07.15.05.23-.06.24-.19.78-.22.89-.04.14-.12.17-.28.1-1.05-.49-1.7-2.02-1.7-3.25 0-2.65 1.93-5.08 5.56-5.08 2.92 0 5.19 2.08 5.19 4.86 0 2.9-1.83 5.23-4.37 5.23-.85 0-1.65-.44-1.93-.96l-.52 2c-.19.73-.7 1.65-1.04 2.2A12 12 0 1 0 12 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#05070b] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[200px] sm:h-[250px] bg-[#c39967]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Top Gold Border Hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-14 border-b border-white/10">
          
          {/* Column 1: Identity & Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              BricketX UAE PM LLC-FZ is a Dubai-based holding firm integrating digital project management, strategic advertising concessions, and corporate growth consultancy across the UAE under single-vendor accountability.
            </p>

            {/* Badges: Horizontal pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <span>Licensed LLC-FZ</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <span>Port Saeed, Dubai</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#c39967] hover:border-[#c39967]/50 hover:bg-white/10 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Combined Navigation on Mobile (2 columns side-by-side to save massive vertical space) */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Practices */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-3.5">
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
                Practices
              </span>
              <ul className="space-y-2 sm:space-y-2.5 text-xs">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-3.5">
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
                Company
              </span>
              <ul className="space-y-2 sm:space-y-2.5 text-xs">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Direct Inquiries (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-3.5 pt-2 lg:pt-0">
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-[#c39967] uppercase block">
              Direct Desk
            </span>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3 text-xs">
              <a
                href="tel:+971541662352"
                className="flex items-center gap-2 text-slate-300 hover:text-[#c39967] group transition-colors py-1"
              >
                <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors flex-shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="font-mono text-[11px]">+971 54 166 2352</span>
              </a>

              <a
                href="mailto:info@bricketx.ae"
                className="flex items-center gap-2 text-slate-300 hover:text-[#c39967] group transition-colors py-1"
              >
                <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors flex-shrink-0">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-[11px]">info@bricketx.ae</span>
              </a>

              <Link
                href="/contact"
                className="mt-1 sm:mt-0 lg:mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#d6b48a] transition-all font-sans active:scale-[0.98]"
              >
                <span>Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="text-[11px] sm:text-xs">
            © {currentYear} BricketX UAE PM LLC-FZ. Registered in Dubai, UAE.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Dubai Office
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}