'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/shared/Button'
import { useLanguage } from '@/lib/i18n/context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
              <Image src="/logo.png" alt="" width={20} height={20} className="w-5 h-5 object-contain rounded-sm" />
              PT Gama Lintas Samudera
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-8 max-w-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" href="/contact">
                {t.hero.ctaQuote}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" href="/services" className="border-navy-400 text-white hover:bg-navy-800">
                {t.hero.ctaServices}
              </Button>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '30+', label: t.hero.stats.yearsExperience },
              { value: '50+', label: t.hero.stats.countriesServed },
              { value: '20+', label: t.hero.stats.shippingPartners },
              { value: '100%', label: t.hero.stats.clientSatisfaction },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
              >
                <div className="text-3xl sm:text-4xl font-heading font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z"
            fill="var(--color-surface)"
          />
        </svg>
      </div>
    </section>
  )
}
