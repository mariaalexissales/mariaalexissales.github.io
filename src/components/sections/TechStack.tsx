import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "../common/Section";
import { techStack } from "../../data/techStack";
import type { TechCategory } from "../../data/types";

const categories = Object.keys(techStack) as TechCategory[];

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="What I work in" title="Tech stack">
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid key={category} size={{ xs: 12, sm: 6 }}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {category}
                </Typography>
                <Stack spacing={1.25}>
                  {techStack[category].map((item) => (
                    <Stack key={item.name} spacing={0.25}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      {item.detail && (
                        <Typography variant="caption" color="text.secondary">
                          {item.detail}
                        </Typography>
                      )}
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
