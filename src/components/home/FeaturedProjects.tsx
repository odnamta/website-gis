'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { projects } from '@/lib/data/projects'

export function FeaturedProjects() {
  const { t, locale } = useLanguage()
  const featured = projects.slice(0, 3)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.projects.pageTitle} subtitle={t.projects.pageSubtitle} />
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 0.1}>
              <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Project image placeholder */}
                <div className="aspect-[4/3] bg-green-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,1) 20px, rgba(255,255,255,1) 21px)',
                  }} />
                  <div className="text-center p-4 relative z-10">
                    <span className="text-xs text-green-400 font-medium uppercase tracking-wider">{project.industry}</span>
                    <p className="text-white font-heading font-semibold mt-1 text-sm">
                      {locale === 'id' ? project.titleId : project.titleEn}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="accent">{project.service}</Badge>
                    <span className="text-xs text-slate-400">{project.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-green-900 mb-2">
                    {locale === 'id' ? project.titleId : project.titleEn}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {locale === 'id' ? project.summaryId : project.summaryEn}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {t.projects.readMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-900 hover:text-yellow-600 transition-colors"
          >
            {t.common.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
