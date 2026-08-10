import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import GlowButton from '../common/GlowButton'
import GradientText from '../common/GradientText'
import SocialIcon from '../common/SocialIcon'
import { hero } from '../../data/hero'
import me from '../../assets/me.jpg'
import programmer from '../../assets/programmer.svg'

export default function Hero() {
  return (
    <Box component="section" id="about" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Avatar
                src={me}
                alt={hero.name}
                sx={(theme) => ({
                  width: 96,
                  height: 96,
                  border: `2px solid ${theme.vars.palette.primary.main}`,
                })}
              />

              <Stack spacing={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="overline" color="secondary">
                  {hero.role} · {hero.location}
                </Typography>
                <GradientText variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}>
                  {hero.name}
                </GradientText>
              </Stack>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: '58ch', textAlign: { xs: 'center', md: 'left' } }}
              >
                {hero.summary}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                {hero.socials.map((social) => {
                  const isResume = social.kind === 'resume'
                  const ButtonComponent = isResume ? GlowButton : Button

                  return (
                    <ButtonComponent
                      key={social.kind}
                      href={social.href}
                      variant={isResume ? 'contained' : 'outlined'}
                      color={isResume ? 'primary' : 'inherit'}
                      startIcon={<SocialIcon kind={social.kind} />}
                      target={social.kind === 'email' ? undefined : '_blank'}
                      rel={social.kind === 'email' ? undefined : 'noopener noreferrer'}
                    >
                      {social.label}
                    </ButtonComponent>
                  )
                })}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              src={programmer}
              alt=""
              sx={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
