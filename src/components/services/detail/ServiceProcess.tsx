'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import type { ServiceData } from '@/lib/data/services'

interface ServiceProcessProps {
  service: ServiceData
}

export function ServiceProcess({ service }: ServiceProcessProps) {
  const { t } = useLanguage()
  const content = t.services[service.translationKey]
  const steps = content.processSteps

  if (!steps || steps.length === 0) return null

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.services.detailPage.process} />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
              {steps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 0.08}>
                  <div className="relative pt-12">
                    {/* Numbered badge */}
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-green-900 text-white flex items-center justify-center font-heading font-bold text-sm z-10">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-heading font-semibold text-green-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-heading font-semibold text-green-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
