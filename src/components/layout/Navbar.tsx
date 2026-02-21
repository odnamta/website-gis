'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useLanguage } from '@/lib/i18n/context'
import { MegaMenu } from './MegaMenu'

export function Navbar() {
  const { t, locale, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const navLinks = [
    { key: 'home', href: '/', label: t.nav.home },
    { key: 'about', href: '/about', label: t.nav.about },
    { key: 'services', href: '/services', label: t.nav.services, hasChildren: true },
    { key: 'projects', href: '/projects', label: t.nav.projects },
    { key: 'equipment', href: '/equipment', label: t.nav.equipment },
    { key: 'team', href: '/team', label: t.nav.team },
    { key: 'gallery', href: '/gallery', label: t.nav.gallery },
    { key: 'news', href: '/news', label: t.nav.news },
    { key: 'careers', href: '/careers', label: t.nav.careers },
    { key: 'contact', href: '/contact', label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/logo-gis.png"
              alt="GIS Logo"
              width={200}
              height={198}
              className="w-10 h-10 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-green-900 font-heading font-bold text-sm leading-tight uppercase tracking-wide">
                PT. Gama
              </div>
              <div className="text-green-900 font-heading font-bold text-sm leading-tight uppercase tracking-wide">
                Intisamudera
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasChildren ? (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-slate-600 hover:text-green-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && <MegaMenu />}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-slate-600 hover:text-green-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side: lang toggle + CTA + mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-500 hover:text-green-900 hover:bg-slate-50 transition-colors"
              aria-label={`Switch to ${locale === 'id' ? 'English' : 'Indonesian'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{locale === 'id' ? 'EN' : 'ID'}</span>
            </button>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-yellow-500 text-green-900 hover:bg-yellow-400 transition-colors"
            >
              {t.nav.getQuote}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.key}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-slate-600 hover:text-green-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasChildren && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {[
                        { label: t.services.freightForwarding.title, href: '/services/freight-forwarding' },
                        { label: t.services.projectCargo.title, href: '/services/project-cargo' },
                        { label: t.services.mechanicalErection.title, href: '/services/mechanical-erection' },
                      ].map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-green-900 hover:bg-slate-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-yellow-500 text-green-900 hover:bg-yellow-400 transition-colors"
                >
                  {t.nav.getQuote}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
