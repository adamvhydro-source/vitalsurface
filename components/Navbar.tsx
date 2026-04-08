'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const serviceLinks = [
  { label: 'Spray Painting On-Site', href: '/services/spray-painting-on-site' },
  { label: 'Spray Painting In-Unit', href: '/services/spray-painting-in-unit' },
  { label: 'Vinyl Wrapping', href: '/services/vinyl-wrapping' },
  { label: 'Window Tinting', href: '/services/window-tinting' },
  { label: 'POS Installation', href: '/services/pos-installation' },
  { label: 'Signage', href: '/services/signage' },
  { label: '3D Printing', href: '/services/3d-printing' },
]

const sectorLinks = [
  { label: 'Shop Front Refurbishment', href: '/sectors/shop-front-refurbishment' },
  { label: 'Washroom Refurbishment', href: '/sectors/washroom-refurbishment' },
  { label: 'Pub & Hospitality', href: '/sectors/pub-and-hospitality' },
  { label: 'Retail Fit-Out', href: '/sectors/retail-fit-out' },
  { label: 'Office Refurbishment', href: '/sectors/office-refurbishment' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const sectorsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (sectorsRef.current && !sectorsRef.current.contains(e.target as Node)) {
        setSectorsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Unscrolled: cream text over dark hero. Scrolled: dark text on light nav.
  const navTextColor = scrolled ? 'var(--text-primary)' : '#f2ede6'
  const navWordmarkColor = scrolled ? 'var(--accent-bronze)' : '#f2ede6'

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, pointerEvents: 'none' as const },
    visible: { opacity: 1, y: 0, pointerEvents: 'auto' as const },
  }

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'rgba(247,245,241,0)' }}
        animate={{ backgroundColor: scrolled ? 'rgba(247,245,241,0.95)' : 'rgba(247,245,241,0)' }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Wordmark */}
          <Link href="/" style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '1.6rem',
            color: navWordmarkColor,
            letterSpacing: '0.1em',
            lineHeight: 1,
            transition: 'color 0.3s',
          }}>
            Vital Surface
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {/* Services dropdown */}
            <div ref={servicesRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setSectorsOpen(false) }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: navTextColor,
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: 0,
                  transition: 'color 0.3s',
                }}
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 1rem)',
                      left: '-1rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      minWidth: '240px',
                      padding: '0.5rem 0',
                    }}
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.65rem 1.25rem',
                          fontFamily: 'var(--font-barlow), sans-serif',
                          fontWeight: 400,
                          fontSize: '13px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--text-primary)',
                          transition: 'color 0.15s, padding-left 0.15s',
                        }}
                        onMouseEnter={e => {
                          (e.target as HTMLElement).style.color = 'var(--accent-bronze)'
                          ;(e.target as HTMLElement).style.paddingLeft = '1.6rem'
                        }}
                        onMouseLeave={e => {
                          (e.target as HTMLElement).style.color = 'var(--text-primary)'
                          ;(e.target as HTMLElement).style.paddingLeft = '1.25rem'
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid var(--border)', margin: '0.5rem 0 0' }} />
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        fontFamily: 'var(--font-barlow), sans-serif',
                        fontWeight: 400,
                        fontSize: '13px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-bronze)',
                        transition: 'color 0.15s, padding-left 0.15s',
                      }}
                      onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = 'var(--text-primary)'
                        ;(e.target as HTMLElement).style.paddingLeft = '1.6rem'
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = 'var(--accent-bronze)'
                        ;(e.target as HTMLElement).style.paddingLeft = '1.25rem'
                      }}
                    >
                      View all services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sectors dropdown */}
            <div ref={sectorsRef} style={{ position: 'relative' }}>
              <button
                onClick={() => { setSectorsOpen(!sectorsOpen); setServicesOpen(false) }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: navTextColor,
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: 0,
                  transition: 'color 0.3s',
                }}
              >
                Sectors
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: sectorsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </button>
              <AnimatePresence>
                {sectorsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 1rem)',
                      left: '-1rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      minWidth: '240px',
                      padding: '0.5rem 0',
                    }}
                  >
                    {sectorLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSectorsOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.65rem 1.25rem',
                          fontFamily: 'var(--font-barlow), sans-serif',
                          fontWeight: 400,
                          fontSize: '13px',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--text-primary)',
                          transition: 'color 0.15s, padding-left 0.15s',
                        }}
                        onMouseEnter={e => {
                          (e.target as HTMLElement).style.color = 'var(--accent-bronze)'
                          ;(e.target as HTMLElement).style.paddingLeft = '1.6rem'
                        }}
                        onMouseLeave={e => {
                          (e.target as HTMLElement).style.color = 'var(--text-primary)'
                          ;(e.target as HTMLElement).style.paddingLeft = '1.25rem'
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid var(--border)', margin: '0.5rem 0 0' }} />
                    <Link
                      href="/sectors"
                      onClick={() => setSectorsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.25rem',
                        fontFamily: 'var(--font-barlow), sans-serif',
                        fontWeight: 400,
                        fontSize: '13px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-bronze)',
                        transition: 'color 0.15s, padding-left 0.15s',
                      }}
                      onMouseEnter={e => {
                        (e.target as HTMLElement).style.color = 'var(--text-primary)'
                        ;(e.target as HTMLElement).style.paddingLeft = '1.6rem'
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLElement).style.color = 'var(--accent-bronze)'
                        ;(e.target as HTMLElement).style.paddingLeft = '1.25rem'
                      }}
                    >
                      View all sectors →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/work"
              style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: navTextColor,
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent-bronze)'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = navTextColor}
            >
              Our Work
            </Link>

            <Link href="/contact" className="btn-gold" style={{ fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}>
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', color: navTextColor, padding: '0.5rem', transition: 'color 0.3s' }}
            aria-label="Open menu"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <rect y="0" width="24" height="2" fill="currentColor"/>
              <rect y="8" width="24" height="2" fill="currentColor"/>
              <rect y="16" width="24" height="2" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--bg-secondary)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', color: 'var(--accent-bronze)', letterSpacing: '0.1em' }}
              >
                Vital Surface
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-primary)', padding: '0.5rem' }}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-bronze)', marginBottom: '1rem' }}>SERVICES</p>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      padding: '0.85rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-bronze)',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  View all services →
                </Link>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-bronze)', marginBottom: '1rem' }}>SECTORS</p>
                {sectorLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      padding: '0.85rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/sectors"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-bronze)',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  View all sectors →
                </Link>
              </div>
              <Link
                href="/work"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '2rem',
                  display: 'block',
                }}
              >
                Our Work
              </Link>
              <Link href="/contact" className="btn-gold" onClick={() => setMobileOpen(false)} style={{ textAlign: 'center' }}>
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
