import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'

import '@fontsource-variable/space-grotesk/index.css'
import '@fontsource-variable/inter/index.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

import App from './App'
import { theme } from './theme/theme'
import './index.css'

// The key the old static site used, so a saved preference carries over. Has to
// match on the provider and the pre-paint script.
const MODE_STORAGE_KEY = 'theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitColorSchemeScript defaultMode="system" modeStorageKey={MODE_STORAGE_KEY} attribute="class" />
    <ThemeProvider theme={theme} defaultMode="system" modeStorageKey={MODE_STORAGE_KEY}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
