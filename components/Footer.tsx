'use client'

import Link from 'next/link'

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

export default function Footer() {
  return (
    <footer className="footer" style={{
      background: '#0f0e0c',
      borderTop: '1px solid var(--accent-bronze)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '1.5rem',
              color: 'var(--accent-bronze)',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              margin: '0 0 1rem 0',
            }}>
              Vital Surface
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              More Than Surface Deep.
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              Commercial surface finishing<br />
              across the Midlands.
            </p>
          </div>

          {/* Services column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-bronze)',
              marginBottom: '1.25rem',
            }}>
              SERVICES
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-bronze)',
              marginBottom: '1.25rem',
            }}>
              SECTORS
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {sectorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-bronze)',
              marginBottom: '1.25rem',
            }}>
              CONTACT
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Stone, Staffordshire
              </p>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                Serving the Midlands<br />and beyond.
              </p>
              <Link href="/contact" style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1rem',
                color: 'var(--accent-bronze)',
                transition: 'opacity 0.15s',
              }}>
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            margin: 0,
          }}>
            © 2026 Vital Surface. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            margin: 0,
          }}>
            Stone, Staffordshire
          </p>
        </div>
      </div>
    </footer>
  )
}
