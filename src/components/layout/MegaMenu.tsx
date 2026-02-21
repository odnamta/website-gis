'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Ship, Plane, FileCheck, Warehouse, Truck, Package } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const serviceLinks = [
  { slug: 'ocean-freight', icon: Ship, key: 'ocean' as const },
  { slug: 'air-freight', icon: Plane, key: 'air' as const },
  { slug: 'customs-brokerage', icon: FileCheck, key: 'customs' as const },
  { slug: 'warehousing', icon: Warehouse, key: 'warehousing' as const },
  { slug: 'land-transport', icon: Truck, key: 'land' as const },
  { slug: 'project-cargo', icon: Package, key: 'project' as const },
]

export function MegaMenu() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[540px] p-5 bg-white rounded-xl shadow-xl border border-slate-100"
    >
      <div className="grid grid-cols-2 gap-2">
        {serviceLinks.map(({ slug, icon: Icon, key }) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-50 transition-colors">
              <Icon className="w-5 h-5 text-navy-600 group-hover:text-gold-600 transition-colors" />
            </div>
            <div>
              <div className="text-sm font-semibold text-navy-900">{t.services[key].title}</div>
              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{t.services[key].description}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-100">
        <Link
          href="/services"
          className="flex items-center justify-center gap-1 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
        >
          {t.services.viewAll} →
        </Link>
      </div>
    </motion.div>
  )
}
