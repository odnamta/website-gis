'use client'

import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/shared/Button'
import { useLanguage } from '@/lib/i18n/context'
import { Ship } from 'lucide-react'

function NotFoundContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <Ship className="w-16 h-16 text-navy-200 mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-6xl font-heading font-bold text-navy-900 mb-4">404</h1>
        <p className="text-lg text-slate-500 mb-8">{t.notFound.subtitle}</p>
        <Button href="/">{t.notFound.backHome}</Button>
      </div>
    </div>
  )
}

export default function NotFoundClient() {
  return (
    <PageWrapper>
      <NotFoundContent />
    </PageWrapper>
  )
}
