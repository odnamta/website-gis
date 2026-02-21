'use client'

import Link from 'next/link'
import { ArrowRight, Factory, Zap, Anchor } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Badge } from '@/components/shared/Badge'
import { projects } from '@/lib/data/projects'

const industryIcons: Record<string, typeof Factory> = {
  'Petrochemical': Factory,
  'Power Generation': Zap,
  'Port & Maritime': Anchor,
}

export function FeaturedProjects() {
  const { t, locale } = useLanguage()
  const featured = projects.slice(0, 3)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading title={t.projects.pageTitle} subtitle={t.projects.pageSubtitle} />
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project, i) => {
            const Icon = industryIcons[project.industry] || Anchor
            return (
              <AnimateOnScroll key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Project visual placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex items-center justify-center relative overflow-hidden">
                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }} />

                    {/* Large watermark icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                      <Icon className="w-48 h-48 text-white" strokeWidth={0.5} />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10 p-6 text-center">
                      <div className="w-14 h-14 mx-auto rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mb-3">
                        <Icon className="w-7 h-7 text-yellow-400" />
                      </div>
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-widest block mb-1">{project.industry}</span>
                      <p className="text-white font-heading font-semibold text-sm leading-snug">
                        {locale === 'id' ? project.titleId : project.titleEn}
                      </p>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-900/80 to-transparent" />
                  </div>

                  {/* Card body */}
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
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-green-900 border-2 border-green-900 hover:bg-green-900 hover:text-white transition-all duration-200"
          >
            {t.common.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
