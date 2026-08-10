/**
 * Raw color ramps, shared with the go-ledger console. No MUI imports, so
 * anything outside the component tree can read these directly.
 *
 * Roughly 70% ground, 20% violet, 10% everything else. Violet carries the
 * chrome, cyan the accents, gold shows up once per screen at most. No warm
 * neutrals: bone instead of white, ghost violet instead of gray.
 */

export interface Ramp {
  void: string
  substrate: string
  surface: string

  violet: string
  magenta: string
  hot: string
  cyan: string
  gold: string
  error: string

  /** Body, secondary, disabled text. */
  bone: string
  ghost: string
  dim: string

  /** Offset copies of text for the y2k aberration. Never a fill. */
  glitchR: string
  glitchC: string

  hairline: string
  hairlineStrong: string

  glow1: string
  glow2: string
}

export const DARK: Ramp = {
  void: '#0A0711',
  substrate: '#150E24',
  surface: '#1E1433',

  violet: '#B78CFF',
  magenta: '#E85FFF',
  hot: '#FF5FD2',
  cyan: '#6FE3FF',
  gold: '#E8C46A',
  error: '#FF3B6B',

  bone: '#E9E3F5',
  ghost: '#8478A6',
  // 4.33:1, under what body text needs but fine for disabled, which WCAG
  // 1.4.3 exempts.
  dim: '#7A6E9E',

  glitchR: '#FF0040',
  glitchC: '#00FFE1',

  // rgba, not hex, so a hairline composites over whatever it lands on. Custom
  // palette keys get no Channel var from MUI, so alpha has to live here.
  hairline: 'rgba(183, 140, 255, 0.18)',
  hairlineStrong: 'rgba(183, 140, 255, 0.38)',

  glow1: 'rgba(183, 140, 255, 0.10)',
  glow2: 'rgba(232, 95, 255, 0.08)',
}

/** Surfaces descend in lightness, so cards sit recessed into the page. */
export const LIGHT: Ramp = {
  void: '#F4F1FA',
  substrate: '#EAE4F5',
  surface: '#DDD5EE',

  violet: '#5B2FBF',
  magenta: '#A81FB0',
  // Darkened at constant hue from the authored values. Both cleared AA on the
  // page, but most text sits on a card, where they measured 4.17:1 and 4.32:1.
  hot: '#B31A9B',
  cyan: '#0E6E8C',
  gold: '#825D0C',
  error: '#C41442',

  bone: '#1A1226',
  ghost: '#655A85',
  dim: '#8F86A8',

  glitchR: '#E0004A',
  glitchC: '#0090C0',

  hairline: 'rgba(91, 47, 191, 0.24)',
  hairlineStrong: 'rgba(91, 47, 191, 0.45)',

  glow1: 'rgba(91, 47, 191, 0.07)',
  glow2: 'rgba(168, 31, 176, 0.05)',
}

/** Hot through violet to cyan, the three accents in hue order. */
export const holo = (ramp: Ramp) =>
  `linear-gradient(120deg, ${ramp.hot}, ${ramp.violet} 45%, ${ramp.cyan})`

export const headingFont = "'Space Grotesk Variable', 'Segoe UI', system-ui, sans-serif"
export const bodyFont = "'Inter Variable', 'Segoe UI', system-ui, sans-serif"
export const monoFont = "'Space Mono', ui-monospace, SFMono-Regular, Consolas, monospace"
