'use client'

import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { CTABanner } from '@/components/shared/CTABanner'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Target, Eye, Shield, Star, Heart, Anchor, Truck, Award } from 'lucide-react'

const milestones = [
  { year: '1995', titleId: 'Didirikan di Surabaya', titleEn: 'Founded in Surabaya', descId: 'PT Gama Intisamudera didirikan sebagai perusahaan freight forwarding dan heavy lift transportation di bawah naungan Gama Group.', descEn: 'PT Gama Intisamudera was established as a freight forwarding and heavy lift transportation company under the Gama Group.' },
  { year: '2000s', titleId: 'Ekspansi Layanan', titleEn: 'Service Expansion', descId: 'Memperluas layanan ke project cargo handling dan mechanical erection, menjadi mitra terpercaya industri petrokimia dan pembangkit listrik.', descEn: 'Expanded services to project cargo handling and mechanical erection, becoming a trusted partner for petrochemical and power generation industries.' },
  { year: '2010s', titleId: 'Proyek-Proyek Besar', titleEn: 'Major Projects', descId: 'Menangani proyek heavy lift landmark termasuk Petrokimia Gresik AMUR II, PLTMG Sorong, dan berbagai proyek pembangkit listrik di seluruh Indonesia.', descEn: 'Handled landmark heavy lift projects including Petrokimia Gresik AMUR II, PLTMG Sorong, and various power plant projects across Indonesia.' },
  { year: '2020s', titleId: 'Digitalisasi & Modernisasi', titleEn: 'Digitization & Modernization', descId: 'Modernisasi operasional dengan sistem digital untuk manajemen proyek, pelaporan, dan koordinasi armada yang lebih efisien.', descEn: 'Modernized operations with digital systems for project management, reporting, and more efficient fleet coordination.' },
]

const values = [
  { icon: Shield, titleId: 'Keselamatan', titleEn: 'Safety', descId: 'Keselamatan adalah prioritas utama di setiap operasi. Zero incident record menjadi bukti komitmen kami.', descEn: 'Safety is the top priority in every operation. Our zero incident record is proof of our commitment.' },
  { icon: Star, titleId: 'Kualitas', titleEn: 'Quality', descId: 'Standar kualitas tinggi dalam setiap aspek pekerjaan, dari perencanaan engineering hingga eksekusi lapangan.', descEn: 'High quality standards in every aspect of work, from engineering planning to field execution.' },
  { icon: Heart, titleId: 'Kepuasan Pelanggan', titleEn: 'Customer Satisfaction', descId: 'Memberikan solusi terbaik dan layanan yang melampaui ekspektasi klien di setiap proyek.', descEn: 'Delivering the best solutions and service that exceeds client expectations in every project.' },
]

export function AboutContent() {
  const { t, locale } = useLanguage()

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute -right-20 top-0 w-96 h-96 opacity-[0.03]">
          <Anchor className="w-full h-full text-white" strokeWidth={0.3} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.about.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.about.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                  <Anchor className="w-64 h-64 text-white" strokeWidth={0.5} />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                  <div className="flex gap-4 mb-6">
                    {[Anchor, Truck, Award].map((Icon, idx) => (
                      <div key={idx} className="w-14 h-14 rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-yellow-400" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-yellow-400 font-semibold uppercase tracking-[0.2em] mb-2">
                    {locale === 'id' ? 'Sejak 1995' : 'Since 1995'}
                  </p>
                  <p className="text-white font-heading font-bold text-2xl text-center">
                    PT. Gama Intisamudera
                  </p>
                  <p className="text-green-300 text-sm mt-2 text-center max-w-xs">
                    {locale === 'id' ? 'Freight Forwarding · Project Cargo · Mechanical Erection' : 'Freight Forwarding · Project Cargo · Mechanical Erection'}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl font-heading font-bold text-green-900 mb-6">{t.about.storyTitle}</h2>
              <div className="space-y-4">
                {t.about.story.map((para, i) => (
                  <p key={i} className="text-slate-500 leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t.about.timelineTitle} light />
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <AnimateOnScroll key={milestone.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-heading font-bold text-yellow-400">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-400 border-4 border-green-800" />
                    {i < milestones.length - 1 && <div className="w-0.5 h-full bg-green-700 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">
                      {locale === 'id' ? milestone.titleId : milestone.titleEn}
                    </h3>
                    <p className="text-green-300 text-sm leading-relaxed">
                      {locale === 'id' ? milestone.descId : milestone.descEn}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title={locale === 'id' ? 'Nilai-Nilai Perusahaan' : 'Company Values'}
            subtitle={locale === 'id'
              ? 'Tiga pilar nilai yang menjadi fondasi setiap operasi dan layanan kami.'
              : 'Three core values that form the foundation of every operation and service we provide.'}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div className="group text-center p-8 rounded-2xl border border-slate-100 bg-white hover:border-yellow-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-900 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-green-900 flex items-center justify-center mb-5 group-hover:bg-yellow-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-yellow-400 group-hover:text-green-900 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-green-900 mb-3">
                      {locale === 'id' ? value.titleId : value.titleEn}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {locale === 'id' ? value.descId : value.descEn}
                    </p>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="p-8 rounded-2xl bg-green-900 text-white h-full">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{t.about.visionTitle}</h3>
                <p className="text-green-300 leading-relaxed">{t.about.vision}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-green-900 mb-4">{t.about.missionTitle}</h3>
                <ul className="space-y-3">
                  {t.about.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500">
                      <div className="w-6 h-6 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-yellow-600">{i + 1}</span>
                      </div>
                      {mission}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
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
