import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { EquipmentContent } from '@/components/equipment/EquipmentContent'

export const metadata: Metadata = {
  title: 'Peralatan Kami',
  description: 'Armada peralatan heavy lift dan transportasi PT Gama Intisamudera — crane, trailer multi-axle, jack hidrolik, dan lainnya.',
  alternates: { canonical: '/equipment' },
  openGraph: { title: 'Peralatan Kami — PT Gama Intisamudera', description: 'Armada peralatan heavy lift dan transportasi untuk mendukung setiap proyek.' },
}

export default function Equipment() {
  return (
    <PageWrapper>
      <EquipmentContent />
    </PageWrapper>
  )
}
