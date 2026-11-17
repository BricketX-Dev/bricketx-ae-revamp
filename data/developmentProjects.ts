// data/developmentProjects.ts

export type DevelopmentCategory = "All" | "Residential" | "Commercial" | "Mixed-Use";

export interface DevelopmentProject {
  id: string;
  titleEn: string;
  titleAr: string;
  location: string;
  emirate: string;
  category: Exclude<DevelopmentCategory, "All">;
  typeLabel: string;
  scaleBadge: string;
  status: "Completed";
  description: string;
  image: string;
}

export const COLLABORATION_META = {
  eyebrow: "STRATEGIC COLLABORATION · REAL ESTATE & CONSTRUCTION",
  partnerName: "Sheikh Rashid Saqar Al Qasimi",
  headingPrefix: "In Collaboration with",
  headingAccent: "Development Portfolio",
  intro:
    "BricketX Project Management LLC FZ collaborates with Sheikh Rashid Saqar Al Qasimi to present a curated portfolio of completed residential, commercial, and mixed-use developments across Sharjah, UAE, reflecting disciplined execution, structural planning, and enduring built value.",
  collaborationScope:
    "BricketX Project Management LLC FZ and Sheikh Rashid Saqar Al Qasimi have come together to present construction and development projects through an institutional platform, highlighting development execution and construction achievements while creating opportunities for future business engagements.",
  closingStatement:
    "BricketX Project Management LLC FZ is committed to building strategic partnerships and creating opportunities across the construction and real estate sectors through collaboration, structured project management, and a focus on quality.",
  profilePdfPath: "/documents/project_development_profile.pdf",
};

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    id: "al-saadah-tower",
    titleEn: "Al Saadah Tower",
    titleAr: "برج السعادة",
    location: "Al Khan",
    emirate: "Sharjah",
    category: "Residential",
    typeLabel: "Residential",
    scaleBadge: "44-Storey Tower",
    status: "Completed",
    description:
      "A 44-storey residential development featuring spacious apartments, modern architectural design, and premium lifestyle amenities including a rooftop swimming pool, fitness facilities, and recreational spaces.",
    image: "/images/developments/al-saadah-tower.webp",
  },
  {
    id: "rolla-mall",
    titleEn: "Rolla Mall",
    titleAr: "رولا مول",
    location: "Al Ghuwair",
    emirate: "Sharjah",
    category: "Commercial",
    typeLabel: "Commercial",
    scaleBadge: "Retail, Offices & Healthcare",
    status: "Completed",
    description:
      "A commercial and retail development featuring multiple business outlets, office spaces, and healthcare facilities, serving as a mixed-use destination for retail and professional services.",
    image: "/images/developments/rolla-mall.webp",
  },
  {
    id: "al-salam-residence",
    titleEn: "Al Salam Residence",
    titleAr: "مقر السلام السكني",
    location: "Al Majaz",
    emirate: "Sharjah",
    category: "Residential",
    typeLabel: "Residential",
    scaleBadge: "3 × 15-Storey Towers",
    status: "Completed",
    description:
      "A residential complex comprising three 15-storey buildings, offering spacious two and three-bedroom apartments with modern facilities, covered parking, and well-maintained residential amenities.",
    image: "/images/developments/al-salam-residence.webp",
  },
  {
    id: "emirates-tower",
    titleEn: "Emirates Tower",
    titleAr: "برج الإمارات",
    location: "Al Taawun",
    emirate: "Sharjah",
    category: "Residential",
    typeLabel: "Residential",
    scaleBadge: "26-Storey Tower",
    status: "Completed",
    description:
      "Emirates Tower is a 26-storey residential building located in Al Taawun, Sharjah, offering spacious one, two, and three-bedroom apartments.",
    image: "/images/developments/emirates-tower.webp",
  },
  {
    id: "al-muntazah-villas",
    titleEn: "Al Muntazah Villas",
    titleAr: "فلل المتنزه",
    location: "Al Rifaah",
    emirate: "Sharjah",
    category: "Mixed-Use",
    typeLabel: "Residential / Commercial",
    scaleBadge: "B+G+2 Luxury Complex",
    status: "Completed",
    description:
      "An upscale B+G+2 residential development in Al Rifaah, Sharjah, comprising luxury furnished villas and spacious apartments with elegant Arabian architecture, covered parking, and community amenities.",
    image: "/images/developments/al-muntazah-villas.webp",
  },
  {
    id: "al-khan-residence",
    titleEn: "Al Khan Residence",
    titleAr: "مقر الخان السكني",
    location: "Al Majaz",
    emirate: "Sharjah",
    category: "Residential",
    typeLabel: "Residential",
    scaleBadge: "High-Rise Residential",
    status: "Completed",
    description:
      "A modern high-rise residential development offering spacious apartments, contemporary designs, and essential lifestyle amenities focused on comfort and convenience.",
    image: "/images/developments/al-khan-residence.webp",
  },
];