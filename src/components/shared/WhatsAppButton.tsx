'use client'

import { MessageCircle } from 'lucide-react'
import { company } from '@/lib/data/company'

export function WhatsAppButton() {
  const url = `https://wa.me/${company.whatsapp}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors"
    >
      <MessageCircle className="w-7 h-7" aria-hidden="true" />
    </a>
  )
}
