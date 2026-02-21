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
    slug: 'petrokimia-gresik-amur-project',
    titleId: 'GIS Menyelesaikan Proyek AMUR II Petrokimia Gresik',
    titleEn: 'GIS Completes Petrokimia Gresik AMUR II Project',
    summaryId: 'PT Gama Intisamudera berhasil menyelesaikan proyek heavy lift dan erection untuk pabrik AMUR II di Petrokimia Gresik, menangani peralatan berat dengan total berat ratusan ton.',
    summaryEn: 'PT Gama Intisamudera successfully completed the heavy lift and erection project for the AMUR II plant at Petrokimia Gresik, handling heavy equipment totaling hundreds of tons.',
    date: '2016-12-15',
    category: 'Project',
  },
  {
    slug: 'wartsila-sorong-delivery',
    titleId: 'Pengiriman 3 Unit Mesin Wartsila ke Sorong',
    titleEn: 'Delivery of 3 Wartsila Engine Units to Sorong',
    summaryId: 'GIS berhasil mengirimkan 3 unit mesin Wartsila masing-masing seberat 140 ton dari Surabaya ke Sorong untuk proyek PLTMG.',
    summaryEn: 'GIS successfully delivered 3 Wartsila engine units, each weighing 140 tons, from Surabaya to Sorong for the PLTMG power plant project.',
    date: '2017-06-20',
    category: 'Project',
  },
  {
    slug: 'gis-30th-anniversary',
    titleId: 'GIS Merayakan 30 Tahun Perjalanan di Industri Logistik',
    titleEn: 'GIS Celebrates 30 Years in the Logistics Industry',
    summaryId: 'PT Gama Intisamudera merayakan 30 tahun perjalanan di industri heavy lift dan project logistics Indonesia sejak didirikan pada tahun 1995.',
    summaryEn: 'PT Gama Intisamudera celebrates 30 years of journey in Indonesia heavy lift and project logistics industry since its founding in 1995.',
    date: '2025-08-01',
    category: 'Company News',
  },
  {
    slug: 'fleet-expansion-2025',
    titleId: 'GIS Memperluas Armada Peralatan Heavy Lift',
    titleEn: 'GIS Expands Heavy Lift Equipment Fleet',
    summaryId: 'Investasi pada peralatan baru termasuk hydraulic crane dan multi-axle trailer untuk meningkatkan kapasitas penanganan proyek besar.',
    summaryEn: 'Investment in new equipment including hydraulic cranes and multi-axle trailers to increase capacity for large project handling.',
    date: '2025-03-10',
    category: 'Company News',
  },
]
