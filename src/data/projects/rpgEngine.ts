// src/data/projects/details/rpgEngine.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

const screenshotRoot = "../src/assets/projects/engine/";

export const rpgEngineProject: ProjectDetail = {
  slug: "rpg-engine",
  title: "Modular 2D RPG Engine",
  category: "Game engine architecture",
  description:
    "A custom 2D RPG engine built with C#, MonoGame, XML, and xUnit, focused on modular systems for rendering, input, animation, combat, persistence, and content editing.",

  section: "engineering",
  type: "personal",
  packageId: "custom-development",

  role: "Software Engineer",
  attribution: "Independent software engineering project.",
  year: 2026,
  status: "Active project",

  tags: ["C#", "MonoGame", "xUnit", "XML", "WinForms"],
  links: [
    {
      label: "View source",
      href: "https://github.com/felker12/SkeletonsAdventure",
      external: true,
    },
  ],

  screenshots: [
    {
      src: `${screenshotRoot}gameplay.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine gameplay scene",
    },
    {
      src: `${screenshotRoot}combat.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine combat system",
    },
    {
      src: `${screenshotRoot}combat2.png`,
      width: 1920,
      height: 1080,
      alt: "Second view of the RPG engine combat system",
    },
    {
      src: `${screenshotRoot}pause.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine pause menu",
    },
    {
      src: `${screenshotRoot}actionbarPage.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine action bar page",
    },
    {
      src: `${screenshotRoot}skillspage.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine skills page",
    },
    {
      src: `${screenshotRoot}questsPage.png`,
      width: 1920,
      height: 1080,
      alt: "2D RPG engine quests page",
    },
  ],

  overview: [
    "The project began as a game and gradually evolved into a reusable engine with distinct systems for gameplay, rendering, input, persistence, and content creation.",
    "Its primary value is the architecture behind the game: reusable components, data-driven content, testable systems, and tooling that reduces repetitive setup work.",
  ],

  features: [
    {
      title: "Modular engine systems",
      description:
        "Rendering, input, combat, animation, state management, and persistence are separated into focused systems for easier maintenance.",
    },
    {
      title: "Custom combat logic",
      description:
        "Reusable combat components handle attacks, player actions, hit detection, and enemy interactions.",
    },
    {
      title: "Animation system",
      description:
        "Sprite animation supports movement, directional states, and reusable animated objects.",
    },
    {
      title: "Save and load persistence",
      description:
        "XML-based persistence stores and restores structured game data across play sessions.",
    },
    {
      title: "WinForms editor tooling",
      description:
        "A companion editor reduces manual configuration and speeds up content creation.",
    },
    {
      title: "Automated testing",
      description:
        "xUnit tests validate core systems and reduce regressions during ongoing development.",
    },
  ],

  flow: {
    title: "Engine flow",
    subtitle: "From input to rendered gameplay",
    description:
      "Each frame captures player input, applies game-state changes, resolves interactions, updates animation, and renders the resulting scene.",
    steps: [
      { title: "Input", description: "Capture keyboard and player controls." },
      { title: "Update", description: "Apply game logic and state changes." },
      {
        title: "Combat",
        description: "Resolve attacks, collisions, and interactions.",
      },
      {
        title: "Animate",
        description: "Update sprite frames and movement states.",
      },
      {
        title: "Render",
        description: "Draw the updated scene through MonoGame.",
      },
    ],
  },

  technicalHighlights: [
    {
      title: "MonoGame rendering",
      description:
        "MonoGame renders gameplay scenes, sprites, shapes, and interface elements.",
    },
    {
      title: "C# engine architecture",
      description:
        "The codebase is organized into separate systems with clear responsibilities.",
    },
    {
      title: "XML persistence",
      description:
        "Structured XML data supports save, load, and content-driven workflows.",
    },
    {
      title: "Geometry and collision logic",
      description:
        "Reusable shape and collision systems support attacks, objects, and interaction checks.",
    },
    {
      title: "Desktop tooling",
      description:
        "WinForms utilities support content creation outside the running game.",
    },
    {
      title: "xUnit testing",
      description:
        "Tests improve reliability during refactoring and feature development.",
    },
  ],

  challenges: [
    {
      title: "Managing engine complexity",
      description:
        "As the project grew, large systems had to be separated into smaller reusable components with clearer responsibilities.",
    },
    {
      title: "Building reusable game systems",
      description:
        "Systems needed to support different gameplay objects without becoming tightly coupled to one feature.",
    },
    {
      title: "Improving content creation",
      description:
        "Manual configuration became time-consuming, which led to the creation of dedicated editor tooling.",
    },
  ],

  futureImprovements: [
    "Expand map editor features",
    "Add more enemy behaviors",
    "Improve combat balancing",
    "Expand inventory and quest systems",
    "Improve the asset-loading pipeline",
    "Package a playable demo",
  ],
};
