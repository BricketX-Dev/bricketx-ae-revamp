// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BricketX Project Management L.L.C",
  description:
    "Privacy Policy and data governance standards of BricketX Project Management L.L.C, compliant with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 2026";

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Header */}
      <section className="relative border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
              Legal &amp; Regulatory Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span>Entity: BricketX Project Management L.L.C</span>
            <span>·</span>
            <span>Jurisdiction: Dubai, United Arab Emirates</span>
            <span>·</span>
            <span>Last Revised: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          
          {/* Summary Box */}
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-[#c39967] font-semibold text-xs uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Statutory Compliance Notice</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              This Privacy Policy explains how BricketX Project Management L.L.C (&ldquo;BricketX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, processes, and safeguards personal and corporate information when you use our website or engage our project management, advertising, and consultancy services. We operate in accordance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (&ldquo;PDPL&rdquo;) and relevant Dubai commercial regulations.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">01.</span>
              Information We Collect
            </h2>
            <p>
              We collect information directly from you when you submit an inquiry through our website, request a consultation, sign a service agreement, or contact our office. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Contact Details:</strong> Your full name, corporate title, company name, email address, direct phone number, and physical office location.</li>
              <li><strong className="text-slate-200">Commercial Specifications:</strong> Project scopes, milestone requirements, advertising targets, and operational data disclosed during feasibility or RFP reviews.</li>
              <li><strong className="text-slate-200">Technical Log Data:</strong> IP addresses, browser types, referral paths, and access timestamps captured automatically by our web infrastructure for security and performance diagnostics.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">02.</span>
              How We Use Your Data
            </h2>
            <p>
              BricketX processes collected information solely for legitimate commercial purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>To evaluate project feasibility, prepare proposals, and execute contractual deliverables across our three practices.</li>
              <li>To manage regulatory permit filings with Dubai government authorities (such as Dubai Municipality or RTA for outdoor advertising concessions).</li>
              <li>To send milestone updates, invoicing schedules, and critical governance reports.</li>
              <li>To prevent fraud, verify company identity, and maintain cybersecurity across our digital portals.</li>
            </ul>
            <p className="text-slate-400">
              We do not sell, rent, or trade your personal or commercial data to third-party brokers or advertisers.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">03.</span>
              Data Disclosure and Third Parties
            </h2>
            <p>
              We only share information with third parties under defined operational safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Vetted Subcontractors &amp; Technology Partners:</strong> Technical infrastructure hosts, media concessionaires, and software engineers bound by non-disclosure agreements (NDAs) who assist in project delivery.</li>
              <li><strong className="text-slate-200">Regulatory &amp; Legal Authorities:</strong> UAE judicial bodies, law enforcement, or government agencies when strictly required by UAE decree, court summons, or official regulatory mandate.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">04.</span>
              Data Security &amp; Confidentiality
            </h2>
            <p>
              BricketX enforces strict organizational and technical measures to protect client data. All digital interactions run over encrypted SSL/TLS channels. Internally, client documentation and project data are restricted on a need-to-know basis. Before commencing technical or operational scoping, we execute bilateral Non-Disclosure Agreements (NDAs) upon request.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">05.</span>
              Retention Period
            </h2>
            <p>
              We retain commercial and personal records only as long as necessary to fulfill the deliverables stipulated in our service agreements, comply with UAE commercial accounting and tax regulations (Federal Tax Authority requirements), or resolve dispute liabilities. Upon expiry of legal retention mandates, records are securely scrubbed or anonymized.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">06.</span>
              Your Rights Under UAE PDPL
            </h2>
            <p>
              Under UAE Federal Decree-Law No. 45 of 2021, data owners maintain specific legal rights, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>The right to request access to the personal data we hold about you.</li>
              <li>The right to request correction of inaccurate, incomplete, or outdated data.</li>
              <li>The right to request data erasure where processing no longer serves contractual or statutory necessity.</li>
              <li>The right to restrict or object to automated processing or direct communication.</li>
            </ul>
            <p className="text-slate-400">
              To exercise any of these rights, email our data desk directly at <a href="mailto:info@bricketx.ae" className="text-[#c39967] underline">info@bricketx.ae</a>.
            </p>
          </div>

          {/* Contact Box */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0b0f17] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#c39967]">
              Legal &amp; Privacy Contact
            </h3>
            <p className="text-xs text-slate-400">
              For any questions or compliance inquiries regarding this Privacy Policy:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c39967]" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c39967]" />
                <span>+971 54 166 2352</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c39967]" />
                <span>info@bricketx.ae</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}