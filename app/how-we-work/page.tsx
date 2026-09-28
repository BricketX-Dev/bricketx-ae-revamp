// src/app/how-we-work/page.tsx
import HowWeWorkHero from "@/components/how-we-work/HowWeWorkHero";
import HowWeWorkApproach from "@/components/how-we-work/HowWeWorkApproach";
import HowWeWorkProcess from "@/components/how-we-work/HowWeWorkProcess";
import HowWeWorkStandards from "@/components/how-we-work/HowWeWorkStandards";
import HowWeWorkSchedule from "@/components/how-we-work/HowWeWorkSchedule";
import HowWeWorkCTA from "@/components/how-we-work/HowWeWorkCTA";

export const metadata = {
  title: "How We Work | BricketX UAE",
  description: "Explore the step-by-step methodology behind our project management, advertising, and consultancy services in Dubai.",
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      <HowWeWorkHero />
      <HowWeWorkApproach />
      <HowWeWorkProcess />
      <HowWeWorkStandards />
      <HowWeWorkSchedule />
      <HowWeWorkCTA />
    </main>
  );
}