// src/app/terms-of-service/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | BricketX Project Management L.L.C-FZ",
  description:
    "Commercial terms and conditions governing the use of www.bricketx.ae and professional services provided by BricketX Project Management L.L.C-FZ in Dubai, UAE.",
};

export default function TermsOfServicePage() {
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
            Terms &amp; Conditions
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
              <span>Commercial Terms Overview</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of <a href="https://www.bricketx.ae" className="text-[#c39967] hover:underline">www.bricketx.ae</a> (the &ldquo;Website&rdquo;) and any services provided by BricketX Project Management L.L.C-FZ, a limited liability company licensed by Meydan City Corporation (Meydan Free Zone), Dubai, United Arab Emirates, under Commercial Licence No. 2540036.01 (&ldquo;BricketX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              By accessing or using the Website, or by engaging our services, you agree to these Terms. If you do not agree, please do not use the Website.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">1.</span>
              About BricketX
            </h2>
            <p>
              BricketX provides project management, advertising and business consultancy services to businesses in the United Arab Emirates. Information on the Website describes these services in general terms and does not form a binding offer.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">2.</span>
              Use of the Website
            </h2>
            <p>You agree to use the Website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Use the Website in any way that breaches UAE law, including Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes</li>
              <li>Attempt to gain unauthorised access to the Website, its servers or any connected systems</li>
              <li>Introduce viruses, malware or any other harmful material</li>
              <li>Copy, scrape or reproduce Website content for commercial purposes without our written permission</li>
              <li>Submit false, misleading or impersonated information through any form on the Website</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">3.</span>
              Service Engagements
            </h2>
            <p>
              Any services we provide are governed by a separate written proposal, agreement or statement of work signed by both parties (a &ldquo;Service Agreement&rdquo;). The Service Agreement sets out the scope, deliverables, timelines, fees and payment terms for each engagement.
            </p>
            <p className="text-slate-400">
              If there is any conflict between these Terms and a signed Service Agreement, the Service Agreement will prevail.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">4.</span>
              Proposals and Quotations
            </h2>
            <p>
              Proposals and quotations are valid for 30 days from the date of issue unless stated otherwise. Prices exclude Value Added Tax (VAT), which will be charged at the applicable UAE rate.
            </p>
            <p className="text-slate-400">
              For advertising services, media costs, third-party fees and government permit fees may change and will be confirmed before booking.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">5.</span>
              Fees and Payment
            </h2>
            <p>
              Fees and payment schedules are defined in each Service Agreement. Where milestone-based payments apply, each payment becomes due once the related milestone has been delivered and approved.
            </p>
            <p className="text-slate-400">
              Invoices are payable within 14 days of the invoice date unless otherwise agreed. We may suspend work on any engagement where payments are overdue.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">6.</span>
              Client Responsibilities
            </h2>
            <p>To help us deliver on time, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Provide accurate information, content, approvals and access as reasonably requested</li>
              <li>Ensure that any materials you supply do not infringe the rights of any third party and comply with UAE law, including UAE Media Council advertising standards</li>
              <li>Review and respond to deliverables within the agreed timeframes</li>
            </ul>
            <p className="text-slate-400 pt-1">
              Delays caused by late feedback, approvals or materials may affect timelines and costs.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">7.</span>
              Advertising Permits and Approvals
            </h2>
            <p>
              Outdoor and billboard advertising in the UAE requires approval from the relevant authorities. We will assist with permit applications as agreed in the Service Agreement, but approval decisions rest with those authorities. BricketX is not liable for delays or refusals caused by authority decisions, provided we have acted with reasonable care.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">8.</span>
              Intellectual Property
            </h2>
            <p>
              All content on the Website, including text, graphics, logos and design, is owned by or licensed to BricketX and is protected by UAE and international intellectual property laws. You may not use it without our prior written consent.
            </p>
            <p className="text-slate-400">
              Ownership of deliverables created during an engagement will transfer to the client upon full payment, unless the Service Agreement states otherwise. BricketX retains ownership of its pre-existing tools, methods and know-how, and may showcase non-confidential work in its portfolio unless the client objects in writing.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">9.</span>
              Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential any non-public business, technical or financial information received from the other. Where required, a separate Non-Disclosure Agreement (NDA) will be signed before an engagement begins.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">10.</span>
              No Guarantee of Results
            </h2>
            <p>
              We apply professional skill and care to every engagement. However, results such as search rankings, advertising reach, lead volumes or business performance depend on factors outside our control, including market conditions, platform algorithms and client decisions. Unless expressly stated in a Service Agreement, we do not guarantee specific outcomes.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">11.</span>
              Limitation of Liability
            </h2>
            <p>To the maximum extent permitted by UAE law:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>The Website and its content are provided &ldquo;as is&rdquo; for general information only and do not constitute professional, legal or financial advice</li>
              <li>BricketX is not liable for any indirect, incidental or consequential loss, including loss of profit, revenue, data or business opportunity</li>
              <li>Our total liability for any claim arising from a service engagement is limited to the fees paid for the specific service giving rise to the claim</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">12.</span>
              Third-Party Links and Services
            </h2>
            <p>
              The Website may contain links to third-party websites or rely on third-party platforms (such as Google, Meta or LinkedIn). We are not responsible for the content, policies or availability of those third parties.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">13.</span>
              Termination
            </h2>
            <p>
              Either party may terminate a service engagement in accordance with the Service Agreement. On termination, the client will pay for all work completed and costs committed up to the termination date. We may restrict access to the Website if these Terms are breached.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">14.</span>
              Force Majeure
            </h2>
            <p>
              Neither party is liable for delays or failure to perform caused by events beyond reasonable control, including natural disasters, government actions, pandemics, power or internet outages, or regulatory changes.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">15.</span>
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute will first be discussed in good faith between the parties. If it cannot be resolved within 30 days, it will be referred to the exclusive jurisdiction of the Courts of Dubai.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm">16.</span>
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The updated version will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of the Website after changes are posted means you accept the updated Terms.
            </p>
          </div>

          {/* Section 17: Contact Us Box */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#0b0f17] border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#c39967] text-sm font-bold">17.</span>
              <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
                Contact Us
              </h2>
            </div>
            
            <p className="text-xs text-slate-400">
              If you have any questions about these Terms, please contact us:
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