import Box from '@mui/material/Box'

/** Off-screen until focused, so the first Tab offers a way past the nav. */
export default function SkipLink() {
  return (
    <Box
      component="a"
      href="#main"
      sx={(theme) => ({
        position: 'absolute',
        left: 8,
        top: -64,
        zIndex: theme.zIndex.tooltip,
        px: 2,
        py: 1,
        borderRadius: 1,
        backgroundColor: theme.vars.palette.background.paper,
        color: theme.vars.palette.text.primary,
        border: `1px solid ${theme.vars.palette.primary.main}`,
        textDecoration: 'none',

        '&:focus-visible': { top: 8 },
      })}
    >
      Skip to content
    </Box>
  )
}
