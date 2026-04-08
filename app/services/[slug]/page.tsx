import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services'
import ServicePageContent from './ServicePageContent'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const url = `/services/${service.slug}`
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Vital Surface – Commercial Surface Finishing, Staffordshire`,
      description: service.metaDescription,
      type: 'website',
      url,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return <ServicePageContent service={service} />
}
