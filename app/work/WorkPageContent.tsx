'use client'

// Replace placeholder images with real client photos — see Ryan for photography assets.

import { motion } from 'framer-motion'
import galleryData from '@/data/gallery.json'

type GalleryItem = {
  id: number
  title: string
  tag: string
}

const items = galleryData as GalleryItem[]

// Varied heights give the masonry layout its rhythm. Real photos will use their natural aspect ratio.
const placeholderHeights = [520, 380, 460, 600, 420, 500, 380, 560, 440, 520, 400, 580]

export default function WorkPageContent() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '10rem 2rem 5rem', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Portfolio</p>
          <span style={{ display: 'block', width: '48px', height: '2px', background: 'var(--accent-bronze)', marginBottom: '1.5rem' }} />
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: 'var(--text-primary)',
            lineHeight: 1,
            letterSpacing: '0.03em',
            margin: 0,
          }}>
            The Work
          </h1>
        </div>
      </section>

      {/* Gallery — masonry */}
      <section style={{ padding: '5rem 2rem 8rem', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            columns: '3 320px',
            columnGap: '1.5rem',
          }}>
            {items.map((item, i) => {
              const h = placeholderHeights[i % placeholderHeights.length]
              return (
                <motion.figure
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  style={{
                    breakInside: 'avoid',
                    margin: '0 0 1.5rem',
                    display: 'block',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/vital-${item.id}/800/${h}`}
                    alt={item.title}
                    width={800}
                    height={h}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      background: '#e5e0d8',
                    }}
                  />
                  <figcaption style={{ paddingTop: '1rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: '1.4rem',
                      letterSpacing: '0.04em',
                      lineHeight: 1.1,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.4rem',
                    }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontWeight: 400,
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-bronze)',
                    }}>
                      {item.tag}
                    </span>
                  </figcaption>
                </motion.figure>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
