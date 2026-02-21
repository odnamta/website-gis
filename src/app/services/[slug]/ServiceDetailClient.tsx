'use client'

import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { CTABanner } from '@/components/shared/CTABanner'
import { ServiceHero } from '@/components/services/detail/ServiceHero'
import { ServiceProcess } from '@/components/services/detail/ServiceProcess'
import { ServiceFeatures } from '@/components/services/detail/ServiceFeatures'
import { ServiceBenefits } from '@/components/services/detail/ServiceBenefits'
import { ServiceFAQ } from '@/components/services/detail/ServiceFAQ'
import { services, getServiceBySlug } from '@/lib/data/services'

function ServiceDetailContent({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const service = getServiceBySlug(slug)

  if (!service) return notFound()

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <ServiceHero service={service} />
      <ServiceProcess service={service} />
      <ServiceFeatures service={service} />
      <ServiceBenefits service={service} />
      <ServiceFAQ service={service} />

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8 text-center">
            {t.services.detailPage.relatedServices}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((rs) => {
              const RSIcon = rs.icon
              const rsContent = t.services[rs.translationKey]
              return (
                <AnimateOnScroll key={rs.slug} delay={0.05}>
                  <ServiceCard
                    icon={<RSIcon className="w-6 h-6" />}
                    title={rsContent.title}
                    description={rsContent.description}
                    href={`/services/${rs.slug}`}
                    learnMore={t.common.learnMore}
                  />
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title={t.services.detailPage.ctaTitle}
        subtitle={t.services.detailPage.ctaSubtitle}
        buttonText={t.services.detailPage.ctaButton}
        href="/contact"
      />
    </>
  )
}

export function ServiceDetailClient({ slug }: { slug: string }) {
  return (
    <PageWrapper>
      <ServiceDetailContent slug={slug} />
    </PageWrapper>
  )
}
