import type { Hero } from "./types";

export const hero: Hero = {
  name: "Maria Alexis Sales",
  role: "Backend Software Engineer",
  location: "Chicago, IL",
  summary:
    "Backend-focused software engineer with 4+ years across fintech, enterprise platforms and the games industry. I build event-driven services on Kafka and PostgreSQL, root-cause the REST APIs that misbehave, and ship them on Docker and Kubernetes across AWS and Azure. Currently learning Spring Boot and GCP",
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
      href: "mailto:mariaalexissales@gmail.com",
    },
    {
      kind: "resume",
      label: "Resume",
      href: "/resume/maria-sales-resume.pdf",
    },
  ],
};
