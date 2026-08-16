import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Full-screen cinematic transition played when the 3D Modeling Design card
// is opened. Plays a short "digital archive" sequence, then hands off to
// the case study page's own entrance animation.
export default function CardLaunchOverlay({ active, image, onComplete }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 1.4 + Math.random() * 1.2,
        size: 2 + Math.random() * 3,
      })),
    []
  )

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => onComplete?.(), 1150)
    return () => clearTimeout(t)
  }, [active, onComplete])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="launch-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="launch-overlay-image"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(18px)' }}
            animate={{
              opacity: [0, 0.5, 0.65],
              scale: [1.08, 1.02, 1],
              filter: ['blur(18px)', 'blur(6px)', 'blur(0px)'],
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="launch-overlay-scrim" />

          <motion.div
            className="launch-scanline"
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />

          <motion.div
            className="launch-pulse"
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          <motion.div
            className="launch-panel launch-panel-left"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.7, 0, 0.84, 0] }}
          />
          <motion.div
            className="launch-panel launch-panel-right"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.7, 0, 0.84, 0] }}
          />

          <div className="launch-particles" aria-hidden="true">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="launch-particle"
                style={{ left: `${p.left}%`, width: p.size, height: p.size }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '-20%', opacity: [0, 1, 0] }}
                transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
              />
            ))}
          </div>

          <motion.div
            className="launch-glitch-lines"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 0.8, 0] }}
            transition={{ duration: 0.5, delay: 0.15, times: [0, 0.2, 0.4, 0.6, 1] }}
            aria-hidden="true"
          />

          <motion.p
            className="launch-status"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1, times: [0, 0.25, 0.75, 1] }}
          >
            Opening archive — 3D Modeling Design
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
