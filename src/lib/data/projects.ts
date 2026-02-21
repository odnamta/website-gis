export interface Project {
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
  date: string
}

export const projects: Project[] = [
  {
    slug: 'petrokimia-gresik-amur-ii',
    titleId: 'Petrokimia Gresik — Proyek AMUR II',
    titleEn: 'Petrokimia Gresik — AMUR II Project',
    summaryId: 'Heavy lift dan erection untuk pabrik ammonium urea (AMUR II) di kompleks Petrokimia Gresik, Oktober 2016.',
    summaryEn: 'Heavy lift and erection for the ammonium urea plant (AMUR II) at the Petrokimia Gresik complex, October 2016.',
    challengeId: 'Proyek AMUR II memerlukan pemasangan reaktor dan kolom distilasi berukuran besar di area pabrik yang padat dengan akses terbatas. Beberapa komponen memiliki berat di atas 100 ton dan harus diangkat ke ketinggian signifikan di antara struktur eksisting.',
    challengeEn: 'The AMUR II project required the installation of large reactors and distillation columns in a dense plant area with limited access. Several components weighed over 100 tons and needed to be lifted to significant heights between existing structures.',
    solutionId: 'GIS mengerahkan crane hidrolik berkapasitas besar dengan perencanaan rigging detail. Tim engineering membuat method statement khusus untuk setiap lift, termasuk simulasi beban dan analisis tanah. Operasi dilaksanakan secara bertahap dengan koordinasi ketat bersama kontraktor EPC.',
    solutionEn: 'GIS deployed high-capacity hydraulic cranes with detailed rigging plans. The engineering team prepared specific method statements for each lift, including load simulation and soil analysis. Operations were executed in phases with tight coordination with the EPC contractor.',
    resultsId: [
      'Seluruh komponen terpasang sesuai jadwal proyek',
      'Zero incident selama operasi heavy lift',
      'Koordinasi efektif dengan EPC contractor dan plant owner',
    ],
    resultsEn: [
      'All components installed according to project schedule',
      'Zero incidents during heavy lift operations',
      'Effective coordination with EPC contractor and plant owner',
    ],
    service: 'Project Cargo',
    industry: 'Petrochemical',
    date: '2016-10',
  },
  {
    slug: 'lombok-cfspp-ftp2',
    titleId: 'Lombok CFSPP FTP-2 2x50MW',
    titleEn: 'Lombok CFSPP FTP-2 2x50MW',
    summaryId: 'Pengiriman dan erection peralatan pembangkit listrik tenaga uap 2x50MW di Lombok, April 2014.',
    summaryEn: 'Delivery and erection of 2x50MW coal-fired steam power plant equipment in Lombok, April 2014.',
    challengeId: 'Proyek pembangkit listrik di Lombok memerlukan pengiriman peralatan berat dari Surabaya via laut, dilanjutkan transportasi darat di Lombok dengan infrastruktur jalan yang terbatas. Boiler dan turbin harus diangkut dan dipasang dengan presisi tinggi.',
    challengeEn: 'The power plant project in Lombok required delivery of heavy equipment from Surabaya by sea, followed by land transport in Lombok with limited road infrastructure. Boilers and turbines had to be transported and installed with high precision.',
    solutionId: 'GIS merancang solusi pengiriman multi-moda: pengangkutan dari pabrik ke pelabuhan Surabaya, pengiriman laut ke Lombok menggunakan barge khusus, dan transportasi darat menggunakan multi-axle trailer. Tim erection GIS melakukan pemasangan komponen utama menggunakan tandem crane lift.',
    solutionEn: 'GIS designed a multi-modal delivery solution: transport from factory to Surabaya port, sea shipping to Lombok using specialized barges, and land transport using multi-axle trailers. The GIS erection team installed main components using tandem crane lifts.',
    resultsId: [
      'Pengiriman selesai sesuai milestone proyek',
      'Pemasangan boiler dan turbin tanpa kerusakan',
      'Infrastruktur jalan terjaga selama transportasi heavy load',
    ],
    resultsEn: [
      'Delivery completed per project milestones',
      'Boiler and turbine installation without damage',
      'Road infrastructure preserved during heavy load transport',
    ],
    service: 'Project Cargo',
    industry: 'Power Generation',
    date: '2014-04',
  },
  {
    slug: 'pelindo-port-equipment',
    titleId: 'Pelindo I — Peralatan Pelabuhan',
    titleEn: 'Pelindo I — Port Equipment',
    summaryId: 'Pengiriman dan instalasi peralatan pelabuhan untuk Pelindo I, April 2014.',
    summaryEn: 'Delivery and installation of port equipment for Pelindo I, April 2014.',
    challengeId: 'Pelindo I memerlukan pengadaan dan instalasi peralatan bongkar muat baru di beberapa pelabuhan. Peralatan seperti container crane dan mobile harbor crane harus dikirim dari pelabuhan asal dan dirakit di lokasi dengan tetap menjaga operasional pelabuhan yang berjalan.',
    challengeEn: 'Pelindo I required procurement and installation of new cargo handling equipment at several ports. Equipment such as container cranes and mobile harbor cranes had to be shipped from origin ports and assembled on-site while maintaining ongoing port operations.',
    solutionId: 'GIS mengkoordinasikan pengiriman laut untuk peralatan yang berdimensi sangat besar, melakukan stevedoring khusus di pelabuhan tujuan, dan melaksanakan assembling serta commissioning peralatan. Semua pekerjaan dijadwalkan agar tidak mengganggu operasional pelabuhan yang berjalan.',
    solutionEn: 'GIS coordinated sea shipment of extremely large-dimension equipment, performed specialized stevedoring at destination ports, and executed equipment assembly and commissioning. All work was scheduled to avoid disrupting ongoing port operations.',
    resultsId: [
      'Peralatan terpasang dan operational sesuai spesifikasi',
      'Operasional pelabuhan tidak terganggu selama proses instalasi',
      'Assembling dan commissioning selesai tepat waktu',
    ],
    resultsEn: [
      'Equipment installed and operational per specifications',
      'Port operations uninterrupted during installation process',
      'Assembly and commissioning completed on time',
    ],
    service: 'Mechanical Erection',
    industry: 'Port & Maritime',
    date: '2014-04',
  },
  {
    slug: 'pltmg-sorong-wartsila',
    titleId: 'PLTMG Sorong — Pengiriman Mesin Wartsila',
    titleEn: 'PLTMG Sorong — Wartsila Engine Delivery',
    summaryId: 'Pengiriman 3 unit mesin Wartsila masing-masing seberat 140 ton ke Sorong, Papua Barat untuk proyek PLTMG.',
    summaryEn: 'Delivery of 3 Wartsila engine units, each weighing 140 tons, to Sorong, West Papua for the gas engine power plant project.',
    challengeId: 'Tiga unit mesin gas Wartsila masing-masing seberat 140 ton harus dikirim dari Surabaya ke Sorong, Papua Barat. Tantangan utama meliputi jarak pengiriman laut yang jauh, fasilitas pelabuhan di Sorong yang terbatas, serta kondisi infrastruktur jalan menuju lokasi pembangkit.',
    challengeEn: 'Three Wartsila gas engine units, each weighing 140 tons, had to be shipped from Surabaya to Sorong, West Papua. Key challenges included the long sea shipping distance, limited port facilities in Sorong, and road infrastructure conditions leading to the power plant site.',
    solutionId: 'GIS menggunakan barge khusus untuk pengiriman laut Surabaya-Sorong. Di Sorong, stevedoring dilakukan dengan crane barge karena keterbatasan crane darat. Transportasi darat menggunakan SPMT (Self-Propelled Modular Transporter) untuk memindahkan mesin dari pelabuhan ke lokasi pembangkit. Jalan diperkuat di beberapa titik untuk menopang beban.',
    solutionEn: 'GIS used specialized barges for the Surabaya-Sorong sea shipment. In Sorong, stevedoring was performed using crane barges due to limited shore crane availability. Land transport utilized SPMT (Self-Propelled Modular Transporter) to move engines from port to the power plant site. Roads were reinforced at several points to support the load.',
    resultsId: [
      'Ketiga mesin terkirim dalam kondisi sempurna',
      'Solusi SPMT berhasil mengatasi keterbatasan infrastruktur',
      'Proyek selesai sesuai deadline yang ditetapkan',
    ],
    resultsEn: [
      'All three engines delivered in perfect condition',
      'SPMT solution successfully overcame infrastructure limitations',
      'Project completed per established deadline',
    ],
    service: 'Project Cargo',
    industry: 'Power Generation',
    date: '2017-05',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
