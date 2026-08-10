import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GlowButton from '../common/GlowButton'
import Section from '../common/Section'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Things I built" title="Projects">
      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {projects.map((project) => (
          <Grid key={project.name} size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1.5}>
                  <Stack spacing={0.5}>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="caption" color="secondary">
                      {project.tagline}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
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
                    {project.liveLabel ?? 'Live demo'}
                  </GlowButton>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
