interface BadgeProps {
  children: string
  variant?: 'default' | 'accent' | 'outline'
}

const variantClasses = {
  default: 'bg-green-50 text-green-700',
  accent: 'bg-yellow-50 text-yellow-700',
  outline: 'border border-slate-300 text-slate-600',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
