import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { PartnersContent } from '@/components/partners/PartnersContent'

export const metadata: Metadata = {
  title: 'Mitra',
  description: 'Jaringan mitra PT Gama Lintas Samudera — shipping lines, agen internasional, dan asosiasi.',
  alternates: { canonical: '/partners' },
  openGraph: { title: 'Mitra — Gama Lintas Samudera', description: 'Jaringan global shipping lines, agen, dan asosiasi industri.' },
}

export default function Partners() {
  return (
    <PageWrapper>
      <PartnersContent />
    </PageWrapper>
  )
}
