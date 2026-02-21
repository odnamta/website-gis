'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { CTABanner } from '@/components/shared/CTABanner'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { services } from '@/lib/data/services'

export function ServicesContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.services.sectionTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.services.sectionSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
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

      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}
