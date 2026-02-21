'use client'

import { useLanguage } from '@/lib/i18n/context'
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Button } from '@/components/shared/Button'
import type { ServiceData } from '@/lib/data/services'

interface ServiceHeroProps {
  service: ServiceData
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const { t } = useLanguage()
  const Icon = service.icon
  const content = t.services[service.translationKey]

  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-white/5 translate-x-8 translate-y-8" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BreadcrumbNav
          items={[
            { label: t.nav.home, href: '/' },
            { label: t.nav.services, href: '/services' },
            { label: content.title },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          <AnimateOnScroll>
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-green-300 leading-relaxed mb-8">{content.description}</p>
            <Button variant="accent" href="/contact">
              {t.services.detailPage.ctaButton}
            </Button>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="aspect-video rounded-2xl bg-green-800/50 relative overflow-hidden flex items-center justify-center">
              {/* Decorative visual composition */}
              <div className="absolute inset-0">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                {/* Layered circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-green-600/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-green-500/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-yellow-500/10" />
                {/* Gold accent line */}
                <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-yellow-500/40 to-transparent" />
                <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-yellow-500/40 to-transparent" />
              </div>
              {/* Central icon */}
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-green-700/50 backdrop-blur-sm flex items-center justify-center border border-green-600/30">
                <Icon className="w-12 h-12 text-yellow-400/80" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
