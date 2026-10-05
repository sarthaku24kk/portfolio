import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  style?: React.CSSProperties
  className?: string
  'aria-label'?: string
}

export function MagneticButton({
  children, onClick, href, variant = 'primary',
  style, className, 'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseStyle: React.CSSProperties = variant === 'primary' ? {
    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    border: 'none',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: '0.85rem',
    letterSpacing: '0.05em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0 0 20px rgba(99,102,241,0.3)',
    transition: 'box-shadow 0.3s',
    ...style,
  } : {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.8)',
    padding: '12px 28px',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 500,
    fontSize: '0.85rem',
    letterSpacing: '0.05em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'border-color 0.3s, color 0.3s',
    ...style,
  }

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={variant === 'primary'
        ? { boxShadow: '0 0 30px rgba(99,102,241,0.5)' }
        : { borderColor: 'rgba(99,102,241,0.5)', color: '#fff' }
      }
      whileTap={{ scale: 0.97 }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer"
          style={baseStyle} className={className} aria-label={ariaLabel}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} style={baseStyle} className={className} aria-label={ariaLabel}>
          {children}
        </button>
      )}
    </motion.div>
  )

  return content
}
