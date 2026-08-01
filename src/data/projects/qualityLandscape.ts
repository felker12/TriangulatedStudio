// src/data/projects/qualityLandscape.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/quality-landscape/";

export const qualityLandscapeProject: ProjectDetail = {
  slug: "quality-landscape-and-leisure",
  title: "Quality Landscape & Leisure",
  category: "Landscaping and outdoor-living website",
  description:
    "A local-service website focused on explaining landscaping services, presenting completed work, strengthening search visibility, and generating qualified inquiries.",

  section: "professional",
  type: "employment",
  packageId: "foundation",

  role: "Web Developer",
  employer: "Southard Homes LLC",
  client: "Quality Landscape & Leisure",
  attribution:
    "Designed and developed while employed by Southard Homes LLC for Quality Landscape & Leisure.",
  year: 2026,
  status: "Live",

  tags: ["Astro", "TypeScript", "Tailwind CSS", "Netlify", "Local SEO"],
  links: [
    {
      label: "Visit website",
      href: "https://qualitylandscapeandleisure.com/",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}home.png`,
      width: 1920,
      height: 1080,
      alt: "Quality Landscape and Leisure homepage",
    },
    {
      src: `${screenshotRoot}services.png`,
      width: 1920,
      height: 1080,
      alt: "Quality Landscape and Leisure services page",
    },
    {
      src: `${screenshotRoot}gallery.png`,
      width: 1920,
      height: 1080,
      alt: "Quality Landscape and Leisure project gallery",
    },
    {
      src: `${screenshotRoot}contact.png`,
      width: 1920,
      height: 1080,
      alt: "Quality Landscape and Leisure contact page",
    },
    {
      src: `${screenshotRoot}about.png`,
      width: 1920,
      height: 1080,
      alt: "Quality Landscape and Leisure about page",
    },
  ],

  overview: [
    "The site provides a straightforward service-oriented experience for homeowners and businesses looking for landscaping, lawn care, irrigation, hardscaping, and outdoor-living work.",
    "The project also included a broader SEO refactor centered on consistent business data, service relevance, metadata, internal structure, and local signals.",
  ],

  features: [
    {
      title: "Service-focused content",
      description:
        "Dedicated content clearly explains the range of landscaping and outdoor-living services.",
    },
    {
      title: "Project gallery",
      description:
        "Completed work is presented visually to establish credibility and help customers understand service quality.",
    },
    {
      title: "Local contact information",
      description:
        "Phone, email, address, service area, and operating hours are consistently presented across the site.",
    },
    {
      title: "Search metadata",
      description:
        "Page-specific titles, descriptions, canonical URLs, and social metadata improve page context.",
    },
    {
      title: "Structured business data",
      description:
        "LocalBusiness schema connects the company name, location, contact information, and service description.",
    },
    {
      title: "Responsive performance",
      description:
        "Astro and optimized assets support fast delivery across mobile and desktop devices.",
    },
  ],

  flow: {
    title: "Customer journey",
    subtitle: "From service need to project inquiry",
    description:
      "Visitors can quickly understand the available services, review prior work, verify local relevance, and contact the company.",
    steps: [
      {
        title: "Arrive",
        description: "Understand the company and primary service area.",
      },
      {
        title: "Explore",
        description: "Review landscaping and outdoor-living services.",
      },
      {
        title: "Verify",
        description: "View project imagery and company information.",
      },
      {
        title: "Contact",
        description: "Call, email, or submit an inquiry.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "Centralized business data",
      description:
        "Shared contact, address, URL, and service-area data reduce inconsistencies across components.",
    },
    {
      title: "Astro static generation",
      description:
        "Public pages are pre-rendered for speed, reliability, and simple hosting.",
    },
    {
      title: "Local SEO structure",
      description:
        "Content, metadata, schema, sitemap generation, and canonical URLs reinforce geographic relevance.",
    },
    {
      title: "Responsive galleries",
      description:
        "Project imagery remains usable and appropriately sized across devices.",
    },
    {
      title: "Reusable page metadata",
      description:
        "A shared layout provides consistent canonical, Open Graph, and robots behavior.",
    },
    {
      title: "Netlify deployment",
      description: "Automated builds make production updates straightforward.",
    },
  ],

  challenges: [
    {
      title: "Improving local search clarity",
      description:
        "The site needed stronger geographic and service signals without repeating awkward keyword-heavy copy.",
    },
    {
      title: "Standardizing business information",
      description:
        "Contact details and service descriptions needed one shared source of truth.",
    },
    {
      title: "Presenting image-heavy work",
      description:
        "Gallery content had to support visual credibility without creating unnecessary performance costs.",
    },
  ],

  outcomes: [
    "Established a clear service and contact experience for local customers.",
    "Created a consistent technical foundation for local SEO.",
    "Improved the organization and reuse of business information throughout the site.",
  ],
};
