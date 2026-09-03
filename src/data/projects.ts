import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Quietroom",
    tagline: "Domestic abuse resources disguised as a Pomodoro Timer",
    description:
      "In a world where technology is getting smarter, and AI shortening the time it takes to learn or break something, we tend to forget about the bad actors who use these tools to hurt people they're supposed to love. The threat model, HARMS, is based on a case study conducted by researchers at the University of Cambridge. HARMS tackles Harrassment, Access/Infiltration, Restrictions, Manipulation/Tampering, and Surveillence.",
    tags: ["Next.js", "NestJS", "Go", "Spring Boot"],
    repoUrl: "https://github.com/mariaalexissales/Quietroom",
  },
  {
    name: "go-ledger",
    tagline: "Double-entry ledger API with a live security console",
    description:
      "A ledger API in Go behind an IP rate limiter and a security logger. Every request gets logged ALLOWED or BLOCKED, and the React console streams that log live while demo scenarios attack the limiter. One of them spoofs X-Forwarded-For. Toggle the fix off and watch it get through.",
    tags: ["Go", "PostgreSQL", "React", "Docker", "SSE"],
    repoUrl: "https://github.com/mariaalexissales/Go-Ledger",
    liveUrl: "https://mariaalexissales.github.io/Go-Ledger/",
    liveLabel: "Try the console",
  },
  {
    name: "Twitch Tarot Bot",
    tagline: "Twitch Bot made in Go",
    description:
      "A Twitch bot made in Go. Features pulling single cards or a past-present-future spread. In the future, this will include a setup landing page for other Twitch streamers to use.",
    tags: ["Go", "Twitch"],
    repoUrl: "https://github.com/mariaalexissales/Twitch-Tarot-Bot",
  },
  {
    name: "Cooking Companion",
    tagline: "Local-first pantry tracker, installable as a PWA",
    description:
      'A pantry app that answers "do we already have this?" from the supermarket aisle. Everything lives on-device in IndexedDB via Dexie. No account, no server, nothing leaves the phone.',
    tags: ["React 19", "TypeScript", "MUI", "Dexie", "PWA"],
    repoUrl: "https://github.com/mariaalexissales/cooking-companion",
    liveUrl: "https://mariaalexissales.github.io/cooking-companion/",
    liveLabel: "Try the web app",
  },
  {
    name: "Bundle Up!",
    tagline: "Inventory packing mod for Project Zomboid",
    description:
      "Packs loose inventory into single carryable containers: planks, sheet metal, nails, food, ammo, seeds. Bundle weights are sandbox options, so hosts can tune them and keep item overflow from tanking performance on long-running servers. Now comes with a UI for packing large amounts of stuff!",
    tags: ["Lua", "Project Zomboid", "Steam Workshop"],
    repoUrl: "https://github.com/mariaalexissales/bundle-up",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3746632343",
    liveLabel: "View on Steam",
  },
  {
    name: "Pinoy Pantry",
    tagline: "Pinoy Pantry mod for Project Zomboid",
    description:
      "A mod that brings Pinoy pantry staples into Knox County. Remember the taste of your childhood or your barangay back home! Has a couple of staples in it, but not all. More will be coming soon, such as halo-halo, turon, ube (both the plant and the extract), and spam!",
    tags: ["Lua", "Project Zomboid", "Steam Workshop"],
    repoUrl: "https://github.com/mariaalexissales/Pinoy-Pantry",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3791631305",
    liveLabel: "View on Steam",
  },
  {
    name: "Quest System Framework",
    tagline: "Quest System for Multiplayer Servers on Project Zomboid",
    description:
      "This mod provides the immersion that we so desperately need in Knox County as we wait for B43's NPCs. Give your players things to do, places to see, and items to grab. The system should be easy to understand, and does not require a whole server restart to implement it.",
    tags: ["Lua", "Project Zomboid", "Steam Workshop"],
    repoUrl: "https://github.com/mariaalexissales/Quest-System-Framework",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3794717412",
    liveLabel: "View on Steam",
  },
];
