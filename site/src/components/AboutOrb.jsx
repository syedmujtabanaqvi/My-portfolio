import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei'

function Orb() {
  const group = useRef(null)
  const blob = useRef(null)
  const ringA = useRef(null)
  const ringB = useRef(null)

  useFrame((state) => {
    const { pointer, clock } = state
    const t = clock.getElapsedTime()

    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.4 - group.current.rotation.y) * 0.02
      group.current.rotation.x += (-pointer.y * 0.25 - group.current.rotation.x) * 0.02
    }
    if (blob.current) {
      blob.current.rotation.y = t * 0.22
    }
    if (ringA.current) {
      ringA.current.rotation.z = t * 0.25
      ringA.current.rotation.x = Math.PI / 2.4
    }
    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.18
      ringB.current.rotation.y = Math.PI / 3
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={1}>
        <mesh ref={blob} scale={1.3}>
          <icosahedronGeometry args={[1, 6]} />
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.5}
            distort={0.32}
            speed={1.4}
          />
        </mesh>
        <mesh scale={1.55}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            color="#c9b6ff"
            thickness={0.4}
            roughness={0.1}
            transmission={1}
            ior={1.2}
            chromaticAberration={0.02}
            backside
          />
        </mesh>
      </Float>

      <mesh ref={ringA}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a681ff" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ringB}>
        <torusGeometry args={[2.35, 0.008, 16, 100]} />
        <meshBasicMaterial color="#a681ff" transparent opacity={0.22} />
      </mesh>

      <Sparkles count={26} scale={3.6} size={1.4} speed={0.2} color="#a681ff" opacity={0.5} />
    </group>
  )
}

export default function AboutOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#a681ff" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#f8f8f8" />
      <pointLight position={[0, 4, -4]} intensity={16} color="#c9b6ff" />
      <pointLight position={[0, -4, 4]} intensity={12} color="#ffffff" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
    </Canvas>
  )
}
