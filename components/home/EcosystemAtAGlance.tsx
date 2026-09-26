// src/components/home/EcosystemAtAGlance.tsx
import Image from "next/image";

export default function EcosystemAtAGlance() {
  const pillars = [
    {
      title: "End-to-End Governance",
      desc: "Single-vendor execution from scoping to delivery",
      icon: "/images/icons/ecosystem/governance.png", 
    },
    {
      title: "UAE Mainland Licensed",
      desc: "Full statutory compliance across municipal decrees",
      icon: "/images/icons/ecosystem/license.png", 
    },
    {
      title: "3 Integrated Practices",
      desc: "PM, OOH/Digital Media & Strategic Advisory",
      icon: "/images/icons/ecosystem/practices.png", 
    },
    {
      title: "Transparent Dashboards",
      desc: "Real-time milestones with zero stakeholder ambiguity",
      icon: "/images/icons/ecosystem/dashboards.png", 
    },
  ];

  return (
    <div
      id="ecosystem"
      className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28"
    >
      {/* Editorial Grounding Bar (Zero Heavy Card Boxes) */}
      <div className="relative pt-6 border-t border-white/10">
        {/* Subtle Gold Ambient Center Flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent shadow-[0_0_12px_rgba(195,153,103,0.8)]" />

        {/* 4 Pillars In Exactly One Clean Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/30 transition-all">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-4 h-4 object-contain brightness-95 group-hover:brightness-110 transition-all"
                />
              </div>

              <div className="space-y-0.5 min-w-0">
                <h3 className="text-xs sm:text-[13px] font-semibold text-white tracking-wide group-hover:text-[#c39967] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}