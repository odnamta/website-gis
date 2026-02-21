import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ProjectsContent } from '@/components/projects/ProjectsContent'

export const metadata: Metadata = {
  title: 'Proyek Kami',
  description: 'Proyek heavy lift dan project cargo oleh PT Gama Intisamudera di seluruh Indonesia.',
  alternates: { canonical: '/projects' },
  openGraph: { title: 'Proyek Kami — PT Gama Intisamudera', description: 'Lihat bagaimana kami menangani berbagai proyek heavy lift di Indonesia.' },
}

export default function Projects() {
  return (
    <PageWrapper>
      <ProjectsContent />
    </PageWrapper>
  )
}
