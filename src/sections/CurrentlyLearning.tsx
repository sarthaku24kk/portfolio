import { motion } from 'framer-motion'
import { CURRENTLY_LEARNING } from '../data/portfolio'

export function CurrentlyLearning() {
  return (
    <section style={{
      padding: '80px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.02), transparent)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', alignItems: 'center', gap: 48,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <span className="section-label">CURRENTLY EXPLORING</span>
            <p style={{
              color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem',
              marginTop: 4, maxWidth: 180,
            }}>
              Continuous growth, not claimed expertise.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, flex: 1 }}>
            {CURRENTLY_LEARNING.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.05 }}
                style={{
                  padding: '10px 20px',
                  borderRadius: 8,
                  border: '1px solid',
                  borderColor: item.status === 'learning'
                    ? 'rgba(245,158,11,0.3)'
                    : 'rgba(99,102,241,0.25)',
                  background: item.status === 'learning'
                    ? 'rgba(245,158,11,0.04)'
                    : 'rgba(99,102,241,0.04)',
                  display: 'flex', alignItems: 'center', gap: 10,
                  cursor: 'default',
                }}
              >
                <span style={{
                  fontSize: '0.88rem', fontWeight: 500,
                  color: item.status === 'learning'
                    ? 'rgba(240,242,245,0.65)'
                    : 'rgba(240,242,245,0.85)',
                }}>
                  {item.name}
                </span>
                {item.status === 'learning' && (
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.5rem', letterSpacing: '0.1em',
                    color: '#f59e0b',
                    background: 'rgba(245,158,11,0.12)',
                    border: '1px solid rgba(245,158,11,0.2)',
                    borderRadius: 3, padding: '2px 5px',
                  }}>
                    IN PROGRESS
                  </span>
                )}
                {item.status === 'active' && (
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 6px rgba(16,185,129,0.5)',
                    flexShrink: 0,
                  }} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
