import { motion } from 'framer-motion'
import { Scene3D } from '../3d/Scene3D'
import { MagneticButton } from '../components/MagneticButton'
import { PERSONAL, HERO_LABELS } from '../data/portfolio'

interface HeroProps {
  mouseX: number
  mouseY: number
}

export function Hero({ mouseX, mouseY }: HeroProps) {
  const handleExplore = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', position: 'relative', display: 'flex',
        alignItems: 'center', overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Radial gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        width: '100%', position: 'relative', zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 48, alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* Left — text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>
              &gt; PORTFOLIO_v2026
            </span>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700, lineHeight: 1.05, marginBottom: 16,
              letterSpacing: '-0.02em',
            }}>
              <span className="gradient-text">{PERSONAL.name}</span>
            </h1>

            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.9rem', color: '#06b6d4',
              marginBottom: 20, letterSpacing: '0.08em',
            }}>
              {PERSONAL.title}
            </p>

            <p style={{
              fontSize: '1.05rem', color: 'rgba(240,242,245,0.65)',
              lineHeight: 1.65, marginBottom: 40, maxWidth: 480,
            }}>
              {PERSONAL.tagline}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <MagneticButton variant="primary" onClick={handleExplore}>
                Explore My Work →
              </MagneticButton>
              <MagneticButton
                variant="outline"
                href={PERSONAL.github}
                aria-label="GitHub Profile"
              >
                <GitHubIcon /> GitHub
              </MagneticButton>
            </div>

            {/* Floating skill labels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {HERO_LABELS.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.35)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 4, padding: '4px 10px',
                  }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — 3D sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ height: 500, position: 'relative' }}
        >
          <Scene3D mouseX={mouseX} mouseY={mouseY} />

          {/* Floating labels around sphere */}
          <FloatingLabel label="AI / ML" style={{ top: '15%', left: '5%' }} delay={0.8} />
          <FloatingLabel label="CYBER SEC" style={{ top: '20%', right: '5%' }} delay={1.0} />
          <FloatingLabel label="BACKEND" style={{ bottom: '25%', left: '8%' }} delay={1.2} />
          <FloatingLabel label="ML" style={{ bottom: '20%', right: '10%' }} delay={1.4} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.6rem', letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.25)',
        }}>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)',
        }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  )
}

function FloatingLabel({ label, style, delay }: {
  label: string; style: React.CSSProperties; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={{
        position: 'absolute', ...style,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.55rem', letterSpacing: '0.12em',
        color: '#06b6d4',
        background: 'rgba(6,182,212,0.07)',
        border: '1px solid rgba(6,182,212,0.2)',
        borderRadius: 4, padding: '4px 8px',
        backdropFilter: 'blur(8px)',
        pointerEvents: 'none',
      }}
    >
      {label}
    </motion.div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
