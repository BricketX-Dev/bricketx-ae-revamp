// src/components/how-we-work/HowWeWorkSchedule.tsx
"use client";

import Image from "next/image";
import { Users, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkSchedule() {
  const cadenceSchedule = [
    {
      frequency: "Daily",
      label: "Standup & Blocker Sync",
      icon: "/images/icons/how-we-work/cadence/daily.png", // Update path manually in /public
      whatHappens: "Direct team check-in to clear roadblocks, review 24-hour sprint deliverables, and maintain critical-path velocity.",
      whosInvolved: "Your Project Lead & Our Delivery Team",
      output: "Active Kanban Board Updates",
    },
    {
      frequency: "Weekly",
      label: "Progress & Burn Rate",
      icon: "/images/icons/how-we-work/cadence/weekly.png", // Update path manually in /public
      whatHappens: "Structured operational briefing covering milestone progress, media launch schedules, and current budget allocation.",
      whosInvolved: "Your Key Contact & BricketX Project Director",
      output: "Written Weekly Burndown Report",
    },
    {
      frequency: "Fortnightly",
      label: "Milestone Quality Gate",
      icon: "/images/icons/how-we-work/cadence/fortnightly.png", // Update path manually in /public
      whatHappens: "Formal deliverable demonstration, staging site audits, or media permit verifications required prior to budget milestone release.",
      whosInvolved: "Your Decision-Makers & BricketX Leadership",
      output: "Signed Milestone Sign-Off Sheet",
    },
    {
      frequency: "Monthly",
      label: "Executive Strategic Review",
      icon: "/images/icons/how-we-work/cadence/monthly.png", // Update path manually in /public
      whatHappens: "High-level performance analysis, campaign ROI reviews, and strategic planning for upcoming quarters and resource needs.",
      whosInvolved: "Your C-Suite / Leadership & BricketX Partners",
      output: "Executive Governance Memorandum",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#ffffff] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-10 sm:mb-16">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                COMMUNICATION CADENCE
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              How We Keep You Updated
            </h3>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              You will never have to chase us for an update. Every project is anchored by a structured communication rhythm with defined outputs at each level of governance.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Command Board View (Hidden on mobile) */}
        <div className="hidden lg:block space-y-3.5">
          {cadenceSchedule.map((item, idx) => (
            <ScrollReveal key={item.frequency} direction="up" distance={15} delay={idx * 50}>
              <div className="group rounded-2xl bg-[#ffffff] border border-slate-200/90 p-5 sm:p-6 hover:border-[#c39967]/70 hover:shadow-[0_8px_30px_rgba(195,153,103,0.08)] transition-all duration-300">
                <div className="grid grid-cols-12 gap-6 items-center">
                  
                  {/* Col 1: Frequency, Custom Icon & Tag (3.5 cols) */}
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2.5 flex-shrink-0 group-hover:scale-105 group-hover:bg-[#c39967]/15 group-hover:border-[#c39967]/60 transition-all duration-300">
                      <Image
                        src={item.icon}
                        alt={item.frequency}
                        width={26}
                        height={26}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono font-bold uppercase tracking-wider text-[#c39967]">
                          {item.frequency}
                        </span>
                        <span className="text-[9.5px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          SLA Gate
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#111827]">
                        {item.label}
                      </div>
                    </div>
                  </div>

                  {/* Col 2: Agenda & Scope (5 cols) */}
                  <div className="col-span-5 pr-4 border-l border-slate-100 pl-6">
                    <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-normal">
                      {item.whatHappens}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967]" />
                      <span>Formal Output: <strong className="text-[#111827]">{item.output}</strong></span>
                    </div>
                  </div>

                  {/* Col 3: Stakeholders (3 cols) */}
                  <div className="col-span-3 border-l border-slate-100 pl-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Participants
                    </span>
                    <div className="flex items-start gap-2 text-xs font-medium text-[#111827] leading-snug">
                      <Users className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0 mt-0.5" />
                      <span>{item.whosInvolved}</span>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile & Tablet Card Deck (Hidden on desktop) */}
        <div className="lg:hidden space-y-4">
          {cadenceSchedule.map((item, idx) => (
            <ScrollReveal key={item.frequency} direction="up" distance={20} delay={idx * 60}>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs relative overflow-hidden space-y-4">
                {/* Left Gold Accent Stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c39967]" />

                {/* Card Header with Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2 flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.frequency}
                        width={22}
                        height={22}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-mono font-bold text-xs uppercase tracking-wider text-[#c39967] block">
                        {item.frequency}
                      </span>
                      <span className="text-xs font-bold text-[#111827]">
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    SLA
                  </span>
                </div>

                {/* Agenda */}
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Agenda & Focus
                  </span>
                  <p className="text-xs text-[#4b5563] leading-relaxed">
                    {item.whatHappens}
                  </p>
                </div>

                {/* Deliverable & Participants Footer */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                    <span>Output: <strong className="text-[#111827]">{item.output}</strong></span>
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-[#4b5563]">
                    <Users className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>{item.whosInvolved}</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}