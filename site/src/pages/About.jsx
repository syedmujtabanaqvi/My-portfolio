import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import ParticleField from '../components/ParticleField.jsx'
import TiltCard from '../components/TiltCard.jsx'
import ErrorBoundary from '../components/ErrorBoundary.jsx'
import { aboutSections, aboutStats } from '../data/content.js'

const AboutOrb = lazy(() => import('../components/AboutOrb.jsx'))

const ICONS = {
  'Who I Am': <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />,
  'My Story': (
    <path d="M5 4h11l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10.5.5V8H19M8 12h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'My Journey': (
    <path d="M4 18c3-8 4-12 8-12s5 4 8 12M8 14h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Vision: (
    <>
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  'Career Goals': (
    <path d="M12 2v6m0 0-3-3m3 3 3-3M5 22a7 7 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Passion: (
    <path d="M12 21s-7.5-4.6-10-9.2C.5 8 2.4 4.5 6 4c2-.3 3.6.8 6 3.4C14.4 4.8 16 3.7 18 4c3.6.5 5.5 4 4 7.8-2.5 4.6-10 9.2-10 9.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  'My Working Style': (
    <path d="M4 6h16M4 12h10M4 18h16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  ),
}

const cardVariants = {
  hidden: { opacity: 0, y: 46, scale: 0.9, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState('0')
  const numeric = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    })
    return () => controls.stop()
  }, [inView, numeric])

  return (
    <span ref={ref} className="about-stat-value">
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building things that feel as good as they work."
        desc="The person behind the pixels, the code, and the craft."
      />

      <section className="section about">
        <ParticleField count={40} />
        <motion.div
          className="about-float-shape about-float-shape-1"
          animate={{ y: [0, -22, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="about-float-shape about-float-shape-2"
          animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          aria-hidden="true"
        />
        <div className="container">
          <div className="about-hero-grid">
            <motion.div
              className="about-photo-wrap"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-photo-decor" aria-hidden="true" />
              <div className="about-photo-frame glass">
                {/* Swap the placeholder below for your own photo:
                    import photo from '../assets/images/your-photo.jpg'
                    <img src={photo} alt="Mujtaba at work" className="about-photo" /> */}
                <div className="about-photo-placeholder">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="10" r="2" />
                    <path d="M3 17l5-5 4 4 3-3 6 6" />
                  </svg>
                  <span>Add your workspace photo here</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow">Who I Am</span>
              <h2 className="about-hero-title">
                Creative Mind, Problem Solver, Tech Enthusiast
              </h2>
              <p className="about-hero-desc">
                I'm a passionate developer, designer, and problem solver who loves turning ideas into
                digital reality. I enjoy building beautiful, functional, and meaningful products.
              </p>

              <motion.div
                className="about-hero-stats glass"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {aboutStats.map((s, i) => (
                  <motion.div key={s.label} className="about-hero-stat" custom={i} variants={cardVariants}>
                    <Counter value={s.value} />
                    <span className="about-stat-label">{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <a href="/resume.pdf" download className="btn btn-primary about-cv-btn">
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
                </svg>
              </a>
            </motion.div>

            <div className="about-hero-orb" aria-hidden="true">
              <ErrorBoundary fallback={<div className="hero-object-fallback" />}>
                <Suspense fallback={<div className="hero-object-fallback" />}>
                  <AboutOrb />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>

          <motion.div
            className="about-cards-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {aboutSections.map((sec, i) => (
              <motion.div key={sec.title} custom={i} variants={cardVariants}>
                <TiltCard className="glass about-card" maxTilt={5}>
                  <span className="about-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      {ICONS[sec.title]}
                    </svg>
                  </span>
                  <h3 className="about-card-title">{sec.title}</h3>
                  <p>{sec.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
