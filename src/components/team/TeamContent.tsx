'use client'

import { User } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { team } from '@/lib/data/team'

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
}

function TeamCard({ member, index, locale }: { member: typeof team[0]; index: number; locale: string }) {
  const initials = getInitials(member.name)
  const isLeader = index < 2

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        {/* Avatar area */}
        <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden"
          style={{ aspectRatio: isLeader ? '4/3' : '3/2' }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`${isLeader ? 'w-24 h-24' : 'w-20 h-20'} rounded-full bg-yellow-500/15 border-2 border-yellow-500/30 flex items-center justify-center mb-3`}>
              <span className={`${isLeader ? 'text-3xl' : 'text-2xl'} font-heading font-bold text-yellow-400`}>{initials}</span>
            </div>
            <p className="text-white font-heading font-semibold text-lg">{member.name}</p>
            <p className="text-yellow-400 text-sm font-medium mt-1">
              {locale === 'id' ? member.roleId : member.roleEn}
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            {locale === 'id' ? member.bioId : member.bioEn}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export function TeamContent() {
  const { t, locale } = useLanguage()
  const leadership = team.slice(0, 2)
  const departmentHeads = team.slice(2)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute -right-20 top-0 w-96 h-96 opacity-[0.03]">
          <User className="w-full h-full text-white" strokeWidth={0.3} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.team.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.team.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Leadership row */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
            {leadership.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} locale={locale} />
            ))}
          </div>

          {/* Department heads row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i + 2} locale={locale} />
            ))}
          </div>
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
