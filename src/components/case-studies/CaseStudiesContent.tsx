'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { caseStudies } from '@/lib/data/case-studies'

export function CaseStudiesContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.caseStudies.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.caseStudies.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimateOnScroll key={cs.slug} delay={i * 0.1}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ImagePlaceholder label={cs.service} aspectRatio="aspect-video" className="rounded-none border-0" />
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      <Badge variant="accent">{cs.service}</Badge>
                      <Badge variant="outline">{cs.industry}</Badge>
                    </div>
                    <h3 className="font-heading font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {locale === 'id' ? cs.titleId : cs.titleEn}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {locale === 'id' ? cs.summaryId : cs.summaryEn}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-gold-600">
                      {t.caseStudies.readMore}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
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
