'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { Badge } from '@/components/shared/Badge'
import { regions } from '@/lib/data/routes'
import { MapPin, Globe } from 'lucide-react'

export function RoutesContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.routes.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.routes.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Coverage Map placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.routes.coverageTitle} />
          <AnimateOnScroll>
            <div className="aspect-[2/1] rounded-2xl bg-navy-50 border border-navy-100 flex flex-col items-center justify-center">
              <Globe className="w-20 h-20 text-navy-200 mb-4" />
              <p className="text-navy-400 text-sm font-medium">Interactive Coverage Map</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trade Lanes by Region */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.routes.tradelanesTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <AnimateOnScroll key={region.id} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-white border border-slate-200">
                  <h3 className="text-lg font-heading font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold-500" />
                    {locale === 'id' ? region.nameId : region.nameEn}
                  </h3>
                  <ul className="space-y-3">
                    {region.routes.map((route) => (
                      <li key={route.id}>
                        <div className="text-sm font-medium text-navy-800 mb-1">
                          {locale === 'id' ? route.nameId : route.nameEn}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {route.ports.map((port) => (
                            <Badge key={port} variant="outline">{port}</Badge>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
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
