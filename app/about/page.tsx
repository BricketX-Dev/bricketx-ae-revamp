// src/app/about/page.tsx
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutPillars from "@/components/about/AboutPillars";
import AboutGovernance from "@/components/about/AboutGovernance";
import AboutLeadershipCTA from "@/components/about/AboutLeadershipCTA";

export const metadata: Metadata = {
  title: "About Us | BricketX Project Management L.L.C",
  description:
    "Learn about BricketX Project Management L.L.C, our Dubai headquarters, three-pillar operating model, and institutional governance across the UAE.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090e]">
      <AboutHero />
      <AboutPillars />
      <AboutGovernance />
      <AboutLeadershipCTA />
    </main>
  );
}