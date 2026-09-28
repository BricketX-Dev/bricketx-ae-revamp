// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import EcosystemAtAGlance from "@/components/home/EcosystemAtAGlance";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FaqSection from "@/components/home/FaqSection";
import CapabilitiesTape from "@/components/home/CapabilitiesTape";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-white">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Ecosystem */}
      <ScrollReveal direction="up" distance={30} threshold={0.2}>
        <EcosystemAtAGlance />
      </ScrollReveal>

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Capabilities Ticker */}
      <CapabilitiesTape />

      {/* 5. About */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <AboutSection />
      </ScrollReveal>

      {/* 6. Process Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ProcessSection />
      </ScrollReveal>

      {/* 7. Industries Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <IndustriesSection />
      </ScrollReveal>

      {/* 8. FAQ Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <FaqSection />
      </ScrollReveal>

      {/* 9. Contact Consultation CTA */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ContactCtaSection />
      </ScrollReveal>
    </main>
  );
}