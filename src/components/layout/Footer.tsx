'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { company } from '@/lib/data/company'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="GLS Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-heading font-bold text-sm leading-tight">Gama Lintas</div>
                <div className="font-heading font-bold text-sm leading-tight">Samudera</div>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              {t.footer.companyDescription}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gold-400 mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.about, href: '/about' },
                { label: t.nav.caseStudies, href: '/case-studies' },
                { label: t.nav.news, href: '/news' },
                { label: t.nav.careers, href: '/careers' },
                { label: t.nav.faq, href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-semibold text-gold-400 mb-4">{t.footer.services}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t.services.ocean.title, href: '/services/ocean-freight' },
                { label: t.services.air.title, href: '/services/air-freight' },
                { label: t.services.customs.title, href: '/services/customs-brokerage' },
                { label: t.services.warehousing.title, href: '/services/warehousing' },
                { label: t.services.land.title, href: '/services/land-transport' },
                { label: t.services.project.title, href: '/services/project-cargo' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-gold-400 mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-navy-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-navy-300">
                  {company.address.street}, {company.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="text-sm text-navy-300 hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-sm text-navy-300 hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-navy-400 flex-shrink-0" />
                <span className="text-sm text-navy-300">{company.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-navy-400">
            {t.footer.copyright.replace('{year}', String(year))}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="text-sm text-navy-400 hover:text-white transition-colors">
              {t.nav.faq}
            </Link>
            <Link href="/partners" className="text-sm text-navy-400 hover:text-white transition-colors">
              {t.nav.partners}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
