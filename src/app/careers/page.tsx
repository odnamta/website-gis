import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CareersContent } from '@/components/careers/CareersContent'

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabung dengan PT Gama Intisamudera — lowongan kerja di bidang heavy lift dan project logistics.',
  alternates: { canonical: '/careers' },
  openGraph: { title: 'Karir — PT Gama Intisamudera', description: 'Bangun karir Anda di industri heavy lift dan project logistics.' },
}

export default function Careers() {
  return (
    <PageWrapper>
      <CareersContent />
    </PageWrapper>
  )
}
