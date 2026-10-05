import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_ITEMS } from '../data/portfolio'
import { useScrollProgress, useActiveSection } from '../hooks/usePortfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = useScrollProgress()
  const sectionIds = NAV_ITEMS.map(n => n.href.replace('#', ''))
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar */}
      <div
        className="progress-line"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'padding 0.3s ease, background 0.3s ease',
          background: scrolled
            ? 'rgba(8,10,15,0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem', letterSpacing: '0.15em',
              color: '#6366f1',
            }}>SK</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 6px' }}>/</span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem', letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.4)',
            }}>PORTFOLIO</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
            className="hidden md:flex">
            {NAV_ITEMS.map(item => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem', letterSpacing: '0.15em',
                    color: isActive ? '#06b6d4' : 'rgba(255,255,255,0.45)',
                    transition: 'color 0.2s',
                    position: 'relative', padding: '4px 0',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: 1, background: '#06b6d4',
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                style={{
                  width: 22, height: 1.5, background: '#f0f2f5', borderRadius: 1,
                  transformOrigin: 'center',
                }}
                animate={menuOpen
                  ? i === 1 ? { opacity: 0 }
                    : i === 0 ? { rotate: 45, y: 6.5 }
                    : { rotate: -45, y: -6.5 }
                  : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{
            padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16,
            background: 'rgba(8,10,15,0.95)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem', letterSpacing: '0.15em',
                  color: active === item.href.replace('#', '') ? '#06b6d4' : 'rgba(255,255,255,0.6)',
                  textAlign: 'left', padding: '8px 0',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
