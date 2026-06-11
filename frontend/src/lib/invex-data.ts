
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
    title: "Dry Port Project",
    industry: "Logistics",
    entrepreneur: "Strategic Lead",
    investmentGoal: "Inquire for Data",
    description: "Developing a primary inland port infrastructure to optimize regional trade flows and customs efficiency.",
    image: "https://picsum.photos/seed/dryport/800/600",
    status: "Vetted"
  },
  {
    id: "proj-002",
    title: "Hydrocapillary",
    industry: "Energy",
    entrepreneur: "Innovation Team",
    investmentGoal: "Inquire for Data",
    description: "Advanced water management and energy recovery systems based on capillary technology.",
    image: "https://picsum.photos/seed/hydro/800/600",
    status: "Open"
  },
  {
    id: "proj-003",
    title: "UA9",
    industry: "Aviation",
    entrepreneur: "Aerospace Partners",
    investmentGoal: "Inquire for Data",
    description: "Next-generation regional aerial mobility platform architected for institutional deployment.",
    image: "https://picsum.photos/seed/ua9/800/600",
    status: "Vetted"
  },
  {
    id: "proj-004",
    title: "Fort Erie",
    industry: "Real Estate",
    entrepreneur: "Development Group",
    investmentGoal: "Inquire for Data",
    description: "Strategic commercial expansion and hospitality development in high-growth regional corridors.",
    image: "https://picsum.photos/seed/forterie/800/600",
    status: "Open"
  },
  {
    id: "proj-005",
    title: "Tuga Innovations",
    industry: "Tech",
    entrepreneur: "Engineering Lead",
    investmentGoal: "Inquire for Data",
    description: "Proprietary technology solutions scaling industrial efficiency through automated monitoring.",
    image: "https://picsum.photos/seed/tuga/800/600",
    status: "Vetted"
  },
  {
    id: "proj-006",
    title: "Stonecastle Winery",
    industry: "Manufacturing",
    entrepreneur: "Agricultural Lead",
    investmentGoal: "Inquire for Data",
    description: "Expanding production capacity for premium exports through advanced industrial viticulture.",
    image: "https://picsum.photos/seed/winery/800/600",
    status: "Open"
  }
];
