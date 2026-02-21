'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { team } from '@/lib/data/team'

export function TeamContent() {
  const { t, locale } = useLanguage()

  // First row: MD and GM (first 2), Second row: department heads (remaining 3)
  const leadership = team.slice(0, 2)
  const departmentHeads = team.slice(2)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.team.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.team.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Leadership row — 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
            {leadership.map((member, i) => (
              <AnimateOnScroll key={member.id} delay={i * 0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <ImagePlaceholder
                    label={member.name}
                    aspectRatio="aspect-[4/5]"
                    className="rounded-none border-0"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-green-900 group-hover:text-yellow-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-yellow-600 mb-3">
                      {locale === 'id' ? member.roleId : member.roleEn}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {locale === 'id' ? member.bioId : member.bioEn}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Department heads row — 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, i) => (
              <AnimateOnScroll key={member.id} delay={(i + 2) * 0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <ImagePlaceholder
                    label={member.name}
                    aspectRatio="aspect-[4/5]"
                    className="rounded-none border-0"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-heading font-bold text-green-900 group-hover:text-yellow-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-yellow-600 mb-3">
                      {locale === 'id' ? member.roleId : member.roleEn}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {locale === 'id' ? member.bioId : member.bioEn}
                    </p>
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
