import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`p-6 rounded-xl border border-slate-200 bg-white ${
        hover ? 'hover:border-navy-200 hover:shadow-lg hover:-translate-y-0.5' : ''
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
