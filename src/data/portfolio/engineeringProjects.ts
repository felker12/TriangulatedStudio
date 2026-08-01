// src/data/projects/engineeringProjects.ts

export interface EngineeringProject {
  title: string;
  summary: string;
  type: "personal" | "open-source";
  status: string;
  technologies: string[];
  href: string;
}

export const engineeringProjects: EngineeringProject[] = [
  {
    title: "TimePunch",
    summary:
      "A full-stack timekeeping application focused on secure authentication, API design, caching, and maintainable service architecture.",
    type: "personal",
    status: "In development",
    technologies: [".NET Aspire", "ASP.NET Core", "React", "C#"],
    href: "/projects/timepunch",
  },
  {
    title: "Portfolio Generator",
    summary:
      "A document-to-web application that transforms structured résumé content into a responsive developer portfolio.",
    type: "personal",
    status: "Prototype",
    technologies: ["C#", ".NET Aspire", "React", "TypeScript"],
    href: "/projects/portfolio-generator",
  },
  {
    title: "RPG Engine",
    summary:
      "A modular game-engine project exploring rendering, combat systems, persistence, tooling, geometry, and automated testing.",
    type: "personal",
    status: "Active project",
    technologies: ["C#", "MonoGame", "xUnit", "XML"],
    href: "/projects/rpg-engine",
  },
];
