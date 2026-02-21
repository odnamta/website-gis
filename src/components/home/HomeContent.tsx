'use client'

import { Hero } from '@/components/home/Hero'
import { ServiceOverview } from '@/components/home/ServiceOverview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { ClientLogos } from '@/components/home/ClientLogos'
import { Stats } from '@/components/home/Stats'
import { Testimonials } from '@/components/home/Testimonials'
import { LatestNews } from '@/components/home/LatestNews'
import { CTABanner } from '@/components/shared/CTABanner'
import { useLanguage } from '@/lib/i18n/context'

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />
      <ServiceOverview />
      <WhyChooseUs />
      <ClientLogos />
      <Stats />
      <Testimonials />
      <LatestNews />
      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}
