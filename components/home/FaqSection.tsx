// src/components/home/FaqSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight, MessageSquareText } from "lucide-react";

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
    <section id="faq" className="py-14 lg:py-20 bg-[#ffffff] border-t border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#c39967] block mb-2">
            Clarity &amp; Transparency
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
            Frequently Asked <span className="text-[#c39967]">Questions</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal">
            Essential information regarding our corporate advisory, project governance, and regional delivery models in Dubai and the UAE.
          </p>

          {/* Filter Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#111827] text-white"
                    : "bg-slate-100 text-[#64748b] hover:bg-slate-200 hover:text-[#111827]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl transition-colors border ${
                  isOpen
                    ? "bg-[#faf8f5] border-[#c39967]/70"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className={`font-mono text-xs font-bold pt-0.5 ${
                        isOpen ? "text-[#c39967]" : "text-slate-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        {faq.tag}
                      </span>
                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors leading-snug ${
                          isOpen ? "text-[#111827]" : "text-[#111827]"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#c39967] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[2]" /> : <Plus className="w-3.5 h-3.5 stroke-[2]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <div className="pl-8 sm:pl-9 border-l border-[#c39967] text-xs sm:text-sm text-[#4b5563] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Bar */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-xl bg-[#090d14] text-white border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
              <MessageSquareText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Have a unique scope or complex tender?</div>
              <div className="text-[11px] sm:text-xs text-slate-400">Our senior advisory team in Dubai provides direct scoping reviews.</div>
            </div>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-colors whitespace-nowrap font-sans"
          >
            <span>Consult With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}