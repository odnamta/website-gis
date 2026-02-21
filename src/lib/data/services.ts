import { Ship, Plane, FileCheck, Warehouse, Truck, Package } from 'lucide-react'
import type { ComponentType } from 'react'

export interface ServiceData {
  slug: string
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  translationKey: 'ocean' | 'air' | 'customs' | 'warehousing' | 'land' | 'project'
  processSteps: number
}

export const services: ServiceData[] = [
  {
    slug: 'ocean-freight',
    icon: Ship,
    translationKey: 'ocean',
    processSteps: 5,
  },
  {
    slug: 'air-freight',
    icon: Plane,
    translationKey: 'air',
    processSteps: 4,
  },
  {
    slug: 'customs-brokerage',
    icon: FileCheck,
    translationKey: 'customs',
    processSteps: 5,
  },
  {
    slug: 'warehousing',
    icon: Warehouse,
    translationKey: 'warehousing',
    processSteps: 4,
  },
  {
    slug: 'land-transport',
    icon: Truck,
    translationKey: 'land',
    processSteps: 4,
  },
  {
    slug: 'project-cargo',
    icon: Package,
    translationKey: 'project',
    processSteps: 6,
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
