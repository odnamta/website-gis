export interface NewsItem {
  slug: string
  titleId: string
  titleEn: string
  summaryId: string
  summaryEn: string
  date: string
  category: string
}

export const newsItems: NewsItem[] = [
  {
    slug: 'gls-launch',
    titleId: 'PT Gama Lintas Samudera Resmi Diluncurkan',
    titleEn: 'PT Gama Lintas Samudera Officially Launches',
    summaryId: 'Gama Group meluncurkan divisi internasional baru untuk memenuhi kebutuhan freight forwarding global klien kami.',
    summaryEn: 'Gama Group launches a new international division to serve our clients\' global freight forwarding needs.',
    date: '2026-01-15',
    category: 'Company News',
  },
  {
    slug: 'shipping-line-partnerships',
    titleId: 'GLS Menjalin Kemitraan dengan 20+ Shipping Line Global',
    titleEn: 'GLS Establishes Partnerships with 20+ Global Shipping Lines',
    summaryId: 'Kemitraan strategis dengan shipping line terkemuka dunia untuk menjamin layanan pengiriman yang kompetitif dan andal.',
    summaryEn: 'Strategic partnerships with leading global shipping lines to ensure competitive and reliable shipping services.',
    date: '2026-02-01',
    category: 'Partnership',
  },
  {
    slug: 'ppjk-license',
    titleId: 'GLS Memperoleh Lisensi PPJK Resmi',
    titleEn: 'GLS Obtains Official PPJK License',
    summaryId: 'Lisensi Pengusaha Pengurusan Jasa Kepabeanan memperkuat kapabilitas customs brokerage kami.',
    summaryEn: 'The Customs Brokerage License strengthens our customs clearance capabilities for import and export operations.',
    date: '2026-01-20',
    category: 'Achievement',
  },
  {
    slug: 'fiata-membership',
    titleId: 'GLS Bergabung sebagai Anggota FIATA',
    titleEn: 'GLS Joins FIATA as Member',
    summaryId: 'Keanggotaan FIATA memperkuat jaringan global dan kredibilitas kami di industri freight forwarding internasional.',
    summaryEn: 'FIATA membership strengthens our global network and credibility in the international freight forwarding industry.',
    date: '2026-02-10',
    category: 'Partnership',
  },
]
