// src/components/home/ContactCtaSection.tsx
"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

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
    <section id="contact" className="py-24 lg:py-32 bg-[#070a0f] text-white relative overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-[#c39967]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-[#1a2335]/30 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Consultation Suite Container */}
        <div className="bg-[#0f141f]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#c39967] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Strategic Value & Direct Contacts */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c39967] animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
                  Executive Consultation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Ready to Move Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#e2c5a2] to-[#c39967]">
                  Business Forward?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Partner with BricketX Project Management L.L.C and discover how experienced project management, strategic advertising, and professional consulting can help your organization achieve its goals.
              </p>

              {/* Direct Info Pills */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="tel:+971541662352"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967] hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Call Us</div>
                    <div className="text-xs font-semibold text-white">+971 54 166 2352</div>
                  </div>
                </a>

                <a
                  href="mailto:info@bricketx.ae"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967] hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] group-hover:bg-[#c39967] group-hover:text-[#0b0f17] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Email Us</div>
                    <div className="text-xs font-semibold text-white">info@bricketx.ae</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Head Office</div>
                    <div className="text-xs font-semibold text-white">Dubai, UAE</div>
                  </div>
                </div>
              </div>

              {/* Trust Metrics Strip */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c39967]" />
                  <span>Confidential NDA Guaranteed</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#c39967]" />
                  <span>24-Hour Executive Response</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Glass Consultation Form */}
            <div className="lg:col-span-6 bg-white/[0.03] backdrop-blur-md border border-white/10 p-7 sm:p-9 rounded-2xl shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#c39967]/20 border border-[#c39967]/40 flex items-center justify-center text-[#c39967] mx-auto">
                    <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Consultation Request Received</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. One of our senior directors will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#c39967] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c39967] block mb-1">
                      Start Your Engagement
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Request a Written Proposal
                    </h3>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Mansoor"
                          className="w-full text-xs px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] focus:bg-white/10 text-white placeholder-slate-500 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full text-xs px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] focus:bg-white/10 text-white placeholder-slate-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full text-xs px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] focus:bg-white/10 text-white placeholder-slate-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Service Scope Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none transition-all"
                      >
                        <option value="Digital Project Management">Digital Project Management</option>
                        <option value="Advertising & Media">Advertising &amp; Media</option>
                        <option value="Business Consulting">Business Consulting</option>
                        <option value="Full Ecosystem Consultation">Full Ecosystem Consultation (All 3 Pillars)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0b0f17] bg-gradient-to-r from-[#c39967] via-[#d6b48a] to-[#c39967] hover:brightness-110 active:brightness-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c39967]/20 font-sans"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
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