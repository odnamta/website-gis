import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  company: string
  role?: string
}

export function TestimonialCard({ quote, name, company, role }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
      <Quote className="w-8 h-8 text-gold-400 mb-4" />
      <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-navy-900">{name}</p>
        {role && <p className="text-sm text-slate-500">{role}</p>}
        <p className="text-sm text-gold-600 font-medium">{company}</p>
      </div>
    </div>
  )
}
