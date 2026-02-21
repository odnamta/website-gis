'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  learnMore: string
}

export function ServiceCard({ icon, title, description, href, learnMore }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-xl border border-slate-200 bg-white hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-green-50 flex items-center justify-center text-green-700 mb-4 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-600 group-hover:text-yellow-700 transition-colors">
        {learnMore}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}
