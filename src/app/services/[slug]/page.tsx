import type { Metadata } from 'next'
import { services, getServiceBySlug } from '@/lib/data/services'
import { serviceMetadata, serviceFAQs } from '@/lib/data/service-details'
import { company } from '@/lib/data/company'
import { ServiceDetailClient } from './ServiceDetailClient'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = serviceMetadata[slug as keyof typeof serviceMetadata]

  if (!meta) return {}

  return {
    title: meta.title.en,
    description: meta.description.en,
    keywords: meta.keywords.en,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: meta.title.en,
      description: meta.description.en,
      url: `https://gamaintisamudera.com/services/${slug}`,
      siteName: company.name,
      type: 'website',
    },
  }
}

function ServiceJsonLd({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)
  const meta = serviceMetadata[slug as keyof typeof serviceMetadata]
  const faqs = serviceFAQs[slug as keyof typeof serviceFAQs]

  if (!service || !meta) return null

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: meta.title.en,
    description: meta.description.en,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: 'https://gamaintisamudera.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address,
        addressLocality: 'Surabaya',
        addressRegion: 'East Java',
        addressCountry: 'ID',
      },
    },
    areaServed: 'Indonesia',
    url: `https://gamaintisamudera.com/services/${slug}`,
  }

  const faqSchema = faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.en,
      },
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gamaintisamudera.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://gamaintisamudera.com/services' },
      { '@type': 'ListItem', position: 3, name: meta.title.en, item: `https://gamaintisamudera.com/services/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <ServiceJsonLd slug={slug} />
      <ServiceDetailClient slug={slug} />
    </>
  )
}
