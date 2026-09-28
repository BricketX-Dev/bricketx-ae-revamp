// src/components/home/FaqSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight, Briefcase } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Company & Setup", "Services & Scope", "Pricing & Process"];

  const faqs = [
    {
      q: "What does BricketX UAE do?",
      a: "BricketX UAE is a Dubai-based company offering project management, advertising, and business consultancy services. We help businesses across the UAE deliver digital projects on time, reach the right audience through billboard and digital campaigns, and improve their strategy and operations—all through one accountable team.",
      category: "Company & Setup",
      tag: "Overview",
    },
    {
      q: "Is BricketX UAE a licensed company?",
      a: "Yes. BricketX Project Management LLC-FZ is a limited liability company licensed by Meydan City Corporation (Meydan Free Zone) in Dubai, under Commercial Licence No. 2540036.01. We work with businesses across Dubai and the wider UAE.",
      category: "Company & Setup",
      tag: "Licensing",
    },
    {
      q: "What kind of projects does BricketX manage?",
      a: "BricketX manages digital and technology projects, including websites, web platforms, mobile apps, software products, and digital transformation initiatives. We handle planning, execution, quality assurance, and post-launch support. We do not manage construction projects; our project management focus is digital delivery.",
      category: "Services & Scope",
      tag: "Project Management",
    },
    {
      q: "Does BricketX offer billboard advertising in Dubai?",
      a: "Yes. BricketX plans and manages billboard and outdoor advertising across Dubai, including premium locations such as Sheikh Zayed Road. We help with location selection, permit applications, creative design, production, and installation. We can also combine outdoor campaigns with Google Ads, SEO, and social media marketing.",
      category: "Services & Scope",
      tag: "Advertising",
    },
    {
      q: "What business consultancy services does BricketX provide?",
      a: "Our business consultants in Dubai help with business strategy, operations consulting, process optimization, feasibility studies, digital transformation, and change management. Our focus is improving how your business runs and grows. We do not provide company formation or business setup services.",
      category: "Services & Scope",
      tag: "Consultancy",
    },
    {
      q: "Why work with one company instead of separate agencies?",
      a: "Working with separate tech, advertising, and consulting vendors often leads to delays, mixed priorities, and unclear responsibility. With BricketX, one team handles everything under one agreement, with one point of contact, so your project, marketing, and business goals stay completely aligned.",
      category: "Company & Setup",
      tag: "Single-Vendor Model",
    },
    {
      q: "How much do BricketX services cost?",
      a: "Costs depend on the scope, timeline, and services you need. After an introductory call, we share a clear, itemized proposal with timelines and costs. For most engagements, payments are linked to milestones you approve, so you only pay for delivered progress.",
      category: "Pricing & Process",
      tag: "Budgeting",
    },
    {
      q: "How does BricketX keep projects on time and on budget?",
      a: "Every engagement follows a clear four-step process: discovery, planning, execution, and support. Each step has defined outputs and milestones, you receive regular progress updates, and issues are flagged early so they can be fixed before they affect your timeline or budget.",
      category: "Pricing & Process",
      tag: "Execution",
    },
    {
      q: "Which industries does BricketX work with?",
      a: "BricketX works with businesses in real estate, technology and e-commerce, healthcare and education, hospitality and F&B, retail and trading, and professional services. We work with startups, growing SMEs, and established companies across Dubai and the UAE.",
      category: "Company & Setup",
      tag: "Sectors",
    },
    {
      q: "How do I get started with BricketX?",
      a: "Contact us through the website, email info@bricketx.ae, or call +971 54 166 2352 to book an introductory call. We will discuss your goals, review your requirements, and send a proposal with a recommended approach, timeline, and cost.",
      category: "Pricing & Process",
      tag: "Onboarding",
    },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-[#ffffff] border-t border-slate-200/90 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c39967]" />
            <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-widest uppercase text-[#c39967]">
              FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.18]">
            Frequently Asked <span className="text-[#c39967]">Questions</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#4b5563] leading-relaxed font-normal">
            Quick answers about BricketX UAE, our services and how we work with businesses in Dubai.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#111827] text-white shadow-md"
                    : "bg-slate-100 text-[#4b5563] hover:bg-slate-200 hover:text-[#111827]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Accordion List with Smooth Physics */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#faf8f5] border-[#c39967]/40 shadow-sm"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className={`font-mono text-xs font-bold pt-0.5 transition-colors ${
                        isOpen ? "text-[#c39967]" : "text-slate-400"
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
                    className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#c39967] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[2]" /> : <Plus className="w-3.5 h-3.5 stroke-[2]" />}
                  </div>
                </button>

                {/* CSS Grid Animation for buttery smooth open/close */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                      <div className="pl-8 sm:pl-9 border-l-2 border-[#c39967] text-xs sm:text-[13px] text-[#4b5563] leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Bar / Industry CTA */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#07090e] text-white border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#c39967]/10 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c39967] flex-shrink-0">
              <Briefcase className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#c39967] block mb-1">
                DON&apos;T SEE YOUR INDUSTRY?
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                From Startups to Established Enterprises
              </h3>
              <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                Whether you&apos;re launching a new brand, scaling a growing business or improving how a larger organization runs, our team shapes the right solution for your industry and goals.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="relative z-10 flex-shrink-0 w-full sm:w-auto inline-flex justify-center items-center gap-2 min-h-[46px] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#080b11] bg-[#c39967] hover:bg-[#d6b48a] transition-all font-sans active:scale-[0.98]"
          >
            <span>TALK TO US ABOUT YOUR INDUSTRY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}