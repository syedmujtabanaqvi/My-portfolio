import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox.jsx'

export default function MasonryGallery({ images }) {
  const [index, setIndex] = useState(null)

  return (
    <>
      <div className="masonry-gallery">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            className="masonry-item glass"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="masonry-item-frame">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="masonry-item-glow" aria-hidden="true" />
              <div className="masonry-item-caption">
                <span>{img.caption}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3H3v3M13 3h3v3M6 13H3v-3M13 13h3v-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        onNext={() => setIndex((i) => (i + 1) % images.length)}
      />
    </>
  )
}
