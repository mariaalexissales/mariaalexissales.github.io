import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import VolunteerActivismOutlined from "@mui/icons-material/VolunteerActivismOutlined";
import WorkOutlined from "@mui/icons-material/WorkOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector, {
  timelineConnectorClasses,
} from "@mui/lab/TimelineConnector";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";
import TimelineDot, { timelineDotClasses } from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "../common/Section";
import { experience } from "../../data/experience";
import type { ExperienceEntry } from "../../data/types";

function dotFor(entry: ExperienceEntry) {
  switch (entry.kind) {
    case "work":
      return {
        icon: <WorkOutlined fontSize="small" />,
        color: "primary",
      } as const;
    case "volunteer":
      return {
        icon: <VolunteerActivismOutlined fontSize="small" />,
        color: "secondary",
      } as const;
    case "education":
      return {
        icon: <SchoolOutlined fontSize="small" />,
        color: "info",
      } as const;
    default: {
      const unhandled: never = entry;
      return unhandled;
    }
  }
}

export default function ExperienceTimeline() {
  const last = experience.length - 1;

  return (
    <Section id="experience" eyebrow="Where I have worked" title="Experience">
      <Timeline
        position="alternate"
        role="list"
        sx={{
          p: 0,

          [`& .${timelineDotClasses.root}`]: { m: 0 },

          [`& .${timelineConnectorClasses.root}`]: {
            bgcolor: "ramp.hairlineStrong",
          },

          [`& .${timelineContentClasses.root}`]: {
            minWidth: 0,
            overflowWrap: "anywhere",
            pl: 2.5,
            pr: 0,
            py: 2,
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            minWidth: 0,
            display: { xs: "none", md: "block" },
            pr: 2.5,
            pl: 0,
          },

          [`& .${timelineItemClasses.root}:nth-of-type(even)`]: {
            flexDirection: { xs: "row", md: "row-reverse" },
          },
          [`& .${timelineItemClasses.root}:nth-of-type(even) .${timelineContentClasses.root}`]:
            {
              textAlign: "left",
              pl: { xs: 2.5, md: 0 },
              pr: { xs: 0, md: 2.5 },
            },

          [`& .${timelineItemClasses.root}:nth-of-type(even) .${timelineOppositeContentClasses.root}`]:
            { pl: { md: 2.5 }, pr: { md: 0 } },
        }}
      >
        {experience.map((entry, index) => {
          const dot = dotFor(entry);

          return (
            <TimelineItem key={`${entry.organization}-${entry.period}`}>
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography variant="caption" color="text.secondary">
                  {entry.period}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector
                  sx={
                    index === 0
                      ? (theme) => ({
                          bgcolor: "transparent",
                          backgroundImage: `linear-gradient(to bottom, transparent, ${theme.vars.palette.ramp.hairlineStrong})`,
                        })
                      : undefined
                  }
                />

                <TimelineDot variant="outlined" color={dot.color}>
                  {dot.icon}
                </TimelineDot>

                <TimelineConnector
                  sx={
                    index === last
                      ? (theme) => ({
                          bgcolor: "transparent",
                          backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.ramp.hairlineStrong}, transparent)`,
                        })
                      : undefined
                  }
                />
              </TimelineSeparator>

              <TimelineContent>
                <Card variant="outlined">
                  <CardContent>
                    <Stack spacing={1}>
                      <Stack spacing={0.25}>
                        <Typography variant="h6" sx={{ fontSize: "1.05rem" }}>
                          {entry.kind === "education"
                            ? entry.credential
                            : entry.role}
                        </Typography>
                        <Typography variant="caption" color="secondary">
                          {entry.organization} · {entry.location}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: { xs: "block", md: "none" } }}
                        >
                          {entry.period}
                        </Typography>
                      </Stack>

                      <Stack
                        component="ul"
                        spacing={0.75}
                        sx={{ m: 0, pl: 2.5 }}
                      >
                        {entry.points.map((point) => (
                          <Typography
                            key={point}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                          >
                            {point}
                          </Typography>
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
}
