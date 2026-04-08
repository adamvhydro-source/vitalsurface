'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import SectorCard from '@/components/SectorCard'
import CTABanner from '@/components/CTABanner'

const services = [
  { title: 'On-Site Spray Painting', href: '/services/spray-painting-on-site' },
  { title: 'In-Unit Spray Painting', href: '/services/spray-painting-in-unit' },
  { title: 'Vinyl Wrapping', href: '/services/vinyl-wrapping' },
  { title: 'Window Tinting', href: '/services/window-tinting' },
  { title: 'POS Installation', href: '/services/pos-installation' },
  { title: 'Signage', href: '/services/signage' },
  { title: '3D Printing', href: '/services/3d-printing' },
]

const sectors = [
  { title: 'Shop Front Refurbishment', href: '/sectors/shop-front-refurbishment' },
  { title: 'Washroom Refurbishment', href: '/sectors/washroom-refurbishment' },
  { title: 'Pub & Hospitality', href: '/sectors/pub-and-hospitality' },
  { title: 'Retail Fit-Out', href: '/sectors/retail-fit-out' },
  { title: 'Office Refurbishment', href: '/sectors/office-refurbishment' },
]

const whyVital = [
  {
    heading: 'Finished on time.',
    body: 'We understand what it costs when a handover slips. We plan properly, communicate clearly, and deliver on the date we say.',
  },
  {
    heading: 'Trade and direct.',
    body: 'We work with contractors, joiners, and fit-out teams as well as direct clients. Same quality, same service, no politics.',
  },
  {
    heading: 'Midlands-based. Nationally capable.',
    body: 'Based in Stone, Staffordshire. We cover the Midlands as standard and travel further for the right project.',
  },
  {
    heading: 'One point of contact.',
    body: 'You deal with us, start to finish. No handoffs, no confusion, no chasing multiple trades.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 2rem 5rem',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(139,94,60,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: '780px' }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              Commercial Surface Finishing — Midlands
            </motion.p>

            <h1 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              margin: '0 0 2.5rem',
              color: 'var(--text-primary)',
            }}>
              {['MORE THAN ', 'SURFACE DEEP.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  style={{ display: i % 2 === 1 ? 'block' : 'inline' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
              }}
            >
              Commercial surface finishing across the Midlands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/contact" className="btn-gold">Get a Quote</Link>
              <Link href="/work" className="btn-outline">See Our Work</Link>
            </motion.div>
          </div>
        </div>

        {/* Spline placeholder */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '45%',
          pointerEvents: 'none',
        }}>
          {/* Spline hero — add @splinetool/react-spline component here */}
        </div>
      </section>

      {/* Services strip */}
      <section style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">What We Do</p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '3rem',
            letterSpacing: '0.05em',
          }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}>
            {services.map((service, i) => (
              <ServiceCard key={service.href} title={service.title} href={service.href} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section style={{ padding: '7rem 2rem', background: 'var(--bg)' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="gold-line" />
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--text-primary)',
              lineHeight: 1,
              letterSpacing: '0.03em',
              margin: 0,
            }}>
              We Finish What Others Start
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Most fit-out programmes have one problem in common: the last trade in gets squeezed. Surface finishing lands at the end of the schedule, after every other trade has had their time — and somehow it&apos;s still expected to look perfect.
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              We&apos;ve built Vital Surface specifically for commercial work. We know the environment, we know the pressures, and we deliver finishes that make the whole project look like it was planned properly — because the finishing work was.
            </p>
            <Link href="/contact" className="btn-outline">
              Work With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sectors section */}
      <section style={{
        padding: '7rem 2rem',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Where We Work</p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '3rem',
            letterSpacing: '0.05em',
          }}>
            Built For Your Industry
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}>
            {sectors.map((sector, i) => (
              <SectorCard key={sector.href} title={sector.title} href={sector.href} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Vital section */}
      <section style={{ padding: '7rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Why Vital Surface</p>
          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '3.5rem',
            letterSpacing: '0.05em',
          }}>
            How We Operate
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {whyVital.map((item, i) => (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  borderLeft: '2px solid var(--gold)',
                  paddingLeft: '1.5rem',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  margin: '0 0 0.75rem',
                }}>
                  {item.heading}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
