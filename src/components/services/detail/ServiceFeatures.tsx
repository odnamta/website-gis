'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CheckCircle } from 'lucide-react'
import type { ServiceData } from '@/lib/data/services'

interface ServiceFeaturesProps {
  service: ServiceData
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  const { t } = useLanguage()
  const content = t.services[service.translationKey]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8 text-center">
          {t.services.detailPage.features}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {content.features.map((feature, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{feature}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
