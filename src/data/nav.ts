// src/data/nav.ts

export interface NavItem {
  href: string;
  label: string;
  ariaLabel: string;
}

export interface NavGroup {
  label: string;
  links: NavItem[];
}

export interface NavLink extends NavItem {
  children?: NavGroup[];
}

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    ariaLabel: "Home - Triangulated Studio",
  },
  {
    href: "/portfolio ",
    label: "Portfolio ",
    ariaLabel: "View Triangulated Studio projects",
    children: [
      {
        label: "Professional Work",
        links: [
          {
            href: "/projects/monarch-media",
            label: "Monarch Media",
            ariaLabel: "View the Monarch Media project",
          },
          {
            href: "/projects/southard-homes",
            label: "Southard Homes",
            ariaLabel: "View the Southard Homes project",
          },
          {
            href: "/projects/quality-landscape-and-leisure",
            label: "Quality Landscape & Leisure",
            ariaLabel: "View the Quality Landscape and Leisure project",
          },
        ],
      },
      {
        label: "Engineering Projects",
        links: [
          {
            href: "/projects/timepunch",
            label: "TimePunch",
            ariaLabel: "View the TimePunch software project",
          },
          {
            href: "/projects/portfolio-generator",
            label: "Portfolio Generator",
            ariaLabel: "View the Portfolio Generator project",
          },
          {
            href: "/projects/rpg-engine",
            label: "RPG Engine",
            ariaLabel: "View the RPG Engine project",
          },
        ],
      },
    ],
  },
  {
    href: "/about",
    label: "About",
    ariaLabel: "About Triangulated Studio",
  },
  {
    href: "/contact",
    label: "Contact",
    ariaLabel: "Contact Triangulated Studio",
  },
];
