// src/app/services/project-management/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Project Management Company in Dubai | Digital Projects | BricketX UAE",
  description:
    "BricketX is a project management company in Dubai that takes digital projects, web platforms and tech initiatives from plan to live launch with single-vendor accountability.",
};

const pmData: ServiceDetailProps = {
  number: "01",
  category: "PROJECT MANAGEMENT",
  title: "Project Management Company in Dubai for Digital Projects",
  subheadline:
    "BricketX is a project management company in Dubai that takes your digital projects, web platforms and technology initiatives from plan to live launch.",
  description:
    "One accountable team manages your scope, timelines, developers and stakeholders at every stage. You get clear milestones, regular updates and a project delivered on time, on budget and to the agreed standard.",
  heroImage: "/images/services/project-management.webp", // Update path manually in /public
  slaMetrics: [
    {
      value: "End-to-End",
      label: "Delivery Model",
      sublabel: "Planning to post-launch support",
    },
    {
      value: "1 Team",
      label: "Point of Contact",
      sublabel: "One accountable project lead",
    },
    {
      value: "Weekly",
      label: "Progress Reporting",
      sublabel: "Milestone updates & risk tracking",
    },
  ],
  capabilities: [
    {
      title: "Technology Project Planning",
      description:
        "We map out your project before any code is written: scope, technology choices, budget, risks and a realistic timeline everyone agrees on.",
      deliverables: [
        "Project Scope & Work Breakdown",
        "Technology & Feasibility Assessment",
        "Risk Assessment Plan",
        "Budget & Timeline Roadmap",
      ],
    },
    {
      title: "Project Execution & Delivery",
      description:
        "We coordinate your developers, vendors and stakeholders day to day, using agile sprints to keep work moving and milestones on track.",
      deliverables: [
        "Sprint Planning & Backlog Management",
        "Live Progress Dashboard",
        "Vendor & Blocker Coordination",
        "Regular Progress Reports",
      ],
    },
    {
      title: "Quality Assurance & Launch Support",
      description:
        "Before launch, we test every feature for function, performance and security, then hand over complete documentation and ongoing support.",
      deliverables: [
        "User Acceptance Testing (UAT)",
        "Performance & Security Testing",
        "Handover Documentation",
        "Post-Launch Support Plan",
      ],
    },
  ],
  workflow: [
    {
      step: "1",
      phase: "DISCOVERY",
      title: "Scope & Feasibility Review",
      deliverable: "Project Roadmap Document",
    },
    {
      step: "2",
      phase: "PLANNING",
      title: "Resources & Milestone Planning",
      deliverable: "Approved Timeline & Budget",
    },
    {
      step: "3",
      phase: "EXECUTION",
      title: "Sprint Delivery & Testing",
      deliverable: "Tested Build Ready for Sign-off",
    },
    {
      step: "4",
      phase: "LAUNCH",
      title: "Go-Live & Handover",
      deliverable: "Live Launch + Support Plan",
    },
  ],
  governanceSpecs: [
    "NDA signed before every project, keeping your data and ideas confidential",
    "Live progress tracking, so delays are flagged early, never hidden",
    "Clear written agreements under UAE law",
    "One project lead as your single point of contact",
  ],
};

export default function ProjectManagementPage() {
  return <ServicePageLayout data={pmData} />;
}