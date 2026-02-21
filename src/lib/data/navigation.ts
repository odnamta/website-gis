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
      { key: 'ocean', href: '/services/ocean-freight' },
      { key: 'air', href: '/services/air-freight' },
      { key: 'customs', href: '/services/customs-brokerage' },
      { key: 'warehousing', href: '/services/warehousing' },
      { key: 'land', href: '/services/land-transport' },
      { key: 'project', href: '/services/project-cargo' },
    ],
  },
  { key: 'routes', href: '/routes' },
  { key: 'caseStudies', href: '/case-studies' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'partners', href: '/partners' },
  { key: 'contact', href: '/contact' },
  { key: 'faq', href: '/faq' },
]
