// src/components/home/ServicesSection.tsx
import Link from "next/link";
import { KanbanSquare, Megaphone, TrendingUp, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Digital Project Management",
      badge: "Governance & Delivery",
      icon: KanbanSquare,
      desc: "Structured planning, technical roadmap coordination, and end-to-end milestone execution for mission-critical digital initiatives across the UAE.",
      tags: ["Planning & Roadmaps", "Digital Transformation", "QA & Governance", "Risk Control"],
    },
    {
      id: "02",
      title: "Advertising & Media",
      badge: "Market Visibility",
      icon: Megaphone,
      featured: true,
      desc: "High-impact brand positioning, outdoor billboard campaigns (OOH), and targeted digital performance marketing that connect with UAE decision-makers.",
      tags: ["Outdoor & Billboards", "Google & Social Ads", "SEO & Brand Strategy", "Creative Media"],
    },
    {
      id: "03",
      title: "Business Consulting",
      badge: "Strategic Advisory",
      icon: TrendingUp,
      desc: "Pragmatic advisory to resolve workflow bottlenecks, optimize operating margins, and architect scalable frameworks for sustainable corporate growth.",
      tags: ["Process Optimization", "Workflow Analysis", "Strategic Advisory", "Change Management"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-28 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Three Core Services. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
                One Reliable Partner.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] max-w-md leading-relaxed">
            Delivering measurable value at every milestone—from strategic advisory to digital execution and high-visibility regional media campaigns.
          </p>
        </div>

        {/* 3-Pillar Cards Grid with Enhanced Depth & Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  service.featured
                    ? "bg-[#faf8f5] border-2 border-[#c39967]/70 shadow-[0_16px_40px_rgba(195,153,103,0.12)] ring-1 ring-[#c39967]/30"
                    : "bg-[#fcfdfe] border border-slate-200/90 hover:border-[#c39967]/60 hover:shadow-xl hover:bg-white"
                }`}
              >
                {/* Top Subtle Gold Flare on Featured Card */}
                {service.featured && (
                  <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent" />
                )}

                <div>
                  {/* Top: Icon & Pillar Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c39967]/15 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pillar</span>
                      <span className="text-xl font-black text-slate-300 group-hover:text-[#c39967] transition-colors">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c39967] block mb-1">
                    {service.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#c39967] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* 2x2 Tag Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-[#334155] bg-white border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200/70">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#c39967] transition-colors"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c39967] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}