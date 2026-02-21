'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { StatCounter } from '@/components/shared/StatCounter'
import { serviceStats } from '@/lib/data/service-details'
import type { ServiceData } from '@/lib/data/services'

interface ServiceBenefitsProps {
  service: ServiceData
}

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  const { locale, t } = useLanguage()
  const content = t.services[service.translationKey]
  const stats = serviceStats[service.slug as keyof typeof serviceStats]

  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading title={t.services.detailPage.benefits} light />

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {stats.map((stat, i) => (
              <StatCounter
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label[locale]}
              />
            ))}
          </div>
        )}

        {/* Benefit cards */}
        <div className={`grid gap-6 ${content.benefits.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'} max-w-5xl mx-auto`}>
          {content.benefits.map((benefit, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-green-300 leading-relaxed">{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
