export interface Stat {
  value: number
  suffix: string
  labelKey: keyof typeof statLabels
}

const statLabels = {
  yearsExperience: true,
  countriesServed: true,
  shippingPartners: true,
  clientSatisfaction: true,
} as const

export const stats: Stat[] = [
  { value: 30, suffix: '+', labelKey: 'yearsExperience' },
  { value: 50, suffix: '+', labelKey: 'countriesServed' },
  { value: 20, suffix: '+', labelKey: 'shippingPartners' },
  { value: 100, suffix: '%', labelKey: 'clientSatisfaction' },
]
