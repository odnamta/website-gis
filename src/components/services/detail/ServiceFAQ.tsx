'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { AccordionItem } from '@/components/shared/AccordionItem'
import { serviceFAQs } from '@/lib/data/service-details'
import type { ServiceData } from '@/lib/data/services'

interface ServiceFAQProps {
  service: ServiceData
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const { locale, t } = useLanguage()
  const faqs = serviceFAQs[service.slug as keyof typeof serviceFAQs]

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.services.detailPage.faq} />
        <AnimateOnScroll>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question[locale]}
                answer={faq.answer[locale]}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
