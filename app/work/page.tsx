import type { Metadata } from 'next'
import WorkPageContent from './WorkPageContent'

const description =
  'Browse Vital Surface\'s portfolio of commercial surface finishing work — spray painting, vinyl wrapping, shop fronts, washrooms, hospitality and retail across the Midlands and UK.'

export const metadata: Metadata = {
  title: 'Our Work',
  description,
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work | Vital Surface – Commercial Surface Finishing, Staffordshire',
    description,
    type: 'website',
    url: '/work',
  },
}

export default function WorkPage() {
  return <WorkPageContent />
}
