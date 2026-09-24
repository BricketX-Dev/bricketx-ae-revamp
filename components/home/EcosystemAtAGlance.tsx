// src/components/home/EcosystemAtAGlance.tsx
import {
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
  BarChart3,
  Network,
  ArrowUpRight,
} from "lucide-react";

export default function EcosystemAtAGlance() {
  const benefits = [
    {
      id: "01",
      title: "End-to-End Delivery",
      desc: "Single-vendor accountability from strategy through handover.",
      icon: Briefcase,
    },
    {
      id: "02",
      title: "UAE Licensed Entity",
      desc: "Full regulatory compliance across municipal & federal decrees.",
      icon: ShieldCheck,
    },
    {
      id: "03",
      title: "3 Integrated Pillars",
      desc: "Unified synergy across PM, Advertising & Strategic Advisory.",
      icon: Layers,
    },
    {
      id: "04",
      title: "High-Impact Media",
      desc: "Prime billboard concessions & regional digital acquisition.",
      icon: Sparkles,
    },
    {
      id: "05",
      title: "Transparent Reporting",
      desc: "Direct stakeholder dashboards with zero milestone ambiguity.",
      icon: BarChart3,
    },
    {
      id: "06",
      title: "Unified Leadership",
      desc: "Direct executive governance eliminating vendor silos.",
      icon: Network,
    },
  ];

  return (
    <section
      id="ecosystem"
      className="relative z-20 -mt-10 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Precision Dark Frosted Panel with Ambient Halo */}
      <div className="relative group/panel bg-[#0b0f17]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-white/10 text-white overflow-hidden transition-all duration-300">
        
        {/* Animated Top Gold Gradient Hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-90 shadow-[0_0_12px_rgba(195,153,103,0.6)]" />

        {/* Subtle Background Radial Light Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#c39967]/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="p-6 sm:p-8 lg:p-9 relative z-10">
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 mb-6 sm:mb-7 gap-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39967]" />
              </span>
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white font-mono">
                The BricketX Advantage
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium tracking-wide">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Dubai, UAE • Enterprise Project Delivery</span>
            </div>
          </div>

          {/* 6 High-Performance Interactive Benefit Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c39967]/60 hover:bg-white/[0.04] hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle top edge glow on hover */}
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4">
                    {/* Glowing Icon Capsule */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] flex-shrink-0 group-hover:bg-[#c39967] group-hover:text-[#0b0f17] group-hover:shadow-[0_0_18px_rgba(195,153,103,0.45)] group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>

                    {/* Copy Block */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#c39967] transition-colors truncate">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors ml-2">
                          {item.id}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro Accent Indicator */}
                  <div className="mt-3.5 pt-2.5 border-t border-white/[0.04] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#c39967]">
                      Verified Standard
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#c39967] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}