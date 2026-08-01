// src/data/projects/details/timePunch.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/timepunch/";

export const timePunchProject: ProjectDetail = {
  slug: "timepunch",
  title: "TimePunch",
  category: "Full-stack business application",
  description:
    "A full-stack timekeeping application focused on secure authentication, shift tracking, administrative workflows, and maintainable service architecture.",

  section: "engineering",
  type: "personal",
  packageId: "custom-development",

  role: "Software Engineer",
  attribution: "Independent software engineering project.",
  year: 2026,
  status: "In development",

  tags: [
    "C#",
    "ASP.NET Core",
    ".NET Aspire",
    "React",
    "TypeScript",
    "Redis",
    "SQL",
  ],
  links: [
    {
      label: "View source",
      href: "https://github.com/felker12/TimePunchSite",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}homepage.png`,
      width: 1920,
      height: 1080,
      alt: "TimePunch application landing page",
    },
    {
      src: `${screenshotRoot}login.png`,
      width: 1920,
      height: 1080,
      alt: "TimePunch login screen",
    },
    {
      src: `${screenshotRoot}history.png`,
      width: 1920,
      height: 1080,
      alt: "Employee shift-history screen",
    },
    {
      src: `${screenshotRoot}dash.png`,
      width: 1920,
      height: 1080,
      alt: "Employee dashboard screen",
    },
    {
      src: `${screenshotRoot}admindash.png`,
      width: 1920,
      height: 1080,
      alt: "TimePunch administrative dashboard",
    },
    {
      src: `${screenshotRoot}admindash2.png`,
      width: 1920,
      height: 1080,
      alt: "TimePunch administrative reporting screen",
    },
  ],

  overview: [
    "TimePunch explores the architecture behind a practical employee attendance system rather than only the visible clock-in interface.",
    "The application separates employee and administrative responsibilities while keeping authentication, API behavior, persistence, and caching organized for future growth.",
  ],

  features: [
    {
      title: "Employee authentication",
      description:
        "Secure sign-in workflows support separate access levels for employees and administrators.",
    },
    {
      title: "Clock-in and clock-out workflow",
      description:
        "Employees can begin and end shifts while maintaining timestamped attendance history.",
    },
    {
      title: "Attendance dashboard",
      description:
        "A responsive React interface presents status, worked time, and prior shifts.",
    },
    {
      title: "Administrative reporting",
      description:
        "Administrative views support attendance review and payroll-oriented inspection.",
    },
    {
      title: "Punch management",
      description:
        "Authorized users can create, review, update, and remove punch records when corrections are required.",
    },
    {
      title: "Structured persistence",
      description:
        "Relational storage organizes users, shifts, and time-entry records.",
    },
  ],

  flow: {
    title: "Application workflow",
    subtitle: "From clock-in to attendance review",
    description:
      "Employees record work sessions through a focused workflow while administrators review and correct attendance data through separate tools.",
    steps: [
      {
        title: "Sign in",
        description: "Employees and administrators authenticate securely.",
      },
      {
        title: "Clock in",
        description: "An employee records the beginning of a shift.",
      },
      {
        title: "Track",
        description: "The application stores and displays the active shift.",
      },
      {
        title: "Clock out",
        description: "The employee records the end of the shift.",
      },
      {
        title: "Review",
        description: "Administrators inspect records and manage corrections.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "ASP.NET Core API",
      description:
        "The backend exposes structured endpoints for authentication, employees, and punch records.",
    },
    {
      title: ".NET Aspire",
      description:
        "Aspire coordinates application services and development configuration.",
    },
    {
      title: "React and TypeScript",
      description:
        "The frontend provides distinct employee and administrative experiences.",
    },
    {
      title: "Secure password handling",
      description:
        "Authentication work includes password hashing and a foundation for token-based access.",
    },
    {
      title: "Redis caching",
      description:
        "Caching is incorporated where repeated application data can be served efficiently.",
    },
    {
      title: "Relational data design",
      description:
        "Users, shifts, and punch records are modeled with clear relationships.",
    },
  ],

  challenges: [
    {
      title: "Separating access levels",
      description:
        "Employee and administrative workflows needed clear authorization boundaries without duplicating application logic.",
    },
    {
      title: "Maintaining punch accuracy",
      description:
        "Time-entry rules had to account for incomplete sessions, corrections, and historical records.",
    },
    {
      title: "Coordinating the application stack",
      description:
        "Frontend, API, cache, and database services needed consistent local orchestration and configuration.",
    },
  ],

  futureImprovements: [
    "Complete token-based authentication",
    "Add password-recovery workflows",
    "Add email notifications",
    "Introduce manager approvals",
    "Add payroll export",
    "Expand deployment automation",
  ],
};
