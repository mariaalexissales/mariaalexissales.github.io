import type { Ramp } from './tokens'

declare module '@mui/material/styles' {
  interface Palette {
    /** The glow, hairline and glitch values have no semantic MUI slot. */
    ramp: Ramp
    gradient: { holo: string }
  }

  interface PaletteOptions {
    ramp?: Ramp
    gradient?: { holo?: string }
  }
}

export {}
