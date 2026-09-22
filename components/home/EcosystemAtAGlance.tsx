// src/components/home/EcosystemAtAGlance.tsx
import { MapPin, Building2, Users2, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function EcosystemAtAGlance() {
  const metrics = [
    {
      label: "Service Area",
      value: "Dubai, UAE",
      subtext: "All 7 Emirates Coverage",
      icon: MapPin,
    },
    {
      label: "Head Office",
      value: "Dubai",
      subtext: "Business Bay Central",
      icon: Building2,
    },
    {
      label: "Structure",
      value: "Unified Team",
      subtext: "Accountable Leadership",
      icon: Users2,
    },
    {
      label: "Core Offerings",
      value: "3 Pillars",
      subtext: "PM, Media & Advisory",
      icon: Layers,
    },
    {
      label: "Licensing",
      value: "UAE Licensed",
      subtext: "Full Regulatory Compliance",
      icon: ShieldCheck,
    },
    {
      label: "Delivery Model",
      value: "End-to-End",
      subtext: "Concept to Post-Delivery",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="ecosystem" className="relative z-20 -mt-10 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dark Luxury Glass Container */}
      <div className="bg-[#0f141d]/95 backdrop-blur-2xl rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden text-white">
        {/* Subtle Top Gold Hairline Flare */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-90" />

        <div className="p-6 sm:p-8 lg:p-9">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-5 mb-7 gap-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] shadow-[0_0_8px_#c39967]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                  Operational Blueprint
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Ecosystem at a Glance
              </h2>
            </div>
            <div className="text-xs text-slate-400 font-medium hidden md:block tracking-wide">
              BricketX Project Management L.L.C • Corporate Governance
            </div>
          </div>

          {/* Metric Cards Grid with Sleek Architectural Dividers */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-7 gap-x-4 lg:gap-x-0">
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group flex flex-col justify-between px-3 sm:px-4 transition-all duration-200 hover:-translate-y-0.5 ${
                    idx !== 0 ? "lg:border-l lg:border-white/10" : ""
                  }`}
                >
                  <div>
                    {/* Icon Pill + Label */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-7 h-7 rounded-md bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors duration-300">
                        <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-400 truncate">
                        {item.label}
                      </span>
                    </div>

                    {/* Value */}
                    <p className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-[#c39967] transition-colors">
                      {item.value}
                    </p>
                  </div>

                  {/* Micro Subtext */}
                  <p className="mt-1 text-[11px] text-slate-400 font-medium leading-snug">
                    {item.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}