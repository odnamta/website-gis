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
      {/* Solid dark background with subtle industrial pattern */}
      <div className="absolute inset-0 bg-green-900" />
      {/* Subtle diagonal lines for industrial feel */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 36px)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        {/* Company badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
            <Image src="/logo.png" alt="" width={20} height={20} className="w-5 h-5 object-contain rounded-sm" />
            PT Gama Intisamudera
          </div>
        </motion.div>

        {/* Main heading — large, uppercase, bold */}
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

        {/* Tagline / subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-green-300 leading-relaxed mb-10 max-w-2xl"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Two CTAs */}
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

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 pt-8 border-t border-white/10"
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
              className="flex items-baseline gap-3"
            >
              <span className="text-3xl sm:text-4xl font-heading font-bold text-yellow-400">
                {stat.value}
              </span>
              <span className="text-sm text-green-300 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
