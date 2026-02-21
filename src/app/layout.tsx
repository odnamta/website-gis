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
  themeColor: '#0D4D25',
}

export const metadata: Metadata = {
  title: {
    default: 'PT Gama Intisamudera — Heavy Lift & Project Logistics',
    template: '%s | PT Gama Intisamudera',
  },
  description:
    'Spesialis transportasi heavy lift dan project cargo di seluruh Indonesia sejak 1995. International freight forwarding, project cargo handling, mechanical erection & assembling.',
  keywords: [
    'Gama Intisamudera',
    'heavy lift',
    'project cargo',
    'project logistics',
    'mechanical erection',
    'freight forwarding',
    'heavy transport',
    'Surabaya',
    'Indonesia',
  ],
  authors: [{ name: 'PT Gama Intisamudera' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://gamaintisamudera.com'),
  openGraph: {
    title: 'PT Gama Intisamudera — Heavy Lift & Project Logistics',
    description: 'Spesialis transportasi heavy lift dan project cargo di seluruh Indonesia sejak 1995.',
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    siteName: 'PT Gama Intisamudera',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'PT Gama Intisamudera — Heavy Lift & Project Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Gama Intisamudera — Heavy Lift & Project Logistics',
    description: 'Spesialis transportasi heavy lift dan project cargo di seluruh Indonesia sejak 1995.',
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
              name: 'PT Gama Intisamudera',
              url: 'https://gamaintisamudera.com',
              logo: 'https://gamaintisamudera.com/logo.svg',
              description: 'Spesialis transportasi heavy lift dan project cargo di seluruh Indonesia sejak 1995.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Tanjung Priok No 12-12A',
                addressLocality: 'Surabaya',
                addressRegion: 'East Java',
                postalCode: '60165',
                addressCountry: 'ID',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62313296003',
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-900 focus:text-white focus:rounded-lg focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
