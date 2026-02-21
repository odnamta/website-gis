import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CareersContent } from '@/components/careers/CareersContent'

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabung dengan PT Gama Lintas Samudera — lowongan kerja di bidang freight forwarding dan logistik.',
  alternates: { canonical: '/careers' },
  openGraph: { title: 'Karir — Gama Lintas Samudera', description: 'Bangun karir Anda di industri freight forwarding internasional.' },
}

export default function Careers() {
  return (
    <PageWrapper>
      <CareersContent />
    </PageWrapper>
  )
}
