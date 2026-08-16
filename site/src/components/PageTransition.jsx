import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 24, scale: 0.985, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 1.01,
    filter: 'blur(8px)',
    transition: { duration: 0.5, ease: [0.7, 0, 0.84, 0] },
  },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-transition"
    >
      {children}
    </motion.div>
  )
}
