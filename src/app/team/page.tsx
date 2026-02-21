import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TeamContent } from '@/components/team/TeamContent'

export const metadata: Metadata = {
  title: 'Tim Kami',
  description: 'Kenali tim profesional PT Gama Intisamudera — para ahli di bidang heavy lift dan project logistics.',
  alternates: { canonical: '/team' },
  openGraph: { title: 'Tim Kami — PT Gama Intisamudera', description: 'Tim profesional di balik keberhasilan setiap proyek GIS.' },
}

export default function Team() {
  return (
    <PageWrapper>
      <TeamContent />
    </PageWrapper>
  )
}
