// src/data/projects/completedProjects.ts

import type { ImageMetadata } from "astro";
import type { PackageId } from "@data/services/packages";

import monarchMediaImage from "@assets/projects/monarch-media/admin.png";
import southardHomesImage from "@assets/projects/southard-homes/home.png";
import qualityLandscapeImage from "@assets/projects/quality-landscape/home.png";

import timePunchImage from "@assets/projects/timepunch/dash.png";
import portfolioGeneratorImage from "@assets/projects/portfolio-generator/home.png";
import rpgEngineImage from "@assets/projects/engine/gameplay.png";

export type PortfolioSection = "professional" | "engineering";

export type ProjectType = "employment" | "client" | "personal" | "open-source";

export interface CompletedProject {
  slug: string;
  title: string;
  summary: string;
  category: string;

  packageId: PackageId;

  section: PortfolioSection;
  type: ProjectType;

  role: string;
  employer?: string;
  client?: string;
  attribution: string;

  year: number;
  technologies: string[];

  image: ImageMetadata;
  imageAlt: string;

  featured?: boolean;
}

export const completedProjects: CompletedProject[] = [
  {
    slug: "monarch-media",
    title: "Monarch Media",
    summary:
      "A modern digital studio website built around clear service presentation, strong visual identity, performance, and a custom administrative backend.",
    category: "Digital studio",

    packageId: "custom-website",

    section: "professional",
    type: "employment",

    role: "Web Developer",
    employer: "Southard Homes LLC",
    client: "Monarch Media LLC",
    attribution:
      "Designed and developed while employed by Southard Homes LLC for Monarch Media LLC.",

    year: 2026,

    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "PostgreSQL",
      "Azure",
      "Netlify",
    ],

    image: monarchMediaImage,
    imageAlt: "Monarch Media website displayed on desktop and mobile devices",

    featured: true,
  },

  {
    slug: "southard-homes",
    title: "Southard Homes",
    summary:
      "A modern residential construction website designed to showcase available homes, communicate quality, and make property discovery simple.",
    category: "Residential construction",

    packageId: "business",

    section: "professional",
    type: "employment",

    role: "Web Developer",
    employer: "Southard Homes LLC",
    client: "Southard Homes LLC",
    attribution: "Designed and developed while employed by Southard Homes LLC.",

    year: 2026,

    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],

    image: southardHomesImage,
    imageAlt: "Southard Homes website displayed on desktop and mobile devices",

    featured: true,
  },

  {
    slug: "quality-landscape-and-leisure",
    title: "Quality Landscape & Leisure",
    summary:
      "A landscaping and outdoor-living website focused on service discovery, local search visibility, project galleries, and lead generation.",
    category: "Landscaping and outdoor living",

    packageId: "foundation",

    section: "professional",
    type: "employment",

    role: "Web Developer",
    employer: "Southard Homes LLC",
    client: "Quality Landscape & Leisure",
    attribution:
      "Designed and developed while employed by Southard Homes LLC for Quality Landscape & Leisure.",

    year: 2026,

    technologies: ["Astro", "TypeScript", "Tailwind CSS", "SEO", "Netlify"],

    image: qualityLandscapeImage,
    imageAlt:
      "Quality Landscape and Leisure website displayed on desktop and mobile devices",

    featured: true,
  },

  {
    slug: "timepunch",
    title: "TimePunch",
    summary:
      "A full-stack time-tracking application built around secure authentication, structured API design, caching, and modern application orchestration.",
    category: "Business software",

    packageId: "custom-development",

    section: "engineering",
    type: "personal",

    role: "Software Engineer",
    attribution: "Independent software engineering project.",

    year: 2026,

    technologies: [
      ".NET Aspire",
      "ASP.NET Core",
      "React",
      "TypeScript",
      "Redis",
      "PostgreSQL",
    ],

    image: timePunchImage,
    imageAlt: "TimePunch application dashboard",
  },

  {
    slug: "portfolio-generator",
    title: "Portfolio Generator",
    summary:
      "A document-driven portfolio generation system that converts structured Word content into responsive portfolio websites.",
    category: "Developer tool",

    packageId: "custom-development",

    section: "engineering",
    type: "personal",

    role: "Software Engineer",
    attribution: "Independent software engineering project.",

    year: 2026,

    technologies: [".NET Aspire", "C#", "React", "TypeScript", "Open XML"],

    image: portfolioGeneratorImage,
    imageAlt: "Portfolio Generator application interface",
  },

  {
    slug: "rpg-engine",
    title: "RPG Engine",
    summary:
      "A custom 2D RPG engine featuring rendering, animation, combat, persistence, geometry systems, testing, and editor tooling.",
    category: "Game engine",

    packageId: "custom-development",

    section: "engineering",
    type: "personal",

    role: "Software Engineer",
    attribution: "Independent software engineering project.",

    year: 2026,

    technologies: ["C#", "MonoGame", "XML", "xUnit"],

    image: rpgEngineImage,
    imageAlt: "Custom RPG engine and game project",

    featured: true,
  },
];

export const featuredCompletedProjects = completedProjects.filter(
  (project) => project.featured,
);

export const professionalProjects = completedProjects.filter(
  (project) => project.section === "professional",
);

export const engineeringProjects = completedProjects.filter(
  (project) => project.section === "engineering",
);

export function getCompletedProject(
  slug: string,
): CompletedProject | undefined {
  return completedProjects.find((project) => project.slug === slug);
}
