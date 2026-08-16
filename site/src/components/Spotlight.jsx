import { useRef } from 'react'

// Wraps a section and renders a soft radial glow that follows the cursor,
// used to add ambient, premium "spotlight" lighting to grids and heroes.
export default function Spotlight({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
    el.style.setProperty('--sopacity', '1')
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.setProperty('--sopacity', '0')
  }

  return (
    <div ref={ref} className={`spotlight-wrap ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="spotlight-glow" aria-hidden="true" />
      {children}
    </div>
  )
}
