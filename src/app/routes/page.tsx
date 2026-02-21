import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { RoutesContent } from '@/components/routes/RoutesContent'

export const metadata: Metadata = {
  title: 'Rute & Jangkauan',
  description: 'Rute pengiriman internasional PT Gama Lintas Samudera ke 50+ negara.',
  alternates: { canonical: '/routes' },
  openGraph: { title: 'Rute & Jangkauan — Gama Lintas Samudera', description: 'Jaringan rute pengiriman ke 50+ negara di seluruh dunia.' },
}

export default function Routes() {
  return (
    <PageWrapper>
      <RoutesContent />
    </PageWrapper>
  )
}
