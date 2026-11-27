import Box from "@mui/material/Box";
import type { ReactNode } from "react";

/** Text for screen readers only, e.g. which project a repeated "Source" link belongs to. */
export default function VisuallyHidden({ children }: { children: ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: "absolute",
        // Strings on purpose: sx reads 1 as 100% and -1 as a spacing step.
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {children}
    </Box>
  );
}
