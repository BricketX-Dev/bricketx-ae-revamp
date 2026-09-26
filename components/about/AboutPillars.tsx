// src/components/about/AboutPillars.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPillars() {
  const practices = [
    {
      num: "01",
      title: "Project Management",
      icon: "/images/icons/services/project-management.png", // Update path manually in /public
      href: "/services/project-management",
      buttonText: "Explore Project Management",
      summary:
        "End-to-end management of digital projects, web platforms and products, delivered on time and on budget with clear scope control.",
      deliverables: [
        "Project Planning & Timeline Management",
        "Quality Assurance & Testing",
        "Resource & Team Coordination",
        "Post-Launch Support & Maintenance",
      ],
    },
    {
      num: "02",
      title: "Advertising",
      icon: "/images/icons/services/advertising.png", // Update path manually in /public
      href: "/services/advertising",
      buttonText: "Explore Advertising",
      summary:
        "Billboard, outdoor and digital advertising that puts your brand in front of the right audience across Dubai and the UAE.",
      deliverables: [
        "Billboard & Outdoor Advertising",
        "Google Ads & SEO",
        "Social Media Marketing",
        "Lead Generation Campaigns",
      ],
    },
    {
      num: "03",
      title: "Business Consultancy",
      icon: "/images/icons/services/consulting.png", // Update path manually in /public
      href: "/services/business-consultancy",
      buttonText: "Explore Consultancy",
      summary:
        "Practical business consultancy that diagnoses what's slowing you down and builds a clear roadmap for leaner operations and growth.",
      deliverables: [
        "Business Strategy Consulting",
        "Process Optimization",
        "Feasibility Studies & Business Analysis",
        "Change Management",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#ffffff] text-[#111827] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                HOW WE WORK
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.16]">
              The Three-Pillar Delivery Model
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              Most businesses lose time and money juggling separate agencies, consultants and tech vendors. BricketX brings project management, advertising and business consultancy together under one accountable team in Dubai.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((p, idx) => (
            <ScrollReveal key={p.num} direction="up" distance={24} delay={idx * 100}>
              <div className="group p-7 sm:p-8 rounded-2xl border border-slate-200/90 bg-[#ffffff] hover:border-[#c39967]/70 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(195,153,103,0.1)]">
                <div>
                  {/* Top Bar: Icon + Monospace Pillar Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/60 group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={p.icon}
                        alt={p.title}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#94a3b8] group-hover:text-[#c39967] transition-colors">
                      Pillar {p.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5 leading-snug group-hover:text-[#c39967] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed mb-6 font-normal">
                    {p.summary}
                  </p>
                </div>

                <div>
                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8] block mb-2 font-medium">
                      What We Deliver:
                    </span>
                    {p.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Service Redirection Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#faf6f0] border border-[#c39967]/40 hover:bg-[#c39967] hover:border-[#c39967] hover:text-[#080b11] transition-all duration-200 font-sans shadow-2xs group/btn"
                    >
                      <span>{p.buttonText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#c39967] group-hover/btn:text-[#080b11] transition-colors" />
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}