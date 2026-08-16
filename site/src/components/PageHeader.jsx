import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, desc }) {
  return (
    <div className="page-header">
      <div className="page-header-glow" aria-hidden="true" />
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="page-header-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {desc && (
          <motion.p
            className="page-header-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {desc}
          </motion.p>
        )}
      </div>
    </div>
  )
}
