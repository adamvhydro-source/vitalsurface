import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

export const metadata: Metadata = {
  title: {
    template: '%s | Vital Surface',
    default: 'Vital Surface | Commercial Surface Finishing',
  },
  description: 'Commercial surface finishing across the Midlands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${cormorantGaramond.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
