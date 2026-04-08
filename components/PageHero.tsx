'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  label?: string
}

export default function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section style={{
      paddingTop: '10rem',
      paddingBottom: '5rem',
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            {label}
          </motion.p>
        )}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: '48px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'block',
            height: '2px',
            background: 'var(--accent-bronze)',
            marginBottom: '1.5rem',
          }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            color: 'var(--text-primary)',
            lineHeight: 1,
            letterSpacing: '0.03em',
            margin: 0,
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              color: 'var(--text-secondary)',
              marginTop: '1.25rem',
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
