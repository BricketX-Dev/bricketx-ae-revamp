// src/app/services/business-consultancy/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Consultancy & Growth Advisory Dubai | BricketX",
  description:
    "Practical business consulting in Dubai. Operational streamlining, market expansion roadmaps, and corporate governance for UAE enterprises.",
};

const consultingData: ServiceDetailProps = {
  number: "03",
  category: "BUSINESS CONSULTANCY",
  title: "Operational & Strategic Business Advisory in Dubai",
  subheadline:
    "We partner with business owners and executive committees to identify operational friction, realign cost structures, and build measurable growth roadmaps.",
  description:
    "BricketX cuts through theoretical frameworks to deliver grounded corporate strategy. Our advisory engagements evaluate your end-to-end operations, eliminate administrative bottlenecks, and structure your corporate model for long-term scalability across the UAE mainland and free zones.",
  heroImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
  slaMetrics: [
    { value: "35%+", label: "Operational Velocity Gain", sublabel: "Elimination of redundant procedural gates" },
    { value: "Bespoke", label: "Roadmap Engineering", sublabel: "Zero generic playbook templates" },
    { value: "Direct", label: "Executive Oversight", sublabel: "Partner-level involvement throughout" },
  ],
  capabilities: [
    {
      title: "Operations & Process Re-Engineering",
      description:
        "Comprehensive diagnostic of internal workflows, handover dependencies, and cost leaks to establish lean operating systems.",
      deliverables: [
        "As-Is vs. To-Be Workflow Blueprints",
        "Operational Bottleneck Diagnostics",
        "Standard Operating Procedures (SOPs)",
        "Resource Utilization Reviews",
      ],
    },
    {
      title: "UAE Market Strategy & Expansion",
      description:
        "Market viability assessments, regulatory alignment, and competitive positioning strategies for commercial growth in the Emirates.",
      deliverables: [
        "Regional Competitive Landscape Audits",
        "Go-To-Market (GTM) Commercial Plans",
        "Pricing & Unit Economics Modeling",
        "Mainland Licensing Feasibility Audits",
      ],
    },
    {
      title: "Change Management & Task-Force Governance",
      description:
        "Structured change execution frameworks that ensure newly introduced technology, operational structures, and policies take root.",
      deliverables: [
        "Executive Steering Committee Frameworks",
        "Stakeholder Alignment Workshops",
        "Departmental KPI Re-Alignment Scorecards",
        "Quarterly Performance Review Protocols",
      ],
    },
  ],
  workflow: [
    { step: "1", phase: "Diagnostic", title: "Operational & Financial Review", deliverable: "Executive Gap Analysis" },
    { step: "2", phase: "Strategy", title: "Target Operating Model (TOM)", deliverable: "Restructuring Blueprint" },
    { step: "3", phase: "Rollout", title: "Milestone-Based Implementation", deliverable: "SOP Handover & Training" },
    { step: "4", phase: "Review", title: "Performance Audits & Retention", deliverable: "Quarterly ROI Assessment" },
  ],
  governanceSpecs: [
    "Aligns with UAE commercial law decrees and labor regulations",
    "Grounded in pragmatic EBITDA impact rather than abstract slide decks",
    "Complete confidentiality under mutual commercial NDAs",
    "Direct stakeholder interviews and bottom-up data verification",
  ],
};

export default function BusinessConsultancyPage() {
  return <ServicePageLayout data={consultingData} />;
}