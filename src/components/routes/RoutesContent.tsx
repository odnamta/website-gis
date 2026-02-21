'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { Globe } from 'lucide-react'

export function RoutesContent() {
  const { t, locale } = useLanguage()

  const title = locale === 'id' ? 'Rute & Jaringan' : 'Routes & Coverage'
  const subtitle = locale === 'id'
    ? 'Halaman ini sedang dalam pengembangan.'
    : 'This page is under development.'

  return (
    <>
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg text-green-300">{subtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="aspect-[2/1] rounded-2xl bg-green-50 border border-green-100 flex flex-col items-center justify-center">
              <Globe className="w-20 h-20 text-green-200 mb-4" />
              <p className="text-green-400 text-sm font-medium">
                {locale === 'id' ? 'Halaman akan segera hadir' : 'Coming soon'}
              </p>
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
