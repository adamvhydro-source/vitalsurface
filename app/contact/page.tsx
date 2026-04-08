import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

const description =
  'Get in touch with Vital Surface for commercial spray painting, vinyl wrapping, signage and surface finishing across the Midlands and UK. Trade and direct enquiries welcome.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Vital Surface – Commercial Surface Finishing, Staffordshire',
    description,
    type: 'website',
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
