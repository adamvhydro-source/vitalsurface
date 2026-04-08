'use client'

import { motion } from 'framer-motion'
import type { Sector } from '@/lib/sectors'
import CTABanner from '@/components/CTABanner'

export default function SectorPageContent({ sector }: { sector: Sector }) {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '10rem 2rem 5rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            Sectors
          </motion.p>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '48px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'block', height: '2px', background: 'var(--gold)', marginBottom: '1.5rem' }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: 'var(--text-primary)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              margin: 0,
            }}
          >
            {sector.title}
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.75,
              fontStyle: 'italic',
            }}
          >
            {sector.intro}
          </motion.p>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: '5rem 2rem 7rem', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gold-line" />
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              marginBottom: '2.5rem',
            }}>
              What We Do
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sector.whatWeDo.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{
                    display: 'block',
                    width: '8px',
                    height: '8px',
                    background: 'var(--gold)',
                    marginTop: '0.45em',
                    flexShrink: 0,
                  }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTABanner
        heading="Working in This Sector?"
        subheading="Tell us about your project and we'll come back to you quickly."
        buttonLabel="Get a Quote"
      />
    </>
  )
}
