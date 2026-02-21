'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  const { t, locale } = useLanguage()

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.testimonials.sectionTitle} subtitle={t.testimonials.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={i * 0.1}>
              <TestimonialCard
                quote={locale === 'id' ? item.quoteId : item.quoteEn}
                name={item.name}
                role={item.role}
                company={item.company}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
