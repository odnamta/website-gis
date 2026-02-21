'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { newsItems } from '@/lib/data/news'

export function LatestNews() {
  const { t, locale } = useLanguage()
  const latestThree = newsItems.slice(0, 3)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.latestNews.sectionTitle} subtitle={t.latestNews.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestThree.map((item, i) => (
            <AnimateOnScroll key={item.slug} delay={i * 0.1}>
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="aspect-video bg-green-50 flex items-center justify-center">
                  <span className="text-xs text-green-300 font-medium">{item.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.date).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="font-heading font-semibold text-green-900 mb-2">
                    {locale === 'id' ? item.titleId : item.titleEn}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                    {locale === 'id' ? item.summaryId : item.summaryEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600">
                    {t.latestNews.readMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-900 hover:text-yellow-600 transition-colors"
          >
            {t.latestNews.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
