// src/app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Building2,
  Workflow,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Business Services in Dubai | BricketX UAE",
  description:
    "BricketX delivers digital project management, advertising and business consultancy services in Dubai. One accountable team for projects, brands & growth.",
};

export default function ServicesPage() {
  const practices = [
    {
      id: "project-management",
      badge: "SERVICE 01",
      footerStatTitle: "End-to-End Delivery",
      footerStatSub: "From Planning to Post-Launch Support",
      eyebrow: "SERVICE 01 · PROJECT MANAGEMENT",
      heading: "Project Management Services in Dubai",
      isH2: true,
      body: "We manage digital projects, web platforms and products from start to finish, with clear scope, realistic timelines and one accountable team keeping everything on track.",
      href: "/services/project-management",
      primaryCta: "EXPLORE PROJECT MANAGEMENT",
      img: "/images/services/project-management.webp", // Update path manually in /public
      icon: "/images/icons/services/project-management.png", // Update path manually in /public
      capabilities: [
        "Digital Project Management",
        "Project Execution & Delivery",
        "Product Development Management",
        "Quality Assurance",
        "Technology Project Planning",
        "Support & Maintenance",
      ],
    },
    {
      id: "advertising",
      badge: "SERVICE 02",
      footerStatTitle: "Outdoor + Digital",
      footerStatSub: "Billboards, Search & Social Under One Roof",
      eyebrow: "SERVICE 02 · ADVERTISING",
      heading: "Advertising Services in Dubai",
      isH2: false,
      body: "From billboards on Sheikh Zayed Road to Google Ads, SEO and social media, we put your brand in front of the right audience across the UAE and turn visibility into leads.",
      href: "/services/advertising",
      primaryCta: "EXPLORE ADVERTISING SERVICES",
      img: "/images/services/advertising.webp", // Update path manually in /public
      icon: "/images/icons/services/advertising.png", // Update path manually in /public
      capabilities: [
        "Billboard Advertising",
        "Google Ads",
        "Outdoor Advertising (OOH)",
        "SEO Services",
        "Digital Marketing",
        "Branding & Creative Design",
        "Social Media Marketing",
        "Lead Generation",
      ],
    },
    {
      id: "business-consultancy",
      badge: "SERVICE 03",
      footerStatTitle: "Strategy to Execution",
      footerStatSub: "Practical Roadmaps, Not Just Reports",
      eyebrow: "SERVICE 03 · BUSINESS CONSULTANCY",
      heading: "Business Consultancy Services in Dubai",
      isH2: false,
      body: "Our business consultants in Dubai help you find what's slowing growth, streamline operations and build a clear, practical roadmap for mainland and free zone businesses across the UAE.",
      href: "/services/business-consultancy",
      primaryCta: "EXPLORE BUSINESS CONSULTANCY",
      img: "/images/services/consulting.webp", // Update path manually in /public
      icon: "/images/icons/services/consulting.png", // Update path manually in /public
      capabilities: [
        "Business Strategy Consulting",
        "Digital Transformation Consulting",
        "Operations Consulting",
        "Change Management",
        "Process Optimization & SOPs",
        "Growth & Strategic Advisory",
        "Business Analysis & Feasibility Studies",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      
      {/* ========================================================
          1. REDESIGNED HERO: Executive Architectural Terminal
         ======================================================== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#07090e] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#c39967]/[0.05] blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-10 right-1/4 w-[450px] h-[300px] bg-[#c39967]/[0.03] blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Heading & Executive Thesis */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal direction="up" distance={18}>
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
                  <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                    OUR SERVICES
                  </span>
                </div>

                {/* H1 - No trailing dots, structured institutional rhythm */}
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]">
                  Business Services in Dubai <br />
                  <span className="text-[#c39967]">One Accountable Team</span>
                </h1>

                {/* Body */}
                <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  BricketX offers project management, advertising and business
                  consultancy services in Dubai. Instead of juggling multiple
                  vendors, you work with one team that plans, promotes and improves
                  your business across the UAE.
                </p>

                {/* Quick Navigation Anchor Links */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#project-management"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-sm"
                  >
                    <span>View All Practices</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors font-sans bg-white/[0.02]"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </ScrollReveal>
            </div>

            {/* Right Column: Institutional Terminal Dashboard */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" distance={24} delay={100}>
                <div className="rounded-2xl border border-white/15 bg-[#0b0f17] p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                  
                  {/* Top Terminal Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-[#c39967]" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                        PRACTICE MATRIX
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#c39967] bg-[#c39967]/10 px-2 py-0.5 rounded border border-[#c39967]/30">
                      UAE Mainland
                    </span>
                  </div>

                  {/* Practice Quick Jump Deck */}
                  <div className="space-y-3">
                    <a
                      href="#project-management"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#c39967]/50 hover:bg-white/[0.05] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#c39967]">01</span>
                        <div>
                          <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#c39967] transition-colors">
                            Project Management
                          </div>
                          <div className="text-[10.5px] text-slate-400 font-mono">
                            Digital, Web Platforms &amp; Testing
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#c39967] transition-colors" />
                    </a>

                    <a
                      href="#advertising"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#c39967]/50 hover:bg-white/[0.05] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#c39967]">02</span>
                        <div>
                          <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#c39967] transition-colors">
                            Advertising &amp; Media
                          </div>
                          <div className="text-[10.5px] text-slate-400 font-mono">
                            Billboards, Search &amp; Social
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#c39967] transition-colors" />
                    </a>

                    <a
                      href="#business-consultancy"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#c39967]/50 hover:bg-white/[0.05] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#c39967]">03</span>
                        <div>
                          <div className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#c39967] transition-colors">
                            Business Consultancy
                          </div>
                          <div className="text-[10.5px] text-slate-400 font-mono">
                            SOPs, Restructuring &amp; Growth
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#c39967] transition-colors" />
                    </a>
                  </div>

                  {/* Bottom Terminal Footnote */}
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Single Point of Contact
                    </span>
                    <span className="text-slate-500">100% Milestone SLA</span>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. DETAILED SERVICE CARDS (Clean Light Institutional Deck)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#f8f9fb] border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {practices.map((p, idx) => {
            const isAlt = idx % 2 === 1;

            return (
              <ScrollReveal
                key={p.id}
                direction="up"
                distance={30}
                delay={idx * 80}
              >
                <div
                  id={p.id}
                  className="rounded-2xl border border-slate-200/90 bg-[#ffffff] p-6 sm:p-9 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Media Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isAlt ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="rounded-xl overflow-hidden border border-slate-200/90 bg-slate-950 flex flex-col shadow-sm">
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                          <Image
                            src={p.img}
                            alt={p.heading}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                          {/* Image Badge */}
                          <div className="absolute top-3.5 left-3.5 z-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#07090e]/85 text-white text-[10.5px] font-mono uppercase tracking-wider backdrop-blur-xs border border-white/10">
                              <Image
                                src={p.icon}
                                alt={p.badge}
                                width={14}
                                height={14}
                                className="w-3.5 h-3.5 object-contain"
                              />
                              <span>{p.badge}</span>
                            </span>
                          </div>
                        </div>

                        {/* Image Footer Stat */}
                        <div className="p-4 bg-[#07090e] text-white flex items-center justify-between border-t border-white/10">
                          <div className="space-y-0.5">
                            <div className="text-sm font-bold font-mono text-[#c39967] tracking-tight">
                              {p.footerStatTitle}
                            </div>
                            <div className="text-[11px] text-slate-300 font-normal">
                              {p.footerStatSub}
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
                            <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Specification & Content Column */}
                    <div
                      className={`lg:col-span-7 space-y-4 ${
                        isAlt ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Eyebrow */}
                      <span className="text-[10.5px] font-mono font-bold tracking-widest text-[#c39967] uppercase block">
                        {p.eyebrow}
                      </span>

                      {/* Headings without trailing dots */}
                      {p.isH2 ? (
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
                          {p.heading}
                        </h2>
                      ) : (
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
                          {p.heading}
                        </h3>
                      )}

                      {/* Body */}
                      <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                        {p.body}
                      </p>

                      {/* What's Included Capabilities List */}
                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2.5 font-bold">
                          WHAT&apos;S INCLUDED:
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                          {p.capabilities.map((item, cIdx) => (
                            <div
                              key={cIdx}
                              className="flex items-start gap-2 text-xs font-medium text-slate-700 leading-snug"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4">
                        <Link
                          href={p.href}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-colors font-sans shadow-sm"
                        >
                          <span>{p.primaryCta}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-[#c39967] transition-colors px-2 py-3"
                        >
                          <span>Talk to Our Team</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. THE BRICKETX ADVANTAGE (Grounded Dark Action Terminal)
         ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="rounded-2xl bg-[#07090e] border border-white/10 p-8 sm:p-10 lg:p-14 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#c39967]" />
                    <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                      THE BRICKETX ADVANTAGE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Need More Than One Service?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                    Launching a new platform, promoting it with billboards and
                    digital ads, and improving your operations can all happen
                    together. We bring the right experts into one team, under one
                    agreement, with one point of contact.
                  </p>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all duration-200 font-sans shadow-md"
                  >
                    <span>GET A COMBINED PROPOSAL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}