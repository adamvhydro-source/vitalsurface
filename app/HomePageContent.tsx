'use client'

import Link from 'next/link'
import Image from 'next/image'
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

export default function HomePageContent() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Image
          src="/images/hero.jpg"
          alt="Vital Surface commercial finishing"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(64px, 10vw, 120px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              color: '#ffffff',
              margin: '0 0 1rem',
            }}
          >
            MORE THAN<br />SURFACE DEEP.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-barlow)',
              fontWeight: 300,
              fontSize: '1rem',
              color: '#ffffff',
              margin: '0 0 2rem',
              letterSpacing: '0.02em',
            }}
          >
            Commercial surface finishing. One team, one call.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'linear-gradient(180deg, #8c6d3f 0%, #7d6138 100%)',
              color: '#f2ede6',
              fontFamily: 'var(--font-bebas)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              padding: '14px 32px',
              borderRadius: '6px',
            }}>
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services strip */}
      <section style={{
        background: 'var(--bg-secondary)',
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

      {/* Rllout — intelligent job management */}
      <section style={{
        background: '#0f0e0c',
        padding: '6rem 2rem',
        borderTop: '1px solid rgba(242,237,230,0.08)',
        borderBottom: '1px solid rgba(242,237,230,0.08)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent-bronze)',
            marginBottom: '1rem',
          }}>
            How We Run Every Job
          </p>
          <h2 style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#f2ede6',
            letterSpacing: '0.04em',
            lineHeight: 1.05,
            margin: '0 0 1.5rem',
          }}>
            Powered by Intelligent Job Management
          </h2>
          <p style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.15rem',
            color: '#a09890',
            lineHeight: 1.7,
            margin: '0 0 2rem',
          }}>
            Every Vital Surface project runs through Rllout — our own field service platform built for commercial installers. Real-time job tracking, digital reports, and instant client updates on every install.
          </p>
          <a
            href="https://rllout.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-bronze)',
              borderBottom: '1px solid rgba(140,109,63,0.4)',
              paddingBottom: '2px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = '#f2ede6'
              ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(242,237,230,0.5)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-bronze)'
              ;(e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(140,109,63,0.4)'
            }}
          >
            Find out more about Rllout
          </a>
        </motion.div>
      </section>

      {/* Intro section */}
      <section style={{ padding: '7rem 2rem', background: 'var(--bg-primary)' }}>
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
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              Most fit-out programmes have one problem in common: the last trade in gets squeezed. Surface finishing lands at the end of the schedule, after every other trade has had their time — and somehow it&apos;s still expected to look perfect.
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
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
        background: 'var(--bg-secondary)',
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
      <section style={{ padding: '7rem 2rem', background: 'var(--bg-primary)' }}>
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
                  borderLeft: '2px solid var(--accent-bronze)',
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
                  color: 'var(--text-secondary)',
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
