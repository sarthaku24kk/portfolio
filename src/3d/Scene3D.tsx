import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { NeuralSphere } from './NeuralSphere'

interface SceneProps {
  mouseX: number
  mouseY: number
}

function FallbackCanvas() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '1px solid rgba(99,102,241,0.3)',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 16, borderRadius: '50%',
            border: '1px solid rgba(6,182,212,0.2)',
            animation: 'pulse 3s ease-in-out infinite 1s'
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 32, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}

export function Scene3D({ mouseX, mouseY }: SceneProps) {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setWebglSupported(false)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  if (!webglSupported) return <FallbackCanvas />

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#06b6d4" />
      <Suspense fallback={null}>
        <NeuralSphere mouseX={mouseX} mouseY={mouseY} />
      </Suspense>
    </Canvas>
  )
}
