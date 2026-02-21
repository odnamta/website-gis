'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Button } from '@/components/shared/Button'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { positions, cultureValues } from '@/lib/data/careers'
import { Heart, Users, Award, TrendingUp, MapPin, Briefcase } from 'lucide-react'

const cultureIcons: Record<string, typeof Heart> = {
  integrity: Heart,
  teamwork: Users,
  excellence: Award,
  growth: TrendingUp,
}

export function CareersContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.careers.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.careers.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.careers.cultureTitle} subtitle={t.careers.cultureSubtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, i) => {
              const Icon = cultureIcons[value.iconKey] || Heart
              return (
                <AnimateOnScroll key={value.iconKey} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-xl border border-slate-200 bg-white">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-yellow-50 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-yellow-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-green-900 mb-2">
                      {locale === 'id' ? value.titleId : value.titleEn}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {locale === 'id' ? value.descId : value.descEn}
                    </p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.careers.positionsTitle} />
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <AnimateOnScroll key={pos.id} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-semibold text-green-900 text-lg">
                        {locale === 'id' ? pos.titleId : pos.titleEn}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <Briefcase className="w-3.5 h-3.5" />
                          {pos.department}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {pos.location}
                        </span>
                        <Badge variant="accent">{pos.type}</Badge>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">
                        {locale === 'id' ? pos.descriptionId : pos.descriptionEn}
                      </p>
                    </div>
                    <Button variant="secondary" href="/contact" className="flex-shrink-0">
                      {t.careers.applyButton}
                    </Button>
                  </div>
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
