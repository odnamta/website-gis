'use client'

import { Calendar } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { newsItems } from '@/lib/data/news'

export function NewsContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.news.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.news.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <AnimateOnScroll key={item.slug} delay={i * 0.1}>
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <ImagePlaceholder label={item.category} aspectRatio="aspect-video" className="rounded-none border-0" />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="accent">{item.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(item.date).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-navy-900 mb-2">
                      {locale === 'id' ? item.titleId : item.titleEn}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-3">
                      {locale === 'id' ? item.summaryId : item.summaryEn}
                    </p>
                  </div>
                </div>
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
