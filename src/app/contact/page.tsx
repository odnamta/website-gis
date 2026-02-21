import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactContent } from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Kontak & Penawaran',
  description: 'Hubungi PT Gama Intisamudera untuk konsultasi dan penawaran proyek heavy lift.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Kontak — PT Gama Intisamudera', description: 'Hubungi kami untuk konsultasi dan penawaran proyek.' },
}

export default function Contact() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
