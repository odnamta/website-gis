import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CaseStudiesContent } from '@/components/case-studies/CaseStudiesContent'

export const metadata: Metadata = {
  title: 'Proyek Kami',
  description: 'Proyek heavy lift dan project cargo oleh PT Gama Intisamudera.',
  alternates: { canonical: '/case-studies' },
  openGraph: { title: 'Proyek Kami — PT Gama Intisamudera', description: 'Lihat bagaimana kami menangani berbagai proyek heavy lift di Indonesia.' },
}

export default function CaseStudies() {
  return (
    <PageWrapper>
      <CaseStudiesContent />
    </PageWrapper>
  )
}
