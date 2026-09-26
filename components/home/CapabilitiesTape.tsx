// src/components/home/CapabilitiesTape.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CapabilitiesTape() {
  // 6 Specified Deliverables
  const deliverables = [
    {
      title: "Digital Projects",
      desc: "Platforms, products and technology projects we plan, manage and deliver end-to-end.",
      link: "/services/project-management",
      linkText: "View Digital Projects",
      img: "/images/capabilities/digital-projects.webp", // Update path manually in /public
    },
    {
      title: "Advertising Campaigns",
      desc: "Billboard, outdoor and digital campaigns that put UAE brands in front of the right audience.",
      link: "/services/advertising",
      linkText: "View Campaigns",
      img: "/images/capabilities/advertising-campaigns.webp", // Update path manually in /public
    },
    {
      title: "Consulting Projects",
      desc: "Strategy and operations engagements that helped UAE businesses work smarter and grow faster.",
      link: "/services/business-consultancy",
      linkText: "View Consulting Work",
      img: "/images/capabilities/consulting-projects.webp", // Update path manually in /public
    },
    {
      title: "Branding & Creative",
      desc: "Brand identities, visual design and ad creatives that give UAE businesses a look people remember.",
      link: "/services/advertising",
      linkText: "View Branding Work",
      img: "/images/capabilities/branding-creative.webp", // Update path manually in /public
    },
    {
      title: "SEO & Performance Marketing",
      desc: "SEO, Google Ads and social campaigns that grew traffic, visibility and qualified leads.",
      link: "/services/advertising",
      linkText: "View Growth Results",
      img: "/images/capabilities/seo-performance.webp", // Update path manually in /public
    },
    {
      title: "Digital Transformation",
      desc: "Roadmaps and system upgrades that helped businesses modernise operations and move faster.",
      link: "/services/project-management",
      linkText: "View Transformation Work",
      img: "/images/capabilities/digital-transformation.webp", // Update path manually in /public
    },
  ];

  // Distribute across both directions and duplicate for continuous seamless infinite looping
  const rowOne = [...deliverables, ...deliverables];
  const rowTwo = [...deliverables.slice().reverse(), ...deliverables.slice().reverse()];

  return (
    <section className="relative py-12 lg:py-16 bg-[#07090e] border-y border-white/10 overflow-hidden">
      {/* Edge Gradient Scrims for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#07090e] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#07090e] to-transparent z-20 pointer-events-none" />

      {/* Clean Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
            Active Practice Artifacts &amp; Operational Scope
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono tracking-wider uppercase hidden sm:inline">
          Dubai • Abu Dhabi • Regional GCC
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {/* Row 1: Sliding Left */}
        <div className="flex w-max animate-marquee-left pause-hover">
          {rowOne.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[220px] sm:h-[250px] lg:h-[270px] flex-shrink-0 overflow-hidden group mr-3 sm:mr-4 rounded-xl border border-white/10 bg-[#0f141f]"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 340px, 460px"
                className="object-cover object-center brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />

              {/* Natural Deep Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h4>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal mt-1 line-clamp-2">
                  {item.desc}
                </p>

                <div className="pt-2.5 mt-2 border-t border-white/10">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#c39967] hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-max animate-marquee-right pause-hover">
          {rowTwo.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[420px] lg:w-[460px] h-[220px] sm:h-[250px] lg:h-[270px] flex-shrink-0 overflow-hidden group mr-3 sm:mr-4 rounded-xl border border-white/10 bg-[#0f141f]"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 340px, 460px"
                className="object-cover object-center brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />

              {/* Natural Deep Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h4>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal mt-1 line-clamp-2">
                  {item.desc}
                </p>

                <div className="pt-2.5 mt-2 border-t border-white/10">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#c39967] hover:text-white transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}