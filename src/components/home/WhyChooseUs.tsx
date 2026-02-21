'use client'

import { Clock, Truck, Award, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

const icons = [Clock, Truck, Award, MapPin]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13,77,37,1) 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.whyChooseUs.sectionTitle} subtitle={t.whyChooseUs.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChooseUs.reasons.map((reason, i) => {
            const Icon = icons[i]
            return (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="group text-center p-8 rounded-2xl bg-white border border-slate-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-900 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-green-900 flex items-center justify-center mb-5 group-hover:bg-yellow-500 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-yellow-400 group-hover:text-green-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-green-900 mb-3">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
