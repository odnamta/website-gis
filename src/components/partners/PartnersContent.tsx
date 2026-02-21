'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { shippingLines, agentNetwork, associations } from '@/lib/data/partners'
import { Ship, Globe, Award } from 'lucide-react'

export function PartnersContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.partners.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.partners.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Shipping Lines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.partners.shippingLinesTitle} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {shippingLines.map((partner, i) => (
              <AnimateOnScroll key={partner.name} delay={i * 0.05}>
                <div className="h-24 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <Ship className="w-6 h-6 text-navy-300 mx-auto mb-1" />
                    <span className="text-sm font-medium text-navy-700">{partner.name}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Network */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.partners.agentNetworkTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentNetwork.map((agent, i) => (
              <AnimateOnScroll key={agent.name} delay={i * 0.1}>
                <div className="p-5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-sm">{agent.name}</h3>
                      <p className="text-xs text-slate-500">
                        {locale === 'id' ? agent.descriptionId : agent.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.partners.associationsTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {associations.map((assoc, i) => (
              <AnimateOnScroll key={assoc.name} delay={i * 0.1}>
                <div className="p-5 rounded-xl bg-white border border-slate-200 text-center">
                  <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                  <h3 className="font-heading font-bold text-navy-900">{assoc.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {locale === 'id' ? assoc.descriptionId : assoc.descriptionEn}
                  </p>
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
