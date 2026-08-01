// src/data/projects/monarchMedia.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/monarch-media/";

export const monarchMediaProject: ProjectDetail = {
  slug: "monarch-media",
  title: "Monarch Media",
  category: "Digital studio website and administrative platform",
  description:
    "A performance-focused Astro website supported by a custom .NET and PostgreSQL backend for managing projects, team members, images, and administrative users.",

  section: "professional",
  type: "employment",
  packageId: "custom-website",

  role: "Web Developer",
  employer: "Southard Homes LLC",
  client: "Monarch Media LLC",
  attribution:
    "Designed and developed while employed by Southard Homes LLC for Monarch Media LLC.",
  year: 2026,
  status: "Live",

  tags: [
    "Astro",
    "TypeScript",
    "Tailwind CSS",
    "ASP.NET Core",
    "PostgreSQL",
    "Azure",
    "Netlify",
  ],
  links: [
    {
      label: "Visit website",
      href: "https://monarchmediallc.com/",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}home.png`,
      width: 1920,
      height: 1080,
      alt: "Monarch Media website homepage",
    },
    {
      src: `${screenshotRoot}portfolio.png`,
      width: 1920,
      height: 1080,
      alt: "Monarch Media portfolio page",
    },
    {
      src: `${screenshotRoot}services.png`,
      width: 1920,
      height: 1080,
      alt: "Monarch Media services page",
    },
    {
      src: `${screenshotRoot}admin.png`,
      width: 1920,
      height: 1080,
      alt: "Monarch Media administrative dashboard",
    },
  ],

  overview: [
    "The public site presents web-development, care-plan, portfolio, and contact content through a fast static-first Astro frontend.",
    "A separate authenticated backend supports ongoing content administration without exposing database access directly to the public frontend.",
  ],

  features: [
    {
      title: "Static-first public website",
      description:
        "Astro generates fast public pages with responsive media, structured metadata, and minimal client-side JavaScript.",
    },
    {
      title: "Custom administrative area",
      description:
        "Protected tools support project, team-member, image, and administrator management.",
    },
    {
      title: "API-driven content",
      description:
        "ASP.NET Core endpoints provide controlled access to PostgreSQL-backed content.",
    },
    {
      title: "Secure authentication",
      description:
        "Administrative access uses hashed credentials, JWT-based login, and protected routes.",
    },
    {
      title: "Cloud deployment",
      description:
        "The frontend deploys through Netlify while the API runs through Azure App Service.",
    },
    {
      title: "Search and social metadata",
      description:
        "Canonical URLs, Open Graph data, structured data, sitemap support, and robots controls improve discoverability.",
    },
  ],

  flow: {
    title: "Publishing workflow",
    subtitle: "From administrative update to public website",
    description:
      "Authorized users manage content through protected forms, the API validates and stores the update, and a deployment hook refreshes the public site.",
    steps: [
      {
        title: "Authenticate",
        description: "An administrator signs in through the protected area.",
      },
      {
        title: "Manage",
        description: "Projects, people, and media are created or updated.",
      },
      {
        title: "Validate",
        description: "The API validates authorization and submitted data.",
      },
      {
        title: "Persist",
        description: "PostgreSQL stores the approved content.",
      },
      {
        title: "Publish",
        description: "A Netlify build refreshes the public website.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "Astro frontend",
      description:
        "The public experience favors pre-rendered pages, optimized assets, and high Lighthouse performance.",
    },
    {
      title: "ASP.NET Core API",
      description:
        "Custom controllers expose public content and protected administrative operations.",
    },
    {
      title: "PostgreSQL and EF Core",
      description:
        "Entity Framework Core manages projects, team members, media, and administrator records.",
    },
    {
      title: "Authentication security",
      description:
        "Argon2id password hashing and JWT authorization protect administrative access.",
    },
    {
      title: "Storage integration",
      description:
        "Media records connect to externally hosted project and team imagery.",
    },
    {
      title: "Deployment integration",
      description:
        "Azure-hosted backend services and Netlify build hooks support the split architecture.",
    },
  ],

  challenges: [
    {
      title: "Keeping public pages static",
      description:
        "Dynamic administrative requirements had to be isolated so public routes could remain fast and pre-rendered.",
    },
    {
      title: "Securing administrative workflows",
      description:
        "Authentication, cookies, API authorization, and route protection needed to work across the Astro and .NET boundary.",
    },
    {
      title: "Coordinating two deployments",
      description:
        "Frontend and backend services required separate configuration, CORS rules, secrets, and deployment verification.",
    },
  ],

  outcomes: [
    "Created a maintainable public site with a custom content-management workflow.",
    "Separated public presentation from protected administrative operations.",
    "Achieved a fast, SEO-ready frontend while retaining database-backed content management.",
  ],
};
