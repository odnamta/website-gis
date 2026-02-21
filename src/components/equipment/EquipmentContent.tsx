'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { equipmentCategories } from '@/lib/data/equipment'
import { Truck, Gauge, Hash, Wrench } from 'lucide-react'

const categoryIcons: Record<string, typeof Truck> = {
  'Prime Movers & Head Trucks': Truck,
  'Hydraulic Jacks': Gauge,
  'Multi-Axle Trailers': Truck,
  'Cranes & Lifting': Wrench,
  'Gantry Systems': Wrench,
}

export function EquipmentContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.equipment.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.equipment.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {equipmentCategories.map((category, ci) => {
              const Icon = categoryIcons[category.name] || Wrench
              const categoryName = locale === 'id' ? category.nameId : category.name

              return (
                <AnimateOnScroll key={category.name} delay={ci * 0.1}>
                  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Category header */}
                    <div className="bg-green-900 px-6 py-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-heading font-bold text-white">
                          {categoryName}
                        </h2>
                        <p className="text-sm text-green-300">
                          {category.items.length} {locale === 'id' ? 'unit tipe' : 'unit types'}
                        </p>
                      </div>
                    </div>

                    {/* Equipment table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-100">
                            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              {locale === 'id' ? 'Peralatan' : 'Equipment'}
                            </th>
                            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              <span className="flex items-center gap-1.5">
                                <Gauge className="w-3.5 h-3.5" />
                                {locale === 'id' ? 'Kapasitas' : 'Capacity'}
                              </span>
                            </th>
                            <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              <span className="flex items-center gap-1.5">
                                <Hash className="w-3.5 h-3.5" />
                                {locale === 'id' ? 'Jumlah' : 'Quantity'}
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                          {category.items.map((item) => (
                            <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4">
                                <span className="font-medium text-green-900">{item.name}</span>
                              </td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-yellow-50 text-yellow-700 text-sm font-medium">
                                  {item.capacity}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <span className="text-slate-600 font-medium">
                                  {item.quantity} {locale === 'id' ? 'unit' : 'units'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>

          {/* Total fleet summary */}
          <AnimateOnScroll>
            <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-slate-500">
                {locale === 'id'
                  ? `Total ${equipmentCategories.reduce((sum, c) => sum + c.items.reduce((s, i) => s + i.quantity, 0), 0)} unit peralatan di ${equipmentCategories.length} kategori`
                  : `Total ${equipmentCategories.reduce((sum, c) => sum + c.items.reduce((s, i) => s + i.quantity, 0), 0)} units of equipment across ${equipmentCategories.length} categories`}
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
