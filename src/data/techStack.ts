import type { TechCategory, TechItem } from './types'

/**
 * Keyed by category so the section can iterate `keyof typeof techStack` and
 * stay in step when a category is added.
 */
export const techStack = {
  Languages: [
    { name: 'Go' },
    { name: 'C#', detail: '.NET' },
    { name: 'C/C++' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'TypeScript' },
  ],
  'Backend & Distributed Systems': [
    { name: 'Kafka', detail: 'event-driven pipelines' },
    { name: 'PostgreSQL' },
    { name: 'REST', detail: 'OpenAPI, contract-first versioning' },
    { name: 'NestJS' },
    { name: 'Node.js' },
  ],
  'Cloud & Infrastructure': [
    { name: 'AWS', detail: 'Lambda, API Gateway, EC2, S3' },
    { name: 'Azure' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Terraform' },
    { name: 'CI/CD' },
  ],
  'Tools & Frontend': [
    { name: 'Datadog' },
    { name: 'Jenkins' },
    { name: 'Git' },
    { name: 'Perforce' },
    { name: 'React' },
    { name: 'Next.js' },
  ],
} satisfies Record<TechCategory, TechItem[]>
