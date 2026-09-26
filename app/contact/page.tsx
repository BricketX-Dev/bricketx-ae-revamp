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
    email: "",
    phone: "",
    companyName: "",
    service: "Project Management",
    timeline: "Within 1 Month",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* 1. Header Overview */}
      <section className="relative border-b border-white/10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Contact Our Dubai Office <br />
              <span className="text-[#c39967]">Let&apos;s Discuss Your Next Move</span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Whether you need to manage a digital build, launch an advertising campaign on Sheikh Zayed Road, or streamline your operations, our team is ready to talk through your goals.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f141f] border border-white/10 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
                  <Building2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Dubai Mainland
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
                    <span className="text-white font-semibold block">Office Location</span>
                    <span className="text-slate-400">Business Bay, Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Phone</span>
                    <a href="tel:+971541662352" className="text-slate-300 hover:text-white font-mono transition-colors">
                      +971 54 166 2352
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Email</span>
                    <a href="mailto:info@bricketx.ae" className="text-slate-300 hover:text-white transition-colors">
                      info@bricketx.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Working Hours</span>
                    <span className="text-slate-400">Monday – Friday: 9:00 AM – 6:00 PM (GST)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c39967]" />
                  <span>Licensed Mainland Entity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#c39967]" />
                  <span>UAE-Wide Delivery</span>
                </div>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase block">
                Direct &amp; Confidential
              </span>
              <h4 className="text-sm font-bold text-white">
                Fast Turnaround, No Hassle
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Everything you share with us stays strictly confidential. We typically review inquiries and get back to you within 1 business day with clear next steps.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0f141f] border border-white/10 p-6 sm:p-9 lg:p-10 rounded-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c39967]/15 flex items-center justify-center text-[#c39967] mx-auto">
                  <CheckCircle2 className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We&apos;ve received your message and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#c39967] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase block mb-1">
                    Direct Inquiry
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-white">
                    Tell Us About Your Project
                  </h2>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
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
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Al-Mansoor Trading"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Service You Need
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer"
                        >
                          <option value="Project Management">Project Management</option>
                          <option value="Advertising & Outdoor Media">Advertising &amp; Outdoor Media</option>
                          <option value="Business Consultancy">Business Consultancy</option>
                          <option value="Multiple Services">Multiple Services</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Expected Start Date
                      </label>
                      <div className="relative">
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer"
                        >
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1 to 3 Months">1 to 3 Months</option>
                          <option value="Just Planning / Exploring">Just Planning / Exploring</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share brief details about what you're looking to build, promote, or improve..."
                      className="w-full text-xs p-3.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 min-h-[46px] py-3 px-5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                  >
                    <span>Send Message</span>
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