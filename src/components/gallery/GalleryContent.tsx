'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { X, Filter, Camera, Factory, Truck, Users, Building2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

type GalleryCategory = 'All' | 'Projects' | 'Equipment' | 'Team' | 'Office'

interface GalleryItem {
  id: string
  labelId: string
  labelEn: string
  category: Exclude<GalleryCategory, 'All'>
  aspectRatio: string
}

const galleryItems: GalleryItem[] = [
  { id: 'g1', labelId: 'Heavy Lift — Petrokimia Gresik', labelEn: 'Heavy Lift — Petrokimia Gresik', category: 'Projects', aspectRatio: 'aspect-video' },
  { id: 'g2', labelId: 'Pengiriman Mesin Wartsila ke Sorong', labelEn: 'Wartsila Engine Delivery to Sorong', category: 'Projects', aspectRatio: 'aspect-[4/3]' },
  { id: 'g3', labelId: 'Erection PLTU Lombok', labelEn: 'Lombok CFSPP Erection', category: 'Projects', aspectRatio: 'aspect-video' },
  { id: 'g4', labelId: 'Scania Prime Mover Fleet', labelEn: 'Scania Prime Mover Fleet', category: 'Equipment', aspectRatio: 'aspect-[4/3]' },
  { id: 'g5', labelId: 'Goldhofer Multi-Axle Trailer', labelEn: 'Goldhofer Multi-Axle Trailer', category: 'Equipment', aspectRatio: 'aspect-video' },
  { id: 'g6', labelId: 'Liebherr Mobile Crane', labelEn: 'Liebherr Mobile Crane', category: 'Equipment', aspectRatio: 'aspect-[4/3]' },
  { id: 'g7', labelId: 'Tim Engineering GIS', labelEn: 'GIS Engineering Team', category: 'Team', aspectRatio: 'aspect-video' },
  { id: 'g8', labelId: 'Tim Operasi Lapangan', labelEn: 'Field Operations Team', category: 'Team', aspectRatio: 'aspect-[4/3]' },
  { id: 'g9', labelId: 'Safety Briefing di Lokasi Proyek', labelEn: 'Safety Briefing at Project Site', category: 'Team', aspectRatio: 'aspect-video' },
  { id: 'g10', labelId: 'Kantor Pusat GIS — Surabaya', labelEn: 'GIS Headquarters — Surabaya', category: 'Office', aspectRatio: 'aspect-[4/3]' },
  { id: 'g11', labelId: 'Instalasi Peralatan Pelabuhan Pelindo', labelEn: 'Pelindo Port Equipment Installation', category: 'Projects', aspectRatio: 'aspect-video' },
  { id: 'g12', labelId: 'Workshop & Maintenance Area', labelEn: 'Workshop & Maintenance Area', category: 'Office', aspectRatio: 'aspect-[4/3]' },
]

const filterCategories: GalleryCategory[] = ['All', 'Projects', 'Equipment', 'Team', 'Office']

const filterLabelsId: Record<GalleryCategory, string> = {
  All: 'Semua',
  Projects: 'Proyek',
  Equipment: 'Peralatan',
  Team: 'Tim',
  Office: 'Kantor',
}

const categoryIcons: Record<string, typeof Factory> = {
  Projects: Factory,
  Equipment: Truck,
  Team: Users,
  Office: Building2,
}

const categoryGradients: Record<string, string> = {
  Projects: 'from-green-900 via-green-800 to-emerald-900',
  Equipment: 'from-green-900 via-teal-900 to-green-900',
  Team: 'from-green-900 via-green-800 to-green-900',
  Office: 'from-green-900 via-emerald-900 to-green-800',
}

function GalleryVisual({ item, locale }: { item: GalleryItem; locale: string }) {
  const Icon = categoryIcons[item.category] || Camera
  const gradient = categoryGradients[item.category] || 'from-green-900 to-green-800'
  const label = locale === 'id' ? item.labelId : item.labelEn

  return (
    <div className={`relative ${item.aspectRatio} bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)',
      }} />
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <Icon className="w-32 h-32 text-white" strokeWidth={0.5} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <div className="w-12 h-12 rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center mb-3">
          <Icon className="w-6 h-6 text-yellow-400" />
        </div>
        <p className="text-white font-heading font-semibold text-sm text-center max-w-[200px] leading-snug">
          {label}
        </p>
        <div className="flex items-center gap-1.5 mt-2">
          <Camera className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">{item.category}</span>
        </div>
      </div>
    </div>
  )
}

export function GalleryContent() {
  const { t, locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute -right-20 top-0 w-96 h-96 opacity-[0.03]">
          <Camera className="w-full h-full text-white" strokeWidth={0.3} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.gallery.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.gallery.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter bar */}
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-10 flex-wrap">
              <Filter className="w-5 h-5 text-slate-400" />
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-green-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {locale === 'id' ? filterLabelsId[cat] : cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Photo grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxItem(item)}
                  className="group block w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-left"
                >
                  <GalleryVisual item={item} locale={locale} />
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-green-900 group-hover:text-yellow-600 transition-colors">
                      {locale === 'id' ? item.labelId : item.labelEn}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                {locale === 'id' ? 'Tidak ada foto untuk kategori ini.' : 'No photos in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-green-900/80 text-white flex items-center justify-center hover:bg-green-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <GalleryVisual item={{...lightboxItem, aspectRatio: 'aspect-video'}} locale={locale} />
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-green-900">
                  {locale === 'id' ? lightboxItem.labelId : lightboxItem.labelEn}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{lightboxItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner
        title={t.ctaBanner.title}
        subtitle={t.ctaBanner.subtitle}
        buttonText={t.ctaBanner.buttonText}
        href="/contact"
      />
    </>
  )
}
