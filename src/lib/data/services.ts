import { Ship, Truck, Wrench } from 'lucide-react'
import type { ComponentType } from 'react'

export interface ServiceData {
  slug: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  translationKey: 'freightForwarding' | 'projectCargo' | 'mechanicalErection'
  processSteps: number
}

export const services: ServiceData[] = [
  {
    slug: 'freight-forwarding',
    icon: Ship,
    translationKey: 'freightForwarding',
    processSteps: 5,
  },
  {
    slug: 'project-cargo',
    icon: Truck,
    translationKey: 'projectCargo',
    processSteps: 6,
  },
  {
    slug: 'mechanical-erection',
    icon: Wrench,
    translationKey: 'mechanicalErection',
    processSteps: 5,
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
