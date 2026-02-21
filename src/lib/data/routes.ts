export interface TradeRoute {
  id: string
  nameId: string
  nameEn: string
  ports: string[]
}

export interface Region {
  id: string
  nameId: string
  nameEn: string
  routes: TradeRoute[]
}

export const regions: Region[] = [
  {
    id: 'southeast-asia',
    nameId: 'Asia Tenggara',
    nameEn: 'Southeast Asia',
    routes: [
      { id: 'sg', nameId: 'Singapura', nameEn: 'Singapore', ports: ['PSA Singapore'] },
      { id: 'my', nameId: 'Malaysia', nameEn: 'Malaysia', ports: ['Port Klang', 'Penang'] },
      { id: 'th', nameId: 'Thailand', nameEn: 'Thailand', ports: ['Laem Chabang', 'Bangkok'] },
      { id: 'vn', nameId: 'Vietnam', nameEn: 'Vietnam', ports: ['Ho Chi Minh City', 'Hai Phong'] },
      { id: 'ph', nameId: 'Filipina', nameEn: 'Philippines', ports: ['Manila', 'Cebu'] },
    ],
  },
  {
    id: 'east-asia',
    nameId: 'Asia Timur',
    nameEn: 'East Asia',
    routes: [
      { id: 'cn', nameId: 'Tiongkok', nameEn: 'China', ports: ['Shanghai', 'Shenzhen', 'Ningbo', 'Qingdao'] },
      { id: 'jp', nameId: 'Jepang', nameEn: 'Japan', ports: ['Tokyo', 'Yokohama', 'Osaka', 'Kobe'] },
      { id: 'kr', nameId: 'Korea Selatan', nameEn: 'South Korea', ports: ['Busan', 'Incheon'] },
      { id: 'tw', nameId: 'Taiwan', nameEn: 'Taiwan', ports: ['Kaohsiung', 'Keelung'] },
    ],
  },
  {
    id: 'south-asia',
    nameId: 'Asia Selatan',
    nameEn: 'South Asia',
    routes: [
      { id: 'in', nameId: 'India', nameEn: 'India', ports: ['Mumbai', 'Chennai', 'Nhava Sheva'] },
      { id: 'bd', nameId: 'Bangladesh', nameEn: 'Bangladesh', ports: ['Chittagong'] },
      { id: 'lk', nameId: 'Sri Lanka', nameEn: 'Sri Lanka', ports: ['Colombo'] },
    ],
  },
  {
    id: 'middle-east',
    nameId: 'Timur Tengah',
    nameEn: 'Middle East',
    routes: [
      { id: 'ae', nameId: 'UEA', nameEn: 'UAE', ports: ['Jebel Ali', 'Dubai'] },
      { id: 'sa', nameId: 'Arab Saudi', nameEn: 'Saudi Arabia', ports: ['Jeddah', 'Dammam'] },
    ],
  },
  {
    id: 'europe',
    nameId: 'Eropa',
    nameEn: 'Europe',
    routes: [
      { id: 'nl', nameId: 'Belanda', nameEn: 'Netherlands', ports: ['Rotterdam'] },
      { id: 'de', nameId: 'Jerman', nameEn: 'Germany', ports: ['Hamburg', 'Bremen'] },
      { id: 'gb', nameId: 'Inggris', nameEn: 'United Kingdom', ports: ['Felixstowe', 'Southampton'] },
    ],
  },
  {
    id: 'americas',
    nameId: 'Amerika',
    nameEn: 'Americas',
    routes: [
      { id: 'us', nameId: 'Amerika Serikat', nameEn: 'United States', ports: ['Los Angeles', 'Long Beach', 'New York'] },
      { id: 'br', nameId: 'Brasil', nameEn: 'Brazil', ports: ['Santos'] },
    ],
  },
  {
    id: 'oceania',
    nameId: 'Oseania',
    nameEn: 'Oceania',
    routes: [
      { id: 'au', nameId: 'Australia', nameEn: 'Australia', ports: ['Melbourne', 'Sydney', 'Brisbane'] },
      { id: 'nz', nameId: 'Selandia Baru', nameEn: 'New Zealand', ports: ['Auckland'] },
    ],
  },
]
