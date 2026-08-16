import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Spotlight from '../components/Spotlight.jsx'
import { skills } from '../data/content.js'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

// Cards fly in from alternating sides depending on their column (4-col grid),
// with a slight rotation for a "flying into place" feel.
function flyVariant(i) {
  const col = i % 4
  const fromLeft = col < 2
  return {
    hidden: {
      opacity: 0,
      x: fromLeft ? -90 : 90,
      rotateY: fromLeft ? -25 : 25,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

const ICON_PATHS = {
  'UI/UX Design': <path d="M4 4h16v16H4V4Zm0 5h16M9 9v11" />,
  'Frontend Engineering': <path d="m9 8-4 4 4 4m6-8 4 4-4 4M14 4l-4 16" />,
  Backend: <path d="M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3.5-7h.01m-.01 10h.01" />,
  'Next.js': <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 0v20" />,
  'Three.js': <path d="M12 2 2 7l10 5 10-5-10-5Zm-8.2 8.4L12 15l8.2-4.6M3.8 14.8 12 19.2l8.2-4.4" />,
  'Game Development': <path d="M7 9h.01M5 12h4m-2-2v4m9-2h.01M17.5 9h.01M9 16h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4Z" />,
  'AI Automation': <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-6.5-2.1 2.1M8.6 15.4l-2.1 2.1m11 0-2.1-2.1M8.6 8.6 6.5 6.5M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  Branding: <path d="M12 2 2 12l9 9 11-11V2h-8Zm3.5 5.5h.01" />,
  'Graphic Design': <path d="M4 20 20 4M4 4h6v6M14 20h6v-6" />,
  'Motion Design': <path d="M4 12h4l2-6 4 12 2-6h4" />,
  'Problem Solving': <path d="M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5v1h6v-1c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 2ZM9 20h6M10 22h4" />,
}

const streakAngles = Array.from({ length: 22 }, (_, i) => (i / 22) * 360)

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActiveIndex(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  const active = activeIndex !== null ? skills[activeIndex] : null

  const openSkill = (i, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
      y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
    })
    setActiveIndex(i)
  }

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I bring to the table."
        desc="Tap a card to step into its full holographic profile — tools, projects, and mastery level."
      />

      <section className="section skills">
        <div className="container">
          <Spotlight className="skills-grid-spotlight">
          <motion.div
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            style={{ perspective: 1200 }}
          >
            {skills.map((s, i) => (
              <motion.button
                key={s.title}
                className="skill-card glass"
                variants={flyVariant(i)}
                onClick={(e) => openSkill(i, e)}
                whileHover={{ y: -6 }}
              >
                <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="skill-card-bar">
                  <div className="skill-card-bar-fill" style={{ width: `${s.level}%` }} />
                </div>
                <div className="skill-card-glow" aria-hidden="true" />
                <span className="skill-expand-hint">Open ↗</span>
              </motion.button>
            ))}
          </motion.div>
          </Spotlight>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="portal-overlay"
            style={{ '--ox': `${origin.x}%`, '--oy': `${origin.y}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* flash + warp streaks radiating from the clicked card */}
            <motion.div
              className="portal-flash"
              initial={{ opacity: 0.9, scale: 0 }}
              animate={{ opacity: 0, scale: 3.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <div className="portal-streaks" aria-hidden="true">
              {streakAngles.map((angle, i) => (
                <motion.span
                  key={angle}
                  className="portal-streak"
                  style={{ '--angle': `${angle}deg` }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0.9, 0], scaleX: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.008, ease: 'easeOut' }}
                />
              ))}
            </div>

            <motion.div
              className="portal-panel glass"
              onClick={(e) => e.stopPropagation()}
              initial={{ clipPath: `circle(0% at var(--ox) var(--oy))` }}
              animate={{ clipPath: `circle(140% at var(--ox) var(--oy))` }}
              exit={{ clipPath: `circle(0% at var(--ox) var(--oy))` }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hud-grid-overlay" aria-hidden="true" />
              <motion.div
                className="hud-scanline"
                aria-hidden="true"
                initial={{ top: '-10%', opacity: 0 }}
                animate={{ top: '110%', opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1, delay: 0.15, ease: 'easeInOut' }}
              />

              <span className="hud-corner hud-corner-tl" aria-hidden="true" />
              <span className="hud-corner hud-corner-tr" aria-hidden="true" />
              <span className="hud-corner hud-corner-bl" aria-hidden="true" />
              <span className="hud-corner hud-corner-br" aria-hidden="true" />

              <button className="skill-close" onClick={() => setActiveIndex(null)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="portal-scroll">
                <div className="portal-body">
                  <motion.div
                    className="portal-core-wrap"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="portal-core">
                      <span className="portal-core-ring portal-core-ring-1" />
                      <span className="portal-core-ring portal-core-ring-2" />
                      <span className="portal-core-icon">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          {ICON_PATHS[active.title] || <circle cx="12" cy="12" r="7" />}
                        </svg>
                      </span>
                    </div>
                    <span className="hud-tag">
                      SKILL_ID // {String(activeIndex + 1).padStart(3, '0')}
                    </span>
                    <span className="hud-tag">
                      STATUS: <span className="hud-online">ONLINE</span>
                    </span>
                  </motion.div>

                  <div className="portal-content">
                    <motion.h3
                      className="skill-detail-title hud-glitch-in"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {active.title}
                    </motion.h3>

                    <motion.p
                      className="skill-detail-desc"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.46, duration: 0.5 }}
                    >
                      {active.desc}
                    </motion.p>

                    <motion.div
                      className="skill-detail-level"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.52, duration: 0.5 }}
                    >
                      <div className="skill-detail-level-head">
                        <span>Experience Level</span>
                        <span className="hud-percent">{active.level}%</span>
                      </div>
                      <div className="skill-card-bar skill-detail-bar">
                        <motion.div
                          className="skill-card-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${active.level}%` }}
                          transition={{ delay: 0.56, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="skill-detail-grid"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <div>
                        <span className="skill-detail-label">Tools Used</span>
                        <div className="skill-detail-tags">
                          {active.tools.map((t) => (
                            <span key={t} className="skill-detail-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="skill-detail-label">Projects</span>
                        <div className="skill-detail-tags">
                          {active.projects.map((p) => (
                            <span key={p} className="skill-detail-tag skill-detail-tag-accent">{p}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
