export interface TeamMember {
  id: string
  name: string
  roleId: string
  roleEn: string
  bioId: string
  bioEn: string
}

export const team: TeamMember[] = [
  {
    id: 'syamsul',
    name: 'Syamsul Ma\'arif',
    roleId: 'Managing Director',
    roleEn: 'Managing Director',
    bioId: 'Memimpin PT Gama Intisamudera dengan pengalaman lebih dari 30 tahun di industri logistik dan heavy lift transportation.',
    bioEn: 'Leads PT Gama Intisamudera with over 30 years of experience in the logistics and heavy lift transportation industry.',
  },
  {
    id: 'alif',
    name: 'Alif Dio Atmando',
    roleId: 'General Manager',
    roleEn: 'General Manager',
    bioId: 'Mengelola operasional perusahaan secara keseluruhan dan bertanggung jawab atas pengembangan bisnis serta transformasi digital.',
    bioEn: 'Manages overall company operations and is responsible for business development and digital transformation.',
  },
  {
    id: 'hutami',
    name: 'Hutami Widya Arini',
    roleId: 'Head of Engineering & Marketing',
    roleEn: 'Head of Engineering & Marketing',
    bioId: 'Memimpin divisi engineering dan marketing, memastikan setiap proyek direncanakan secara teknis dengan standar keselamatan tertinggi.',
    bioEn: 'Leads the engineering and marketing division, ensuring every project is technically planned with the highest safety standards.',
  },
  {
    id: 'sandi',
    name: 'Sandi Ramadhan',
    roleId: 'Head of Operations & Equipment',
    roleEn: 'Head of Operations & Equipment',
    bioId: 'Bertanggung jawab atas operasional lapangan, manajemen peralatan heavy lift, dan koordinasi pelaksanaan proyek.',
    bioEn: 'Responsible for field operations, heavy lift equipment management, and project execution coordination.',
  },
  {
    id: 'feri',
    name: 'Feri Supriono',
    roleId: 'Head of Finance',
    roleEn: 'Head of Finance',
    bioId: 'Mengelola keuangan perusahaan, perencanaan anggaran proyek, dan memastikan kesehatan finansial perusahaan.',
    bioEn: 'Manages company finances, project budget planning, and ensures the company\'s financial health.',
  },
]
