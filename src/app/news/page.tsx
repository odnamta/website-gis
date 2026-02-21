import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NewsContent } from '@/components/news/NewsContent'

export const metadata: Metadata = {
  title: 'Berita',
  description: 'Berita terbaru dari PT Gama Lintas Samudera tentang industri freight forwarding dan logistik.',
  alternates: { canonical: '/news' },
  openGraph: { title: 'Berita — Gama Lintas Samudera', description: 'Update terbaru dari industri freight forwarding.' },
}

export default function News() {
  return (
    <PageWrapper>
      <NewsContent />
    </PageWrapper>
  )
}
