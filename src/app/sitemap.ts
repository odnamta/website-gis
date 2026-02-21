import type { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { projects } from '@/lib/data/projects'

export const dynamic = 'force-static'

const BASE_URL = 'https://gamaintisamudera.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/equipment`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/team`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'monthly', priority: 0.6 },
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

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...projectPages]
}
