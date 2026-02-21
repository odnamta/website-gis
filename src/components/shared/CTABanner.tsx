import { AnimateOnScroll } from './AnimateOnScroll'
import { Button } from './Button'

interface CTABannerProps {
  title: string
  subtitle: string
  buttonText: string
  href: string
}

export function CTABanner({ title, subtitle, buttonText, href }: CTABannerProps) {
  return (
    <section className="py-20 bg-green-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button variant="accent" href={href}>
            {buttonText}
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
