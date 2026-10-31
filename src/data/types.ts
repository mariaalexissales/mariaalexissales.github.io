// `erasableSyntaxOnly` is on, so no enums. String-literal unions instead.

export type TechCategory =
  | "Languages"
  | "Backend & Distributed Systems"
  | "Cloud & Infrastructure"
  | "Tools & Frontend";

export interface TechItem {
  name: string;
  detail?: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  summary: string;
  credentialUrl: string;
  image: string;
}

interface ExperienceBase {
  organization: string;
  location: string;
  period: string;
  points: string[];
}

/** Discriminated on `kind`, so the timeline dot comes from an exhaustive switch. */
export type ExperienceEntry =
  | (ExperienceBase & { kind: "work"; role: string })
  | (ExperienceBase & { kind: "volunteer"; role: string })
  | (ExperienceBase & { kind: "education"; credential: string });

export type SocialKind = "github" | "linkedin" | "email" | "resume";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface Hero {
  name: string;
  role: string;
  /** Current employer, shown next to the role. */
  company?: string;
  location: string;
  summary: string;
  socials: SocialLink[];
}
