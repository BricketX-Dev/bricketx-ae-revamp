// src/app/why-us/page.tsx
import WhyUsHero from "@/components/why-us/WhyUsHero";
import WhyUsMetrics from "@/components/why-us/WhyUsMetrics";
import WhyUsComparison from "@/components/why-us/WhyUsComparison";
import WhyUsCTA from "@/components/why-us/WhyUsCTA";
import WhyUsDifferentiators from "@/components/why-us/WhyUsDifferentiators";

export const metadata = {
  title: "Why Choose BricketX | Single-Vendor Accountability in Dubai",
  description: "Discover why UAE businesses trust BricketX for project management, advertising, and consultancy under one unified agreement.",
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#111827]">
      <WhyUsHero />
      <WhyUsMetrics />
      <WhyUsDifferentiators />
      <WhyUsComparison />
      <WhyUsCTA />
    </main>
  );
}