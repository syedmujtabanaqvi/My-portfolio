import { useEffect, useRef } from 'react'

export default function ParticleField({ count = 60 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    let width, height

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    function init() {
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        vy: -(Math.random() * 0.18 + 0.04),
        vx: (Math.random() - 0.5) * 0.08,
        alpha: Math.random() * 0.5 + 0.15,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y += p.vy
        p.x += p.vx
        if (p.y < -10) p.y = height + 10
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(189, 189, 189, ${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    init()
    if (!prefersReduced) draw()
    else draw() // draw once, static

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [count])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
