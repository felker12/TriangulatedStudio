// src/data/projects/projectDetails.ts

import type { PackageId } from "@data/services/packages";
import type {
  PortfolioSection,
  ProjectType,
} from "@data/portfolio/completedProjects";

export interface ProjectScreenshot {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectFlowStep {
  title: string;
  description: string;
}

export interface ProjectFlow {
  title: string;
  subtitle: string;
  description: string;
  steps: ProjectFlowStep[];
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  description: string;

  section: PortfolioSection;
  type: ProjectType;
  packageId: PackageId;

  role: string;
  employer?: string;
  client?: string;
  attribution: string;
  year: number;
  status?: string;

  tags: string[];
  links?: ProjectLink[];
  screenshots: ProjectScreenshot[];

  overview: string[];
  features: ProjectFeature[];
  flow?: ProjectFlow;
  technicalHighlights: ProjectHighlight[];
  challenges: ProjectChallenge[];
  outcomes?: string[];
  futureImprovements?: string[];
}
