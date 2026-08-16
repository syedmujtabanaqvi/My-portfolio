import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TiltCard from './TiltCard.jsx'
import CardLaunchOverlay from './CardLaunchOverlay.jsx'

// Standard project card — used for the placeholder / fictional demo projects.
function StandardCard({ p, onCardClick, ...motionProps }) {
  return (
    <TiltCard
      as="article"
      className="project-card glass"
      maxTilt={6}
      role={onCardClick ? 'link' : undefined}
      tabIndex={onCardClick ? 0 : undefined}
      onClick={onCardClick}
      onKeyDown={onCardClick ? (e) => (e.key === 'Enter' ? onCardClick(e) : null) : undefined}
      {...motionProps}
    >
      <div className="project-card-ring" aria-hidden="true" />
      <div className="project-thumb-mask">
        <div
          className="project-thumb"
          style={{
            background: `linear-gradient(150deg, hsl(${p.hue} 70% 12%) 0%, hsl(${p.hue} 90% 22%) 55%, #0b0b0b 100%)`,
          }}
        >
          <span className="project-thumb-mark">{p.title.slice(0, 2).toUpperCase()}</span>
          <div className="project-thumb-shine" aria-hidden="true" />
        </div>
      </div>

      <div className="project-body">
        <div className="project-top">
          <h3>{p.title}</h3>
          <span className="project-cat">{p.category}</span>
        </div>
        <p>{p.desc}</p>
        <div className="project-stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="project-actions">
          <button className="project-link">
            Live Preview
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="project-link project-link-ghost">
            GitHub
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </button>
        </div>
      </div>
    </TiltCard>
  )
}

// Premium showcase card for the 3D Modeling Design case study — glassmorphism,
// animated border, purple glow, mouse-reactive tilt, and a cinematic
// "open archive" transition on click.
function ShowcaseCard({ p, ...motionProps }) {
  const [launching, setLaunching] = useState(false)
  const navigate = useNavigate()

  const handleOpen = (e) => {
    e.preventDefault()
    if (launching) return
    setLaunching(true)
  }

  return (
    <>
      <TiltCard
        as="article"
        className="project-card project-card-showcase glass"
        maxTilt={9}
        onClick={handleOpen}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen(e)
        }}
        {...motionProps}
      >
        <div className="showcase-animated-border" aria-hidden="true" />
        <div className="project-card-ring project-card-ring-showcase" aria-hidden="true" />

        <div className="project-thumb-mask project-thumb-mask-showcase">
          <div className="project-thumb project-thumb-image" style={{ backgroundImage: `url(${p.thumbnail})` }}>
            <div className="project-thumb-shine" aria-hidden="true" />
            <div className="showcase-thumb-scrim" aria-hidden="true" />
            <span className="showcase-badge">Featured Case Study</span>
          </div>
        </div>

        <div className="project-body">
          <div className="project-top">
            <h3>{p.title}</h3>
            <span className="project-cat">{p.category}</span>
          </div>
          <p>{p.desc}</p>
          <div className="project-stack">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="project-actions">
            <button className="project-link showcase-link" onClick={handleOpen}>
              View Case Study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </TiltCard>

      <CardLaunchOverlay
        active={launching}
        image={p.thumbnail}
        onComplete={() => navigate(`/portfolio/${p.slug}`)}
      />
    </>
  )
}

export default function ProjectCard({ project, onCardClick, ...motionProps }) {
  if (project.caseStudy) return <ShowcaseCard p={project} {...motionProps} />
  return <StandardCard p={project} onCardClick={onCardClick} {...motionProps} />
}
