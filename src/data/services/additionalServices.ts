// src/data/services/additionalServices.ts

export interface AdditionalService {
  title: string;
  description: string;
}

export const additionalServices: AdditionalService[] = [
  {
    title: "Additional pages",
    description:
      "Expand the website beyond the page allowance included in the selected package.",
  },
  {
    title: "Additional content collections",
    description:
      "Add another structured group such as projects, properties, team members, services, or resources.",
  },
  {
    title: "CMS or admin functionality",
    description:
      "Provide a controlled way to update selected website content without editing source code.",
  },
  {
    title: "Blog or resource center",
    description:
      "Create a structured publishing area for articles, updates, educational content, or company news.",
  },
  {
    title: "Advanced filtering and search",
    description:
      "Help visitors navigate larger collections using categories, filters, keywords, or custom search tools.",
  },
  {
    title: "Custom interactions",
    description:
      "Add purpose-built calculators, interactive displays, animations, comparison tools, or other functionality.",
  },
  {
    title: "Third-party integrations",
    description:
      "Connect the website with supported scheduling, CRM, email, analytics, payment, or external data services.",
  },
  {
    title: "Content migration",
    description:
      "Move and organize useful content from an existing platform into the new website structure.",
  },
  {
    title: "Copywriting and content support",
    description:
      "Improve page structure, messaging, calls to action, and search-focused website content.",
  },
  {
    title: "Logo and identity refinement",
    description:
      "Improve an existing visual identity or establish the logo, typography, and color direction needed for the website.",
  },
  {
    title: "SEO improvements",
    description:
      "Improve technical structure, metadata, local relevance, performance, and search-engine accessibility.",
  },
  {
    title: "Ongoing website support",
    description:
      "Maintenance, content updates, monitoring, and continued improvements after launch.",
  },
];
