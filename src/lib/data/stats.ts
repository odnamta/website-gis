export interface Stat {
  value: number
  suffix: string
  labelKey: keyof typeof statLabels
}

const statLabels = {
  yearsExperience: true,
  totalStaff: true,
  projectsCompleted: true,
  coreServices: true,
} as const

export const stats: Stat[] = [
  { value: 30, suffix: '+', labelKey: 'yearsExperience' },
  { value: 65, suffix: '+', labelKey: 'totalStaff' },
  { value: 100, suffix: '+', labelKey: 'projectsCompleted' },
  { value: 3, suffix: '', labelKey: 'coreServices' },
]
