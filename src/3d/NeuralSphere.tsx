import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface NeuralSphereProps {
  mouseX?: number
  mouseY?: number
}

export function NeuralSphere({ mouseX = 0, mouseY = 0 }: NeuralSphereProps) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const { size } = useThree()

  const isMobile = size.width < 768

  // Particles
  const { positions, colors } = useMemo(() => {
    const count = isMobile ? 800 : 2000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    const color1 = new THREE.Color('#6366f1')
    const color2 = new THREE.Color('#06b6d4')
    const color3 = new THREE.Color('#8b5cf6')

    for (let i = 0; i < count; i++) {
      // Distribute on sphere surface with some volume
      const radius = 1.4 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)

      // Color mix
      const t = Math.random()
      const mixed = t < 0.33 ? color1.clone().lerp(color2, t * 3)
        : t < 0.66 ? color2.clone().lerp(color3, (t - 0.33) * 3)
        : color3.clone().lerp(color1, (t - 0.66) * 3)
      
      col[i * 3] = mixed.r
      col[i * 3 + 1] = mixed.g
      col[i * 3 + 2] = mixed.b
    }
    return { positions: pos, colors: col }
  }, [isMobile])

  // Connection lines between nearby nodes
  const linePositions = useMemo(() => {
    const nodeCount = isMobile ? 30 : 60
    const nodes: THREE.Vector3[] = []
    for (let i = 0; i < nodeCount; i++) {
      const radius = 1.2 + Math.random() * 0.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      nodes.push(new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ))
    }

    const linePos: number[] = []
    const maxDist = 1.2
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          linePos.push(nodes[i].x, nodes[i].y, nodes[i].z)
          linePos.push(nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    return new Float32Array(linePos)
  }, [isMobile])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    // Slow auto-rotation
    groupRef.current.rotation.y += 0.003
    groupRef.current.rotation.x += 0.001

    // Mouse parallax
    groupRef.current.rotation.x += (mouseY * 0.3 - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y += (mouseX * 0.3 - groupRef.current.rotation.y) * 0.05

    // Pulse particles
    if (particlesRef.current) {
      const mat = particlesRef.current.material as THREE.PointsMaterial
      mat.size = 0.025 + Math.sin(t * 1.5) * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core glow sphere */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.015}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.4, 20, 20]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.15}
        />
      </lineSegments>

      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.0, 0.003, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>

      {/* Tilted ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.3, 0.002, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.25} />
      </mesh>
    </group>
  )
}
