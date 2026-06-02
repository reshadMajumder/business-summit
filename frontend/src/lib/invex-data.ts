
export interface InvexProject {
  id: string;
  title: string;
  industry: string;
  entrepreneur: string;
  investmentGoal: string;
  description: string;
  image: string;
  status: 'Open' | 'Closed' | 'Vetted';
}

export const invexProjects: InvexProject[] = [
  {
    id: "proj-001",
    title: "NextGen Neobank",
    industry: "Fintech",
    entrepreneur: "K. Adeyemi",
    investmentGoal: "$5.0M",
    description: "Building the primary digital banking infrastructure for underserved SME markets in West Africa.",
    image: "https://picsum.photos/seed/neobank/800/600",
    status: "Vetted"
  },
  {
    id: "proj-002",
    title: "EcoSolar Hub",
    industry: "Energy",
    entrepreneur: "L. Mbeki",
    investmentGoal: "$12.5M",
    description: "Distributed solar energy grids designed for rapid deployment in rural industrial zones.",
    image: "https://picsum.photos/seed/solar/800/600",
    status: "Open"
  },
  {
    id: "proj-003",
    title: "Lagos Heights",
    industry: "Real Estate",
    entrepreneur: "Signature Global",
    investmentGoal: "$45.0M",
    description: "A mixed-use luxury commercial development in the heart of the Eko Atlantic district.",
    image: "https://picsum.photos/seed/heights/800/600",
    status: "Vetted"
  },
  {
    id: "proj-004",
    title: "BioHealth Solutions",
    industry: "Healthcare",
    entrepreneur: "Dr. S. Grant",
    investmentGoal: "$3.2M",
    description: "AI-driven diagnostic tools for early detection of regional respiratory conditions.",
    image: "https://picsum.photos/seed/health/800/600",
    status: "Open"
  },
  {
    id: "proj-005",
    title: "AgroStream AI",
    industry: "Agriculture",
    entrepreneur: "T. Chen",
    investmentGoal: "$1.8M",
    description: "Optimizing supply chain transparency for smallholder farmers using blockchain ledger technology.",
    image: "https://picsum.photos/seed/agro/800/600",
    status: "Vetted"
  },
  {
    id: "proj-006",
    title: "Titan Manufacturing",
    industry: "Manufacturing",
    entrepreneur: "J. Vane",
    investmentGoal: "$8.5M",
    description: "Automated fabrication center for high-precision industrial components exported globally.",
    image: "https://picsum.photos/seed/titan/800/600",
    status: "Open"
  }
];
