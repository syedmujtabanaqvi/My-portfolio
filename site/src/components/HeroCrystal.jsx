import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei'

function Crystal() {
  const group = useRef(null)
  const core = useRef(null)
  const ring = useRef(null)
  const cube = useRef(null)

  useFrame((state) => {
    const { pointer, clock } = state
    const t = clock.getElapsedTime()

    if (group.current) {
      // gentle parallax toward the cursor
      group.current.rotation.y += (pointer.x * 0.5 - group.current.rotation.y) * 0.02
      group.current.rotation.x += (-pointer.y * 0.3 - group.current.rotation.x) * 0.02
    }
    if (cube.current) {
      cube.current.rotation.x = t * 0.18
      cube.current.rotation.y = t * 0.26
    }
    if (core.current) {
      core.current.rotation.y = -t * 0.4
      const s = 1 + Math.sin(t * 1.6) * 0.06
      core.current.scale.setScalar(s)
    }
    if (ring.current) {
      ring.current.rotation.z = t * 0.3
      ring.current.rotation.x = Math.PI / 2.6
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.3}>
        {/* outer transparent glass cube */}
        <mesh ref={cube} scale={1.55}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <MeshTransmissionMaterial
            color="#c9b6ff"
            thickness={0.6}
            roughness={0.05}
            transmission={1}
            ior={1.3}
            chromaticAberration={0.03}
            backside
          />
        </mesh>
        {/* wireframe edge outline for definition */}
        <mesh scale={1.551}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshBasicMaterial color="#a681ff" wireframe transparent opacity={0.25} />
        </mesh>

        {/* glowing inner core */}
        <mesh ref={core}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#a681ff"
            emissiveIntensity={1.6}
            roughness={0.2}
            metalness={0.4}
          />
        </mesh>
      </Float>

      {/* orbiting ring */}
      <mesh ref={ring}>
        <torusGeometry args={[2.05, 0.012, 16, 100]} />
        <meshBasicMaterial color="#a681ff" transparent opacity={0.45} />
      </mesh>

      {/* small floating glass spheres, like the reference */}
      <Float speed={1.8} floatIntensity={2} position={[1.7, 1.1, 0.4]}>
        <mesh scale={0.16}>
          <sphereGeometry args={[1, 24, 24]} />
          <MeshTransmissionMaterial color="#ffffff" thickness={0.4} roughness={0.05} transmission={1} ior={1.3} />
        </mesh>
      </Float>
      <Float speed={1.4} floatIntensity={1.6} position={[-1.9, -0.7, -0.3]}>
        <mesh scale={0.11}>
          <sphereGeometry args={[1, 24, 24]} />
          <MeshTransmissionMaterial color="#ffffff" thickness={0.4} roughness={0.05} transmission={1} ior={1.3} />
        </mesh>
      </Float>

      <Sparkles count={30} scale={4.2} size={1.6} speed={0.25} color="#a681ff" opacity={0.5} />
    </group>
  )
}

export default function HeroCrystal() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={45} color="#a681ff" />
      <pointLight position={[-4, -2, -3]} intensity={22} color="#f8f8f8" />
      <pointLight position={[0, 4, -4]} intensity={18} color="#c9b6ff" />
      <pointLight position={[0, -4, 4]} intensity={14} color="#ffffff" />
      <Suspense fallback={null}>
        <Crystal />
      </Suspense>
    </Canvas>
  )
}
