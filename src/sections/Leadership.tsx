import { motion } from 'framer-motion'
import { LEADERSHIP } from '../data/portfolio'

export function LeadershipSection() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <span className="section-label">// 06</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            Leadership &amp; <span className="gradient-text">Collaboration</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {LEADERSHIP.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{
                borderColor: `rgba(${hexToRgb(item.color)}, 0.35)`,
                background: `rgba(${hexToRgb(item.color)}, 0.04)`,
              }}
              style={{
                padding: '28px 32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                transition: 'all 0.3s ease',
              }}
            >
              {/* Role badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginBottom: 20,
                padding: '4px 12px',
                borderRadius: 6,
                background: `rgba(${hexToRgb(item.color)}, 0.08)`,
                border: `1px solid rgba(${hexToRgb(item.color)}, 0.2)`,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: item.color,
                }} />
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem', letterSpacing: '0.1em',
                  color: item.color,
                }}>
                  LEADERSHIP
                </span>
              </div>

              <h3 style={{
                fontSize: '1rem', fontWeight: 700,
                color: '#f0f2f5', marginBottom: 16,
                lineHeight: 1.4,
              }}>
                {item.role}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {item.points.map(point => (
                  <li key={point} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    color: 'rgba(240,242,245,0.6)', fontSize: '0.88rem',
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: item.color, flexShrink: 0, marginTop: 2 }}>›</span>
                    {point}
                  </li>
                ))}
              </ul>
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
