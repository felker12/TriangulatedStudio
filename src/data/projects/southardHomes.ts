// src/data/projects/details/southardHomes.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/southard-homes/";

export const southardHomesProject: ProjectDetail = {
  slug: "southard-homes",
  title: "Southard Homes",
  category: "Residential construction website",
  description:
    "A responsive real-estate and construction website designed to showcase available homes, communicate craftsmanship, and make property discovery straightforward.",

  section: "professional",
  type: "employment",
  packageId: "business",

  role: "Web Developer",
  employer: "Southard Homes LLC",
  client: "Southard Homes LLC",
  attribution: "Designed and developed while employed by Southard Homes LLC.",
  year: 2026,
  status: "Live",

  tags: ["Astro", "TypeScript", "Tailwind CSS", "Netlify", "SEO"],
  links: [
    {
      label: "Visit website",
      href: "https://southardhomesllc.com/",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}home.png`,
      width: 1920,
      height: 1080,
      alt: "Southard Homes homepage",
    },
    {
      src: `${screenshotRoot}homes-for-sale.png`,
      width: 1920,
      height: 1080,
      alt: "Southard Homes homes-for-sale page",
    },
    {
      src: `${screenshotRoot}floorplans.png`,
      width: 1920,
      height: 1080,
      alt: "Southard Homes floorplans page",
    },
    {
      src: `${screenshotRoot}contact.png`,
      width: 1920,
      height: 1080,
      alt: "Southard Homes contact page",
    },
    {
      src: `${screenshotRoot}about.png`,
      width: 1920,
      height: 1080,
      alt: "Southard Homes about page",
    },
  ],

  overview: [
    "The site gives a local home builder a clear place to present available properties, completed work, company information, and contact details.",
    "Property-oriented pages are structured so visitors can move from a listing overview into detailed facts, galleries, and direct inquiry paths.",
  ],

  features: [
    {
      title: "Property listings",
      description:
        "Available homes are presented with pricing, status, key facts, and clear links to detailed pages.",
    },
    {
      title: "Detailed property pages",
      description:
        "Individual pages combine galleries, specifications, status, and contact-oriented calls to action.",
    },
    {
      title: "Responsive image galleries",
      description:
        "Property photography is presented through layouts suited to desktop and mobile browsing.",
    },
    {
      title: "Reusable listing data",
      description:
        "Typed project data keeps home information consistent across cards, galleries, and detail pages.",
    },
    {
      title: "Search-ready structure",
      description:
        "Metadata, semantic content, sitemap generation, and performance work support organic visibility.",
    },
    {
      title: "Static deployment",
      description:
        "Astro and Netlify provide fast delivery with low hosting complexity.",
    },
  ],

  flow: {
    title: "Buyer journey",
    subtitle: "From available homes to direct inquiry",
    description:
      "The website guides visitors from an overview of available properties into detailed listing information and a direct conversation with the builder.",
    steps: [
      {
        title: "Discover",
        description: "Browse available homes and current listing statuses.",
      },
      {
        title: "Compare",
        description: "Review prices, locations, sizes, and key features.",
      },
      {
        title: "Explore",
        description: "Open a property page for details and photography.",
      },
      {
        title: "Evaluate",
        description: "Review specifications and construction highlights.",
      },
      {
        title: "Inquire",
        description: "Contact the business to schedule a private tour.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "Astro content architecture",
      description:
        "Typed listing data supports reusable cards, facts, galleries, and property routes.",
    },
    {
      title: "Static route generation",
      description:
        "Listing pages are generated at build time for fast delivery and predictable URLs.",
    },
    {
      title: "Responsive media",
      description:
        "Property images are optimized and sized for different viewport requirements.",
    },
    {
      title: "Gallery integration",
      description:
        "Interactive galleries provide detailed views without sacrificing the static-first architecture.",
    },
    {
      title: "SEO foundations",
      description:
        "Page-specific metadata and structured content improve clarity for search engines.",
    },
    {
      title: "Netlify deployment",
      description:
        "Automated builds publish site and listing updates through a straightforward deployment workflow.",
    },
  ],

  challenges: [
    {
      title: "Presenting changing inventory",
      description:
        "Listing status and availability needed to remain clear across overview and detail pages.",
    },
    {
      title: "Balancing photography and performance",
      description:
        "Large property galleries required careful image optimization and responsive loading behavior.",
    },
    {
      title: "Keeping listing content consistent",
      description:
        "Shared data structures were needed to prevent repeated facts from drifting between components.",
    },
  ],

  outcomes: [
    "Created a focused destination for available homes and company information.",
    "Improved the presentation of property details across desktop and mobile devices.",
    "Established a reusable structure for adding and updating listings.",
  ],
};
