// src/app/page.tsx
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import EcosystemAtAGlance from "@/components/home/EcosystemAtAGlance";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import FaqSection from "@/components/home/FaqSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#ffffff] text-[#111827]">
      {/* Fixed Header */}
      <Navbar />

      {/* Hero Banner */}
      <HeroSection />

      {/* Ecosystem at a Glance Card */}
      <EcosystemAtAGlance />

      {/* Core Services Section */}
      <ServicesSection />

      {/* About & Why Choose Us (Asymmetric Editorial) */}
      <AboutSection />

      {/* Showcasing Our Impact (Visual Portfolio) */}
      <PortfolioSection />

      {/* 4-Step Process Pipeline */}
      <ProcessSection />

      {/* Industries Served */}
      <IndustriesSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Contact & Consultation Suite */}
      <ContactCtaSection />

      {/* Corporate Footer */}
      <Footer />
    </main>
  );
}