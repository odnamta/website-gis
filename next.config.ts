import type { NextConfig } from 'next'

// Build-time validation for optional environment variables
if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
  console.warn('\n⚠  WARNING: NEXT_PUBLIC_FORMSPREE_ID is not set. The contact form will not work.\n')
}

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  transpilePackages: ['@gama/website-data'],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
