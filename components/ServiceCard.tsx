'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  href: string
  index?: number
}

const icons: Record<string, string> = {
  'Spray Painting': '◈',
  'Vinyl Wrapping': '◈',
  'Window Tinting': '◈',
  'POS Installation': '◈',
  'Signage': '◈',
  '3D Printing': '◈',
}

export default function ServiceCard({ title, href, index = 0 }: ServiceCardProps) {
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
          padding: '2rem 1.5rem',
          transition: 'border-color 0.2s, transform 0.2s',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--accent-bronze)'
          el.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = 'var(--border)'
          el.style.transform = 'translateY(0)'
        }}
      >
        <span style={{
          display: 'block',
          width: '32px',
          height: '2px',
          background: 'var(--accent-bronze)',
          marginBottom: '1.25rem',
        }} />
        <p style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '1.3rem',
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
          margin: 0,
          lineHeight: 1.2,
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '0.9rem',
          color: 'var(--accent-bronze)',
          margin: '0.75rem 0 0',
          letterSpacing: '0.05em',
        }}>
          Learn more →
        </p>
      </Link>
    </motion.div>
  )
}
