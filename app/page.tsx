// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import EcosystemAtAGlance from "@/components/home/EcosystemAtAGlance";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07090e] text-white">
      
      {/* 1. Hero starts on load because it is above the fold */}
      <HeroSection />

      {/* 2. Ecosystem Ticker Reveal */}
      <ScrollReveal direction="up" distance={30} threshold={0.2}>
        <EcosystemAtAGlance />
      </ScrollReveal>

      {/* 3. About Section Reveal */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <AboutSection />
      </ScrollReveal>

      {/* 4. Services Section (Continuous Scroll Scrubbing internally handles entrance) */}
      <ServicesSection />

      {/* 5. Portfolio Section Reveal */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <PortfolioSection />
      </ScrollReveal>

      {/* 6. Process Section Reveal */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ProcessSection />
      </ScrollReveal>

      {/* 7. Industries Section Reveal */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <IndustriesSection />
      </ScrollReveal>      
      
      
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <FaqSection />
      </ScrollReveal>

      {/* 8. Contact Consultation CTA */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ContactCtaSection />
      </ScrollReveal>
    </main>
  );
}