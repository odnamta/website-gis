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
    id: 'heavy-lift-operator',
    titleId: 'Operator Heavy Lift',
    titleEn: 'Heavy Lift Operator',
    department: 'Operations',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Mengoperasikan crane dan peralatan heavy lift di berbagai proyek. Memerlukan sertifikat operator crane dan pengalaman minimal 3 tahun di bidang yang sama.',
    descriptionEn: 'Operate cranes and heavy lift equipment across various projects. Requires crane operator certification and minimum 3 years of experience in the same field.',
  },
  {
    id: 'project-engineer',
    titleId: 'Project Engineer',
    titleEn: 'Project Engineer',
    department: 'Engineering',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Merencanakan dan mengawasi pelaksanaan teknis proyek heavy lift dan erection. Membuat method statement, risk assessment, dan laporan teknis.',
    descriptionEn: 'Plan and supervise technical execution of heavy lift and erection projects. Prepare method statements, risk assessments, and technical reports.',
  },
  {
    id: 'finance-staff',
    titleId: 'Staf Keuangan',
    titleEn: 'Finance Staff',
    department: 'Finance',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Mengelola pembukuan, pembuatan invoice, rekonsiliasi bank, dan pelaporan keuangan proyek. Memerlukan latar belakang akuntansi.',
    descriptionEn: 'Manage bookkeeping, invoice preparation, bank reconciliation, and project financial reporting. Requires accounting background.',
  },
  {
    id: 'marketing-officer',
    titleId: 'Marketing Officer',
    titleEn: 'Marketing Officer',
    department: 'Marketing',
    location: 'Surabaya',
    type: 'full-time',
    descriptionId: 'Mengembangkan portofolio klien baru, menyusun proposal proyek, dan menjaga hubungan dengan klien existing di sektor industri dan energi.',
    descriptionEn: 'Develop new client portfolio, prepare project proposals, and maintain relationships with existing clients in the industrial and energy sectors.',
  },
]

export const cultureValues = [
  { iconKey: 'professional', titleId: 'Profesional', titleEn: 'Professional', descId: 'Kami menjalankan setiap pekerjaan dengan standar profesionalisme tertinggi dan kompetensi teknis.', descEn: 'We execute every task with the highest standards of professionalism and technical competence.' },
  { iconKey: 'safety', titleId: 'Keselamatan', titleEn: 'Safety', descId: 'Keselamatan kerja adalah prioritas utama di setiap operasi dan proyek yang kami tangani.', descEn: 'Work safety is the top priority in every operation and project we handle.' },
  { iconKey: 'teamwork', titleId: 'Kerja Tim', titleEn: 'Teamwork', descId: 'Kolaborasi antar divisi dan koordinasi lapangan yang solid adalah kunci keberhasilan proyek.', descEn: 'Cross-division collaboration and solid field coordination are the keys to project success.' },
  { iconKey: 'growth', titleId: 'Pertumbuhan', titleEn: 'Growth', descId: 'Kami berinvestasi pada pengembangan keahlian teknis dan karir setiap anggota tim.', descEn: 'We invest in the technical skills development and career growth of every team member.' },
]
