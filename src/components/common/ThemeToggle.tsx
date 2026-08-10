import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useColorScheme } from '@mui/material/styles'

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme()

  // Undefined until the provider reads localStorage. Hold the space so the
  // navbar does not shift when it arrives.
  if (!mode) {
    return <IconButton disabled aria-hidden sx={{ width: 40, height: 40 }} />
  }

  // `mode` can be 'system', in which case systemMode is what is on screen and
  // what the toggle has to invert.
  const resolved = mode === 'system' ? (systemMode ?? 'dark') : mode
  const next = resolved === 'dark' ? 'light' : 'dark'
  const label = `Switch to ${next} mode`

  return (
    <Tooltip title={label}>
      <IconButton onClick={() => setMode(next)} aria-label={label} color="inherit">
        {resolved === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </Tooltip>
  )
}
