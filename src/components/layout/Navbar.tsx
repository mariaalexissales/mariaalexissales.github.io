import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggle from "../common/ThemeToggle";
import { hero } from "../../data/hero";
import { useActiveSection } from "../../hooks/useActiveSection";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Stack", id: "stack" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
] as const;

const SECTION_IDS = LINKS.map((link) => link.id);

const resume = hero.socials.find((social) => social.kind === "resume");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useActiveSection(SECTION_IDS);

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
            id="brand"
            component="a"
            href="#about"
            variant="h6"
            onClick={() => setActive("about")}
            sx={{
              mr: "auto",
              textDecoration: "none",
              color: "inherit",
              fontSize: "1.05rem",
            }}
          >
            {hero.name}
          </Typography>

          <Stack
            component="nav"
            aria-label="Sections"
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {LINKS.map((link) => {
              const current = link.id === active;
              return (
                <Button
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  aria-current={current ? "location" : undefined}
                  color="inherit"
                  size="small"
                  sx={(theme) => ({
                    position: "relative",
                    color: current
                      ? theme.vars.palette.text.primary
                      : theme.vars.palette.text.secondary,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 8,
                      right: 8,
                      bottom: 2,
                      height: 2,
                      borderRadius: 1,
                      backgroundImage: theme.vars.palette.gradient.holo,
                      opacity: current ? 1 : 0,
                      transition: "opacity 150ms",
                    },
                  })}
                >
                  {link.label}
                </Button>
              );
            })}
          </Stack>

          {resume && (
            <Button
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<DescriptionOutlined />}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Resume
            </Button>
          )}

          <ThemeToggle />

          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: "min(300px, 85vw)" } } }}
      >
        <Box
          component="nav"
          aria-label="Sections"
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          onClick={() => setOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pl: 2.5,
              pr: 1,
              py: 1,
            }}
          >
            <Typography variant="overline" color="text.secondary">
              Jump to
            </Typography>
            <IconButton aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {LINKS.map((link) => {
              const current = link.id === active;
              return (
                <ListItemButton
                  key={link.id}
                  component="a"
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  selected={current}
                  aria-current={current ? "location" : undefined}
                  sx={(theme) => ({
                    minHeight: 52,
                    pl: 2.5,
                    borderLeft: "3px solid transparent",
                    ...(current && {
                      borderLeftColor: theme.vars.palette.primary.main,
                    }),
                  })}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: { sx: { fontWeight: current ? 600 : 400 } },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>

          {resume && (
            <>
              <Divider sx={{ mt: "auto" }} />
              <Box sx={{ p: 2.5 }}>
                <Button
                  fullWidth
                  href={resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<DescriptionOutlined />}
                >
                  Resume
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
}
