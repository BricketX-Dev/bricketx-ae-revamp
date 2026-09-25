// src/app/services/advertising/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Billboard & Digital Advertising Agency Dubai | BricketX",
  description:
    "High-impact billboard concessions on Sheikh Zayed Road, digital performance campaigns, and omnichannel media distribution across the UAE.",
};

const adData: ServiceDetailProps = {
  number: "02",
  category: "ADVERTISING & MEDIA",
  title: "Strategic Advertising & Out-of-Home Media Across the UAE",
  subheadline:
    "From Sheikh Zayed Road billboard concessions to high-intent Google and programmatic funnels, we position your brand where decision-makers look.",
  description:
    "BricketX plans, produces, and manages integrated media campaigns tailored for Dubai's competitive corporate landscape. We combine high-impact outdoor physical presence with measurable digital acquisition funnels to turn market attention into qualified pipeline.",
  heroImage:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
  slaMetrics: [
    { value: "3.2M+", label: "Targeted UAE Reach", sublabel: "Prime highway & digital captive volume" },
    { value: "Prime", label: "OOH Concession Access", sublabel: "Sheikh Zayed Rd, Al Khail & Financial Center" },
    { value: "Real-Time", label: "Attribution Dashboards", sublabel: "Verified impression & lead verification" },
  ],
  capabilities: [
    {
      title: "Highway & Urban OOH Concessions",
      description:
        "Procurement, municipality permitting, and high-spec production for prime billboard and bridge banner installations in Dubai and Abu Dhabi.",
      deliverables: [
        "Site Location Analysis & Traffic Audits",
        "RTA & Municipal Permit Management",
        "High-Resolution Print Production Oversight",
        "Structural Verification & Lighting Specs",
      ],
    },
    {
      title: "Digital Acquisition & Search Marketing",
      description:
        "Precision B2B and consumer customer acquisition via Google Search, Meta platforms, and programmatic display across the GCC region.",
      deliverables: [
        "High-Intent Keyword Funnel Engineering",
        "Conversion Rate Architecture (CRO)",
        "Targeted UAE Demographics Profiling",
        "Weekly Cost-Per-Acquisition Optimization",
      ],
    },
    {
      title: "Brand Strategy & Production Creative",
      description:
        "Institutional brand identity assets, creative positioning, and campaign assets developed strictly to international standards.",
      deliverables: [
        "Corporate Brand Identity Systems",
        "High-Impact Advertising Copywriting",
        "Multi-Format Digital & OOH Media Kits",
        "Localized Arabic & English Campaign Proofs",
      ],
    },
  ],
  workflow: [
    { step: "1", phase: "Research", title: "Audience Profiling & Media Audit", deliverable: "Media Plan & Budget Allocation" },
    { step: "2", phase: "Creative", title: "Asset Production & Permits", deliverable: "Approved Creatives & RTA Permits" },
    { step: "3", phase: "Flight", title: "Campaign Launch & Monitoring", deliverable: "Live Performance Tracking" },
    { step: "4", phase: "Audit", title: "Attribution & Lead Reporting", deliverable: "Post-Campaign Attribution Dossier" },
  ],
  governanceSpecs: [
    "Full compliance with National Media Council (NMC) advertising decrees",
    "Pre-approved municipality permits eliminating launch delays",
    "Transparent media pass-through rates with zero disguised markups",
    "Dual-language (Arabic/English) statutory copy verification",
  ],
};

export default function AdvertisingPage() {
  return <ServicePageLayout data={adData} />;
}