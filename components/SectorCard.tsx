'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface SectorCardProps {
  title: string
  href: string
  index?: number
}

export default function SectorCard({ title, href, index = 0 }: SectorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link
        href={href}
        style={{
          display: 'block',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          padding: '2.5rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(-3px)'
          const line = el.querySelector('.sector-line') as HTMLElement
          if (line) line.style.width = '100%'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(0)'
          const line = el.querySelector('.sector-line') as HTMLElement
          if (line) line.style.width = '0'
        }}
      >
        <span
          className="sector-line"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: '0',
            background: 'var(--accent-bronze)',
            transition: 'width 0.3s ease',
          }}
        />
        <p style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '1.4rem',
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
          margin: '0 0 0.75rem',
          lineHeight: 1.1,
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '0.9rem',
          color: 'var(--accent-bronze)',
          margin: 0,
          letterSpacing: '0.05em',
        }}>
          View sector →
        </p>
      </Link>
    </motion.div>
  )
}
