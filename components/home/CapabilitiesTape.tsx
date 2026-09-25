// src/components/home/CapabilitiesTape.tsx
"use client";

import Image from "next/image";

export default function CapabilitiesTape() {
  const rowOne = [
    {
      title: "Enterprise Architecture & Infrastructure",
      category: "Digital PM",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Sheikh Zayed Road Outdoor Media Concessions",
      category: "OOH Media",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Corporate Governance & Project Delivery",
      category: "Governance",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Performance Advertising & Acquisition Funnels",
      category: "Acquisition",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Strategic Corporate Restructuring",
      category: "Consultancy",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const rowTwo = [
    {
      title: "Urban LED Concessions & Digital OOH",
      category: "Media Concessions",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Executive Milestone & SLA Oversight",
      category: "Milestone Audit",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Operational Workflow Diagnostics",
      category: "Advisory",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Digital Platform Engineering",
      category: "Platform Systems",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Omnichannel UAE Brand Launches",
      category: "Brand Rollout",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const marqueeOne = [...rowOne, ...rowOne];
  const marqueeTwo = [...rowTwo, ...rowTwo];

  return (
    <section className="relative py-12 lg:py-16 bg-[#07090e] border-y border-white/10 overflow-hidden">
      {/* Edge Gradient Scrims for seamless entry & exit */}
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

      <div className="space-y-2 sm:space-y-3">
        {/* Row 1: Sliding Left */}
        <div className="flex w-max animate-marquee-left pause-hover">
          {marqueeOne.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[420px] lg:w-[480px] h-[200px] sm:h-[240px] lg:h-[270px] flex-shrink-0 overflow-hidden group mr-2 sm:mr-3"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 340px, 480px"
                className="object-cover object-center brightness-90 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />

              {/* Natural Bottom Shadow Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Clean Overlaid Typography Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                  {item.category}
                </span>
                <p className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-max animate-marquee-right pause-hover">
          {marqueeTwo.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[420px] lg:w-[480px] h-[200px] sm:h-[240px] lg:h-[270px] flex-shrink-0 overflow-hidden group mr-2 sm:mr-3"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 340px, 480px"
                className="object-cover object-center brightness-90 group-hover:brightness-105 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />

              {/* Natural Bottom Shadow Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Clean Overlaid Typography Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                  {item.category}
                </span>
                <p className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-snug line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}