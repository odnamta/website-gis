import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { FAQContent } from '@/components/faq/FAQContent'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Pertanyaan yang sering diajukan tentang layanan freight forwarding PT Gama Lintas Samudera.',
  alternates: { canonical: '/faq' },
  openGraph: { title: 'FAQ — Gama Lintas Samudera', description: 'Jawaban untuk pertanyaan umum tentang pengiriman internasional.' },
}

export default function FAQ() {
  return (
    <PageWrapper>
      <FAQContent />
    </PageWrapper>
  )
}
