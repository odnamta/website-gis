'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Filter, Factory, Zap, Anchor, Ship } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { projects } from '@/lib/data/projects'

const serviceFilters = ['All', 'Freight Forwarding', 'Project Cargo', 'Mechanical Erection']

const industryIcons: Record<string, typeof Factory> = {
  'Petrochemical': Factory,
  'Power Generation': Zap,
  'Port & Maritime': Anchor,
}

export function ProjectsContent() {
  const { t, locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.service === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.projects.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.projects.pageSubtitle}</p>
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
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-green-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((p, i) => {
              const Icon = industryIcons[p.industry] || Ship
              return (
                <AnimateOnScroll key={p.slug} delay={i * 0.1}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {/* Visual placeholder */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.06]" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                        <Icon className="w-56 h-56 text-white" strokeWidth={0.5} />
                      </div>
                      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-yellow-400" />
                        </div>
                        <span className="text-xs text-yellow-400 font-semibold uppercase tracking-[0.2em] mb-1">{p.industry}</span>
                        <p className="text-white font-heading font-semibold text-base max-w-xs">
                          {locale === 'id' ? p.titleId : p.titleEn}
                        </p>
                      </div>
                      {/* Date overlay */}
                      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {p.date}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-900/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <Badge variant="accent">{p.service}</Badge>
                        <Badge variant="outline">{p.industry}</Badge>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-green-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {locale === 'id' ? p.titleId : p.titleEn}
                      </h3>
                      <p className="text-slate-500 leading-relaxed line-clamp-2 mb-4">
                        {locale === 'id' ? p.summaryId : p.summaryEn}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-600">
                        {t.projects.readMore}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                {locale === 'id' ? 'Tidak ada proyek untuk kategori ini.' : 'No projects in this category.'}
              </p>
            </div>
          )}
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
