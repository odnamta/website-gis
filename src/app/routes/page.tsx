import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { RoutesContent } from '@/components/routes/RoutesContent'

export const metadata: Metadata = {
  title: 'Rute & Jangkauan',
  description: 'Jangkauan pengiriman PT Gama Intisamudera di seluruh Indonesia.',
  alternates: { canonical: '/routes' },
  openGraph: { title: 'Rute & Jangkauan — PT Gama Intisamudera', description: 'Jangkauan pengiriman di seluruh Indonesia.' },
}

export default function Routes() {
  return (
    <PageWrapper>
      <RoutesContent />
    </PageWrapper>
  )
}
