'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/lib/data/services'

export function ServiceOverview() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            const content = t.services[service.translationKey]
            return (
              <ServiceCard
                key={service.slug}
                icon={<Icon className="w-6 h-6" />}
                title={content.title}
                description={content.description}
                href={`/services/${service.slug}`}
                learnMore={t.common.learnMore}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
