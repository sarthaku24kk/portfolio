import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SYSTEM_STAGES } from '../data/portfolio'

export function SystemThinking() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="systems" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">// 05</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            How I Think About{' '}
            <span className="gradient-text-cyan">Systems</span>
          </h2>
          <p style={{
            color: 'rgba(240,242,245,0.5)', marginTop: 16,
            fontSize: '1rem', maxWidth: 500,
          }}>
            Click any stage to explore my approach to that phase of system development.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,0.6fr) minmax(0,1fr)',
          gap: 64, alignItems: 'start',
        }} className="systems-grid">
          {/* Stage selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SYSTEM_STAGES.map((stage, i) => (
              <div key={stage.label}>
                <motion.button
                  onClick={() => setSelected(selected === i ? null : i)}
                  whileHover={{ x: 6 }}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: selected === i
                      ? 'rgba(99,102,241,0.08)'
                      : 'transparent',
                    border: '1px solid',
                    borderColor: selected === i
                      ? 'rgba(99,102,241,0.3)'
                      : 'rgba(255,255,255,0.06)',
                    borderRadius: 10, padding: '16px 20px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 14,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.55rem', letterSpacing: '0.1em',
                    color: selected === i ? '#6366f1' : 'rgba(99,102,241,0.4)',
                    width: 18,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem', letterSpacing: '0.12em',
                    color: selected === i ? '#f0f2f5' : 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s', flex: 1,
                  }}>
                    {stage.label}
                  </span>
                  <motion.span
                    animate={{ rotate: selected === i ? 90 : 0 }}
                    style={{
                      color: selected === i ? '#6366f1' : 'rgba(255,255,255,0.2)',
                      fontSize: '0.7rem',
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* Connector line */}
                {i < SYSTEM_STAGES.length - 1 && (
                  <div style={{
                    width: 1, height: 8, marginLeft: 38,
                    background: selected === i || selected === i + 1
                      ? 'rgba(99,102,241,0.4)'
                      : 'rgba(255,255,255,0.08)',
                    transition: 'background 0.3s',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Explanation panel */}
          <div style={{ position: 'sticky', top: 100 }}>
            <AnimatePresence mode="wait">
              {selected !== null ? (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: 40,
                    background: 'rgba(99,102,241,0.04)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 20,
                  }}
                >
                  <p className="section-label" style={{ marginBottom: 16 }}>
                    STAGE {String(selected + 1).padStart(2, '0')} / {SYSTEM_STAGES.length}
                  </p>
                  <h3 style={{
                    fontSize: '1.5rem', fontWeight: 700,
                    color: '#f0f2f5', marginBottom: 20,
                    letterSpacing: '-0.01em',
                  }}>
                    {SYSTEM_STAGES[selected].label}
                  </h3>
                  <p style={{
                    color: 'rgba(240,242,245,0.7)',
                    lineHeight: 1.8, fontSize: '1rem',
                  }}>
                    {SYSTEM_STAGES[selected].description}
                  </p>

                  {/* Visual indicator */}
                  <div style={{
                    marginTop: 32, display: 'flex', gap: 6,
                  }}>
                    {SYSTEM_STAGES.map((_, j) => (
                      <div key={j} style={{
                        flex: 1, height: 3,
                        borderRadius: 2,
                        background: j <= selected
                          ? 'linear-gradient(90deg, #6366f1, #06b6d4)'
                          : 'rgba(255,255,255,0.08)',
                        transition: 'background 0.3s',
                      }} />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    padding: 40,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: 60, height: 60,
                    borderRadius: '50%',
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    margin: '0 auto 20px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    🏗️
                  </div>
                  <p style={{
                    color: 'rgba(255,255,255,0.3)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem', letterSpacing: '0.1em',
                  }}>
                    SELECT A STAGE TO EXPLORE
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .systems-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .systems-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
