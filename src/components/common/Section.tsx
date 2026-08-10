import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface SectionProps {
  /** Also the anchor target for the navbar link. */
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          <Stack spacing={1}>
            <Box
              aria-hidden
              sx={(theme) => ({
                width: 72,
                height: 3,
                borderRadius: 2,
                backgroundImage: theme.vars.palette.gradient.holo,
              })}
            />
            <Typography variant="overline" color="secondary">
              {eyebrow}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
              {title}
            </Typography>
          </Stack>
          {children}
        </Stack>
      </Container>
    </Box>
  )
}
