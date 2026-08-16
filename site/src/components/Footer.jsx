import Magnetic from './Magnetic.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">m</p>
          <p className="footer-tag">Crafting digital experiences.</p>
        </div>

        <p className="footer-copy">© {year} . All rights reserved.</p>

        <Magnetic>
          <button className="footer-top" onClick={scrollTop} aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Magnetic>
      </div>
    </footer>
  )
}
