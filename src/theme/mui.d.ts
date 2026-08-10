import type { Ramp } from "./tokens";

declare module "@mui/material/styles" {
  /** Makes `theme.vars` non-optional, so `sx` callbacks need no null check. */
  interface CssThemeVariables {
    enabled: true;
  }

  interface Palette {
    /** The glow, hairline and glitch values have no semantic MUI slot. */
    ramp: Ramp;
    gradient: { holo: string };
  }

  interface PaletteOptions {
    ramp?: Ramp;
    gradient?: { holo?: string };
  }
}

export {};
