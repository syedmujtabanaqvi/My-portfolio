import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Magnetic from '../components/Magnetic.jsx'
import ParticleField from '../components/ParticleField.jsx'
import { socials, aboutStats } from '../data/content.js'

const MESSAGE_LIMIT = 500

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Wire this up to your own backend / form service (e.g. Formspree, Resend).
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something amazing."
        desc="Have a project, a role, or just an idea worth talking through? My inbox is open."
      />

      <section className="section contact">
        <ParticleField count={45} />

        <div className="container">
          <motion.div
            className="contact-hud glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-hud-status">
              <span className="contact-hud-dot" />
              Available for new projects
            </div>
            <div className="contact-hud-stats">
              {aboutStats.slice(0, 3).map((s) => (
                <div className="contact-hud-stat" key={s.label}>
                  <span className="contact-hud-stat-value">{s.value}</span>
                  <span className="contact-hud-stat-label">{s.label}</span>
                </div>
              ))}
              <div className="contact-hud-stat">
                <span className="contact-hud-stat-value">&lt;24h</span>
                <span className="contact-hud-stat-label">Response Time</span>
              </div>
            </div>
          </motion.div>

          <div className="contact-grid">
            <motion.form
              className="contact-form glass hud-corners"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="contact-form-ring" aria-hidden="true" />
              <span className="hud-corner tl" />
              <span className="hud-corner tr" />
              <span className="hud-corner bl" />
              <span className="hud-corner br" />

              <div className="contact-form-head">
                <span className="contact-form-tag">
                  transmission_form<span className="contact-form-cursor" />
                </span>
                <span className="contact-form-dots">
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <label>
                <span>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  maxLength={MESSAGE_LIMIT}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <span className="contact-char-count">
                {message.length}/{MESSAGE_LIMIT}
              </span>

              <Magnetic strength={0.25}>
                <button type="submit" className="btn btn-primary contact-submit" disabled={status !== 'idle'}>
                  {status === 'idle' && 'Send Message'}
                  {status === 'sending' && 'Sending…'}
                  {status === 'sent' && 'Sent ✓'}
                </button>
              </Magnetic>
            </motion.form>

            <motion.div
              className="contact-side"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact-map glass hud-corners">
                <span className="hud-corner tl" />
                <span className="hud-corner tr" />
                <span className="hud-corner bl" />
                <span className="hud-corner br" />

                <div className="contact-map-glow" aria-hidden="true" />
                <div className="contact-map-grid" aria-hidden="true" />
                <div className="contact-map-sweep" aria-hidden="true" />

                <div className="contact-map-signal">
                  <span className="contact-signal-bars">
                    <span />
                    <span />
                    <span />
                  </span>
                  Signal Strong
                </div>

                <div className="contact-map-pin">
                  <span className="contact-map-pin-anchor">
                    <span className="contact-map-ring" />
                    <span className="contact-map-ring" style={{ animationDelay: '1.2s' }} />
                    <span className="contact-map-pin-dot" />
                  </span>
                  <span className="contact-map-pin-label">Karachi, Pakistan</span>
                </div>

                <div className="contact-map-coords">24.8607° N, 67.0011° E</div>
              </div>

              <div className="contact-meta">
                <div>
                  <span className="contact-meta-label">Email</span>
                  <span className="contact-meta-value">hello@aurangzaib.dev</span>
                </div>
                <div>
                  <span className="contact-meta-label">Location</span>
                  <span className="contact-meta-value">Karachi, Pakistan — remote friendly</span>
                </div>
              </div>

              <div className="contact-socials">
                {socials.map((s) => (
                  <Magnetic key={s.label}>
                    <a href={s.href} className="contact-social" target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
