import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import ParticleField from './ParticleField.jsx'
import Magnetic from './Magnetic.jsx'
import Spotlight from './Spotlight.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { roles, aboutStats } from '../data/content.js'

const HeroCrystal = lazy(() => import('./HeroCrystal.jsx'))

const heroStats = aboutStats.slice(0, 3)

const heroBadges = [
  {
    label: 'React & Next.js',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'UI/UX Design',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
        <path d="M3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
      </svg>
    ),
  },
  {
    label: 'AI Automation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" strokeLinecap="round" />
        <circle cx="9.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const wordVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: { duration: 1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <ParticleField count={70} />
      <div className="hero-glow" aria-hidden="true" />

      <Spotlight className="hero-spotlight">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Portfolio — 2026
          </motion.p>

          <h1 className="hero-title">
            <span className="reveal-line">
              <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible">
                Hi, I'm
              </motion.span>
            </span>
            <span className="reveal-line">
              <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="hero-name">
                MUJTABA 
              </motion.span>
            </span>
          </h1>

          <div className="hero-roles" aria-label="Roles">
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.6 }}
              >
                {role}
                {i < roles.length - 1 && <i className="role-dot" />}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            I build interactive products and immersive digital experiences —
            where clean engineering meets considered design. Currently exploring
            the edges of AI-assisted craft, one shipped project at a time.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Magnetic>
              <button className="btn btn-primary" onClick={() => navigate('/portfolio')}>
                View Portfolio
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn btn-ghost" onClick={() => navigate('/about')}>
                About Me
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn btn-ghost" onClick={() => navigate('/contact')}>
                Contact
              </button>
            </Magnetic>
          </motion.div>
          <motion.div
            className="hero-stat-pills"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {heroStats.map((s) => (
              <div className="hero-stat-pill glass" key={s.label}>
                <span className="hero-stat-pill-value">{s.value}</span>
                <span className="hero-stat-pill-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-object"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-object-rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <ErrorBoundary fallback={<div className="hero-object-fallback" />}>
            <Suspense fallback={<div className="hero-object-fallback" />}>
              <HeroCrystal />
            </Suspense>
          </ErrorBoundary>

          {heroBadges.map((b, i) => (
            <motion.div
              key={b.label}
              className={`hero-badge hero-badge-${i} glass`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -14, 0], scale: 1 }}
              transition={{
                opacity: { delay: 1.4 + i * 0.2, duration: 0.6 },
                scale: { delay: 1.4 + i * 0.2, duration: 0.6 },
                y: { delay: 1.6 + i * 0.2, duration: 4.5 + i, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span className="hero-badge-icon">{b.icon}</span>
              <span className="hero-badge-label">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </Spotlight>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
      >
        <span />
        Scroll
      </motion.div>
    </section>
  )
}
