// src/components/home/PortfolioSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Megaphone, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mouse spotlight state per card
  const [mousePositions, setMousePositions] = useState<{
    [key: string]: { x: number; y: number };
  }>({});

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const portfolioCards = [
    {
      id: "01",
      title: "Digital Projects",
      desc: "Platforms, products and technology projects we have planned, managed and delivered end-to-end.",
      link: "/portfolio/digital-projects",
      linkText: "View Digital Projects",
      icon: Cpu,
      tag: "Technology & Infrastructure",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "100% SLA Compliance",
      highlightSub: "Enterprise Platforms & Web Apps",
    },
    {
      id: "02",
      title: "Advertising Campaigns",
      desc: "Billboard, outdoor and digital campaigns that put UAE brands in front of the right audience.",
      link: "/portfolio/advertising-campaigns",
      linkText: "View Campaigns",
      icon: Megaphone,
      tag: "OOH & Performance Media",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "3.2M+ Regional Reach",
      highlightSub: "Sheikh Zayed Rd & Digital Funnels",
    },
    {
      id: "03",
      title: "Consulting Projects",
      desc: "Strategy and operations engagements that helped UAE businesses work smarter and grow faster.",
      link: "/portfolio/consulting-projects",
      linkText: "View Consulting Work",
      icon: TrendingUp,
      tag: "Strategy & Operations",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      highlightMetric: "Measurable Impact",
      highlightSub: "Operational & Commercial Growth",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-24 lg:py-32 bg-[#06080d] text-white overflow-hidden"
    >
      {/* 1. Cinematic Background Image with Luminosity Blend */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=85')",
        }}
      />

      {/* 2. Deep Vignettes & Ambient Gold Halo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#06080d] via-[#06080d]/90 to-[#06080d] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c39967]/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8 border-b border-white/10 pb-12 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c39967] font-mono">
                OUR PORTFOLIO
              </span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Results That Speak for Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#f0d6b5] to-[#c39967]">
                Work in Dubai
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
              From digital projects delivered on schedule to campaigns seen across Dubai and consulting engagements that improved performance, our portfolio shows how BricketX turns plans into measurable outcomes.
            </p>
          </div>

          {/* Desktop Global CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] hover:shadow-[0_0_25px_rgba(195,153,103,0.35)] transition-all duration-200 group shadow-lg font-sans"
            >
              <span>SEE ALL OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3 High-End Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {portfolioCards.map((card, index) => {
            const Icon = card.icon;
            const mousePos = mousePositions[card.id] || { x: 0, y: 0 };
            const delayStyle = { transitionDelay: `${index * 150}ms` };

            return (
              <div
                key={card.id}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                style={delayStyle}
                className={`group relative flex flex-col justify-between rounded-2xl bg-[#0f141f]/90 border border-white/10 hover:border-[#c39967]/70 transition-all duration-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 overflow-hidden transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Dynamic Cursor Spotlight Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                  style={{
                    background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(195, 153, 103, 0.15), transparent 60%)`,
                  }}
                />

                {/* Top Subtle Gold Accent Reveal */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* Visual Imagery Header with Depth & Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f141f] via-[#0f141f]/45 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] group-hover:shadow-[0_0_15px_rgba(195,153,103,0.5)] transition-all duration-300 shadow-md">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-slate-300 group-hover:text-white transition-colors">
                      0{card.id}
                    </span>
                  </div>

                  {/* Bottom Metric Pill on Visual */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39967]" />
                      </span>
                      <span className="font-mono text-[#c39967]">{card.highlightMetric}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 relative z-20">
                  <div>
                    {/* Micro Domain Tag */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c39967] block mb-2 font-mono">
                      {card.tag}
                    </span>

                    {/* Card Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#c39967] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {card.highlightSub}
                    </span>

                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c39967] hover:text-white transition-colors group/link cursor-pointer font-sans"
                    >
                      <span>{card.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all shadow-md font-sans"
          >
            <span>SEE ALL OUR WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}