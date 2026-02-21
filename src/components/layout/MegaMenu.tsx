'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Ship, Truck, Wrench } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const serviceLinks = [
  { slug: 'freight-forwarding', icon: Ship, key: 'freightForwarding' as const },
  { slug: 'project-cargo', icon: Truck, key: 'projectCargo' as const },
  { slug: 'mechanical-erection', icon: Wrench, key: 'mechanicalErection' as const },
]

export function MegaMenu() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[440px] p-5 bg-white rounded-xl shadow-xl border border-slate-100"
    >
      <div className="grid grid-cols-1 gap-2">
        {serviceLinks.map(({ slug, icon: Icon, key }) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-50 transition-colors">
              <Icon className="w-5 h-5 text-green-600 group-hover:text-yellow-600 transition-colors" />
            </div>
            <div>
              <div className="text-sm font-semibold text-green-900">{t.services[key].title}</div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{t.services[key].description}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-100">
        <Link
          href="/services"
          className="flex items-center justify-center gap-1 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
        >
          {t.services.viewAll} →
        </Link>
      </div>
    </motion.div>
  )
}
