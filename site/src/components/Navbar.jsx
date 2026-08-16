import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import Magnetic from './Magnetic.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (to) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    >
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="dot">.</span>
        </NavLink>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((link) => (
            <Magnetic key={link.to} strength={0.4}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            </Magnetic>
          ))}
        </nav>

        <Magnetic className="navbar-cta-wrap">
          <button className="btn btn-primary navbar-cta" onClick={() => go('/contact')}>
            Let's Talk
          </button>
        </Magnetic>

        <button
          className={`navbar-burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <motion.div
          className="navbar-mobile"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {LINKS.map((link) => (
            <button key={link.to} onClick={() => go(link.to)}>
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
