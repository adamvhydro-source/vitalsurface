import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sectors, getSectorBySlug } from '@/lib/sectors'
import SectorPageContent from './SectorPageContent'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) return {}
  const url = `/sectors/${sector.slug}`
  return {
    title: sector.title,
    description: sector.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${sector.title} | Vital Surface – Commercial Surface Finishing, Staffordshire`,
      description: sector.metaDescription,
      type: 'website',
      url,
    },
  }
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params
  const sector = getSectorBySlug(slug)
  if (!sector) notFound()

  return <SectorPageContent sector={sector} />
}
