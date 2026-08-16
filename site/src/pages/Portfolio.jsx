import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Spotlight from '../components/Spotlight.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { categories, projects } from '../data/content.js'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work."
        desc="A collection of products, interfaces, and experiments — filtered by discipline."
      />

      <section className="section portfolio">
        <div className="container">
          <div className="portfolio-filters" role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                className={`filter-pill ${filter === cat ? 'is-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Spotlight className="portfolio-grid-spotlight">
            <motion.div layout className="portfolio-grid">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <ProjectCard
                    key={p.title}
                    project={p}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </Spotlight>
        </div>
      </section>
    </>
  )
}
