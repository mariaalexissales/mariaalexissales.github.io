import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

/**
 * The `@supports` guard matters: `color: transparent` without
 * `background-clip: text` renders the text invisible, not unstyled.
 */
const GradientText = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  backgroundImage: theme.vars.palette.gradient.holo,

  "@supports (background-clip: text) or (-webkit-background-clip: text)": {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
}));

export default GradientText;
