// src/data/projects/anthonyFelker.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "/projectpics/portfolio/";

export const anthonyFelkerProject: ProjectDetail = {
  slug: "anthony-felker",
  title: "AnthonyFelker.com",
  category: "Personal portfolio website",
  description:
    "A modern personal portfolio designed to present software engineering experience, client web work, technical projects, and professional background through a polished, performance-focused interface.",

  section: "professional",
  type: "personal",
  packageId: "custom-website",

  role: "Designer & Developer",
  attribution: "Designed and developed independently.",
  year: 2026,
  status: "Live",

  tags: [
    "Astro",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Web3Forms",
    "Netlify",
    "SEO",
  ],

  links: [
    {
      label: "Visit website",
      href: "https://anthonyfelker.com/",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}home.png`,
      width: 1920,
      height: 1080,
      alt: "AnthonyFelker.com portfolio homepage",
    },
    {
      src: `${screenshotRoot}projects.png`,
      width: 1920,
      height: 1080,
      alt: "AnthonyFelker.com projects section",
    },
    {
      src: `${screenshotRoot}skills.png`,
      width: 1920,
      height: 1080,
      alt: "AnthonyFelker.com skills and experience section",
    },
    {
      src: `${screenshotRoot}about.png`,
      width: 1920,
      height: 1080,
      alt: "AnthonyFelker.com about page",
    },
    {
      src: `${screenshotRoot}contact.png`,
      width: 1920,
      height: 1080,
      alt: "AnthonyFelker.com contact page",
    },
  ],

  overview: [
    "The portfolio was created as a central place to present professional experience, software-engineering projects, client websites, technical skills, and contact information.",
    "The site was designed to feel more like a polished digital product than a traditional résumé page, using strong visual hierarchy, custom motion, responsive components, and a restrained technical aesthetic.",
    "It also serves as an active testing ground for frontend performance, accessibility, responsive image handling, search metadata, and reusable Astro component architecture.",
  ],

  features: [
    {
      title: "Responsive portfolio architecture",
      description:
        "Reusable Astro components support project showcases, experience content, skill summaries, statistics, and calls to action across different viewport sizes.",
    },
    {
      title: "Software and web-project presentation",
      description:
        "Professional websites and engineering projects are presented through separate content structures while maintaining a consistent visual system.",
    },
    {
      title: "Custom visual identity",
      description:
        "Typography, icy blue tones, geometric details, and restrained animation create a recognizable personal brand.",
    },
    {
      title: "Interactive motion",
      description:
        "Three.js and lightweight frontend interactions add depth without turning the site into a heavily scripted application.",
    },
    {
      title: "Contact workflow",
      description:
        "A Web3Forms-powered contact form supports validation, asynchronous submission, bot protection, and accessible feedback.",
    },
    {
      title: "Search and social metadata",
      description:
        "Canonical URLs, page descriptions, Open Graph data, structured metadata, and sitemap generation support discoverability and sharing.",
    },
  ],

  flow: {
    title: "Visitor journey",
    subtitle: "From introduction to project exploration",
    description:
      "The site guides visitors from a concise professional introduction into examples of client work, software projects, technical experience, and direct contact options.",
    steps: [
      {
        title: "Introduce",
        description:
          "Establish the professional focus and primary areas of expertise.",
      },
      {
        title: "Demonstrate",
        description:
          "Present client websites, software projects, and measurable accomplishments.",
      },
      {
        title: "Explain",
        description:
          "Provide context around experience, skills, and technical decisions.",
      },
      {
        title: "Validate",
        description:
          "Use performance, accessibility, and polished presentation to reinforce credibility.",
      },
      {
        title: "Connect",
        description:
          "Provide a clear path for employers, recruiters, and clients to make contact.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "Astro static generation",
      description:
        "Astro pre-renders public pages for fast delivery, low JavaScript overhead, and straightforward deployment.",
    },
    {
      title: "Tailwind design system",
      description:
        "Reusable utility patterns maintain consistent spacing, typography, borders, responsive behavior, and component states.",
    },
    {
      title: "Three.js integration",
      description:
        "A custom visual effect adds atmosphere while remaining isolated from the rest of the page architecture.",
    },
    {
      title: "Responsive images",
      description:
        "Astro image tooling generates appropriately sized assets for different devices and display densities.",
    },
    {
      title: "Accessibility",
      description:
        "Semantic structure, focus states, skip navigation, readable contrast, and form feedback support keyboard and assistive-technology users.",
    },
    {
      title: "Performance and SEO",
      description:
        "The site was refined around Lighthouse performance, metadata quality, sitemap support, canonical URLs, and reduced rendering overhead.",
    },
  ],

  challenges: [
    {
      title: "Balancing personality and professionalism",
      description:
        "The design needed enough visual character to feel memorable without distracting from experience, project content, or usability.",
    },
    {
      title: "Using motion responsibly",
      description:
        "Interactive effects had to add depth without introducing unnecessary JavaScript, poor performance, or visual noise.",
    },
    {
      title: "Presenting two disciplines",
      description:
        "The portfolio needed to represent both client-facing web development and deeper software-engineering work without making either side feel secondary.",
    },
  ],

  outcomes: [
    "Created a central professional presence for software-engineering and web-development work.",
    "Established a reusable Astro foundation for adding projects, experience, and new sections over time.",
    "Produced a high-performing and accessible site that demonstrates the same standards promoted to clients.",
  ],

  futureImprovements: [
    "Expand individual project case studies",
    "Add richer technical writing or articles",
    "Introduce additional project filtering",
    "Add more interactive demonstrations",
    "Continue refining motion and responsive behavior",
  ],
};
