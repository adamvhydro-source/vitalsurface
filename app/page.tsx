import type { Metadata } from 'next'
import HomePageContent from './HomePageContent'

const description =
  'Vital Surface delivers expert on-site spray painting, vinyl wrapping, window tinting and commercial fit-out finishing across the UK. Based in Stone, Staffordshire.'

export const metadata: Metadata = {
  // Home overrides the layout's title template entirely — no page-name prefix.
  title: {
    absolute: 'Vital Surface – Commercial Surface Finishing, Staffordshire',
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vital Surface – Commercial Surface Finishing, Staffordshire',
    description,
    type: 'website',
    url: '/',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
