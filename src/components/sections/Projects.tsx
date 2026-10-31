import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GlowButton from "../common/GlowButton";
import Section from "../common/Section";
import { projects } from "../../data/projects";

const CLAMP_LINES = 4;

/**
 * Cuts long descriptions to a few lines so the section scans quickly,
 * especially on a phone. The toggle only appears when text is cut.
 */
function ClampedText({ id, children }: { id: string; children: ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;
    const measure = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <Box>
      <Typography
        ref={ref}
        id={id}
        variant="body2"
        color="text.secondary"
        sx={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: CLAMP_LINES,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }
        }
      >
        {children}
      </Typography>
      {(overflows || expanded) && (
        <Button
          size="small"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={id}
          sx={{ mt: 0.5, ml: -1, px: 1, minWidth: 0 }}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      )}
    </Box>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Things I built" title="Projects">
      <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
        {projects.map((project, index) => (
          <Grid key={project.name} size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1.5}>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="caption" color="secondary">
                      {project.tagline}
                    </Typography>
                  </Stack>

                  <ClampedText id={`project-${index}`}>
                    {project.description}
                  </ClampedText>

                  <Stack
                    direction="row"
                    spacing={0.75}
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
                {project.repoUrl && (
                  <Button
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    startIcon={<GitHubIcon />}
                  >
                    Source
                  </Button>
                )}
                {project.liveUrl && (
                  <GlowButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                  >
                    {project.liveLabel ?? "Live demo"}
                  </GlowButton>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
