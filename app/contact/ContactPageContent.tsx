'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const projectTypes = [
  'Spray Painting — On-Site',
  'Spray Painting — In-Unit',
  'Vinyl Wrapping',
  'Window Tinting',
  'POS Installation',
  'Signage',
  '3D Printing',
  'Multiple Services',
  'Not Sure Yet',
]

export default function ContactPageContent() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '10rem 2rem 5rem', background: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label">Get in Touch</p>
          <span style={{ display: 'block', width: '48px', height: '2px', background: 'var(--accent-bronze)', marginBottom: '1.5rem' }} />
          <h1 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: 'var(--text-primary)',
            lineHeight: 1,
            letterSpacing: '0.03em',
            margin: '0 0 1.5rem',
          }}>
            Let&apos;s Talk
          </h1>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.6,
          }}>
            Tell us what you&apos;ve got. We&apos;ll tell you what it&apos;ll take. No lengthy sales process — just a straight conversation about your project.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section style={{ padding: '6rem 2rem 8rem', background: 'var(--bg-primary)' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '6rem',
          alignItems: 'start',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '560px' }}
          >
            {formState === 'success' ? (
              <div style={{ padding: '3rem', border: '1px solid var(--accent-bronze)', background: 'rgba(140,109,63,0.06)' }}>
                <p style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '1.8rem',
                  color: 'var(--accent-bronze)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                }}>
                  Message Received
                </p>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  Thanks for getting in touch. We&apos;ll come back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07..."
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Project Type
                  </label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — what it is, where it is, and what you need doing."
                    rows={6}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {formState === 'error' && (
                  <p style={{
                    color: '#e05555',
                    fontSize: '0.95rem',
                  }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn-gold"
                  style={{ opacity: formState === 'sending' ? 0.6 : 1 }}
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="gold-line" />
            <h2 style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: '2rem',
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              marginBottom: '2rem',
            }}>
              Find Us
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-bronze)', marginBottom: '0.4rem' }}>LOCATION</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Stone, Staffordshire<br />
                  Midlands, UK
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-bronze)', marginBottom: '0.4rem' }}>COVERAGE</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Midlands as standard.<br />
                  Nationally capable.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent-bronze)', marginBottom: '0.4rem' }}>CLIENTS</p>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Trade and direct.<br />
                  Contractors welcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
