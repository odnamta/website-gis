'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Filter } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { CTABanner } from '@/components/shared/CTABanner'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import { projects } from '@/lib/data/projects'

const serviceFilters = ['All', 'Freight Forwarding', 'Project Cargo', 'Mechanical Erection']

export function ProjectsContent() {
  const { t, locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.service === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
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

          {/* Project grid — large photo cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((p, i) => (
              <AnimateOnScroll key={p.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Large photo area */}
                  <div className="relative">
                    <ImagePlaceholder
                      label={p.service}
                      aspectRatio="aspect-[16/10]"
                      className="rounded-none border-0"
                    />
                    {/* Date overlay */}
                    <div className="absolute top-4 right-4 bg-green-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date}
                    </div>
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
            ))}
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
