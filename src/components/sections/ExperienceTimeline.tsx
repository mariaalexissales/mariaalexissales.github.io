import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import VolunteerActivismOutlined from "@mui/icons-material/VolunteerActivismOutlined";
import WorkOutlined from "@mui/icons-material/WorkOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
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
      // A new `kind` without a dot fails the build here.
      const unhandled: never = entry;
      return unhandled;
    }
  }
}

export default function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="Where I have worked" title="Experience">
      <Timeline
        position="right"
        sx={{
          p: 0,
          m: 0,
          /**
           * A fixed date gutter instead of MUI's alternating layout, which
           * gives every other card a different edge to start from. One column
           * of dates, one rail, one column of cards.
           */
          [`& .${timelineOppositeContentClasses.root}`]: {
            display: { xs: "none", md: "block" },
            // Wide enough for "Sept 2025 – Present" on one line at caption size.
            flex: { md: "0 0 184px" },
            px: { md: 2 },
            pt: { md: 2.5 },
            textAlign: "right",
            whiteSpace: "nowrap",
          },
        }}
      >
        {experience.map((entry, index) => {
          const dot = dotFor(entry);

          return (
            <TimelineItem key={`${entry.organization}-${entry.period}`}>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="caption">{entry.period}</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  color={dot.color}
                  sx={{ my: 1 }}
                >
                  {dot.icon}
                </TimelineDot>
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ pl: 2, pr: 0, pb: 4 }}>
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
