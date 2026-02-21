'use client'

import { Calendar, Newspaper, Building2 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { newsItems } from '@/lib/data/news'

const categoryIcons: Record<string, typeof Newspaper> = {
  'Project': Newspaper,
  'Company News': Building2,
}

export function NewsContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.news.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.news.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => {
              const Icon = categoryIcons[item.category] || Newspaper
              return (
                <AnimateOnScroll key={item.slug} delay={i * 0.1}>
                  <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    {/* Category header */}
                    <div className="relative aspect-[2/1] bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.06]" style={{
                        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)',
                      }} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                        <Icon className="w-32 h-32 text-white" strokeWidth={0.5} />
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <span className="text-xs text-yellow-400 font-semibold uppercase tracking-widest">{item.category}</span>
                      </div>
                    </div>
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
                      <h3 className="font-heading font-semibold text-green-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {locale === 'id' ? item.titleId : item.titleEn}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-3">
                        {locale === 'id' ? item.summaryId : item.summaryEn}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
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
