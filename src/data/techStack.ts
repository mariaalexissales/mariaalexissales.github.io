import type { TechCategory, TechItem } from "./types";

export const techStack: Record<TechCategory, TechItem[]> = {
  Languages: [
    { name: "Go" },
    { name: "C#", detail: ".NET" },
    { name: "C/C++" },
    { name: "Java" },
    { name: "Python" },
    { name: "TypeScript" },
  ],
  "Backend & Distributed Systems": [
    { name: "Kafka", detail: "event-driven pipelines" },
    { name: "PostgreSQL" },
    { name: "REST", detail: "OpenAPI, contract-first versioning" },
    { name: "NestJS" },
    { name: "Node.js" },
    { name: "Springboot" },
    { name: "Redis" },
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", detail: "Lambda, API Gateway, EC2, S3" },
    { name: "GCP" },
    { name: "Azure" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Terraform" },
    { name: "CI/CD" },
  ],
  "Tools & Frontend": [
    { name: "Datadog" },
    { name: "Jenkins" },
    { name: "Git" },
    { name: "Perforce" },
    { name: "React" },
    { name: "Next.js" },
  ],
};
