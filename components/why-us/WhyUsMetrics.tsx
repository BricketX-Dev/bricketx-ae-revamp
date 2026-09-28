// src/components/why-us/WhyUsMetrics.tsx
"use client";

import Image from "next/image";

export default function WhyUsMetrics() {
  const statMetrics = [
    {
      code: "METRIC · 01",
      value: "3-in-1",
      title: "Core Service Delivery",
      subtext: "PM, Advertising & Advisory under one legal umbrella",
      icon: "/images/icons/why-us/metrics/services.png",
    },
    {
      code: "METRIC · 02",
      value: "01",
      title: "Governing Agreement",
      subtext: "One master contract protecting terms, SLAs and scope",
      icon: "/images/icons/why-us/metrics/contract.png",
    },
    {
      code: "METRIC · 03",
      value: "1:1",
      title: "Partner-Level Contact",
      subtext: "Dedicated executive director assigned to your project",
      icon: "/images/icons/why-us/metrics/contact.png",
    },
    {
      code: "METRIC · 04",
      value: "100%",
      title: "Milestone Accountability",
      subtext: "Capital commitments released strictly on verified sign-off",
      icon: "/images/icons/why-us/metrics/delivery.png",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#f8f9fb] border-b border-slate-200/90 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {statMetrics.map((item, idx) => (
            <div
              key={idx}
              className="group p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#c39967]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Metric Header Bar with Scaled Icon Vessel */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                    {item.code}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#faf6f0] border border-[#c39967]/30 flex items-center justify-center p-2 group-hover:scale-105 group-hover:bg-[#c39967]/10 transition-all duration-300 flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>

                {/* Metric Stat Figure */}
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0f172a] tracking-tight mb-1">
                  <span className="text-[#c39967]">{item.value}</span>
                </div>

                {/* Metric Title */}
                <div className="text-xs sm:text-[13px] font-bold text-[#0f172a] mb-1.5 leading-snug">
                  {item.title}
                </div>
              </div>

              {/* Metric Subtext */}
              <div className="text-[10.5px] sm:text-[11px] text-slate-500 leading-snug">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}