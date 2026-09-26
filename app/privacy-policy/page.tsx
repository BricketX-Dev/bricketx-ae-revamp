// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BricketX Project Management L.L.C-FZ",
  description:
    "Privacy Policy of BricketX Project Management L.L.C-FZ (Meydan Free Zone, Dubai), compliant with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL).",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "26 September 2026";

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Header */}
      <section className="relative border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
              LEGAL
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
            <span>Entity: BricketX Project Management L.L.C-FZ</span>
            <span>·</span>
            <span>Licence: Meydan Free Zone (No. 2540036.01)</span>
            <span>·</span>
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          
          {/* Statutory Preamble Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 space-y-3">
            <div className="flex items-center gap-2 text-[#c39967] font-semibold text-xs uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>UAE PDPL Compliance Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              BricketX Project Management L.L.C-FZ (&ldquo;BricketX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, store and protect your personal data when you visit <a href="https://www.bricketx.ae" className="text-[#c39967] hover:underline">www.bricketx.ae</a> (the &ldquo;Website&rdquo;) or engage with our project management, advertising and business consultancy services.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              We process personal data in line with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and other applicable UAE laws.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">1.</span>
              Who We Are
            </h2>
            <p>
              BricketX Project Management L.L.C-FZ is a limited liability company licensed by Meydan City Corporation (Meydan Free Zone), Dubai, United Arab Emirates, under Commercial Licence No. 2540036.01. We are responsible for the personal data described in this policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">2.</span>
              Information We Collect
            </h2>
            <div className="space-y-2">
              <p className="font-medium text-white">Information you provide to us:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>Name, job title and company name</li>
                <li>Email address and phone number</li>
                <li>Project, campaign or business details you share through forms, email, phone or meetings</li>
                <li>Billing information needed for invoicing</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <p className="font-medium text-white">Information collected automatically:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                <li>IP address, browser type, device information and approximate location</li>
                <li>Pages visited, time spent on the Website and referring websites</li>
                <li>Cookies and similar technologies (see Section 7)</li>
              </ul>
            </div>
            <p className="pt-2 text-slate-400 italic">
              We do not intentionally collect sensitive personal data, and we ask that you do not share it with us through the Website.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">3.</span>
              How We Use Your Information
            </h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Respond to enquiries, consultation requests and proposal requests</li>
              <li>Prepare proposals and deliver the services you engage us for</li>
              <li>Manage invoicing, payments and our business relationship</li>
              <li>Send updates, insights or marketing messages where you have agreed to receive them</li>
              <li>Improve the Website, our services and our advertising</li>
              <li>Comply with legal, tax and regulatory obligations in the UAE</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">4.</span>
              Legal Basis for Processing
            </h2>
            <p>We process your personal data on one or more of the following grounds:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Consent:</strong> For example when you submit a form or subscribe to updates</li>
              <li><strong className="text-slate-200">Contract:</strong> Where processing is needed to prepare or perform a service agreement with you</li>
              <li><strong className="text-slate-200">Legal obligation:</strong> Where we must keep records under UAE law</li>
              <li><strong className="text-slate-200">Legitimate interests:</strong> Such as improving our services and protecting the Website, where these are not overridden by your rights</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">5.</span>
              Sharing Your Information
            </h2>
            <p>We do not sell your personal data. We only share it where necessary with:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Service providers who support our operations, such as hosting, email, CRM, analytics and payment providers</li>
              <li>Media owners, printers or permit authorities, where required to deliver an advertising campaign you have engaged us for</li>
              <li>Other companies within the BricketX Group, where needed to deliver or support your engagement</li>
              <li>Government or regulatory authorities, where required by law</li>
            </ul>
            <p className="text-slate-400 pt-1">
              All third parties are required to protect your data and use it only for the purpose it was shared.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">6.</span>
              International Data Transfers
            </h2>
            <p>
              Some of our service providers, and other BricketX Group entities, may store or process data outside the UAE. Where this happens, we take reasonable steps to ensure your data receives an adequate level of protection, in line with the PDPL.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">7.</span>
              Cookies and Tracking Technologies
            </h2>
            <p>
              The Website uses cookies and similar technologies to operate correctly, understand how visitors use the site, and measure our advertising. These may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Essential cookies:</strong> Needed for the Website to function</li>
              <li><strong className="text-slate-200">Analytics cookies:</strong> Such as Google Analytics, to understand Website traffic</li>
              <li><strong className="text-slate-200">Marketing cookies:</strong> Such as the Meta Pixel, LinkedIn Insight Tag and Google Ads tags, to measure and improve our campaigns</li>
            </ul>
            <p className="text-slate-400 pt-1">
              You can control or delete cookies through your browser settings. Blocking some cookies may affect how the Website works.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">8.</span>
              Data Retention
            </h2>
            <p>
              We keep personal data only for as long as needed for the purposes described in this policy, or as required by UAE law (for example, accounting and tax records). Enquiry data that does not lead to an engagement is deleted or anonymised after 24 months.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">9.</span>
              Data Security
            </h2>
            <p>
              We use appropriate technical and organisational measures to protect your personal data, including access controls, secure hosting and encrypted connections (HTTPS). No method of transmission over the internet is completely secure, but we work to protect your information and will act promptly on any security incident as required by law.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">10.</span>
              Your Rights
            </h2>
            <p>Under the PDPL, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your data, subject to legal requirements</li>
              <li>Restrict or object to certain processing, including direct marketing</li>
              <li>Withdraw your consent at any time, without affecting processing already carried out</li>
              <li>Request a copy of your data in a structured, commonly used format</li>
            </ul>
            <p className="text-slate-400 pt-1">
              To exercise any of these rights, email <a href="mailto:info@bricketx.ae" className="text-[#c39967] underline">info@bricketx.ae</a>. We will respond within a reasonable time and may need to verify your identity first.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">11.</span>
              Marketing Communications
            </h2>
            <p>
              We will only send you marketing emails or messages if you have agreed to receive them. You can unsubscribe at any time using the link in our emails or by contacting us directly.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">12.</span>
              Third-Party Websites
            </h2>
            <p>
              The Website may link to external websites and social media platforms. We are not responsible for their privacy practices, and we encourage you to read their privacy policies.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">13.</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Our Website and services are intended for businesses and are not directed at individuals under 18. We do not knowingly collect personal data from children.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">14.</span>
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be available on this page with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </div>

          {/* Section 15: Contact Us Box */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#0b0f17] border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm font-bold">15.</span>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
                Contact Us
              </h2>
            </div>
            
            <p className="text-xs text-slate-400">
              For any questions about this Privacy Policy or how we handle your personal data, please contact us:
            </p>

            <div className="space-y-1 text-xs text-white font-medium">
              <div>BricketX Project Management L.L.C-FZ</div>
              <div className="text-slate-400 font-normal">Commercial Licence No. 2540036.01 · Meydan Free Zone</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 border-t border-white/10 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <a href="tel:+971541662352" className="hover:text-white transition-colors">
                  +971 54 166 2352
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <a href="mailto:info@bricketx.ae" className="hover:text-white transition-colors">
                  info@bricketx.ae
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#c39967] flex-shrink-0" />
                <a href="https://www.bricketx.ae" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.bricketx.ae
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}