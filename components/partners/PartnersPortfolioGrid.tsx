// components/partners/PartnersPortfolioGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  DEVELOPMENT_PROJECTS,
  type DevelopmentCategory,
} from "@/data/developmentProjects";

export default function PartnersPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<DevelopmentCategory>("All");

  const categories: { label: DevelopmentCategory; count: number }[] = [
    { label: "All", count: DEVELOPMENT_PROJECTS.length },
    {
      label: "Residential",
      count: DEVELOPMENT_PROJECTS.filter((p) => p.category === "Residential").length,
    },
    {
      label: "Commercial",
      count: DEVELOPMENT_PROJECTS.filter((p) => p.category === "Commercial").length,
    },
    {
      label: "Mixed-Use",
      count: DEVELOPMENT_PROJECTS.filter((p) => p.category === "Mixed-Use").length,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? DEVELOPMENT_PROJECTS
      : DEVELOPMENT_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-14 sm:py-20 bg-[#f8f9fb] text-[#111827] border-b border-slate-200/90 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 mb-8 border-b border-slate-200/90">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                DEVELOPMENT EXPERIENCE · SHARJAH, UAE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
              Featured Real Estate{" "}
              <span className="text-[#c39967]">Developments</span>
            </h2>
          </div>

          {/* Sector Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveFilter(cat.label)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer font-sans ${
                    isActive
                      ? "bg-[#111827] text-white"
                      : "bg-[#ffffff] text-[#4b5563] border border-slate-200/90 hover:border-[#c39967]/70 hover:text-[#111827]"
                  }`}
                >
                  {cat.label}{" "}
                  <span className="font-mono text-[10.5px] opacity-75">
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile X-Axis Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-3">
          <span>Swipe horizontally to explore</span>
          <span className="text-[#c39967]">
            {filteredProjects.length.toString().padStart(2, "0")} Projects →
          </span>
        </div>

        {/* Mobile: Horizontal X-Axis Carousel | Tablet/Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group flex-shrink-0 w-[84%] sm:w-[68%] md:w-auto snap-start flex flex-col rounded-2xl border border-slate-200/90 bg-[#ffffff] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#c39967]/70 transition-all duration-300"
            >
              {/* 4:5 Portrait Architectural Container */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.titleEn}, ${project.location}, ${project.emirate}`}
                  fill
                  sizes="(max-width: 768px) 84vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    <span>
                      0{idx + 1} · {project.location}, {project.emirate}
                    </span>
                    <span className="text-[#c39967] font-semibold">
                      {project.scaleBadge}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight leading-snug group-hover:text-[#c39967] transition-colors">
                      {project.titleEn}
                    </h3>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="text-sm font-semibold text-slate-500 font-sans flex-shrink-0"
                    >
                      {project.titleAr}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>
                    {project.typeLabel} · {project.status}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-[#111827] group-hover:text-[#c39967] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}