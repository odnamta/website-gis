import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { PartnersContent } from '@/components/partners/PartnersContent'

export const metadata: Metadata = {
  title: 'Mitra & Klien',
  description: 'Klien dan mitra PT Gama Intisamudera — perusahaan industri dan energi terkemuka.',
  alternates: { canonical: '/partners' },
  openGraph: { title: 'Mitra & Klien — PT Gama Intisamudera', description: 'Dipercaya oleh perusahaan industri dan energi terkemuka.' },
}

export default function Partners() {
  return (
    <PageWrapper>
      <PartnersContent />
    </PageWrapper>
  )
}
