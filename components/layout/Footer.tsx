// src/components/layout/Footer.tsx
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f17] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-[#a5adb6] max-w-sm leading-relaxed">
              BricketX Project Management L.L.C is a Dubai-based consultancy providing digital project
              management, advertising, and business consulting services across the UAE.
            </p>
            <div className="text-xs text-[#c39967] font-semibold">
              Dubai, United Arab Emirates
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#a5adb6]">
              <li><a href="#hero" className="hover:text-[#c39967] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#c39967] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#c39967] transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-[#c39967] transition-colors">Process</a></li>
              <li><a href="#industries" className="hover:text-[#c39967] transition-colors">Industries</a></li>
              <li><a href="#contact" className="hover:text-[#c39967] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#a5adb6]">
              <li><a href="#services" className="hover:text-[#c39967] transition-colors">Digital Project Management</a></li>
              <li><a href="#services" className="hover:text-[#c39967] transition-colors">Advertising &amp; Media</a></li>
              <li><a href="#services" className="hover:text-[#c39967] transition-colors">Business Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a5adb6]">
          <p>© {currentYear} BricketX Project Management L.L.C. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="mailto:info@bricketx.ae" className="hover:text-[#c39967]">info@bricketx.ae</a>
            <span>•</span>
            <a href="tel:+971541662352" className="hover:text-[#c39967]">+971 54 166 2352</a>
          </div>
        </div>
      </div>
    </footer>
  );
}