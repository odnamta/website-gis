import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Kontak & Penawaran',
  description: 'Hubungi PT Gama Lintas Samudera untuk penawaran freight forwarding internasional.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Kontak — Gama Lintas Samudera', description: 'Minta penawaran freight forwarding dari Surabaya ke seluruh dunia.' },
}

export default function Contact() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
