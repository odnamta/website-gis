'use client'

import { useEffect } from 'react'
import { Button } from '@/components/shared/Button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-4xl font-heading font-bold text-green-900 mb-4">
          Terjadi Kesalahan
        </h1>
        <p className="text-slate-500 mb-8">
          Maaf, terjadi kesalahan yang tidak terduga. / An unexpected error occurred.
        </p>
        <Button onClick={reset}>Coba Lagi / Try Again</Button>
      </div>
    </div>
  )
}
