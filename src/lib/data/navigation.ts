export interface NavItem {
  key: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  {
    key: 'services',
    href: '/services',
    children: [
      { key: 'freightForwarding', href: '/services/freight-forwarding' },
      { key: 'projectCargo', href: '/services/project-cargo' },
      { key: 'mechanicalErection', href: '/services/mechanical-erection' },
    ],
  },
  { key: 'projects', href: '/projects' },
  { key: 'equipment', href: '/equipment' },
  { key: 'team', href: '/team' },
  { key: 'gallery', href: '/gallery' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
  { key: 'faq', href: '/faq' },
]
