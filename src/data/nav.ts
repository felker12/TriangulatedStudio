//scr/data/nav.ts

export interface NavLink {
  href: string;
  label: string;
  ariaLabel: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    ariaLabel: "Home - Triangulated Studio",
  },
  {
    href: "/projects",
    label: "Projects",
    ariaLabel: "Development Projects",
    children: [],
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
