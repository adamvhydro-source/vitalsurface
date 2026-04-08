import type { Metadata } from 'next'
import Link from 'next/link'
import { sectors } from '@/lib/sectors'
import CTABanner from '@/components/CTABanner'

const description =
  'Sectors Vital Surface works in — shop fronts, washrooms, pubs and hospitality, retail fit-out, and office refurbishment across the Midlands and UK.'

export const metadata: Metadata = {
  title: 'Sectors',
  description,
  alternates: { canonical: '/sectors' },
  openGraph: {
    title: 'Sectors | Vital Surface – Commercial Surface Finishing, Staffordshire',
    description,
    type: 'website',
    url: '/sectors',
  },
}

export default function SectorsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '10rem 2rem 5rem', background: '#f7f5f1', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Where We Work</p>
          <span style={{ display: 'block', width: '48px', height: '2px', background: 'var(--accent-bronze)', marginBottom: '1.5rem' }} />
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: 'var(--text-primary)',
            lineHeight: 1,
            letterSpacing: '0.03em',
            margin: 0,
          }}>
            Our Sectors
          </h1>
        </div>
      </section>

      {/* Grid */}
      {/* Replace placeholder images with real client photos at /public/images/sectors/{slug}.jpg */}
      <section style={{ padding: '5rem 2rem 8rem', background: '#f7f5f1' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ul className="sectors-index-grid" style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            columnGap: '2rem',
            rowGap: '4rem',
          }}>
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <Link href={`/sectors/${sector.slug}`} className="sector-index-card" style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                }}>
                  <div style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: '#e5e0d8' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://picsum.photos/seed/vital-sector-${sector.slug}/900/680`}
                      alt={`${sector.title} — Vital Surface`}
                      width={900}
                      height={680}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </div>
                  <span className="sector-index-rule" />
                  <h2 style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '1.6rem',
                    lineHeight: 1.05,
                    letterSpacing: '0.04em',
                    color: 'var(--text-primary)',
                    margin: '0 0 0.5rem',
                  }}>
                    {sector.title}
                  </h2>
                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    {sector.descriptor}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style>{`
          .sector-index-rule {
            display: block;
            width: 32px;
            height: 1px;
            background: #8c6d3f;
            margin: 1.5rem 0 1rem;
            transition: width 0.25s ease;
          }
          .sector-index-card:hover .sector-index-rule {
            width: 64px;
          }
          .sector-index-card:hover img {
            transform: scale(1.03);
          }
          .sector-index-card:hover h2 {
            color: #8c6d3f;
            transition: color 0.2s ease;
          }
          @media (max-width: 900px) {
            .sectors-index-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 600px) {
            .sectors-index-grid {
              grid-template-columns: 1fr !important;
              row-gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      <CTABanner
        heading="Working in One of These Sectors?"
        subheading="Tell us about your project and we'll come back to you quickly."
        buttonLabel="Get a Quote"
      />
    </>
  )
}
