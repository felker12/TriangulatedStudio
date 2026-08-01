// src/data/projects/details/index.ts

import type { ProjectDetail } from "@data/projects/projectDetails";

import { monarchMediaProject } from "@data/projects/monarchMedia";
import { portfolioGeneratorProject } from "@data/projects/portfolioGenerator";
import { qualityLandscapeProject } from "@data/projects/qualityLandscape";
import { rpgEngineProject } from "@data/projects/rpgEngine";
import { southardHomesProject } from "@data/projects/southardHomes";
import { timePunchProject } from "@data/projects/timePunch";
import { anthonyFelkerProject } from "@data/projects/anthonyfelker";

export type { ProjectDetail } from "@data/projects/projectDetails";

export {
  monarchMediaProject,
  portfolioGeneratorProject,
  qualityLandscapeProject,
  rpgEngineProject,
  southardHomesProject,
  timePunchProject,
  anthonyFelkerProject,
};

export const projectDetails: ProjectDetail[] = [
  monarchMediaProject,
  southardHomesProject,
  qualityLandscapeProject,
  timePunchProject,
  portfolioGeneratorProject,
  rpgEngineProject,
  anthonyFelkerProject,
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}
