'use client'

import { useLanguage } from '@/lib/i18n/context'
import { StatCounter } from '@/components/shared/StatCounter'
import { stats } from '@/lib/data/stats'

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.labelKey} className="relative">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={t.hero.stats[stat.labelKey]}
                light
              />
              {/* Vertical divider between stats on desktop */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
