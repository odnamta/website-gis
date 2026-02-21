export interface CaseStudy {
  slug: string
  titleId: string
  titleEn: string
  summaryId: string
  summaryEn: string
  challengeId: string
  challengeEn: string
  solutionId: string
  solutionEn: string
  resultsId: string[]
  resultsEn: string[]
  service: string
  industry: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'heavy-machinery-import',
    titleId: 'Impor Mesin Industri Berat dari Jerman',
    titleEn: 'Heavy Industrial Machinery Import from Germany',
    summaryId: 'Solusi pengiriman mesin CNC berdimensi besar dari Hamburg ke Surabaya dengan penanganan khusus.',
    summaryEn: 'Shipping solution for oversized CNC machinery from Hamburg to Surabaya with specialized handling.',
    challengeId: 'Klien membutuhkan pengiriman mesin CNC berukuran besar dengan berat 45 ton dari Hamburg, Jerman ke pabrik mereka di Surabaya. Mesin ini memerlukan penanganan khusus dan perizinan impor yang kompleks.',
    challengeEn: 'A client needs to ship an oversized 45-ton CNC machine from Hamburg, Germany to their factory in Surabaya. The machine requires special handling and complex import permits.',
    solutionId: 'Tim GLS merancang rencana pengiriman door-to-door yang komprehensif, termasuk flat rack container, pengamanan kargo khusus, dan pengurusan semua dokumen impor secara paralel.',
    solutionEn: 'The GLS team designs a comprehensive door-to-door shipping plan, including flat rack containers, specialized cargo securing, and parallel processing of all import documentation.',
    resultsId: ['Perencanaan pengiriman end-to-end dengan timeline terukur', 'Penanganan kargo berdimensi besar dengan jaminan keamanan', 'Pengurusan perizinan impor yang efisien dan tepat waktu'],
    resultsEn: ['End-to-end shipping planning with measurable timeline', 'Oversized cargo handling with security guarantee', 'Efficient and timely import permit processing'],
    service: 'Project Cargo',
    industry: 'Manufacturing',
  },
  {
    slug: 'fmcg-distribution',
    titleId: 'Distribusi FMCG ke Pasar ASEAN',
    titleEn: 'FMCG Distribution to ASEAN Markets',
    summaryId: 'Solusi logistik multi-negara untuk produk FMCG dengan volume tinggi dan jadwal reguler.',
    summaryEn: 'Multi-country logistics solution for high-volume FMCG products with regular schedules.',
    challengeId: 'Produsen FMCG di Surabaya membutuhkan distribusi rutin ke Singapura, Malaysia, Thailand, Vietnam, dan Filipina dengan konsistensi waktu dan biaya yang kompetitif.',
    challengeEn: 'An FMCG manufacturer in Surabaya needs regular distribution to Singapore, Malaysia, Thailand, Vietnam, and the Philippines with consistent timing and competitive costs.',
    solutionId: 'GLS menyusun jadwal pengiriman LCL konsolidasi dengan rute optimisasi dan kontrak jangka panjang dengan shipping line untuk mendapatkan rate terbaik.',
    solutionEn: 'GLS sets up consolidated LCL shipping schedules with optimized routes and long-term contracts with shipping lines to secure the best rates.',
    resultsId: ['Jadwal pengiriman reguler ke 5 negara ASEAN', 'Optimisasi biaya melalui konsolidasi LCL', 'Lead time yang konsisten dan terukur'],
    resultsEn: ['Regular shipping schedules to 5 ASEAN countries', 'Cost optimization through LCL consolidation', 'Consistent and measurable lead times'],
    service: 'Ocean Freight',
    industry: 'FMCG',
  },
  {
    slug: 'pharmaceutical-cold-chain',
    titleId: 'Pengiriman Cold Chain Farmasi dari India',
    titleEn: 'Pharmaceutical Cold Chain from India',
    summaryId: 'Pengiriman bahan baku farmasi sensitif suhu dari Mumbai ke Jakarta dengan kontrol suhu end-to-end.',
    summaryEn: 'Temperature-sensitive pharmaceutical raw materials from Mumbai to Jakarta with end-to-end temperature control.',
    challengeId: 'Perusahaan farmasi membutuhkan pengiriman rutin bahan baku aktif yang memerlukan kontrol suhu 2-8°C dari Mumbai ke Jakarta, dengan regulasi ketat BPOM.',
    challengeEn: 'A pharmaceutical company needs regular shipment of active ingredients requiring 2-8°C temperature control from Mumbai to Jakarta, under strict BPOM regulations.',
    solutionId: 'GLS menyediakan reefer container dengan monitoring suhu real-time, serta menangani seluruh proses perizinan impor farmasi termasuk dokumen BPOM.',
    solutionEn: 'GLS provides reefer containers with real-time temperature monitoring and handles the entire pharmaceutical import process including BPOM documentation.',
    resultsId: ['Kontrol suhu end-to-end dengan monitoring real-time', 'Pengurusan dokumen BPOM secara komprehensif', 'Kepatuhan penuh terhadap regulasi farmasi'],
    resultsEn: ['End-to-end temperature control with real-time monitoring', 'Comprehensive BPOM document handling', 'Full compliance with pharmaceutical regulations'],
    service: 'Air Freight',
    industry: 'Pharmaceutical',
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug)
}
