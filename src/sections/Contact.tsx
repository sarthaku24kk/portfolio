import { motion } from 'framer-motion'
import { MagneticButton } from '../components/MagneticButton'
import { PERSONAL } from '../data/portfolio'

export function Contact() {
  const hasLinkedIn = PERSONAL.linkedin !== 'ADD_LINKEDIN_URL'
  const hasEmail = PERSONAL.email !== 'ADD_EMAIL'

  return (
    <section id="contact" style={{
      padding: '140px 0 100px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 70%)',
      }} />

      <div style={{
        maxWidth: 800, margin: '0 auto', padding: '0 24px',
        position: 'relative', zIndex: 1, textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: 20 }}>
            // 07 — CONTACT
          </span>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700, marginBottom: 24,
            letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            Let's Build Something{' '}
            <span className="gradient-text">Interesting</span>
          </h2>

          <p style={{
            color: 'rgba(240,242,245,0.6)',
            lineHeight: 1.8, fontSize: '1rem',
            marginBottom: 56, maxWidth: 560, margin: '0 auto 56px',
          }}>
            I'm always interested in interesting technical problems, collaborative projects,
            hackathons, and opportunities to build real-world systems.
          </p>

          {/* Contact buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            <MagneticButton variant="primary" href={PERSONAL.github} aria-label="GitHub Profile">
              <GitHubIcon /> GitHub
            </MagneticButton>

            {hasLinkedIn ? (
              <MagneticButton variant="outline" href={PERSONAL.linkedin} aria-label="LinkedIn Profile">
                <LinkedInIcon /> LinkedIn
              </MagneticButton>
            ) : (
              <PlaceholderButton label="LinkedIn" note="ADD LINKEDIN URL" />
            )}

            {hasEmail ? (
              <MagneticButton variant="outline" href={`mailto:${PERSONAL.email}`} aria-label="Send Email">
                <EmailIcon /> Email
              </MagneticButton>
            ) : (
              <PlaceholderButton label="Email" note="ADD EMAIL" />
            )}
          </div>

          {/* Bottom divider */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 40, marginTop: 40,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem', letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.2)',
            }}>
              © 2026 SARTHAK KUMAR
            </span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem', letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.15)',
            }}>
              BUILT WITH REACT + THREE.JS + FRAMER MOTION
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PlaceholderButton({ label, note }: { label: string; note: string }) {
  return (
    <div style={{
      padding: '12px 24px', borderRadius: 8,
      border: '1px dashed rgba(255,255,255,0.15)',
      color: 'rgba(255,255,255,0.3)',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem', letterSpacing: '0.1em',
      display: 'flex', alignItems: 'center', gap: 8,
      cursor: 'default', flexDirection: 'column', lineHeight: 1.4,
    }}>
      <span>{label}</span>
      <span style={{ fontSize: '0.55rem', color: 'rgba(245,158,11,0.5)' }}>[{note}]</span>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
