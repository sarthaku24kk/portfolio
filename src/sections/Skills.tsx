import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data/portfolio'

export function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <section id="skills" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.02) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">// 02</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            What I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              onMouseEnter={() => setHoveredCard(gi)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                padding: 28,
                background: hoveredCard === gi
                  ? `rgba(${hexToRgb(group.color)}, 0.06)`
                  : 'rgba(255,255,255,0.03)',
                border: '1px solid',
                borderColor: hoveredCard === gi
                  ? `rgba(${hexToRgb(group.color)}, 0.3)`
                  : 'rgba(255,255,255,0.07)',
                borderRadius: 16,
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent corner */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 60, height: 60,
                background: `radial-gradient(circle at top right, rgba(${hexToRgb(group.color)}, 0.12) 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon + category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{
                  fontSize: '1.4rem',
                  background: `rgba(${hexToRgb(group.color)}, 0.1)`,
                  width: 44, height: 44,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 10,
                  border: `1px solid rgba(${hexToRgb(group.color)}, 0.2)`,
                }}>
                  {group.icon}
                </span>
                <h3 style={{
                  fontSize: '0.85rem', fontWeight: 600,
                  color: '#f0f2f5', letterSpacing: '0.02em',
                }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.items.map(item => (
                  <motion.div
                    key={item.name}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 12px', borderRadius: 8,
                      background: hoveredItem === item.name
                        ? `rgba(${hexToRgb(group.color)}, 0.06)`
                        : 'transparent',
                      transition: 'background 0.2s',
                    }}
                  >
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: item.level === 'learning' ? '#f59e0b' : group.color,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: '0.85rem',
                      color: item.level === 'learning'
                        ? 'rgba(240,242,245,0.55)'
                        : 'rgba(240,242,245,0.8)',
                    }}>
                      {item.name}
                    </span>
                    {item.level === 'learning' && (
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.55rem', letterSpacing: '0.1em',
                        color: '#f59e0b',
                        background: 'rgba(245,158,11,0.1)',
                        border: '1px solid rgba(245,158,11,0.2)',
                        borderRadius: 4, padding: '2px 6px',
                        marginLeft: 'auto',
                      }}>
                        LEARNING
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '99,102,241'
}
