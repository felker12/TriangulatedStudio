// src/data/projects/portfolioGenerator.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/portfolio-generator/";

export const portfolioGeneratorProject: ProjectDetail = {
  slug: "portfolio-generator",
  title: "Portfolio Generator",
  category: "Full-stack automation platform",
  description:
    "A full-stack application that converts structured Microsoft Word resumes into responsive portfolio websites.",

  section: "engineering",
  type: "personal",
  packageId: "custom-development",

  role: "Software Engineer",
  attribution: "Independent software engineering project.",
  year: 2026,
  status: "Prototype",

  tags: [
    "C#",
    "React",
    "TypeScript",
    ".NET Aspire",
    "ASP.NET Core",
    "Open XML",
    "Azure",
    "GitHub Actions",
  ],
  links: [
    {
      label: "View source",
      href: "https://github.com/felker12/PortfolioSiteCreator",
      external: true,
    },
    {
      label: "View demo",
      href: "https://portfoliocreator-hwemcghrh5axesey.canadacentral-01.azurewebsites.net/",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}home.png`,
      width: 1920,
      height: 1080,
      alt: "Portfolio Generator main dashboard",
    },
    {
      src: `${screenshotRoot}upload.png`,
      width: 1920,
      height: 1080,
      alt: "Portfolio Generator upload interface",
    },
    {
      src: `${screenshotRoot}uploadwithpreview.png`,
      width: 1920,
      height: 1080,
      alt: "Portfolio Generator upload interface with document preview",
    },
    {
      src: `${screenshotRoot}themeselection.png`,
      width: 1920,
      height: 1080,
      alt: "Portfolio Generator theme-selection interface",
    },
    {
      src: `${screenshotRoot}download.png`,
      width: 1920,
      height: 1080,
      alt: "Portfolio Generator download interface",
    },
  ],

  overview: [
    "The application turns a structured Word document into reusable portfolio data rather than requiring users to manually rebuild the same information in a website editor.",
    "A React workflow guides the user from upload through review, theme selection, preview, and export while the ASP.NET Core backend handles document parsing and generation.",
  ],

  features: [
    {
      title: "Document-processing API",
      description:
        "ASP.NET Core endpoints receive Word files, extract structured resume information, and return normalized data.",
    },
    {
      title: "Guided upload workflow",
      description:
        "A multi-step React interface helps users upload a document, review extracted data, and select a theme.",
    },
    {
      title: "Isolated live preview",
      description:
        "Generated templates render inside an iframe so their styles remain isolated from the application shell.",
    },
    {
      title: "Dynamic theme system",
      description:
        "Multiple layouts can consume the same structured resume data without duplicating content.",
    },
    {
      title: "Local service orchestration",
      description:
        ".NET Aspire coordinates application services, endpoints, and configuration during development.",
    },
    {
      title: "Automated deployment",
      description:
        "GitHub Actions builds and deploys the application to Azure App Service.",
    },
  ],

  flow: {
    title: "Application workflow",
    subtitle: "From resume to portfolio website",
    description:
      "The user uploads a structured resume, reviews the parsed data, selects a presentation theme, previews the result, and exports the completed site.",
    steps: [
      { title: "Upload", description: "Upload a structured .docx resume." },
      {
        title: "Parse",
        description: "Extract resume content with ASP.NET Core and Open XML.",
      },
      {
        title: "Generate",
        description: "Convert document content into structured portfolio data.",
      },
      {
        title: "Theme",
        description: "Choose a layout and visual presentation.",
      },
      {
        title: "Preview",
        description: "Review the generated website in an isolated preview.",
      },
      {
        title: "Export",
        description: "Download the completed portfolio website.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "ASP.NET Core",
      description:
        "Minimal API endpoints handle uploads, document parsing, and structured response data.",
    },
    {
      title: "React and TypeScript",
      description:
        "The frontend coordinates upload, review, theme selection, preview, and export.",
    },
    {
      title: "Open XML",
      description:
        "DocumentFormat.OpenXml reads structured content from Microsoft Word files.",
    },
    {
      title: "Theme engine",
      description:
        "Layout templates remain separate from resume data, allowing multiple presentations from one source.",
    },
    {
      title: ".NET Aspire",
      description:
        "Aspire simplifies local orchestration and configuration across application services.",
    },
    {
      title: "GitHub Actions",
      description:
        "CI/CD workflows build the frontend and backend and deploy the application to Azure.",
    },
  ],

  challenges: [
    {
      title: "Reading Word documents",
      description:
        "Resume documents needed to be interpreted consistently and converted into predictable structured data.",
    },
    {
      title: "Isolating generated themes",
      description:
        "Generated website styles had to be previewed without leaking into or breaking the application interface.",
    },
    {
      title: "Coordinating multiple services",
      description:
        "The React frontend, ASP.NET Core backend, and deployment workflow required consistent endpoint and configuration management.",
    },
  ],

  futureImprovements: [
    "Add custom block editors",
    "Support font customization",
    "Add one-click Netlify deployment",
    "Expand the theme library",
  ],
};
