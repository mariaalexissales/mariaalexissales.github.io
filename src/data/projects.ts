import type { Project } from './types'

export const projects = [
  {
    name: 'go-ledger',
    tagline: 'Double-entry ledger API with a live security console',
    description:
      'A ledger API in Go behind an IP rate limiter and a security logger. Every request gets logged ALLOWED or BLOCKED, and the React console streams that log live while demo scenarios attack the limiter. One of them spoofs X-Forwarded-For. Toggle the fix off and watch it get through.',
    tags: ['Go', 'PostgreSQL', 'React', 'Docker', 'SSE'],
    repoUrl: 'https://github.com/mariaalexissales/go-ledger',
    liveUrl: 'https://mariaalexissales.github.io/go-ledger/',
    liveLabel: 'Try the console',
  },
  {
    name: 'Cooking Companion',
    tagline: 'Local-first pantry tracker, installable as a PWA',
    description:
      'A pantry app that answers "do we already have this?" from the supermarket aisle. Everything lives on-device in IndexedDB via Dexie. No account, no server, nothing leaves the phone.',
    tags: ['React 19', 'TypeScript', 'MUI', 'Dexie', 'PWA'],
    repoUrl: 'https://github.com/mariaalexissales/cooking-companion',
    liveUrl: 'https://mariaalexissales.github.io/cooking-companion/',
  },
  {
    name: 'Bundle Up!',
    tagline: 'Inventory packing mod for Project Zomboid',
    description:
      'Packs loose inventory into single carryable containers: planks, sheet metal, nails, food, ammo, seeds. Bundle weights are sandbox options, so hosts can tune them and keep item overflow from tanking performance on long-running servers.',
    tags: ['Lua', 'Project Zomboid', 'Steam Workshop'],
    liveUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3746632343',
    liveLabel: 'View on Steam',
  },
] satisfies Project[]
