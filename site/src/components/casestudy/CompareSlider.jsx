import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function CompareSlider({ before, after }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const stopDrag = () => {
    dragging.current = false
  }

  return (
    <div
      ref={ref}
      className="compare-slider glass"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDrag}
      onPointerLeave={stopDrag}
    >
      <div className="compare-layer">
        <img src={after.src} alt={after.label} draggable={false} />
        <span className="compare-tag compare-tag-after">{after.label}</span>
      </div>

      <div className="compare-layer compare-layer-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before.src} alt={before.label} draggable={false} />
        <span className="compare-tag compare-tag-before">{before.label}</span>
      </div>

      <motion.div className="compare-handle" style={{ left: `${pos}%` }}>
        <span className="compare-handle-line" />
        <span className="compare-handle-grip">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L2 7l3 4M9 3l3 4-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.div>
    </div>
  )
}
