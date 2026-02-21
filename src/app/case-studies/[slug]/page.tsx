import type { Metadata } from 'next'
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/case-studies'
import { company } from '@/lib/data/company'
import { CaseStudyDetailClient } from './CaseStudyDetailClient'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)

  if (!cs) return {}

  return {
    title: cs.titleEn,
    description: cs.summaryEn,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: cs.titleEn,
      description: cs.summaryEn,
      url: `https://gls-id.com/case-studies/${slug}`,
      siteName: company.name,
      type: 'article',
    },
  }
}

function CaseStudyJsonLd({ slug }: { slug: string }) {
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gls-id.com' },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://gls-id.com/case-studies' },
      { '@type': 'ListItem', position: 3, name: cs.titleEn, item: `https://gls-id.com/case-studies/${slug}` },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  )
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <CaseStudyJsonLd slug={slug} />
      <CaseStudyDetailClient slug={slug} />
    </>
  )
}
