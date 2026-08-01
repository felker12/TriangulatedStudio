// src/data/services/packages.ts

export type PackageId =
  | "foundation"
  | "business"
  | "custom-website"
  | "custom-development";

export interface ServicePackage {
  id: PackageId;
  name: string;
  eyebrow: string;
  description: string;
  priceLabel: string;
  price?: number;
  featured?: boolean;
  href: string;
  features: string[];
  bestFor: string[];
}

export const servicePackages: ServicePackage[] = [
  {
    id: "foundation",
    name: "Foundation",
    eyebrow: "Focused web presence",
    description:
      "A polished custom website for small businesses that need a clear, credible place to send customers.",
    priceLabel: "Starting at",
    price: 1250,
    href: "/contact?package=foundation",
    features: [
      "Custom responsive website",
      "Up to 5 core pages",
      "Contact or inquiry form",
      "Mobile-first development",
      "Basic on-page SEO",
      "Performance optimization",
      "Analytics setup",
      "Deployment and launch support",
      "One revision round",
    ],
    bestFor: [
      "New businesses",
      "Local service providers",
      "Simple brochure websites",
      "Replacing an outdated website",
    ],
  },
  {
    id: "business",
    name: "Business",
    eyebrow: "Built for established businesses",
    description:
      "A larger custom website for businesses that need more content, stronger search foundations, and a structured way to present their work.",
    priceLabel: "Starting at",
    price: 2750,
    featured: true,
    href: "/contact?package=business",
    features: [
      "Everything in Foundation",
      "Up to 8–10 core pages",
      "One structured content collection",
      "Advanced inquiry form",
      "Expanded on-page SEO",
      "Analytics and search configuration",
      "Limited content migration",
      "Two revision rounds",
    ],
    bestFor: [
      "Established local businesses",
      "Construction and service companies",
      "Project or property showcases",
      "Businesses replacing a larger website",
    ],
  },
  {
    id: "custom-website",
    name: "Custom Website",
    eyebrow: "Expanded digital platform",
    description:
      "A custom-scoped website for businesses that need content management, multiple collections, integrations, or functionality beyond a standard marketing site.",
    priceLabel: "Starting at",
    price: 4000,
    href: "/contact?package=custom-website",
    features: [
      "Custom discovery and project planning",
      "Expanded page and content architecture",
      "Multiple structured content collections",
      "CMS or administrative functionality",
      "Blog or resource center",
      "Advanced filtering or search",
      "Custom forms and interactions",
      "Third-party integrations",
      "Expanded migration and launch support",
    ],
    bestFor: [
      "Content-heavy websites",
      "Growing organizations",
      "Custom publishing workflows",
      "Websites with advanced functionality",
    ],
  },
  {
    id: "custom-development",
    name: "Custom Software",
    eyebrow: "Software built around the problem",
    description:
      "Custom applications, dashboards, integrations, and internal tools designed around a specific business workflow.",
    priceLabel: "Scoped individually",
    href: "/contact?package=custom-development",
    features: [
      "Discovery and requirements planning",
      "Custom user interfaces",
      "Application and API development",
      "Database design",
      "Authentication and authorization",
      "Third-party integrations",
      "Internal dashboards and administrative tools",
      "Deployment architecture and technical documentation",
    ],
    bestFor: [
      "Internal business tools",
      "Customer portals",
      "Workflow automation",
      "Custom dashboards",
    ],
  },
];

export const websitePackages = servicePackages.filter(
  (servicePackage) => servicePackage.id !== "custom-development",
);

export const customDevelopmentPackage = servicePackages.find(
  (servicePackage) => servicePackage.id === "custom-development",
);
