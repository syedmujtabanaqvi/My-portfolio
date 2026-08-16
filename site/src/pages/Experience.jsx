import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { timeline } from '../data/content.js'

const MILESTONE_ICON = (
  <path d="M5 3v18M5 4h11l-2.5 3.5L16 11H5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
)

const WORK_ICON = (
  <path d="M4 7a2 2 0 0 1 2-2h3l1.5-2h3L15 5h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
)

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A path, not a straight line."
        desc="Freelance work, milestones, and the winding road that led here."
      />

      <section className="section experience">
        <div className="container">
          <div className="timeline-v2">
            <div className="timeline-v2-track" aria-hidden="true">
              <motion.div
                className="timeline-v2-track-fill"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {timeline.map((item, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              const isMilestone = item.org === 'Milestone'
              const isCurrent = i === 0

              return (
                <motion.div
                  key={item.title}
                  className={`timeline-v2-row timeline-v2-row-${side}`}
                  initial={{ opacity: 0, x: side === 'left' ? -70 : 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="timeline-v2-node" aria-hidden="true">
                    <span className={`timeline-v2-dot ${isCurrent ? 'is-current' : ''}`} />
                    {isCurrent && <span className="timeline-v2-dot-ping" />}
                  </div>

                  <TiltCard className="glass timeline-v2-card" maxTilt={4}>
                    <div className="timeline-v2-card-head">
                      <span className="timeline-v2-icon">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          {isMilestone ? MILESTONE_ICON : WORK_ICON}
                        </svg>
                      </span>
                      <span className="timeline-year timeline-v2-year">{item.year}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <span className="timeline-org">{item.org}</span>
                    <p>{item.desc}</p>
                  </TiltCard>
                </motion.div>
              )
            })}

            <motion.div
              className="timeline-v2-start"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Start
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
