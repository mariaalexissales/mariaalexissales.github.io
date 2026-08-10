import { createTheme } from '@mui/material/styles'
import { DARK, LIGHT, bodyFont, headingFont, holo, monoFont, type Ramp } from './tokens'

/** Shades are pinned. `augmentColor` interpolates in sRGB and drifts the hue. */
function palette(
  ramp: Ramp,
  shades: Record<string, [string, string]>,
  action: Record<string, string>,
) {
  const on = (main: string, key: string) => ({
    main,
    light: shades[key][0],
    dark: shades[key][1],
    // Void, not black. It reads 5.8:1 or better on every accent here.
    contrastText: ramp.void,
  })

  return {
    primary: on(ramp.violet, 'violet'),
    secondary: on(ramp.magenta, 'magenta'),
    info: on(ramp.cyan, 'cyan'),
    success: on(ramp.cyan, 'cyan'),
    warning: on(ramp.gold, 'gold'),
    error: on(ramp.error, 'error'),

    background: { default: ramp.void, paper: ramp.substrate },
    text: { primary: ramp.bone, secondary: ramp.ghost, disabled: ramp.dim },
    divider: ramp.hairline,

    // Re-derived from violet. MUI's defaults are black and white washes.
    action,

    ramp,
    gradient: { holo: holo(ramp) },
  }
}

const DARK_SHADES: Record<string, [string, string]> = {
  violet: ['#D4BCFF', '#8B5CF0'],
  magenta: ['#F2A3FF', '#C42BE0'],
  cyan: ['#A8EEFF', '#33C4E8'],
  gold: ['#F2DCA1', '#C79E3F'],
  error: ['#FF7D9C', '#D91847'],
}

const LIGHT_SHADES: Record<string, [string, string]> = {
  violet: ['#8C68E2', '#4E28A8'],
  magenta: ['#B84FD6', '#781594'],
  cyan: ['#2A8CAB', '#054E66'],
  gold: ['#A87D22', '#5E4207'],
  error: ['#E03A64', '#96032D'],
}

const DARK_ACTION = {
  active: DARK.ghost,
  hover: 'rgba(183, 140, 255, 0.10)',
  selected: 'rgba(183, 140, 255, 0.16)',
  focus: 'rgba(183, 140, 255, 0.14)',
  disabled: DARK.dim,
  disabledBackground: 'rgba(183, 140, 255, 0.12)',
}

const LIGHT_ACTION = {
  active: LIGHT.ghost,
  hover: 'rgba(91, 47, 191, 0.06)',
  selected: 'rgba(91, 47, 191, 0.11)',
  focus: 'rgba(91, 47, 191, 0.10)',
  disabled: LIGHT.dim,
  disabledBackground: 'rgba(91, 47, 191, 0.10)',
}

export const theme = createTheme({
  /**
   * Switches scheme without a re-render. Everything downstream has to read
   * `theme.vars.palette.*`. A `theme.palette.mode` conditional compiles fine
   * and silently renders light values in both schemes.
   */
  cssVariables: { colorSchemeSelector: 'class' },

  // Otherwise MUI puts light values on `:root` and flashes white on cold load.
  defaultColorScheme: 'dark',

  colorSchemes: {
    dark: { palette: palette(DARK, DARK_SHADES, DARK_ACTION) },
    light: { palette: palette(LIGHT, LIGHT_SHADES, LIGHT_ACTION) },
  },

  shape: { borderRadius: 10 },

  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 },
    h2: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h3: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontFamily: headingFont, fontWeight: 600 },
    h5: { fontFamily: headingFont, fontWeight: 600 },
    h6: { fontFamily: headingFont, fontWeight: 600 },
    button: { fontFamily: headingFont, fontWeight: 600, textTransform: 'none' },
    overline: { fontFamily: monoFont, letterSpacing: '.18em', fontWeight: 700 },
    caption: { fontFamily: monoFont, letterSpacing: '.04em' },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
  },
})
