import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Plays once when the case study page mounts — a short "digital archive
// unlocking" sequence that hands off into the hero section.
export default function HoloIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1300)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="holo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
        >
          <motion.div
            className="holo-intro-ring"
            initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="holo-intro-ring holo-intro-ring-outer"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.4, opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
          <motion.p
            className="holo-intro-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.25, 0.8, 1] }}
          >
            Decrypting archive…
          </motion.p>
          <div className="holo-intro-lines" aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
