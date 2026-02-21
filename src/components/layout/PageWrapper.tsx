'use client'

import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { LanguageProvider } from '@/lib/i18n/context'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main-content" className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}
