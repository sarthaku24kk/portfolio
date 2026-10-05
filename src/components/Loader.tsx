import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  { text: 'INITIALIZING SYSTEM...', delay: 0 },
  { text: 'LOADING PROFILE...', delay: 1200 },
  { text: 'SYSTEM ONLINE', delay: 2200 },
]

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState(0)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    if (skipped) {
      onComplete()
      return
    }
    const timers = lines.map((line, i) =>
      setTimeout(() => setPhase(i + 1), line.delay + 400)
    )
    const done = setTimeout(onComplete, 3200)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(done)
    }
  }, [skipped, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#080a0f' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Central orb */}
      <div className="relative mb-12">
        <motion.div
          style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            border: '1px solid rgba(99,102,241,0.4)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute', inset: -12, borderRadius: '50%',
            border: '1px solid rgba(6,182,212,0.2)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{
            position: 'absolute', inset: -24, borderRadius: '50%',
            border: '1px solid rgba(139,92,246,0.15)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Text lines */}
      <div className="space-y-3 text-center mb-8">
        {lines.map((line, i) => (
          <AnimatePresence key={i}>
            {phase > i && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: i === phase - 1 ? 1 : 0.4, y: 0 }}
                className="font-mono text-sm tracking-widest"
                style={{
                  color: i === phase - 1
                    ? i === 2 ? '#06b6d4' : '#f0f2f5'
                    : '#4b5563',
                }}
              >
                {i === phase - 1 ? (
                  <TypedText text={line.text} />
                ) : line.text}
              </motion.p>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        width: 200, height: 1,
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 1, overflow: 'hidden',
      }}>
        <motion.div
          style={{ height: '100%', background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${(phase / 3) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setSkipped(true)}
        style={{
          position: 'absolute', bottom: 32,
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem', letterSpacing: '0.15em',
        }}
      >
        SKIP →
      </motion.button>
    </motion.div>
  )
}

function TypedText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [text])
  return <span>{displayed}<span style={{ opacity: 0.5 }}>_</span></span>
}
