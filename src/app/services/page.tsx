import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ServicesContent } from '@/components/services/ServicesContent'

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Freight forwarding, project cargo, dan mechanical erection oleh PT Gama Intisamudera.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Layanan — PT Gama Intisamudera', description: 'Tiga pilar layanan terintegrasi untuk proyek industri Anda.' },
}

export default function Services() {
  return (
    <PageWrapper>
      <ServicesContent />
    </PageWrapper>
  )
}
