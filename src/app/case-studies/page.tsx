import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent'

export const metadata: Metadata = {
  title: 'Studi Kasus',
  description: 'Studi kasus pengiriman internasional oleh PT Gama Lintas Samudera.',
  alternates: { canonical: '/case-studies' },
  openGraph: { title: 'Studi Kasus — Gama Lintas Samudera', description: 'Lihat bagaimana kami menangani pengiriman kompleks untuk berbagai industri.' },
}

export default function CaseStudies() {
  return (
    <PageWrapper>
      <CaseStudiesContent />
    </PageWrapper>
  )
}
