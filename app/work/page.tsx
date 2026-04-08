'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import galleryData from '@/data/gallery.json'

const categories = ['All', 'Spray Painting', 'Vinyl Wrapping', 'Shop Fronts', 'Washrooms', 'Hospitality', 'Retail']

type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  location: string
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? (galleryData as GalleryItem[])
    : (galleryData as GalleryItem[]).filter((item) => item.category === activeFilter)

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

      {/* Filter bar */}
      <section style={{ padding: '3rem 2rem', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: '72px', zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'var(--accent-olive)' : 'transparent',
                  border: `1px solid ${activeFilter === cat ? 'var(--accent-olive)' : 'var(--border)'}`,
                  color: activeFilter === cat ? '#f2ede6' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  padding: '0.5rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (activeFilter !== cat) {
                    (e.target as HTMLElement).style.borderColor = 'var(--accent-bronze)'
                    ;(e.target as HTMLElement).style.color = 'var(--text-primary)'
                  }
                }}
                onMouseLeave={e => {
                  if (activeFilter !== cat) {
                    (e.target as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.target as HTMLElement).style.color = 'var(--text-secondary)'
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ padding: '4rem 2rem 8rem', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            columns: '3 280px',
            gap: '1.25rem',
          }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    breakInside: 'avoid',
                    marginBottom: '1.25rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-bronze)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  {/* Placeholder image */}
                  <div style={{
                    background: '#e5e0d8',
                    height: `${180 + (item.id % 3) * 80}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '0.9rem',
                      letterSpacing: '0.15em',
                      color: 'var(--text-muted)',
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '1.1rem',
                      letterSpacing: '0.04em',
                      color: 'var(--text-primary)',
                      margin: '0 0 0.4rem',
                    }}>
                      {item.title}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-bronze)',
                        letterSpacing: '0.05em',
                      }}>
                        {item.category}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                      }}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
