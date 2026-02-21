import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'PT Gama Intisamudera — spesialis heavy lift dan project logistics di Surabaya sejak 1995.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'Tentang Kami — PT Gama Intisamudera', description: 'Pengalaman 30+ tahun dalam heavy lift dan project logistics.' },
}

export default function About() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  )
}
