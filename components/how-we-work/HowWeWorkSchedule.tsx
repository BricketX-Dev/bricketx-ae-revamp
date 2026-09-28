// src/components/how-we-work/HowWeWorkSchedule.tsx
"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkSchedule() {
  const cadenceSchedule = [
    {
      frequency: "Daily",
      whatHappens: "Team check-ins to solve blockers quickly",
      whosInvolved: "Your project lead & our delivery team",
    },
    {
      frequency: "Weekly",
      whatHappens: "Progress and budget update",
      whosInvolved: "Your key contact & BricketX project lead",
    },
    {
      frequency: "Every Two Weeks",
      whatHappens: "Milestone review and quality sign-off",
      whosInvolved: "Your decision-makers & BricketX leadership",
    },
    {
      frequency: "Monthly",
      whatHappens: "Results review and next-step planning",
      whosInvolved: "Your leadership team & BricketX leadership",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#ffffff] border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-2xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                STAYING IN TOUCH
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
              How We Keep You Updated
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
              You&apos;ll never have to chase us for an update. Here&apos;s how and when we report on your project.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Table View */}
        <ScrollReveal direction="up" distance={20} delay={100}>
          <div className="hidden md:block rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f8f9fb] text-[#4b5563] font-mono uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-bold">Frequency</th>
                  <th className="py-4 px-6 font-bold">What Happens</th>
                  <th className="py-4 px-6 font-bold">Who&apos;s Involved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-[#111827]">
                {cadenceSchedule.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-[#c39967] whitespace-nowrap">
                      {row.frequency}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#111827]">
                      {row.whatHappens}
                    </td>
                    <td className="py-4 px-6 text-[#64748b]">
                      {row.whosInvolved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Native Card Deck */}
          <div className="md:hidden space-y-2.5">
            {cadenceSchedule.map((row, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200/90 bg-white shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[#c39967] text-xs">
                    {row.frequency}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Cadence
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#111827]">
                  {row.whatHappens}
                </div>
                <div className="text-[11px] text-[#64748b]">
                  {row.whosInvolved}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}