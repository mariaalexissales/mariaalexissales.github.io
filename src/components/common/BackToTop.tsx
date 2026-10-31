import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";

/** Shows once the hero is out of view. */
export default function BackToTop() {
  const show = useScrollTrigger({ disableHysteresis: true, threshold: 600 });

  const handleClick = () => {
    // Plain scrollTo follows the CSS scroll-behavior, so reduced motion holds.
    window.scrollTo({ top: 0 });
    document.getElementById("brand")?.focus({ preventScroll: true });
  };

  return (
    <Zoom in={show}>
      <Fab
        onClick={handleClick}
        size="medium"
        color="primary"
        aria-label="Back to top"
        sx={{
          position: "fixed",
          right: { xs: 16, md: 32 },
          bottom: { xs: 16, md: 32 },
          zIndex: (theme) => theme.zIndex.appBar - 1,
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}
