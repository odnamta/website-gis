'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  light?: boolean
}

export function StatCounter({ value, suffix = '', prefix = '', label, duration = 2, light = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(value)
      return
    }

    const totalFrames = duration * 60
    let frame = 0
    const timer = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        setCount(value)
        clearInterval(timer)
      } else {
        const progress = frame / totalFrames
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * value))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-heading font-bold text-yellow-500">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={`mt-2 text-sm font-medium uppercase tracking-wider ${light ? 'text-green-300' : 'text-slate-500'}`}>
        {label}
      </div>
    </motion.div>
  )
}
