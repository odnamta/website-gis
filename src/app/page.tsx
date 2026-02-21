import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { HomeContent } from '@/components/home/HomeContent'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <PageWrapper>
      <HomeContent />
    </PageWrapper>
  )
}
