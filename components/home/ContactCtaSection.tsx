// src/components/home/ContactCtaSection.tsx
"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ChevronDown,
} from "lucide-react";

export default function ContactCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Project Management",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-14 lg:py-20 bg-[#070a0f] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Consultation Suite Container */}
        <div className="bg-[#0f141f] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Strategic Value & Contact Info */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block">
                Executive Consultation
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Ready to Move Your <br className="hidden sm:inline" />
                <span className="text-[#c39967]">Business Forward?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl font-normal">
                Partner with BricketX Project Management L.L.C and discover how experienced project management, strategic advertising, and professional consulting can help your organization achieve its goals.
              </p>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+971541662352"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Call Us</div>
                    <div className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">+971 54 166 2352</div>
                  </div>
                </a>

                <a
                  href="mailto:info@bricketx.ae"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Email Us</div>
                    <div className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">info@bricketx.ae</div>
                  </div>
                </a>

                <div className="sm:col-span-2 flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Corporate Headquarters</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Business Bay, Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>

              {/* Trust Metrics Strip */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c39967] flex-shrink-0" />
                  <span>Confidential NDA Guaranteed</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0" />
                  <span>24-Hour Executive Response</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 p-5 sm:p-7 rounded-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#c39967]/15 flex items-center justify-center text-[#c39967] mx-auto">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Consultation Request Received</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. One of our directors will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 inline-block text-xs font-semibold text-[#c39967] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                      Start Your Engagement
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Request a Written Proposal
                    </h3>
                  </div>

                  <form className="space-y-3.5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Mansoor"
                          className="w-full text-xs min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full text-xs min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full text-xs min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Service Scope Required
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full text-xs min-h-[40px] px-3 py-2 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer"
                        >
                          <option value="Digital Project Management">Digital Project Management</option>
                          <option value="Advertising & Media">Advertising &amp; Media</option>
                          <option value="Business Consulting">Business Consulting</option>
                          <option value="Full Ecosystem Consultation">Full Ecosystem Consultation (All 3 Pillars)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 min-h-[42px] py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}