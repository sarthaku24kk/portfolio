import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">// 03</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            Selected <span className="gradient-text-cyan">Projects</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                padding: '36px 40px',
                background: hoveredProject === project.id
                  ? `rgba(${hexToRgb(project.accent)}, 0.05)`
                  : 'rgba(255,255,255,0.02)',
                border: '1px solid',
                borderColor: hoveredProject === project.id
                  ? `rgba(${hexToRgb(project.accent)}, 0.25)`
                  : 'rgba(255,255,255,0.07)',
                borderRadius: 20,
                transition: 'all 0.3s ease',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background accent glow */}
              <motion.div
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 300, height: 300,
                  background: `radial-gradient(circle, rgba(${hexToRgb(project.accent)}, 0.08) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 32, alignItems: 'start',
              }} className="project-inner">
                {/* Project number */}
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '2.5rem', fontWeight: 700,
                  color: `rgba(${hexToRgb(project.accent)}, 0.2)`,
                  lineHeight: 1, paddingTop: 4,
                }}>
                  {project.id}
                </div>

                {/* Content */}
                <div>
                  <div style={{ marginBottom: 12 }}>
                    <h3 style={{
                      fontSize: '1.25rem', fontWeight: 700,
                      color: '#f0f2f5', marginBottom: 4,
                    }}>
                      {project.title}
                      {project.subtitle && (
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem', letterSpacing: '0.1em',
                          color: project.accent,
                          marginLeft: 12,
                          background: `rgba(${hexToRgb(project.accent)}, 0.1)`,
                          border: `1px solid rgba(${hexToRgb(project.accent)}, 0.2)`,
                          borderRadius: 4, padding: '2px 8px',
                          verticalAlign: 'middle',
                        }}>
                          {project.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>

                  <p style={{
                    color: 'rgba(240,242,245,0.6)',
                    lineHeight: 1.7, fontSize: '0.95rem',
                    marginBottom: 20, maxWidth: 600,
                  }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6rem', letterSpacing: '0.08em',
                        color: 'rgba(255,255,255,0.4)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 4, padding: '3px 8px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '10px 16px', borderRadius: 8,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem', letterSpacing: '0.1em',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <GitHubIcon size={14} /> CODE
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '10px 16px', borderRadius: 8,
                        background: project.accent,
                        border: 'none',
                        color: '#fff',
                        textDecoration: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem', letterSpacing: '0.1em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ↗ DEMO
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-inner { grid-template-columns: auto 1fr !important; }
          .project-inner > div:last-child { grid-column: 1 / -1; flex-direction: row !important; }
        }
      `}</style>
    </section>
  )
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '99,102,241'
}
