'use client'

import { Hero } from '@/components/home/Hero'
import { ServiceOverview } from '@/components/home/ServiceOverview'
import { Stats } from '@/components/home/Stats'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { ClientLogos } from '@/components/home/ClientLogos'
import { CTABanner } from '@/components/shared/CTABanner'
import { useLanguage } from '@/lib/i18n/context'

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />
      <ServiceOverview />
      <Stats />
      <WhyChooseUs />
      <FeaturedProjects />
      <ClientLogos />
      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}
