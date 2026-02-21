import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'PT Gama Lintas Samudera — perusahaan freight forwarding internasional di Surabaya dengan pengalaman 30+ tahun.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'Tentang Kami — Gama Lintas Samudera', description: 'Pengalaman 30+ tahun dalam freight forwarding internasional.' },
}

export default function About() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  )
}
