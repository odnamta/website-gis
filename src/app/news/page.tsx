import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NewsContent } from '@/components/news/NewsContent'

export const metadata: Metadata = {
  title: 'Berita',
  description: 'Berita terbaru dari PT Gama Intisamudera tentang proyek heavy lift dan industri logistik.',
  alternates: { canonical: '/news' },
  openGraph: { title: 'Berita — PT Gama Intisamudera', description: 'Update terbaru proyek dan perkembangan perusahaan.' },
}

export default function News() {
  return (
    <PageWrapper>
      <NewsContent />
    </PageWrapper>
  )
}
