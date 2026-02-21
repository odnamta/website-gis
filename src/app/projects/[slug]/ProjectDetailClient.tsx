'use client'

import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/context'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { getProjectBySlug } from '@/lib/data/projects'
import { CheckCircle, Calendar, Wrench } from 'lucide-react'

function ProjectDetailContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const p = getProjectBySlug(slug)

  if (!p) return notFound()

  const title = locale === 'id' ? p.titleId : p.titleEn
  const summary = locale === 'id' ? p.summaryId : p.summaryEn
  const challenge = locale === 'id' ? p.challengeId : p.challengeEn
  const solution = locale === 'id' ? p.solutionId : p.solutionEn
  const results = locale === 'id' ? p.resultsId : p.resultsEn

  return (
    <>
      {/* Hero with large photo */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { label: t.nav.home, href: '/' },
              { label: t.nav.projects, href: '/projects' },
              { label: title },
            ]}
          />
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mt-6 mb-4">
              <Badge variant="accent">{p.service}</Badge>
              <Badge variant="outline">{p.industry}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-green-300 leading-relaxed mb-6">{summary}</p>
            <div className="flex items-center gap-4 text-sm text-green-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {p.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                {p.service}
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-0">
          <AnimateOnScroll>
            <ImagePlaceholder
              label={`${title} — Project Photo`}
              aspectRatio="aspect-[21/9]"
              className="rounded-b-2xl shadow-lg"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Challenge / Solution / Results */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Challenge */}
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              <div>
                <h2 className="text-xl font-heading font-bold text-green-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">01</span>
                  </span>
                  {t.projects.challenge}
                </h2>
              </div>
              <p className="text-slate-500 leading-relaxed">{challenge}</p>
            </div>
          </AnimateOnScroll>

          {/* Solution */}
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              <div>
                <h2 className="text-xl font-heading font-bold text-green-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">02</span>
                  </span>
                  {t.projects.solution}
                </h2>
              </div>
              <p className="text-slate-500 leading-relaxed">{solution}</p>
            </div>
          </AnimateOnScroll>

          {/* Results */}
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              <div>
                <h2 className="text-xl font-heading font-bold text-green-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">03</span>
                  </span>
                  {t.projects.results}
                </h2>
              </div>
              <ul className="space-y-3">
                {results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
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

export function ProjectDetailClient({ slug }: { slug: string }) {
  return (
    <PageWrapper>
      <ProjectDetailContent slug={slug} />
    </PageWrapper>
  )
}
