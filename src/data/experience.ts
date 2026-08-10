import type { ExperienceEntry } from "./types";

/** Reverse chronological by start date. Paid work sorts above volunteer on a tie. */
export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    role: "Software Engineer",
    organization: "USG Corporation",
    location: "Hybrid",
    period: "Sept 2025 – Present",
    points: [
      "Built and optimized the NestJS backend powering the redesigned USG enterprise website, launched Dec 2025, as part of a broader platform migration to Next.js 15.",
      "Root-caused a REST bottleneck where Kafka messages were hitting the 2GB payload limit, tracing it through structured logging to an upstream parser injecting uncleaned fields.",
      "Re-architected Kafka parsing around typed fields instead of a serialized string list, and added Datadog tracing across the PostgreSQL → Kafka → Algolia pipeline.",
    ],
  },
  {
    kind: "volunteer",
    role: "LiveOps Infrastructure Automation",
    organization: "Sunday Drivers",
    location: "Remote",
    period: "May 2025 – Present",
    points: [
      "Built quality-of-life and performance mods and integrated them into custom server deployments with GitHub Actions CI/CD, deploying live hotfixes with minimal disruption.",
    ],
  },
  {
    kind: "work",
    role: "Software Developer I",
    organization: "Pacific Life",
    location: "Newport Beach, CA",
    period: "Sept 2024 – Nov 2024",
    points: [
      "Designed a C# event-ingestion API for policyholder notifications, publishing to Kafka for real-time asynchronous delivery in a regulated financial environment.",
      "Migrated legacy MuleSoft integrations to AWS Lambda and API Gateway, distributing execution across three US regions with S3-triggered load balancing for concurrent file processing at scale.",
    ],
  },
  {
    kind: "volunteer",
    role: "Gameplay Systems & Developer Tools",
    organization: "Inchworm Games",
    location: "Remote",
    period: "Sept 2024 – Sept 2025",
    points: [
      "Engineered modular C# gameplay systems and reusable UI components in the Godot Engine to accelerate internal prototypes and live features.",
    ],
  },
  {
    kind: "work",
    role: "Software Engineer, AI Expert Contributor",
    organization: "Snorkel AI",
    location: "Remote",
    period: "June 2024 – Present",
    points: [
      "Reviewed and validated AI-generated software engineering tasks derived from real open-source PRs, assessing problem statements, test cases and solution artifacts against the source material.",
      "Evaluated task quality for a coding-agent benchmark dataset, verifying Docker execution environments, test harnesses and verifier reward logic against difficulty and language targets.",
    ],
  },
  {
    kind: "work",
    role: "Associate Software Engineer",
    organization: "Blizzard Entertainment",
    location: "Irvine, CA",
    period: "Oct 2022 – Sept 2024",
    points: [
      "Maintained shared C# LiveOps tooling for Diablo II: Resurrected, integrating Nintendo, Sony and Xbox console SDKs to route per-platform crash reports into an internal dashboard.",
      "Built a Python build step that hash-checked locally compiled binaries against the latest Artifactory build and auto-pulled canonical binaries on mismatch, eliminating environment-drift bugs.",
    ],
  },
  {
    kind: "education",
    credential: "B.A. Music Performance (Viola), Minor in Computer Science",
    organization: "University of Illinois at Chicago",
    location: "Chicago, IL",
    period: "May 2021",
    points: [
      "Coursework in program design, data structures and discrete mathematics in C++, and machine organization.",
    ],
  },
];
