// src/components/home/ContactCtaSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { submitContactLead } from "@/app/actions/contact";

export default function ContactCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Project Management",
    message: "",
  });

  const validateClientInputs = () => {
    const errors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid business email address.";
    }

    const cleanDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || cleanDigits.length < 7) {
      errors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors = validateClientInputs();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setFieldErrors({});
    setLoading(true);

    const payload = new FormData();
    payload.append("fullName", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("service", formData.service);
    payload.append("timeline", "Consultation Request (Homepage)");
    payload.append("message", formData.message || "Consultation requested from Homepage CTA block.");

    const res = await submitContactLead(payload);

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Digital Project Management",
        message: "",
      });
    } else {
      setErrorMessage(res.error || "Unable to send your request. Please try again.");
      if (res.invalidField) {
        const fieldMap: Record<string, "name" | "email" | "phone"> = {
          fullName: "name",
          email: "email",
          phone: "phone",
        };
        const mappedKey = fieldMap[res.invalidField];
        if (mappedKey) {
          setFieldErrors((prev) => ({
            ...prev,
            [mappedKey]: res.error,
          }));
        }
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#070a0f] text-white border-t border-white/10 overflow-hidden"
    >
      {/* 1. Full-Bleed Outer Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 sm:opacity-30 hero-zoom-bg">
        <Image
          src="/images/home/hero.webp" // Update path manually in /public
          alt="Dubai Executive Commercial Architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Outer Multi-Stop Obsidian Depth Scrim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#070a0f]/95 via-[#070a0f]/80 to-[#070a0f] pointer-events-none" />

      {/* 3. Ambient Gold Glow & Micro-Dot Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[350px] bg-[#c39967]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Executive Glass Terminal */}
        <div className="bg-[#0b0f17]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Top Gold Hairline Highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/70 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Strategic Value & Contact Info */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block">
                Executive Consultation
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Ready to Move Your <br className="hidden sm:inline" />
                <span className="text-[#c39967]">Business Forward?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                Partner with BricketX Project Management L.L.C-FZ and discover how experienced project management, strategic advertising, and professional consulting can help your organization achieve its goals.
              </p>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <a
                  href="tel:+971541662352"
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967]/50 hover:bg-white/[0.06] transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Call Us</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white whitespace-nowrap">+971 54 166 2352</div>
                  </div>
                </a>

                <a
                  href="mailto:info@bricketx.ae"
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c39967]/50 hover:bg-white/[0.06] transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Email Us</div>
                    <div className="text-[13px] sm:text-sm font-semibold text-white whitespace-nowrap">info@bricketx.ae</div>
                  </div>
                </a>

                <div className="sm:col-span-2 flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#c39967]/15 flex items-center justify-center text-[#c39967] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[9.5px] font-mono uppercase tracking-wider text-slate-400">Corporate Presence</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate sm:whitespace-normal">Port Saeed &amp; Business Bay, Dubai, UAE</div>
                  </div>
                </div>
              </div>

              {/* Fixed Single-Row Trust Metrics Strip */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3 sm:gap-4 flex-wrap text-xs text-slate-300">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c39967] flex-shrink-0" />
                  <span>Confidential NDA Guaranteed</span>
                </div>
                
                <span className="text-[#c39967]/50 select-none">•</span>

                <div className="inline-flex items-center gap-2">
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
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || "partner"}. One of our directors will contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 inline-block text-xs font-semibold text-[#c39967] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 sm:mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                      Start Your Engagement
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Request a Written Proposal
                    </h3>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form className="space-y-3.5" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          disabled={loading}
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                          }}
                          placeholder="e.g. Tariq Mansoor"
                          className={`w-full text-xs min-h-[44px] sm:min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border ${
                            fieldErrors.name ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                          } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          disabled={loading}
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: undefined });
                          }}
                          placeholder="+971 50 000 0000"
                          className={`w-full text-xs min-h-[44px] sm:min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border ${
                            fieldErrors.phone ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                          } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                        }}
                        placeholder="name@company.ae"
                        className={`w-full text-xs min-h-[44px] sm:min-h-[40px] px-3 py-2 rounded-lg bg-white/5 border ${
                          fieldErrors.email ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                        } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Service Scope Required
                      </label>
                      <div className="relative">
                        <select
                          disabled={loading}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full text-xs min-h-[44px] sm:min-h-[40px] px-3 py-2 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer disabled:opacity-50"
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
                      disabled={loading}
                      className="w-full mt-2 min-h-[46px] sm:min-h-[42px] py-2.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-[#c39967]/10"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                        </>
                      )}
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