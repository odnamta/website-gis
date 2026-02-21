interface BadgeProps {
  children: string
  variant?: 'default' | 'accent' | 'outline'
}

const variantClasses = {
  default: 'bg-navy-50 text-navy-700',
  accent: 'bg-gold-50 text-gold-700',
  outline: 'border border-slate-300 text-slate-600',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
