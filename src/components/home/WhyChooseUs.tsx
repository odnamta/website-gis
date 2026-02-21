'use client'

import { Globe, Shield, FileCheck, Settings } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

const icons = [Globe, Shield, FileCheck, Settings]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.whyChooseUs.sectionTitle} subtitle={t.whyChooseUs.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.reasons.map((reason, i) => {
            const Icon = icons[i]
            return (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-green-900 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-green-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
