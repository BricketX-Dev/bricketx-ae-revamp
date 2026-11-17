// components/home/StrategicCollaborationSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import {
  COLLABORATION_META,
  DEVELOPMENT_PROJECTS,
} from "@/data/developmentProjects";

export default function StrategicCollaborationSection() {
  const featuredDevelopments = DEVELOPMENT_PROJECTS.slice(0, 3);

  return (
    <section
      id="strategic-partnership"
      className="py-16 sm:py-24 bg-[#ffffff] text-[#111827] border-b border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            1. EDITORIAL HEADER (Matches Homepage Section Cadence)
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-10 sm:pb-12 border-b border-slate-200/90">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                STRATEGIC COLLABORATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              In Collaboration with{" "}
              <span className="text-[#c39967]">
                {COLLABORATION_META.partnerName}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              BricketX Project Management LLC-FZ presents a curated portfolio of
              completed residential, commercial, and mixed-use developments
              across Sharjah, UAE-reflecting disciplined execution and enduring
              architectural value.
            </p>
          </div>
        </div>

        {/* ====================================================
            2. ARCHITECTURAL 3-COLUMN SHOWCASE
           ==================================================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredDevelopments.map((project, idx) => (
            <Link
              key={project.id}
              href="/partners"
              className="group flex flex-col rounded-xl border border-slate-200/90 bg-[#ffffff] overflow-hidden hover:border-[#c39967]/80 transition-colors duration-300"
            >
              {/* Clean Full-Color Photography (Zero Overlay Clutter) */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.titleEn} - ${project.location}, ${project.emirate}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Architectural Spec & Editorial Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Index + Location Meta Line */}
                  <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    <span>
                      0{idx + 1} · {project.location}, {project.emirate}
                    </span>
                    <span className="text-[#c39967] font-semibold">
                      {project.scaleBadge}
                    </span>
                  </div>

                  {/* Bilingual Title Row */}
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight group-hover:text-[#c39967] transition-colors">
                      {project.titleEn}
                    </h3>
                    <span
                      dir="rtl"
                      lang="ar"
                      className="text-xs sm:text-sm font-semibold text-slate-500 font-sans flex-shrink-0"
                    >
                      {project.titleAr}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-[#4b5563] leading-relaxed line-clamp-2 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Minimal Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{project.typeLabel} · Completed</span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-[#111827] group-hover:text-[#c39967] transition-colors">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ====================================================
            3. QUIET EXECUTIVE FOOTER STRIP
           ==================================================== */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-500">
            Showing 03 of 06 completed developments · Sharjah &amp; Dubai, UAE
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={COLLABORATION_META.profilePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111827] hover:text-[#c39967] transition-colors font-sans"
            >
              <FileText className="w-3.5 h-3.5 text-[#c39967]" />
              <span>Development Profile (PDF)</span>
            </a>

            <Link
              href="/partners/Sheikh-Rashid-Saqar-Al-Qasimi"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-colors font-sans"
            >
              <span>View All 6 Developments</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}