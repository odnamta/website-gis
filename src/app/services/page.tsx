import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ServicesContent } from '@/components/services/ServicesContent'

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Ocean freight, air freight, customs brokerage, warehousing, land transport, dan project cargo.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Layanan — Gama Lintas Samudera', description: 'Solusi logistik lengkap untuk kebutuhan pengiriman internasional.' },
}

export default function Services() {
  return (
    <PageWrapper>
      <ServicesContent />
    </PageWrapper>
  )
}
