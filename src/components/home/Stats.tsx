'use client'

import { useLanguage } from '@/lib/i18n/context'
import { StatCounter } from '@/components/shared/StatCounter'
import { stats } from '@/lib/data/stats'

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter
              key={stat.labelKey}
              value={stat.value}
              suffix={stat.suffix}
              label={t.hero.stats[stat.labelKey]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
