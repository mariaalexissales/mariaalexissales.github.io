import type { Hero } from "./types";

export const hero: Hero = {
  name: "Maria Alexis Sales",
  role: "Senior Software Engineer",
  company: "Nara Benefits",
  location: "Chicago, IL",
  summary:
    "Backend-focused software engineer with 4+ years across fintech, enterprise platforms and the games industry. I build event-driven services on Kafka and PostgreSQL, root-cause the REST APIs that misbehave, and ship them on Docker and Kubernetes across AWS and Azure. Now a Senior Software Engineer at Nara Benefits, building a HIPAA-regulated health-benefits platform, and learning Spring Boot and GCP.",
  socials: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/mariaalexissales",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maria-alexis-sales",
    },
    {
      kind: "email",
      label: "Email",
      // The real mailto is built at interaction time in socialLinkProps.
      href: "#contact",
    },
    {
      kind: "resume",
      label: "Resume",
      href: "/resume/maria-sales-resume.pdf",
    },
  ],
};
