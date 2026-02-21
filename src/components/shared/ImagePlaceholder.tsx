import { Anchor } from 'lucide-react'

interface ImagePlaceholderProps {
  className?: string
  label?: string
  aspectRatio?: string
}

export function ImagePlaceholder({ className = '', label, aspectRatio = 'aspect-video' }: ImagePlaceholderProps) {
  return (
    <div className={`${aspectRatio} rounded-xl bg-green-50 border border-green-100 flex flex-col items-center justify-center ${className}`}>
      <Anchor className="w-10 h-10 text-green-300 mb-2" />
      {label && <span className="text-xs text-green-400 font-medium">{label}</span>}
    </div>
  )
}
