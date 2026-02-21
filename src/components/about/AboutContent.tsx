'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { CTABanner } from '@/components/shared/CTABanner'
import { Target, Eye } from 'lucide-react'

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.about.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.about.pageSubtitle}</p>
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
              <h2 className="text-3xl font-heading font-bold text-green-900 mb-6">{t.about.storyTitle}</h2>
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
              <div className="p-8 rounded-2xl bg-green-900 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{t.about.visionTitle}</h3>
                <p className="text-green-300 leading-relaxed">{t.about.vision}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-green-900 mb-4">{t.about.missionTitle}</h3>
                <ul className="space-y-3">
                  {t.about.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500">
                      <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-yellow-600">{i + 1}</span>
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

      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}
