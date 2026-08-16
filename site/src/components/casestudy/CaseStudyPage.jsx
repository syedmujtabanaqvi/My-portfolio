import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HoloIntro from './HoloIntro.jsx'
import MasonryGallery from './MasonryGallery.jsx'
import CompareSlider from './CompareSlider.jsx'
import ShowcaseCarousel from './ShowcaseCarousel.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export default function CaseStudyPage({ data }) {
  return (
    <>
      <HoloIntro />

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero-media" style={{ backgroundImage: `url(${data.heroImage})` }} />
        <div className="cs-hero-scrim" aria-hidden="true" />
        <div className="cs-hero-glow" aria-hidden="true" />
        <div className="cs-hero-particles" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="cs-hero-particle"
              style={{
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 8) * 0.6}s`,
                animationDuration: `${8 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="container cs-hero-inner">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Featured Case Study
          </motion.p>
          <motion.h1
            className="cs-hero-title"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="cs-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link to="/portfolio" className="btn btn-ghost cs-hero-back">
              ← Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Project Overview</p>
              <h2 className="section-title">The story behind the work.</h2>
            </div>
          </motion.div>

          <motion.div
            className="cs-overview-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {data.overview.map((o) => (
              <motion.div className="cs-overview-card glass" key={o.title} variants={fadeUp}>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Project Gallery</p>
              <h2 className="section-title">Every render, in one place.</h2>
            </div>
          </motion.div>

          <MasonryGallery images={data.gallery} />
        </div>
      </section>

      {/* Process */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Design Process</p>
              <h2 className="section-title">From concept to final render.</h2>
            </div>
          </motion.div>

          <div className="cs-timeline">
            <div className="cs-timeline-line" aria-hidden="true" />
            {data.process.map((step, i) => (
              <motion.div
                key={step.title}
                className={`cs-timeline-item ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cs-timeline-dot" aria-hidden="true" />
                <div className="cs-timeline-card glass">
                  <span className="cs-timeline-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Technical Details</p>
              <h2 className="section-title">How it was built.</h2>
            </div>
          </motion.div>

          <motion.div
            className="cs-tech-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {data.techDetails.map((t) => (
              <motion.div className="cs-tech-card glass" key={t.label} variants={fadeUp}>
                <div className="cs-tech-icon" aria-hidden="true" />
                <span className="cs-tech-label">{t.label}</span>
                <span className="cs-tech-value">{t.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Assets */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Featured Assets</p>
              <h2 className="section-title">Individual pieces from the set.</h2>
            </div>
          </motion.div>

          <div className="cs-assets-grid">
            {data.featuredAssets.map((a, i) => (
              <motion.article
                className="cs-asset-card glass"
                key={a.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cs-asset-media">
                  <img src={a.image} alt={a.name} loading="lazy" />
                  <div className="cs-asset-glow" aria-hidden="true" />
                </div>
                <div className="cs-asset-body">
                  <div className="cs-asset-top">
                    <h3>{a.name}</h3>
                    <span className="project-cat">{a.category}</span>
                  </div>
                  <p>{a.desc}</p>
                  <div className="cs-asset-meta">
                    <span>{a.software}</span>
                    <span>{a.renderInfo}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Before &amp; After</p>
              <h2 className="section-title">Drag to compare.</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <CompareSlider before={data.compare.before} after={data.compare.after} />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section cs-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Skills Demonstrated</p>
              <h2 className="section-title">What this project called for.</h2>
            </div>
          </motion.div>

          <motion.div
            className="cs-skills"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {data.skills.map((s) => (
              <motion.span className="cs-skill-badge" key={s} variants={fadeUp}>
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Showcase */}
      <section className="section cs-section cs-final-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Final Showcase</p>
              <h2 className="section-title">The complete set.</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShowcaseCarousel images={data.showcase} />
          </motion.div>

          <motion.div
            className="cs-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link to="/portfolio" className="btn btn-ghost">
              ← Back to Portfolio
            </Link>
            <Link to="/contact" className="btn">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
