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
      <section style={{ padding: '10rem 2rem 5rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Portfolio</p>
          <span style={{ display: 'block', width: '48px', height: '2px', background: 'var(--gold)', marginBottom: '1.5rem' }} />
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
      <section style={{ padding: '3rem 2rem', background: '#111111', borderBottom: '1px solid var(--border)', position: 'sticky', top: '72px', zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'var(--gold)' : 'transparent',
                  border: `1px solid ${activeFilter === cat ? 'var(--gold)' : 'var(--border)'}`,
                  color: activeFilter === cat ? '#0a0a0a' : 'var(--text-muted)',
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  padding: '0.5rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (activeFilter !== cat) {
                    (e.target as HTMLElement).style.borderColor = 'var(--gold)'
                    ;(e.target as HTMLElement).style.color = 'var(--text-primary)'
                  }
                }}
                onMouseLeave={e => {
                  if (activeFilter !== cat) {
                    (e.target as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.target as HTMLElement).style.color = 'var(--text-muted)'
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
      <section style={{ padding: '4rem 2rem 8rem', background: 'var(--bg)' }}>
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
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
                >
                  {/* Placeholder image */}
                  <div style={{
                    background: '#2a2a2a',
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
                      color: '#444440',
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
                        color: 'var(--gold)',
                        letterSpacing: '0.05em',
                      }}>
                        {item.category}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
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
