'use client'

import { useLanguage } from '@/lib/i18n/context'
import { StatCounter } from '@/components/shared/StatCounter'
import { stats } from '@/lib/data/stats'

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      {/* Subtle industrial pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 36px)',
      }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.labelKey}
              value={stat.value}
              suffix={stat.suffix}
              label={t.hero.stats[stat.labelKey]}
              light
            />
          ))}
        </div>
      </div>
    </section>
  )
}
