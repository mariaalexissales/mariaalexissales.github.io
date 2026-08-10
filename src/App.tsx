import Box from '@mui/material/Box'
import SkipLink from './components/common/SkipLink'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import ExperienceTimeline from './components/sections/ExperienceTimeline'
import Certifications from './components/sections/Certifications'

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <SkipLink />
      <Navbar />
      <Box component="main" id="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <TechStack />
        <Projects />
        <ExperienceTimeline />
        <Certifications />
      </Box>
      <Footer />
    </Box>
  )
}
