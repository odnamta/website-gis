import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { GalleryContent } from '@/components/gallery/GalleryContent'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Dokumentasi visual proyek heavy lift dan project cargo PT Gama Intisamudera.',
  alternates: { canonical: '/gallery' },
  openGraph: { title: 'Galeri — PT Gama Intisamudera', description: 'Dokumentasi visual dari berbagai proyek heavy lift dan project cargo.' },
}

export default function Gallery() {
  return (
    <PageWrapper>
      <GalleryContent />
    </PageWrapper>
  )
}
