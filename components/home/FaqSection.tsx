// src/components/home/FaqSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowUpRight, MessageSquareText } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Services & Scope", "UAE Governance", "Delivery & Retainers"];

  const faqs = [
    {
      q: "What does BricketX Project Management L.L.C do?",
      a: "We provide comprehensive digital project management, strategic outdoor & digital advertising, and practical business consulting to help UAE organizations streamline operations, protect capital, and scale market share.",
      category: "Services & Scope",
      tag: "Scope of Services",
    },
    {
      q: "Where is BricketX located and what areas do you cover?",
      a: "Our corporate headquarters is based in Dubai, UAE. We deploy teams and manage capital initiatives, media campaigns, and operational consulting across all seven Emirates, as well as broader GCC commercial markets.",
      category: "UAE Governance",
      tag: "Presence",
    },
    {
      q: "Do you manage projects from initial concept through completion?",
      a: "Yes. We offer end-to-end delivery models—from initial discovery and regulatory feasibility through technical implementation, campaign rollout, and structured post-project governance.",
      category: "Delivery & Retainers",
      tag: "Delivery Model",
    },
    {
      q: "Do you offer customized scopes for specific business stages?",
      a: "Every engagement is completely bespoke. We do not use rigid generic packages; every roadmap is engineered around your specific organizational KPIs, internal bandwidth, and commercial growth targets.",
      category: "Services & Scope",
      tag: "Engagement",
    },
    {
      q: "Do you provide sustained guidance after project completion?",
      a: "Yes. We operate on a long-term partnership model. Following delivery, we provide post-launch reviews, stakeholder handover training, and sustained advisory or maintenance retainers as required.",
      category: "Delivery & Retainers",
      tag: "Post-Delivery",
    },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#ffffff] border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Architectural Guidelines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c39967]">
              Clarity &amp; Transparency
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#a87d4a] to-[#c39967]">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#64748b] leading-relaxed">
            Essential information regarding our corporate advisory, project governance, and regional delivery models in Dubai and the UAE.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#111827] text-white shadow-md"
                    : "bg-slate-100 text-[#64748b] hover:bg-slate-200 hover:text-[#111827]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* High-Contrast Wide Accordion Suite */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-[#faf8f5] border-[#c39967]/80 shadow-[0_12px_32px_rgba(195,153,103,0.1)] ring-1 ring-[#c39967]/30"
                    : "bg-[#fcfdfe] border-slate-200/90 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-sm font-bold transition-colors ${
                        isOpen ? "text-[#c39967]" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#a5adb6] block mb-1">
                        {faq.tag}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                          isOpen ? "text-[#111827]" : "text-[#111827] group-hover:text-[#c39967]"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#c39967] text-white shadow-sm"
                        : "bg-slate-200/70 text-slate-600 group-hover:bg-[#c39967]/20 group-hover:text-[#c39967]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 animate-fadeIn">
                    <div className="pl-8 sm:pl-10 border-l-2 border-[#c39967] text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Wide Bottom Support Bar */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-[#0b0f17] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#c39967]/20 border border-[#c39967]/30 flex items-center justify-center text-[#c39967] flex-shrink-0">
              <MessageSquareText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a unique scope or complex tender?</div>
              <div className="text-xs text-slate-400">Our senior advisory team in Dubai provides direct scoping reviews.</div>
            </div>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0b0f17] bg-[#c39967] hover:bg-[#b28755] transition-all whitespace-nowrap font-sans"
          >
            <span>Consult With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}