// src/app/services/business-consultancy/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Consultancy in Dubai | Strategy, Operations & Growth | BricketX UAE",
  description:
    "BricketX is a business consultancy in Dubai that works with leadership teams to fix bottlenecks, optimize operations, and build practical growth roadmaps across the UAE.",
};

const consultingData: ServiceDetailProps = {
  number: "03",
  category: "BUSINESS CONSULTANCY",
  title: "Business Consultancy in Dubai for Strategy, Operations & Growth",
  subheadline:
    "BricketX is a business consultancy in Dubai that works with owners and leadership teams to fix what's slowing growth, cut unnecessary costs and build a clear roadmap forward.",
  description:
    "We focus on strategy and operations, not company setup. Our consultants review how your business runs end to end, remove bottlenecks and design a structure that scales, for mainland and free zone companies across the UAE.",
  heroImage: "/images/services/consulting.webp", // Update path manually in /public
  slaMetrics: [
    {
      value: "Tailored",
      label: "Our Approach",
      sublabel: "Practical roadmaps, not generic templates",
    },
    {
      value: "Direct",
      label: "Leadership Involvement",
      sublabel: "Senior consultants on every engagement",
    },
    {
      value: "3-in-1",
      label: "Focus Areas",
      sublabel: "Strategy, operations & growth",
    },
  ],
  capabilitiesTape: [
    {
      title: "Business Strategy Consulting",
      desc: "Market positioning, competitive intelligence, and revenue model restructuring for UAE enterprises.",
      link: "/contact",
      linkText: "Request Strategy Review",
      img: "/images/capabilities/consultancy/strategy-consulting.webp",
    },
    {
      title: "Operations Consulting",
      desc: "Comprehensive diagnostic of workflows, department handovers, and resource utilization to cut cost leaks.",
      link: "/contact",
      linkText: "Explore Operations Scope",
      img: "/images/capabilities/consultancy/operations-consulting.webp",
    },
    {
      title: "Process Optimization & SOPs",
      desc: "Institutional documentation, standard operating procedure blueprints, and team accountability frameworks.",
      link: "/contact",
      linkText: "View SOP Framework",
      img: "/images/capabilities/consultancy/process-sops.webp",
    },
    {
      title: "Digital Transformation Consulting",
      desc: "Practical roadmaps and tool adoption steering to modernize internal business systems and reporting.",
      link: "/contact",
      linkText: "Plan Transformation",
      img: "/images/capabilities/consultancy/digital-transformation.webp",
    },
    {
      title: "Business Analysis & Feasibility Studies",
      desc: "Rigorous unit economics, commercial viability assessments, and Capex forecasting before market expansion.",
      link: "/contact",
      linkText: "Order Feasibility Study",
      img: "/images/capabilities/consultancy/feasibility-studies.webp",
    },
    {
      title: "Change Management & Advisory",
      desc: "Leadership steering committees, stakeholder workshops, and KPI scorecards that ensure structural changes stick.",
      link: "/contact",
      linkText: "Book Advisory Briefing",
      img: "/images/capabilities/consultancy/change-management1.webp",
    },
  ],
  capabilities: [
    {
      title: "Operations Consulting & Process Optimization",
      description:
        "We review how work actually flows through your business, find the bottlenecks and cost leaks, and build leaner, simpler ways of working.",
      deliverables: [
        "Current vs. Future Workflow Maps",
        "Bottleneck & Cost Analysis",
        "Standard Operating Procedures (SOPs)",
        "Team & Resource Utilization Review",
      ],
    },
    {
      title: "Business Strategy & Growth Advisory",
      description:
        "We assess your market, competitors and numbers to build a clear strategy for growth, whether you're launching, expanding or repositioning in the UAE.",
      deliverables: [
        "Market & Competitor Analysis",
        "Go-To-Market & Growth Plans",
        "Pricing & Profitability Modeling",
        "Feasibility Studies",
      ],
    },
    {
      title: "Digital Transformation & Change Management",
      description:
        "We help your team adopt new technology, structures and ways of working, so changes actually stick instead of fading after launch.",
      deliverables: [
        "Digital Transformation Roadmap",
        "Stakeholder Alignment Workshops",
        "KPI & Performance Scorecards",
        "Regular Performance Reviews",
      ],
    },
  ],
  workflow: [
    {
      step: "1",
      phase: "DIAGNOSE",
      title: "Business & Operations Review",
      deliverable: "Gap Analysis Report",
    },
    {
      step: "2",
      phase: "PLAN",
      title: "Strategy & Operating Model Design",
      deliverable: "Improvement Roadmap",
    },
    {
      step: "3",
      phase: "IMPLEMENT",
      title: "Step-by-Step Rollout",
      deliverable: "SOPs & Team Training",
    },
    {
      step: "4",
      phase: "MEASURE",
      title: "Performance Review",
      deliverable: "Results & ROI Report",
    },
  ],
  governanceSpecs: [
    "Recommendations that work within UAE business and labour regulations",
    "Focused on profit and performance, not just slide decks",
    "Full confidentiality, protected by a mutual NDA",
    "Built on direct conversations with your team and your real data",
  ],
};

export default function BusinessConsultancyPage() {
  return <ServicePageLayout data={consultingData} />;
}