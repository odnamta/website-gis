'use client'

import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/context'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { getProjectBySlug } from '@/lib/data/projects'
import { CheckCircle } from 'lucide-react'

function CaseStudyDetailContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const p = getProjectBySlug(slug)

  if (!p) return notFound()

  const title = locale === 'id' ? p.titleId : p.titleEn
  const challenge = locale === 'id' ? p.challengeId : p.challengeEn
  const solution = locale === 'id' ? p.solutionId : p.solutionEn
  const results = locale === 'id' ? p.resultsId : p.resultsEn

  return (
    <>
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { label: t.nav.home, href: '/' },
              { label: t.nav.projects, href: '/case-studies' },
              { label: title },
            ]}
          />
          <AnimateOnScroll>
            <div className="flex gap-2 mt-6 mb-4">
              <Badge variant="accent">{p.service}</Badge>
              <Badge variant="outline">{p.industry}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">{title}</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-green-900 mb-4">{t.projects.challenge}</h2>
            <p className="text-slate-500 leading-relaxed">{challenge}</p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-green-900 mb-4">{t.projects.solution}</h2>
            <p className="text-slate-500 leading-relaxed">{solution}</p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-green-900 mb-4">{t.projects.results}</h2>
            <ul className="space-y-3">
              {results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{result}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}

export function CaseStudyDetailClient({ slug }: { slug: string }) {
  return (
    <PageWrapper>
      <CaseStudyDetailContent slug={slug} />
    </PageWrapper>
  )
}
