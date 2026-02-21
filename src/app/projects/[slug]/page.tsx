import type { Metadata } from 'next'
import { projects, getProjectBySlug } from '@/lib/data/projects'
import { company } from '@/lib/data/company'
import { ProjectDetailClient } from './ProjectDetailClient'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getProjectBySlug(slug)

  if (!p) return {}

  return {
    title: p.titleEn,
    description: p.summaryEn,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: p.titleEn,
      description: p.summaryEn,
      url: `https://gamaintisamudera.com/projects/${slug}`,
      siteName: company.name,
      type: 'article',
    },
  }
}

function ProjectJsonLd({ slug }: { slug: string }) {
  const p = getProjectBySlug(slug)
  if (!p) return null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gamaintisamudera.com' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://gamaintisamudera.com/projects' },
      { '@type': 'ListItem', position: 3, name: p.titleEn, item: `https://gamaintisamudera.com/projects/${slug}` },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  )
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <ProjectJsonLd slug={slug} />
      <ProjectDetailClient slug={slug} />
    </>
  )
}
