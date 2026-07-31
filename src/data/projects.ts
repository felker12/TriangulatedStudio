import southardHomesImage from "@assets/projects/southard-homes.png";

export type ProjectType = "client" | "employment" | "personal" | "open-source";

export interface PortfolioProject {
  slug: string;
  title: string;
  summary: string;
  category: string;
  type: ProjectType;
  role: string;
  organization: string;
  year: number;
  attribution: string;
  technologies: string[];
  image: ImageMetadata;
  imageAlt: string;
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "southard-homes",
    title: "Southard Homes",
    summary:
      "A modern real estate website designed to showcase available homes, communicate quality, and make property discovery simple.",
    category: "Residential construction",
    type: "employment",
    role: "Web Developer",
    organization: "Southard Homes LLC",
    year: 2026,
    attribution: "Designed and developed while employed by Southard Homes LLC.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
    image: southardHomesImage,
    imageAlt: "Southard Homes website displayed on desktop and mobile devices",
    featured: true,
  },
];

export const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured,
);
