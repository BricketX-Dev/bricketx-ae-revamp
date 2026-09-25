// src/app/services/project-management/page.tsx
import type { Metadata } from "next";
import ServicePageLayout, { ServiceDetailProps } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Digital Project Management Services Dubai | BricketX",
  description:
    "End-to-end digital project management in Dubai. Scope control, technical milestones, resource governance, and QA delivery for UAE enterprises.",
};

const pmData: ServiceDetailProps = {
  number: "01",
  category: "PROJECT MANAGEMENT",
  title: "End-to-End Digital Project Management in Dubai",
  subheadline:
    "We take enterprise technology, platform architectures, and digital transformation initiatives from blueprint through to live handover.",
  description:
    "BricketX provides single-vendor accountability across every milestone. We align engineering teams, external contractors, and executive leadership under strict critical-path governance to ensure your technology investments deliver on time and to specification.",
  heroImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  slaMetrics: [
    { value: "100%", label: "Milestone Delivery SLA", sublabel: "Critical-path schedule adherence" },
    { value: "Zero", label: "Vendor Silos", sublabel: "Single direct accountable project desk" },
    { value: "24h", label: "Executive Reporting Cycle", sublabel: "Live sprint burndowns & risk audits" },
  ],
  capabilities: [
    {
      title: "Technical Scoping & Architecture Planning",
      description:
        "Full technical breakdown, dependency mapping, and infrastructure feasibility audits prior to writing code or procuring vendors.",
      deliverables: [
        "Work Breakdown Structure (WBS)",
        "Technical Stack Feasibility Report",
        "Risk Assessment Matrix",
        "Statutory UAE Data Protection Review",
      ],
    },
    {
      title: "Agile & Critical-Path Milestone Delivery",
      description:
        "Active day-to-day coordination of developers, systems integrators, and business stakeholders under disciplined sprint cadences.",
      deliverables: [
        "Sprint Governance & Backlog Prioritization",
        "Live Milestone Dashboards",
        "Cross-Vendor Blocker Resolution",
        "Weekly Steering Committee Decks",
      ],
    },
    {
      title: "Quality Assurance & Production Handover",
      description:
        "Rigorous functional, load, and security verification before production release, supported by comprehensive handover documentation.",
      deliverables: [
        "User Acceptance Testing (UAT) Audits",
        "Penetration & Security Checklists",
        "System Architecture Handover Docs",
        "Post-Launch SLA Maintenance Plans",
      ],
    },
  ],
  workflow: [
    { step: "1", phase: "Discovery", title: "Scope Scrutiny & Feasibility", deliverable: "Technical Roadmap Document" },
    { step: "2", phase: "Architecture", title: "Resource & Milestone Planning", deliverable: "Critical Path Timeline SLA" },
    { step: "3", phase: "Execution", title: "Sprint Coordination & Testing", deliverable: "Staging Platform Sign-off" },
    { step: "4", phase: "Handover", title: "Live Handover & Governance", deliverable: "30-Day Post-Launch SLA" },
  ],
  governanceSpecs: [
    "Strict non-disclosure NDA protocols across all systems",
    "Continuous sprint burn-down tracking with zero hidden delays",
    "Mainland commercial legal agreements governed under UAE courts",
    "Single point of technical escalation for leadership",
  ],
};

export default function ProjectManagementPage() {
  return <ServicePageLayout data={pmData} />;
}