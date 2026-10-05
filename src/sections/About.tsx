import { useState } from 'react'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../data/portfolio'

const pipelineStages = ['IDEA', 'ARCHITECTURE', 'DEVELOPMENT', 'TESTING', 'DEPLOYMENT']

export function About() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)

  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <span className="section-label">// 01</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            About <span className="gradient-text-cyan">Me</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: 80, alignItems: 'start',
        }} className="about-grid">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {ABOUT_TEXT.split('\n\n').map((para, i) => (
              <p key={i} style={{
                color: 'rgba(240,242,245,0.72)',
                lineHeight: 1.8, marginBottom: 24,
                fontSize: '1.05rem',
              }}>
                {para}
              </p>
            ))}

            {/* Quick stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24, marginTop: 48,
            }}>
              {[
                { label: 'State-Level\n1st Places', value: '2×', color: '#f59e0b' },
                { label: 'Projects\nBuilt', value: '4+', color: '#6366f1' },
                { label: 'Tech\nDomains', value: '5+', color: '#06b6d4' },
              ].map(stat => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  style={{
                    padding: '20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12, textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '2rem', fontWeight: 700,
                    color: stat.color, marginBottom: 6,
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem', letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.35)',
                    whiteSpace: 'pre-line',
                  }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label" style={{ marginBottom: 24 }}>
              SYSTEM PIPELINE
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {pipelineStages.map((stage, i) => (
                <div key={stage}>
                  <motion.div
                    onMouseEnter={() => setHoveredStage(i)}
                    onMouseLeave={() => setHoveredStage(null)}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      padding: '16px 20px',
                      background: hoveredStage === i
                        ? 'rgba(99,102,241,0.08)'
                        : 'rgba(255,255,255,0.02)',
                      border: '1px solid',
                      borderColor: hoveredStage === i
                        ? 'rgba(99,102,241,0.3)'
                        : 'rgba(255,255,255,0.06)',
                      borderRadius: 8, cursor: 'default',
                      transition: 'background 0.2s, border-color 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem', letterSpacing: '0.1em',
                        color: 'rgba(99,102,241,0.6)',
                        width: 20,
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.75rem', letterSpacing: '0.12em',
                        color: hoveredStage === i ? '#f0f2f5' : 'rgba(255,255,255,0.55)',
                        transition: 'color 0.2s',
                      }}>
                        {stage}
                      </span>
                    </div>
                  </motion.div>
                  {i < pipelineStages.length - 1 && (
                    <div style={{
                      width: 1, height: 12, marginLeft: 50,
                      background: 'rgba(99,102,241,0.2)',
                    }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
