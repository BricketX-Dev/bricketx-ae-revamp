// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import EcosystemAtAGlance from "@/components/home/EcosystemAtAGlance";
import StrategicCollaborationSection from "@/components/home/StrategicCollaborationSection";
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

      {/* 3. Flagship Strategic Partnership & Developments */}
      <ScrollReveal direction="up" distance={35} threshold={0.15}>
        <StrategicCollaborationSection />
      </ScrollReveal>

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Capabilities Ticker */}
      <CapabilitiesTape />

      {/* 6. About */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <AboutSection />
      </ScrollReveal>

      {/* 7. Process Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ProcessSection />
      </ScrollReveal>

      {/* 8. Industries Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <IndustriesSection />
      </ScrollReveal>

      {/* 9. FAQ Section */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <FaqSection />
      </ScrollReveal>

      {/* 10. Contact Consultation CTA */}
      <ScrollReveal direction="up" distance={40} threshold={0.15}>
        <ContactCtaSection />
      </ScrollReveal>
    </main>
  );
}