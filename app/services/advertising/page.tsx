// src/app/services/advertising/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Advertising Agency in Dubai | Outdoor & Digital Campaigns | BricketX UAE",
  description:
    "BricketX is an advertising agency in Dubai combining prime highway billboards on Sheikh Zayed Road with high-performance Google Ads, SEO and social media campaigns.",
};

const adData: ServiceDetailProps = {
  number: "02",
  category: "ADVERTISING",
  title: "Advertising Agency in Dubai for Outdoor & Digital Campaigns",
  subheadline:
    "From billboards on Sheikh Zayed Road to Google Ads and social media, BricketX is an advertising agency in Dubai that puts your brand where your customers are looking.",
  description:
    "We plan, create and manage campaigns that combine outdoor visibility with measurable digital results. One team handles your strategy, creative, media and reporting, turning attention into real leads for your business across the UAE.",
  heroImage: "/images/services/advertising.webp", // Update path manually in /public
  slaMetrics: [
    {
      value: "Outdoor + Digital",
      label: "Channels",
      sublabel: "Billboards, OOH, search & social",
    },
    {
      value: "Dubai-Wide",
      label: "Key Locations",
      sublabel: "Sheikh Zayed Rd, Al Khail & more",
    },
    {
      value: "Transparent",
      label: "Campaign Reporting",
      sublabel: "Impressions, clicks & leads tracked",
    },
  ],
  capabilitiesTape: [
    {
      title: "Billboard Advertising",
      desc: "Prime static and digital hoardings along Sheikh Zayed Road, Al Khail, and high-traffic Dubai arterials.",
      link: "/contact",
      linkText: "Check Locations",
      img: "/images/capabilities/billboard-advertising.webp",
    },
    {
      title: "Google Ads (PPC)",
      desc: "High-intent search, display, and YouTube campaigns tuned for qualified inbound leads and controlled CPL.",
      link: "/contact",
      linkText: "View PPC Setup",
      img: "/images/capabilities/google-ads.webp",
    },
    {
      title: "Outdoor Advertising (OOH)",
      desc: "Lampposts, bridge banners, unipoles, and transit media with end-to-end permit handling.",
      link: "/contact",
      linkText: "Explore OOH Sites",
      img: "/images/capabilities/outdoor-advertising.webp",
    },
    {
      title: "SEO Services",
      desc: "Technical site optimization, local Dubai search intent, and bilingual organic visibility for sustainable traffic.",
      link: "/contact",
      linkText: "Request SEO Audit",
      img: "/images/capabilities/seo-services.webp",
    },
    {
      title: "Digital Marketing",
      desc: "Integrated multi-channel performance funnels converting clicks into verified business inquiries across the UAE.",
      link: "/contact",
      linkText: "Plan Marketing Scope",
      img: "/images/capabilities/digital-marketing.webp",
    },
    {
      title: "Branding & Creative Design",
      desc: "Memorable brand identities, high-contrast highway ad visuals, and bilingual Arabic/English campaign copy.",
      link: "/contact",
      linkText: "See Creative Specs",
      img: "/images/capabilities/branding-creative.webp",
    },
    {
      title: "Social Media Marketing",
      desc: "Paid acquisition on Meta, LinkedIn, and TikTok structured for audience targeting and measurable return.",
      link: "/contact",
      linkText: "Review Social Plans",
      img: "/images/capabilities/social-media.webp",
    },
    {
      title: "Lead Generation",
      desc: "High-converting landing pages, lead capture automation, and continuous cost-per-lead optimization.",
      link: "/contact",
      linkText: "Get Acquisition Plan",
      img: "/images/capabilities/lead-generation.webp",
    },
  ],
  capabilities: [
    {
      title: "Billboard & Outdoor Advertising",
      description:
        "We find the right billboard and outdoor locations across Dubai and the UAE, handle the permits, and manage production and installation from start to finish.",
      deliverables: [
        "Location Analysis & Traffic Insights",
        "RTA & Municipality Permit Handling",
        "Print Production & Installation",
        "Media Buying & Booking",
      ],
    },
    {
      title: "Digital Marketing & Lead Generation",
      description:
        "We run Google Ads, SEO and social media campaigns that reach the right B2B and consumer audiences across the UAE and turn clicks into qualified leads.",
      deliverables: [
        "Google Ads & SEO",
        "Social Media Marketing",
        "Landing Page & Conversion Optimization",
        "Ongoing Cost-per-Lead Optimization",
      ],
    },
    {
      title: "Brand Strategy & Creative Design",
      description:
        "We shape how your brand looks and sounds, then create campaign visuals and copy that work on billboards, screens and social feeds.",
      deliverables: [
        "Brand Identity Design",
        "Brand Strategy & Positioning",
        "Ad Copywriting & Creative Design",
        "Bilingual Arabic & English Creatives",
      ],
    },
  ],
  workflow: [
    {
      step: "1",
      phase: "RESEARCH",
      title: "Audience & Market Research",
      deliverable: "Media Plan & Budget",
    },
    {
      step: "2",
      phase: "CREATIVE",
      title: "Creative Production & Permits",
      deliverable: "Approved Creatives & Permits",
    },
    {
      step: "3",
      phase: "LAUNCH",
      title: "Campaign Launch & Monitoring",
      deliverable: "Live Performance Tracking",
    },
    {
      step: "4",
      phase: "RESULTS",
      title: "Reporting & Optimization",
      deliverable: "Campaign Results Report",
    },
  ],
  governanceSpecs: [
    "Campaigns that follow UAE Media Council advertising standards",
    "Permit applications handled early to avoid launch delays",
    "Transparent media pricing, with no hidden markups",
    "Arabic and English ad copy checked for accuracy and compliance",
  ],
};

export default function AdvertisingPage() {
  return <ServicePageLayout data={adData} />;
}