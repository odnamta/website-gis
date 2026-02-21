import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { caseStudies } from '@/lib/data/case-studies'

export const dynamic = 'force-static'

const BASE_URL = 'https://gls-id.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/routes`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/partners`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...caseStudyPages]
}
