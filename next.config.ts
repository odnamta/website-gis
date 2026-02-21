import type { NextConfig } from 'next'

// Build-time validation for required environment variables
if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
  const message = 'NEXT_PUBLIC_FORMSPREE_ID is not set. The contact form will not submit data to Formspree.'
  if (process.env.NODE_ENV === 'production') {
    throw new Error(message)
  } else {
    console.warn(`\n⚠  WARNING: ${message}\n`)
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
