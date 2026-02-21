'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { partners } from '@/lib/data/partners'

const accentColors = [
  'bg-green-900 text-yellow-400',
  'bg-yellow-500 text-green-900',
  'bg-green-700 text-white',
  'bg-green-900 text-yellow-400',
  'bg-yellow-500 text-green-900',
  'bg-green-800 text-yellow-400',
  'bg-green-900 text-yellow-400',
  'bg-yellow-500 text-green-900',
  'bg-green-700 text-white',
  'bg-green-900 text-yellow-400',
]

export function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 36px)',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll>
          <p className="text-center text-sm font-semibold text-yellow-400 uppercase tracking-[0.2em] mb-12">
            {t.partners.sectionTitle}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <AnimateOnScroll key={partner.name} delay={i * 0.05}>
              <div className="group h-20 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 px-4 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-200">
                <div className={`w-9 h-9 rounded-lg ${accentColors[i % accentColors.length]} flex items-center justify-center flex-shrink-0 text-sm font-bold`}>
                  {partner.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-tight">{partner.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
