'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/shared/Button'
import { useLanguage } from '@/lib/i18n/context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-green-900 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Yellow accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 via-yellow-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        {/* Company badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
            <Image src="/logo.svg" alt="" width={20} height={20} className="w-5 h-5 object-contain rounded-sm" />
            PT Gama Intisamudera
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-4xl uppercase tracking-tight"
        >
          <span className="text-yellow-400">HEAVY LIFT</span> &{' '}
          <span className="text-yellow-400">PROJECT</span>{' '}
          LOGISTICS SPECIALIST
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-green-300 leading-relaxed mb-10 max-w-2xl"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <Button variant="accent" href="/services" className="px-8 py-4 text-base">
            {t.hero.ctaServices}
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button variant="secondary" href="/contact" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 text-base">
            {t.hero.ctaQuote}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-10 sm:gap-14 lg:gap-20 pt-8 border-t border-white/10"
        >
          {[
            { value: '30+', label: t.hero.stats.yearsExperience },
            { value: '65+', label: t.hero.stats.totalStaff },
            { value: '100+', label: t.hero.stats.projectsCompleted },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <span className="text-3xl sm:text-4xl font-heading font-bold text-yellow-400 block leading-none">
                {stat.value}
              </span>
              <span className="text-xs text-green-300 uppercase tracking-wider font-medium mt-1.5 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
