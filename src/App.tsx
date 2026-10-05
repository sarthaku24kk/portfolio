import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { CursorGlow } from './components/CursorGlow'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Achievements } from './sections/Achievements'
import { SystemThinking } from './sections/SystemThinking'
import { CurrentlyLearning } from './sections/CurrentlyLearning'
import { LeadershipSection } from './sections/Leadership'
import { Contact } from './sections/Contact'
import { useMouseParallax, useReducedMotion } from './hooks/usePortfolio'
import './index.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const mouse = useMouseParallax()
  const reduced = useReducedMotion()

  const handleLoaderComplete = useCallback(() => setLoaded(true), [])

  return (
    <div className="noise scanlines">
      <CursorGlow />

      <AnimatePresence>
        {!loaded && (
          <Loader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero
              mouseX={reduced ? 0 : mouse.x}
              mouseY={reduced ? 0 : mouse.y}
            />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <SystemThinking />
            <CurrentlyLearning />
            <LeadershipSection />
            <Contact />
          </main>
        </motion.div>
      )}
    </div>
  )
}
