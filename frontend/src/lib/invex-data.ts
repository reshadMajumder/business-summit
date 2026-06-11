
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
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202895/Dry_Port_Project_nv5uzo.png",
    status: "Vetted"
  },
  {
    id: "proj-002",
    title: "TUGA INNOVATION",
    industry: "Tech",
    entrepreneur: "Engineering Lead",
    investmentGoal: "Inquire for Data",
    description: "Proprietary technology solutions scaling industrial efficiency through automated monitoring and intelligent systems.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202877/TUGA_INNOVATION_tn86lo.jpg",
    status: "Vetted"
  },
  {
    id: "proj-003",
    title: "Stone Castle",
    industry: "Manufacturing",
    entrepreneur: "Agricultural Lead",
    investmentGoal: "Inquire for Data",
    description: "Expanding production capacity for premium exports through advanced industrial viticulture and international trade corridors.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202876/Stone_Castle_vsnuw6.png",
    status: "Open"
  },
  {
    id: "proj-004",
    title: "Hydrokapillare",
    industry: "Energy",
    entrepreneur: "Innovation Team",
    investmentGoal: "Inquire for Data",
    description: "Advanced water management and energy recovery systems based on proprietary capillary technology architecture.",
    image: "https://res.cloudinary.com/dzgs1uhn0/image/upload/v1781202873/Hydrokapillare_phcwuo.jpg",
    status: "Open"
  }
];
