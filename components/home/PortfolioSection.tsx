// src/components/home/PortfolioSection.tsx
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: "01",
      pillar: "Digital Project Management",
      title: "Enterprise Digital Platform & Infrastructure Rollout",
      location: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      summary:
        "End-to-end technical governance, agile milestone coordination, and architecture oversight for a regional UAE commercial ecosystem.",
      metric: "100% Milestone Compliance",
      metricIcon: CheckCircle2,
      tags: ["Digital Governance", "Architecture", "QA Audits"],
    },
    {
      id: "02",
      pillar: "Advertising & Media",
      title: "High-Impact Sheikh Zayed Road Billboard & Omni-Channel Campaign",
      location: "Dubai • Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Strategic billboard media acquisition, targeted digital ads, and high-conversion brand positioning across prime UAE commercial corridors.",
      metric: "3.2M+ Reach Generated",
      metricIcon: TrendingUp,
      tags: ["OOH Billboards", "Google Ads", "Brand Strategy"],
    },
    {
      id: "03",
      pillar: "Business Consulting",
      title: "Corporate Workflow Restructuring & Growth Modeling",
      location: "Business Bay, Dubai",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Organizational analysis, operational bottleneck elimination, and financial model engineering for a rapidly expanding UAE enterprise.",
      metric: "35% Operational Efficiency",
      metricIcon: Sparkles,
      tags: ["Process Engineering", "Advisory", "Growth Strategy"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Showcasing Our Impact <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
                Across the Emirates
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-[#64748b] max-w-sm leading-relaxed">
              Explore how disciplined project governance, prime media assets, and strategic consulting deliver tangible business outcomes.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#c39967] hover:bg-[#b28755] transition-all shadow-md self-start sm:self-auto whitespace-nowrap cursor-pointer"
            >
              <span>Discuss Your Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3-Column Visual Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((item) => {
            const MetricIcon = item.metricIcon;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:border-[#c39967]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-[#0b0f17]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
                      {item.pillar}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/70">
                      {item.id}
                    </span>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#c39967] text-white text-xs font-bold shadow-md">
                      <MetricIcon className="w-3.5 h-3.5" />
                      <span>{item.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#a5adb6] uppercase tracking-wider mb-2">
                      {item.location}
                    </div>

                    <h3 className="text-lg font-bold text-[#111827] mb-3 leading-snug group-hover:text-[#c39967] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6">
                      {item.summary}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-[#475569] bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#c39967] hover:text-[#b28755] transition-colors flex-shrink-0"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}