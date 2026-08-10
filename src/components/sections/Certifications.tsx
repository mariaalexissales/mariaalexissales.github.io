import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "../common/Section";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="What I studied"
      title="Certifications"
    >
      <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
        {certifications.map((certification) => (
          <Grid key={certification.name} size={{ xs: 12, md: 6 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={certification.image}
                alt={`${certification.name} certificate`}
                sx={{ aspectRatio: "4 / 3", objectFit: "cover" }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontSize: "1.05rem" }}>
                    {certification.name}
                  </Typography>
                  <Typography variant="caption" color="secondary">
                    {certification.issuer} · {certification.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {certification.summary}
                  </Typography>
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  startIcon={<LaunchIcon />}
                >
                  View credential
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
