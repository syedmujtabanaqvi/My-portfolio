import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Magnetic from '../components/Magnetic.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { projects } from '../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const featured = [
  {
    n: '01',
    title: 'About Me',
    desc: 'Get to know me better and my creative journey.',
    to: '/about',
    icon: (
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
    ),
  },
  {
    n: '02',
    title: 'My Skills',
    desc: 'Explore my technical skills and creative expertise.',
    to: '/skills',
    icon: (
      <path d="M12 2 2 7l10 5 10-5-10-5Zm-8.2 8.4L12 15l8.2-4.6M3.8 14.8 12 19.2l8.2-4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    n: '03',
    title: 'My Work',
    desc: 'Check out my selected projects and case studies.',
    to: '/portfolio',
    icon: (
      <path d="M4 7a2 2 0 0 1 2-2h3l1.5-2h3L15 5h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm8 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    n: '04',
    title: 'Experience',
    desc: 'My professional journey and achievements.',
    to: '/experience',
    icon: (
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm4-2V3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5V5M4 11h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    n: '05',
    title: 'Contact',
    desc: "Let's connect and build something amazing together.",
    to: '/contact',
    icon: (
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2.1c.5 0 .9.3 1 .8l.9 3a1.5 1.5 0 0 1-.4 1.5l-1.3 1.3a12 12 0 0 0 5.6 5.6l1.3-1.3a1.5 1.5 0 0 1 1.5-.4l3 .9c.5.1.8.5.8 1v2.1a1.5 1.5 0 0 1-1.5 1.5C11.6 20 4 12.4 4 5.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
]

const crafting = [
  {
    title: 'UI Design',
    icon: <path d="M4 4h16v16H4V4Zm0 5h16M9 9v11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    title: 'Web Development',
    icon: <path d="m9 8-4 4 4 4m6-8 4 4-4 4M14 4l-4 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'AI Automation',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-6.5-2.1 2.1M8.6 15.4l-2.1 2.1m11 0-2.1-2.1M8.6 8.6 6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Game Development',
    icon: (
      <path d="M7 9h.01M5 12h4m-2-2v4m9-2h.01M17.5 9h.01M9 16h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Branding',
    icon: <path d="M12 2 2 12l9 9 11-11V2h-8Zm3.5 5.5h.01" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  },
  {
    title: '3D & Motion',
    icon: (
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 0v10m0 0-9-5m9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Hero />

      {/* Featured */}
      <section className="section featured-section">
        <div className="container">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            Featured
          </motion.p>

          <motion.div
            className="featured-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featured.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <TiltCard
                  className="glass featured-card"
                  maxTilt={6}
                  role="link"
                  tabIndex={0}
                  onClick={() => navigate(f.to)}
                  onKeyDown={(e) => (e.key === 'Enter' ? navigate(f.to) : null)}
                >
                  <span className="featured-card-num">{f.n}</span>
                  <span className="featured-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      {f.icon}
                    </svg>
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crafting Digital Experiences */}
      <section className="section crafting-section">
        <div className="container">
          <motion.div
            className="crafting-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow eyebrow-center">What I Do</p>
            <h2 className="section-title">Crafting Digital Experiences</h2>
            <p className="crafting-lead">
              I blend design, technology, and creativity to build immersive digital products
              that are fast, responsive, and visually stunning.
            </p>
          </motion.div>

          <motion.div
            className="crafting-panel glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="crafting-panel-glow" aria-hidden="true" />
            <motion.div
              className="crafting-icon-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {crafting.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="crafting-icon-item"
                  variants={fadeUp}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <span className="crafting-icon-orb">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      {c.icon}
                    </svg>
                  </span>
                  <p>{c.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Selected Work */}
      <section className="section work-preview-section">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-title">Recent projects worth a look.</h2>
            </div>
            <Link to="/portfolio" className="btn btn-ghost work-preview-cta">
              View All Projects
            </Link>
          </motion.div>

          <motion.div
            className="portfolio-grid work-preview-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.slice(0, 3).map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <ProjectCard project={p} onCardClick={() => navigate('/portfolio')} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section home-cta-section">
        <div className="container">
          <motion.div
            className="contact-cta-banner glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <p className="eyebrow">Let's Work Together</p>
              <h2 className="section-title cta-title">Got a project in mind? Let's build it.</h2>
            </div>
            <Magnetic>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  )
}
