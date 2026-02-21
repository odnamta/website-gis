'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { partners } from '@/lib/data/partners'

export function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-10">
            {t.partners.sectionTitle}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
          {partners.map((partner, i) => (
            <AnimateOnScroll key={partner.name} delay={i * 0.05}>
              <div className="h-16 rounded-lg bg-white border border-slate-100 flex items-center justify-center px-3 hover:border-yellow-400 hover:shadow-sm transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 text-center">{partner.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
