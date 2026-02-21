'use client'

import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/context'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { getCaseStudyBySlug } from '@/lib/data/case-studies'
import { CheckCircle } from 'lucide-react'

function CaseStudyDetailContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage()
  const cs = getCaseStudyBySlug(slug)

  if (!cs) return notFound()

  const title = locale === 'id' ? cs.titleId : cs.titleEn
  const challenge = locale === 'id' ? cs.challengeId : cs.challengeEn
  const solution = locale === 'id' ? cs.solutionId : cs.solutionEn
  const results = locale === 'id' ? cs.resultsId : cs.resultsEn

  return (
    <>
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { label: t.nav.home, href: '/' },
              { label: t.nav.caseStudies, href: '/case-studies' },
              { label: title },
            ]}
          />
          <AnimateOnScroll>
            <div className="flex gap-2 mt-6 mb-4">
              <Badge variant="accent">{cs.service}</Badge>
              <Badge variant="outline">{cs.industry}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">{title}</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">{t.caseStudies.challenge}</h2>
            <p className="text-slate-500 leading-relaxed">{challenge}</p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">{t.caseStudies.solution}</h2>
            <p className="text-slate-500 leading-relaxed">{solution}</p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">{t.caseStudies.results}</h2>
            <ul className="space-y-3">
              {results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
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
