import { AnimateOnScroll } from './AnimateOnScroll'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  as?: 'h1' | 'h2'
}

export function SectionHeading({ title, subtitle, centered = true, light = false, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <AnimateOnScroll className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <Tag className={`text-3xl sm:text-4xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 mx-auto h-1 w-16 rounded-full ${centered ? '' : 'ml-0'} ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />
    </AnimateOnScroll>
  )
}
