'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { AccordionItem } from '@/components/shared/AccordionItem'
import { CTABanner } from '@/components/shared/CTABanner'
import { faqItems } from '@/lib/data/faq'

const categories = ['general', 'shipping', 'customs', 'pricing'] as const

export function FAQContent() {
  const { t, locale } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('general')

  const categoryLabels: Record<string, string> = {
    general: t.faq.categories.general,
    shipping: t.faq.categories.shipping,
    customs: t.faq.categories.customs,
    pricing: t.faq.categories.pricing,
  }

  const filtered = faqItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.faq.pageTitle}
            </h1>
            <p className="text-lg text-navy-300">{t.faq.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Category tabs */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-navy-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* FAQ items */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              {filtered.map((item) => (
                <AccordionItem
                  key={item.id}
                  question={locale === 'id' ? item.questionId : item.questionEn}
                  answer={locale === 'id' ? item.answerId : item.answerEn}
                />
              ))}
            </div>
          </AnimateOnScroll>
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
