// src/components/home/PortfolioSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Megaphone, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioCards = [
    {
      id: "01",
      title: "Digital Projects",
      desc: "Platforms, products and technology projects we plan, manage and deliver end-to-end with disciplined milestones.",
      link: "/services/project-management",
      linkText: "Explore Digital Delivery",
      icon: Cpu,
      tag: "Technology & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "100% SLA Compliance",
    },
    {
      id: "02",
      title: "Advertising Campaigns",
      desc: "Billboard, outdoor and digital media activations that place UAE brands directly in front of the right audience.",
      link: "/services/advertising",
      linkText: "Explore Media & Campaigns",
      icon: Megaphone,
      tag: "OOH & Performance Media",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "3.2M+ Regional Reach",
    },
    {
      id: "03",
      title: "Consulting Engagements",
      desc: "Operational reviews and strategy frameworks designed to help UAE organizations eliminate bottlenecks and scale.",
      link: "/services/business-consultancy",
      linkText: "Explore Advisory Work",
      icon: TrendingUp,
      tag: "Strategy & Operations",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "Measurable Impact",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-14 lg:py-20 bg-[#090d14] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-12 gap-6 border-b border-white/10 pb-8 transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block mb-2">
              WHAT WE DELIVER
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
              Proven Capabilities Across{" "}
              <span className="text-[#c39967]">Dubai &amp; the UAE</span>
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Whether deploying high-compliance digital systems, securing prime outdoor media, or refining corporate operations, our team provides hands-on execution that turns objectives into tangible results.
            </p>
          </div>

          {/* Desktop Global CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Structured Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {portfolioCards.map((card, index) => {
            const Icon = card.icon;
            const delay = index * 100;

            return (
              <div
                key={card.id}
                style={{ transitionDelay: `${delay}ms` }}
                className={`group flex flex-col justify-between rounded-xl bg-[#0f1522] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* 16:9 Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/25" />

                  {/* Clean Corner Icon */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm border border-white/15 flex items-center justify-center text-[#c39967]">
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/75 text-[10px] font-mono font-medium text-slate-300 border border-white/10">
                      {card.highlightMetric}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c39967] block mb-1">
                      {card.tag}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#c39967] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/10">
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c39967] hover:text-white transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Global CTA */}
        <div className="flex justify-center lg:hidden">
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}