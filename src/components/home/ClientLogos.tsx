'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

const clients = [
  'Maersk', 'CMA CGM', 'Hapag-Lloyd', 'MSC',
  'ONE', 'Evergreen', 'COSCO', 'Yang Ming',
]

export function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
            {t.clients.sectionTitle}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((name, i) => (
            <AnimateOnScroll key={name} delay={i * 0.05}>
              <div className="h-16 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center px-3">
                <span className="text-xs font-semibold text-slate-400">{name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
