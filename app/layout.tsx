import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalsurface.co.uk'),
  title: {
    template: '%s | Vital Surface – Commercial Surface Finishing, Staffordshire',
    default: 'Vital Surface – Commercial Surface Finishing, Staffordshire',
  },
  description:
    'Vital Surface delivers expert on-site spray painting, vinyl wrapping, window tinting and commercial fit-out finishing across the UK. Based in Stone, Staffordshire.',
  openGraph: {
    type: 'website',
    siteName: 'Vital Surface',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${barlow.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
