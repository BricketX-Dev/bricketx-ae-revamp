// src/app/terms-of-service/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Engagement & Service | BricketX Dubai",
  description:
    "Commercial terms of engagement and legal conditions governing project management, advertising, and consultancy services by BricketX Project Management L.L.C.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "March 2026";

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Header */}
      <section className="relative border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
              Commercial Agreement
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Terms of Engagement
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span>Entity: BricketX Project Management L.L.C</span>
            <span>·</span>
            <span>Commercial Registry: Dubai Mainland (DET)</span>
            <span>·</span>
            <span>Effective Date: {lastUpdated}</span>
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
              <span>Jurisdiction &amp; Structure</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              These Terms of Engagement govern the use of this website and form the general framework for commercial contracts executed with BricketX Project Management L.L.C. Individual scopes, milestone schedules, and financial terms are governed by specific Master Services Agreements (MSAs) and Statements of Work (SOWs) executed under the laws of the Emirate of Dubai and applicable UAE Federal regulations.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">01.</span>
              Scope of Practices
            </h2>
            <p>
              BricketX is licensed by the Dubai Department of Economy and Tourism (DET) to deliver services across three core practices:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Digital Project Management:</strong> Technical scoping, development team coordination, critical-path scheduling, quality assurance, and software platform release governance.</li>
              <li><strong className="text-slate-200">Advertising &amp; Media Services:</strong> Highway outdoor billboard placements (OOH), transit media, creative design, digital marketing campaigns, and municipal permit processing.</li>
              <li><strong className="text-slate-200">Business Consultancy:</strong> Operational diagnostics, standard operating procedure (SOP) blueprints, feasibility studies, and corporate restructuring.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">02.</span>
              Proposals, Statements of Work &amp; Retainers
            </h2>
            <p>
              Informal inquiries, website communications, or exploratory meetings do not constitute a binding delivery contract. Work commences only upon:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Mutual execution of a written Statement of Work (SOW) or Service Agreement signed by authorized signatories.</li>
              <li>Payment of the agreed upfront mobilization fee, retainer, or initial project deposit as stipulated in the payment schedule.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">03.</span>
              Milestone Governance &amp; Payments
            </h2>
            <p>
              BricketX operates on a disciplined milestone delivery model:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Invoices are issued in UAE Dirhams (AED) and are subject to 5% UAE Value Added Tax (VAT) in compliance with Federal Tax Authority (FTA) laws.</li>
              <li>Clients must review and provide formal feedback or sign-off on delivered milestones within the review window defined in the SOW (typically 5 to 7 business days).</li>
              <li>Delays caused by client-side feedback pauses, unprovided brand assets, or third-party contractor blocks will adjust downstream critical-path deadlines accordingly.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">04.</span>
              Advertising Permits &amp; Municipal Compliance
            </h2>
            <p>
              For outdoor and billboard advertising across Dubai and other Emirates:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>All advertising creative must strictly adhere to UAE National Media Council (NMC) codes, Dubai Municipality guidelines, and RTA transit advertising standards.</li>
              <li>BricketX coordinates official permit submissions; however, final approvals remain within the statutory authority of Dubai governmental departments.</li>
              <li>The client warrants that all provided logos, claims, trademarks, and media assets do not infringe third-party rights or violate UAE moral and cultural standards.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">05.</span>
              Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full and final payment for an agreed project milestone:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>The client receives ownership rights to the final custom deliverables (source code, custom media assets, SOP documentation) specified in the SOW.</li>
              <li>BricketX retains proprietary ownership of its internal frameworks, project governance templates, internal estimation tooling, and pre-existing consultancy methodologies.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">06.</span>
              Non-Disclosure &amp; Confidentiality
            </h2>
            <p>
              Both parties agree to treat all business plans, software logic, financial metrics, and operational workflows disclosed during negotiations or delivery as strictly confidential. This obligation remains active during the engagement and for a minimum period of two (2) years following contract completion.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">07.</span>
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under UAE law, neither party shall be liable for indirect, incidental, or consequential damages, including loss of anticipated profits or business interruptions. BricketX&apos;s total aggregate liability arising out of any specific SOW shall not exceed the total fees paid by the client under that specific SOW.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">08.</span>
              Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms, all executed SOWs, and any commercial disputes arising out of our services shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the Federal laws of the United Arab Emirates. Any dispute that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the Courts of Dubai.
            </p>
          </div>

          {/* Contact Box */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0b0f17] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#c39967]">
              Commercial Contracts Desk
            </h3>
            <p className="text-xs text-slate-400">
              For contract reviews, SOW inquiries, or formal correspondence:
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