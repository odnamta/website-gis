'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { services } from '@/lib/data/services'

export function ServiceOverview() {
  const { t } = useLanguage()

  return (
    <section className="py-24 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13,77,37,1) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle} />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            const content = t.services[service.translationKey]
            return (
              <AnimateOnScroll key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full"
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-green-900 via-green-700 to-yellow-500 group-hover:from-yellow-500 group-hover:via-yellow-400 group-hover:to-green-700 transition-all duration-500" />

                  {/* Icon header area */}
                  <div className="relative bg-green-900 px-8 pt-8 pb-12 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)',
                    }} />
                    <div className="absolute -right-6 -bottom-6 opacity-[0.06]">
                      <Icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-green-900" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 -mt-4 relative">
                    <h3 className="text-xl font-heading font-bold text-green-900 mb-3">{content.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-6 text-sm">{content.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                      {t.common.learnMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
