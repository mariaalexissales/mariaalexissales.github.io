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
  {
    name: "Remove Vanilla Anything",
    tagline: "Loot-table and vehicle-spawn surgery for Project Zomboid",
    description:
      "Strips vanilla loot and vehicles out of the spawn tables through 66 sandbox toggles, so modded packs have room to show up. Removals are gated on an allowlist baked from the game's own script files at build time, since nothing at runtime records which mod an item came from. The obvious distribution-merge hook fires before saved sandbox settings load. Found that by reading the decompiled engine, and there's a regression test for it.",
    tags: [
      "Lua",
      "Python",
      "GitHub Actions",
      "Project Zomboid",
      "Steam Workshop",
    ],
    repoUrl: "https://github.com/mariaalexissales/Remove-Vanilla-Anything",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3799346338",
    liveLabel: "View on Steam",
  },
  {
    name: "LAPLACE//DAEMON",
    tagline: "Server-authoritative item RPG layer for Project Zomboid",
    description:
      "Forged blades roll Common to Legendary off Blacksmith level, then a damage value inside that tier's band, so no two swords hit alike. Three tarot cards socket into Past, Present and Future. The server owns every roll: clients send item ids, never outcomes, so a crafted packet can't deal itself a card. Stats are rebuilt from the vanilla base by one pure function, so a refresh can't stack. Core fires five hooks and never knows the Arcana add-on exists.",
    tags: [
      "Lua",
      "Python",
      "GitHub Actions",
      "Project Zomboid",
      "Steam Workshop",
    ],
    repoUrl: "https://github.com/mariaalexissales/LAPLACE-DAEMON",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3809376465",
    liveLabel: "View on Steam",
  },
  {
    name: "Dead Court Deck",
    tagline: "352-card collectible economy for Project Zomboid",
    description:
      "Card packs roll five cards each from a 352-card deck: four suits, four finishes, and court cards in four races. Trade a completed suit in for loot the server admin defines in one JSON file, re-read on every trade so edits land with no restart. A broken edit keeps the last good table and logs why. All 353 item scripts and icons are generated by build scripts. At default odds, a simulated median of 2,064 packs stands between you and a Gold suit.",
    tags: ["Lua", "PowerShell", "Project Zomboid", "Steam Workshop"],
    repoUrl: "https://github.com/mariaalexissales/Dead-Court-Deck",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3800241753",
    liveLabel: "View on Steam",
  },
  {
    name: "Player Leaderboard System",
    tagline: "Exploit-resistant multiplayer leaderboards for Project Zomboid",
    description:
      "Server-wide boards for zombie kills, player kills and deaths, with All Time and Per Life kill rankings and an announcement when first place changes hands. Scoring is tracked server-side so the grind is worth something: kills have to be earned, so vehicle and off-map kills don't count, and repeat kills on the same player sit behind a pair cooldown to shut out kill trading. Scores also back up as plain JSON outside the save with a .bak beside it, so a write interrupted halfway still leaves a good copy.",
    tags: ["Lua", "Project Zomboid", "Steam Workshop"],
    repoUrl: "https://github.com/mariaalexissales/Leaderboard-Framework",
    liveUrl:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3795596462",
    liveLabel: "View on Steam",
  },
];
