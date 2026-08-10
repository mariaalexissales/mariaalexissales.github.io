import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggle from "../common/ThemeToggle";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={(theme) => ({
        // Opaque by default. The translucent version only lands where
        // backdrop-filter works, or the page would show straight through.
        backgroundColor: theme.vars.palette.background.default,
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
        color: theme.vars.palette.text.primary,

        "@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px))":
          {
            backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.72)`,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          },
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography
            component="a"
            href="#about"
            variant="h6"
            sx={{
              mr: "auto",
              textDecoration: "none",
              color: "inherit",
              fontSize: "1.05rem",
            }}
          >
            Maria Alexis Sales
          </Typography>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {LINKS.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                size="small"
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <ThemeToggle />

          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            color="inherit"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 260 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {LINKS.map((link) => (
              <ListItemButton key={link.href} component="a" href={link.href}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
