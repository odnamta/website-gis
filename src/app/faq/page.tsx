import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { FAQContent } from '@/components/faq/FAQContent'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Pertanyaan yang sering diajukan tentang layanan heavy lift dan project cargo PT Gama Intisamudera.',
  alternates: { canonical: '/faq' },
  openGraph: { title: 'FAQ — PT Gama Intisamudera', description: 'Jawaban untuk pertanyaan umum tentang heavy lift dan project cargo.' },
}

export default function FAQ() {
  return (
    <PageWrapper>
      <FAQContent />
    </PageWrapper>
  )
}
