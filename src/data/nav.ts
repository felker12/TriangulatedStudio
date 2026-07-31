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
    children: [
      {
        href: "/Test1",
        label: "Test1",
        ariaLabel: "Test1",
      },
      {
        href: "/Test2",
        label: "Test2",
        ariaLabel: "Test2",
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
