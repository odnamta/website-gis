export interface JobPosition {
  id: string
  titleId: string
  titleEn: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  descriptionId: string
  descriptionEn: string
}

export const positions: JobPosition[] = [
  {
    id: 'ops-coordinator',
    titleId: 'Koordinator Operasional',
    titleEn: 'Operations Coordinator',
    department: 'Operations',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Mengelola operasional pengiriman harian, koordinasi dengan agen dan shipping line, serta memastikan kelancaran proses logistik.',
    descriptionEn: 'Manage daily shipping operations, coordinate with agents and shipping lines, and ensure smooth logistics processes.',
  },
  {
    id: 'customs-officer',
    titleId: 'Staf Kepabeanan',
    titleEn: 'Customs Officer',
    department: 'Customs',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Menangani dokumen kepabeanan, pengurusan izin impor/ekspor, dan koordinasi dengan Bea Cukai.',
    descriptionEn: 'Handle customs documentation, import/export permit processing, and coordination with Customs authorities.',
  },
  {
    id: 'sales-exec',
    titleId: 'Sales Executive',
    titleEn: 'Sales Executive',
    department: 'Commercial',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Mengembangkan portofolio klien baru, menyusun penawaran harga, dan menjaga hubungan dengan klien existing.',
    descriptionEn: 'Develop new client portfolio, prepare price quotations, and maintain relationships with existing clients.',
  },
]

export const cultureValues = [
  { iconKey: 'integrity', titleId: 'Integritas', titleEn: 'Integrity', descId: 'Kami menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis.', descEn: 'We uphold honesty and transparency in every aspect of business.' },
  { iconKey: 'teamwork', titleId: 'Kerja Tim', titleEn: 'Teamwork', descId: 'Kolaborasi dan saling mendukung adalah kunci keberhasilan kami.', descEn: 'Collaboration and mutual support are the keys to our success.' },
  { iconKey: 'excellence', titleId: 'Keunggulan', titleEn: 'Excellence', descId: 'Kami terus meningkatkan standar layanan untuk melampaui ekspektasi klien.', descEn: 'We continuously raise our service standards to exceed client expectations.' },
  { iconKey: 'growth', titleId: 'Pertumbuhan', titleEn: 'Growth', descId: 'Kami berinvestasi pada pengembangan karir dan potensi setiap anggota tim.', descEn: 'We invest in the career development and potential of every team member.' },
]
