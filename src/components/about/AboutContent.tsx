'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { CTABanner } from '@/components/shared/CTABanner'
import { company } from '@/lib/data/company'
import { Target, Eye, Award } from 'lucide-react'

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.about.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.about.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <ImagePlaceholder label="Company Photo" className="w-full" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">{t.about.storyTitle}</h2>
              <div className="space-y-4">
                {t.about.story.map((para, i) => (
                  <p key={i} className="text-slate-500 leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="p-8 rounded-2xl bg-navy-900 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{t.about.visionTitle}</h3>
                <p className="text-navy-300 leading-relaxed">{t.about.vision}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">{t.about.missionTitle}</h3>
                <ul className="space-y-3">
                  {t.about.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500">
                      <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-gold-600">{i + 1}</span>
                      </div>
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.about.certificationsTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {company.certifications.map((cert, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-white border border-slate-200">
                  <Award className="w-8 h-8 text-gold-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-900">{cert}</span>
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
