'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { partners } from '@/lib/data/partners'
import { Building2 } from 'lucide-react'

export function PartnersContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.partners.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.partners.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.partners.sectionTitle} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partners.map((partner, i) => (
              <AnimateOnScroll key={partner.name} delay={i * 0.05}>
                <div className="h-28 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center hover:shadow-md transition-shadow p-4">
                  <Building2 className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-sm font-medium text-green-900 text-center">{partner.name}</span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {locale === 'id' ? partner.descriptionId : partner.descriptionEn}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
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
