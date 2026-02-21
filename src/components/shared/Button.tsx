import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent'

interface ButtonBaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  external?: never
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-800 active:scale-[0.97] shadow-sm hover:shadow-md',
  secondary:
    'border-2 border-navy-900 text-navy-900 hover:bg-navy-50 active:scale-[0.97]',
  ghost:
    'border-2 border-slate-300 text-slate-600 hover:border-navy-900 hover:text-navy-900 active:scale-[0.97]',
  accent:
    'bg-gold-500 text-navy-900 hover:bg-gold-400 active:scale-[0.97] shadow-sm hover:shadow-md font-semibold',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${variantClasses[variant]} ${className}`

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}
