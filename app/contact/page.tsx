// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Globe2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    corporateEmail: "",
    phone: "",
    companyName: "",
    practice: "Digital Project Management",
    timeline: "Immediate (Within 30 Days)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* 1. Header Overview & Institutional Title */}
      <section className="relative border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                Institutional Engagement Desk
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Initiate an Executive <br />
              <span className="text-[#c39967]">Consultation in Dubai</span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal">
              Whether deploying high-stakes digital platform infrastructure, securing landmark billboard concessions across the UAE, or commissioning operational business advisory, our senior directors provide direct, confidential project reviews.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Engagement Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Commercial Desks & Headquarters Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f141f] border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
                  <Building2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Corporate Headquarters
                  </span>
                  <h3 className="text-base font-bold text-white">
                    BricketX Project Management L.L.C
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Business Bay Headquarters</span>
                    <span className="text-slate-400">Prime Tower, Business Bay Commercial District, Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Direct Inquiries Desk</span>
                    <a href="tel:+971541662352" className="text-slate-300 hover:text-white font-mono transition-colors">
                      +971 54 166 2352
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Official Commercial Correspondence</span>
                    <a href="mailto:info@bricketx.ae" className="text-slate-300 hover:text-white transition-colors">
                      info@bricketx.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Business Operating Hours</span>
                    <span className="text-slate-400">Monday – Friday: 08:30 – 18:00 (GST / UTC+4)</span>
                  </div>
                </div>
              </div>

              {/* UAE Regulatory Registration Deck */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c39967]" />
                  <span>Licensed Mainland Entity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#c39967]" />
                  <span>All 7 Emirates Covered</span>
                </div>
              </div>
            </div>

            {/* Structured SLA Governance Callout */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase block">
                Standard Engagement SLA
              </span>
              <h4 className="text-sm font-bold text-white">
                Formal Milestone Reviews &amp; Confidentiality
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                All tender materials, feasibility plans, and proprietary project scopes submitted via our official channels are safeguarded under mutual non-disclosure standards. Expect a dedicated response from our managing directors within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: High-Compliance Consultation Intake Form */}
          <div className="lg:col-span-7 bg-[#0f141f] border border-white/10 p-6 sm:p-9 lg:p-10 rounded-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c39967]/15 flex items-center justify-center text-[#c39967] mx-auto">
                  <CheckCircle2 className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Consultation Request Registered
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Your brief has been dispatched directly to our practice leads. A senior director will review your requirements and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#c39967] hover:underline cursor-pointer"
                >
                  Submit an additional tender inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase block mb-1">
                    Formal Intake
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-white">
                    Submit Project Scope or Advisory RFP
                  </h2>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Corporate Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Al-Mansoor Enterprises"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Contact Number (UAE / GCC)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Primary Practice Required
                      </label>
                      <div className="relative">
                        <select
                          value={formData.practice}
                          onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer"
                        >
                          <option value="Digital Project Management">Digital Project Management</option>
                          <option value="Advertising & Outdoor Media">Advertising &amp; Outdoor Media</option>
                          <option value="Business Consultancy & Restructuring">Business Consultancy &amp; Restructuring</option>
                          <option value="Comprehensive Three-Pillar Scope">Comprehensive Three-Pillar Scope</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Target Execution Timeline
                      </label>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer"
                        >
                          <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                          <option value="Q1/Q2 Upcoming Quarter">Upcoming Quarter Delivery</option>
                          <option value="Strategic Planning Phase">Strategic Planning &amp; Feasibility</option>
                          <option value="Formal RFP Tender Submission">Formal RFP Tender Submission</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Scope Overview &amp; Specific Deliverables
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline target milestones, technology requirements, advertising locations, or operational objectives..."
                      className="w-full text-xs p-3.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 min-h-[46px] py-3 px-5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                  >
                    <span>Register Consultation Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}