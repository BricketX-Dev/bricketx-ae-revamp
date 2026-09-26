// src/app/contact/page.tsx
"use client";

import { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { submitContactLead } from "@/app/actions/contact";

export const companyInfo = {
  name: "BricketX UAE",
  legalName: "BricketX UAE PM LLC-FZ",
  description:
    "We help businesses build projects, run advertising campaigns, and improve operations across Dubai and the UAE.",
  contact: {
    email: "info@bricketx.ae",
    phone: "+971 54 166 2352",
    address: "Unit No. 906, Al Etihad Building, Plot No. 3170 Port Saeed, UAE",
    hours: "Monday to Friday, 9:00 AM - 6:00 PM (GST)",
    mapUrl: "https://maps.app.goo.gl/YourActualLinkHere",
  },
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bricketx-uae",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bricketx",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/bricketx/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/bricketxuae",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/bricketx/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.94-.13-2.38.03-3.41.14-.93.9-3.83.9-3.83s-.23-.46-.23-1.14c0-1.07.62-1.87 1.4-1.87.66 0 .97.49.97 1.09 0 .66-.42 1.65-.64 2.57-.18.77.39 1.39 1.15 1.39 1.38 0 2.44-1.46 2.44-3.56 0-1.86-1.34-3.16-3.25-3.16-2.22 0-3.52 1.66-3.52 3.38 0 .67.26 1.39.58 1.78.06.08.07.15.05.23-.06.24-.19.78-.22.89-.04.14-.12.17-.28.1-1.05-.49-1.7-2.02-1.7-3.25 0-2.65 1.93-5.08 5.56-5.08 2.92 0 5.19 2.08 5.19 4.86 0 2.9-1.83 5.23-4.37 5.23-.85 0-1.65-.44-1.93-.96l-.52 2c-.19.73-.7 1.65-1.04 2.2A12 12 0 1 0 12 0z" />
        </svg>
      ),
    },
  ],
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
  }>({});

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "Project Management",
    timeline: "Within 1 Month",
    message: "",
  });

  const jumpToField = (fieldName: "fullName" | "email" | "phone") => {
    let targetRef: HTMLInputElement | null = null;
    if (fieldName === "fullName") targetRef = fullNameRef.current;
    if (fieldName === "email") targetRef = emailRef.current;
    if (fieldName === "phone") targetRef = phoneRef.current;

    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        targetRef?.focus();
      }, 250);
    }
  };

  const validateClientInputs = () => {
    const errors: { fullName?: string; email?: string; phone?: string } = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your name.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const cleanDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || cleanDigits.length < 7) {
      errors.phone = "Please enter a valid phone number.";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors = validateClientInputs();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);

      if (validationErrors.fullName) jumpToField("fullName");
      else if (validationErrors.email) jumpToField("email");
      else if (validationErrors.phone) jumpToField("phone");
      return;
    }

    setFieldErrors({});
    setLoading(true);

    const payload = new FormData();
    payload.append("fullName", formData.fullName);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("companyName", formData.companyName);
    payload.append("service", formData.service);
    payload.append("timeline", formData.timeline);
    payload.append("message", formData.message);

    const res = await submitContactLead(payload);

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "Project Management",
        timeline: "Within 1 Month",
        message: "",
      });
    } else {
      setErrorMessage(res.error || "Something went wrong. Please try again.");
      if (res.invalidField) {
        setFieldErrors((prev) => ({
          ...prev,
          [res.invalidField!]: res.error,
        }));
        jumpToField(res.invalidField);
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-white pt-24 pb-16 sm:pt-36 sm:pb-28">
      {/* 1. Header Overview */}
      <section className="relative border-b border-white/10 pb-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
                Contact Us
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Let’s Talk About <br />
              <span className="text-[#c39967]">Your Next Project</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Form: order-1 on mobile (shows immediately), order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-7 bg-[#0f141f] border border-white/10 p-5 sm:p-9 lg:p-10 rounded-2xl">
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#c39967]/15 flex items-center justify-center text-[#c39967] mx-auto">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Message Sent
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you! We received your inquiry and sent a confirmation to your email. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#c39967] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-5 sm:mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#c39967] uppercase block mb-1">
                    Send a Message
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-white">
                    Tell Us What You Need
                  </h2>
                </div>

                {errorMessage && (
                  <div className="mb-4 sm:mb-5 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form className="space-y-3.5 sm:space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        Your Name *
                      </label>
                      <input
                        ref={fullNameRef}
                        type="text"
                        name="fullName"
                        required
                        disabled={loading}
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: undefined });
                        }}
                        placeholder="Your name"
                        className={`w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border ${
                          fieldErrors.fullName ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                        } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        disabled={loading}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company name"
                        className="w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        Email Address *
                      </label>
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                        }}
                        placeholder="name@company.com"
                        className={`w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border ${
                          fieldErrors.email ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                        } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        required
                        disabled={loading}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: undefined });
                        }}
                        placeholder="+971 50 123 4567"
                        className={`w-full text-xs min-h-[44px] px-3.5 py-2.5 rounded-lg bg-white/5 border ${
                          fieldErrors.phone ? "border-rose-500 focus:border-rose-500 ring-1 ring-rose-500/30" : "border-white/10 focus:border-[#c39967]"
                        } text-white placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50`}
                      />
                      {fieldErrors.phone && (
                        <p className="mt-1 text-[11px] text-rose-400 font-medium">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        Service
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          disabled={loading}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer disabled:opacity-50"
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
                      <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                        When Do You Need It?
                      </label>
                      <div className="relative">
                        <select
                          name="timeline"
                          disabled={loading}
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full text-xs min-h-[44px] px-3.5 py-2.5 pr-9 rounded-lg bg-[#141a27] border border-white/10 focus:border-[#c39967] text-white focus:outline-none appearance-none transition-colors cursor-pointer disabled:opacity-50"
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
                    <label className="block text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a bit about what you want to achieve..."
                      className="w-full text-xs p-3.5 rounded-lg bg-white/5 border border-white/10 focus:border-[#c39967] text-white placeholder-slate-500 focus:outline-none transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 min-h-[46px] py-3 px-5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Office Details: order-2 on mobile (under the form), order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#0f141f] border border-white/10 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
                  <Building2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {companyInfo.name}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {companyInfo.legalName}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Office Location</span>
                    <span className="text-slate-400 block mb-1">
                      {companyInfo.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Phone</span>
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/\s+/g, "")}`}
                      className="text-slate-300 hover:text-white font-mono transition-colors"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Email</span>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#c39967] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Hours</span>
                    <span className="text-slate-400">
                      {companyInfo.contact.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels with Icons */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Follow Us
                </span>
                <div className="flex items-center gap-2">
                  {companyInfo.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#c39967] hover:border-[#c39967]/50 hover:bg-white/10 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-bold text-white mb-1">
                Quick Response
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                We review every inquiry and reply within 1 business day.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}