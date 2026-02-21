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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle} />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            const content = t.services[service.translationKey]
            return (
              <AnimateOnScroll key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-8 rounded-2xl border border-slate-200 bg-white hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 rounded-xl bg-green-900 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-yellow-400 group-hover:text-green-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-green-900 mb-3">{content.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{content.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {t.common.learnMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
