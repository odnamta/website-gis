import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0B1D3E',
}

export const metadata: Metadata = {
  title: {
    default: 'PT Gama Lintas Samudera — International Freight Forwarding',
    template: '%s | Gama Lintas Samudera',
  },
  description:
    'PT Gama Lintas Samudera — Your trusted international freight forwarding partner in Surabaya, Indonesia. Ocean freight, air freight, customs brokerage, and logistics solutions.',
  keywords: [
    'Gama Lintas Samudera',
    'freight forwarding',
    'international shipping',
    'ocean freight',
    'air freight',
    'customs brokerage',
    'logistics',
    'Surabaya',
    'Indonesia',
  ],
  authors: [{ name: 'PT Gama Lintas Samudera' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://gls-id.com'),
  openGraph: {
    title: 'PT Gama Lintas Samudera',
    description: 'Your trusted international freight forwarding partner in Surabaya, Indonesia.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'Gama Lintas Samudera',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'PT Gama Lintas Samudera — International Freight Forwarding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Gama Lintas Samudera',
    description: 'Your trusted international freight forwarding partner in Surabaya, Indonesia.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PT Gama Lintas Samudera',
              url: 'https://gls-id.com',
              logo: 'https://gls-id.com/logo.png',
              description: 'International freight forwarding company based in Surabaya, Indonesia.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Laksda M. Nasir 12 A',
                addressLocality: 'Surabaya',
                addressRegion: 'East Java',
                postalCode: '60165',
                addressCountry: 'ID',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+6282233181811',
                contactType: 'customer service',
                availableLanguage: ['Indonesian', 'English'],
              },
              sameAs: [],
            }),
          }}
        />
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://va.vercel-analytics.com" />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white focus:rounded-lg focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
