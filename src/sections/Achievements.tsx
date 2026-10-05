import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/portfolio'

export function Achievements() {
  return (
    <section id="achievements" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.02) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <span className="section-label">// 04</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginTop: 8,
            letterSpacing: '-0.02em',
          }}>
            Achievements &amp; <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 24, top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 10%, rgba(99,102,241,0.3) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ACHIEVEMENTS.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  display: 'flex', gap: 40,
                  alignItems: 'flex-start',
                  paddingBottom: i < ACHIEVEMENTS.length - 1 ? 48 : 0,
                }}
              >
                {/* Timeline dot */}
                <div style={{ position: 'relative', flexShrink: 0, paddingTop: 4 }}>
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                    style={{
                      width: 48, height: 48,
                      borderRadius: '50%',
                      background: `rgba(${hexToRgb(achievement.color)}, 0.1)`,
                      border: `1px solid rgba(${hexToRgb(achievement.color)}, 0.3)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem',
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 8, borderColor: `rgba(${hexToRgb(achievement.color)}, 0.3)` }}
                  style={{
                    flex: 1, padding: '24px 28px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 16,
                    transition: 'border-color 0.3s, transform 0.3s',
                  }}
                >
                  <div style={{
                    display: 'inline-flex', alignItems: 'center',
                    gap: 8, marginBottom: 10,
                  }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem', letterSpacing: '0.12em',
                      color: achievement.color,
                      background: `rgba(${hexToRgb(achievement.color)}, 0.1)`,
                      border: `1px solid rgba(${hexToRgb(achievement.color)}, 0.2)`,
                      borderRadius: 4, padding: '3px 8px',
                    }}>
                      {achievement.highlight}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.05rem', fontWeight: 700,
                    color: '#f0f2f5', marginBottom: 10,
                  }}>
                    {achievement.title}
                  </h3>

                  <p style={{
                    color: 'rgba(240,242,245,0.55)',
                    lineHeight: 1.7, fontSize: '0.92rem',
                  }}>
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
