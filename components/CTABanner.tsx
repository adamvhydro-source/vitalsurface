'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTABannerProps {
  heading?: string
  subheading?: string
  buttonLabel?: string
  buttonHref?: string
}

export default function CTABanner({
  heading = 'Ready to Talk?',
  subheading = "Tell us what you've got. We'll tell you what it'll take.",
  buttonLabel = 'Request a Quote',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section style={{
      background: '#111111',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '6rem 2rem',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '640px', margin: '0 auto' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: 'var(--text-primary)',
          letterSpacing: '0.05em',
          margin: '0 0 1rem',
        }}>
          {heading}
        </h2>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}>
          {subheading}
        </p>
        <Link href={buttonHref} className="btn-gold">
          {buttonLabel}
        </Link>
      </motion.div>
    </section>
  )
}
