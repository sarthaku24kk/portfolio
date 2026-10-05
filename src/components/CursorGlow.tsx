import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
      if (!visible) setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [visible])

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  )
}
