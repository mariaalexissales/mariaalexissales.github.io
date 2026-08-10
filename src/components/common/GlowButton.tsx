import Button, { type ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

/**
 * Two stacked shadows: a tight ring for the edge, a wide wash for the spill.
 *
 * Typed as the anchor form of Button, because `styled()` collapses the
 * polymorphic overloads to the default element and drops `target` and `rel`.
 */
const GlowButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  boxShadow: `0 0 0 1px ${theme.vars.palette.ramp.hairlineStrong}, 0 8px 24px -8px ${theme.vars.palette.ramp.glow2}`,

  "&:hover": {
    boxShadow: `0 0 0 1px ${theme.vars.palette.primary.main}, 0 12px 32px -6px ${theme.vars.palette.ramp.glow1}`,
  },

  "@media (prefers-reduced-motion: no-preference)": {
    transition: theme.transitions.create(["box-shadow", "transform"], {
      duration: theme.transitions.duration.short,
    }),

    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
}));

export default GlowButton;
