import type { Locale } from '@/lib/i18n/types'

type ServiceSlug = 'ocean-freight' | 'air-freight' | 'customs-brokerage' | 'warehousing' | 'land-transport' | 'project-cargo'

interface ServiceMeta {
  title: Record<Locale, string>
  description: Record<Locale, string>
  keywords: Record<Locale, string[]>
}

interface ServiceStat {
  value: number
  suffix: string
  label: Record<Locale, string>
}

interface ServiceFAQ {
  question: Record<Locale, string>
  answer: Record<Locale, string>
}

export const serviceMetadata: Record<ServiceSlug, ServiceMeta> = {
  'ocean-freight': {
    title: {
      id: 'Pengiriman Laut (Ocean Freight) — GLS',
      en: 'Ocean Freight Services — GLS',
    },
    description: {
      id: 'Layanan pengiriman laut FCL & LCL ke 50+ negara. Harga kompetitif, jadwal reguler, pelacakan real-time. PT Gama Lintas Samudera, Surabaya.',
      en: 'FCL & LCL ocean freight to 50+ countries. Competitive rates, regular schedules, real-time tracking. PT Gama Lintas Samudera, Surabaya, Indonesia.',
    },
    keywords: {
      id: ['pengiriman laut', 'ocean freight', 'FCL', 'LCL', 'freight forwarding Surabaya', 'kargo laut Indonesia'],
      en: ['ocean freight', 'sea freight', 'FCL', 'LCL', 'freight forwarding Indonesia', 'Surabaya shipping'],
    },
  },
  'air-freight': {
    title: {
      id: 'Pengiriman Udara (Air Freight) — GLS',
      en: 'Air Freight Services — GLS',
    },
    description: {
      id: 'Layanan pengiriman udara cepat dan aman. Ekspres, konsolidasi, charter. Jaringan maskapai global. PT Gama Lintas Samudera, Surabaya.',
      en: 'Fast and secure air freight services. Express, consolidated, and charter solutions. Global airline network. PT Gama Lintas Samudera, Surabaya.',
    },
    keywords: {
      id: ['pengiriman udara', 'air freight', 'kargo udara', 'ekspres', 'freight forwarding Surabaya'],
      en: ['air freight', 'air cargo', 'express shipping', 'cargo charter', 'freight forwarding Indonesia'],
    },
  },
  'customs-brokerage': {
    title: {
      id: 'Kepabeanan (Customs Brokerage) — GLS',
      en: 'Customs Brokerage Services — GLS',
    },
    description: {
      id: 'Layanan kepabeanan profesional. Pengurusan impor-ekspor, konsultasi tarif, perizinan khusus. PPJK terdaftar. PT Gama Lintas Samudera.',
      en: 'Professional customs brokerage. Import-export clearance, tariff advisory, regulatory compliance. Licensed PPJK. PT Gama Lintas Samudera.',
    },
    keywords: {
      id: ['kepabeanan', 'customs brokerage', 'PPJK', 'impor ekspor', 'bea cukai Surabaya'],
      en: ['customs brokerage', 'customs clearance', 'import export', 'Indonesian customs', 'PPJK licensed'],
    },
  },
  warehousing: {
    title: {
      id: 'Pergudangan (Warehousing) — GLS',
      en: 'Warehousing & Distribution — GLS',
    },
    description: {
      id: 'Fasilitas pergudangan modern di Surabaya. Gudang berikat, WMS digital, distribusi lokal & regional. PT Gama Lintas Samudera.',
      en: 'Modern warehousing in Surabaya. Bonded warehouse, digital WMS, local & regional distribution. PT Gama Lintas Samudera.',
    },
    keywords: {
      id: ['pergudangan', 'warehousing', 'gudang berikat', 'distribusi', 'logistik Surabaya'],
      en: ['warehousing', 'bonded warehouse', 'distribution', 'inventory management', 'Surabaya logistics'],
    },
  },
  'land-transport': {
    title: {
      id: 'Transportasi Darat (Land Transport) — GLS',
      en: 'Land Transport Services — GLS',
    },
    description: {
      id: 'Armada transportasi darat handal. Truk, trailer, GPS tracking, pengiriman antar pulau. PT Gama Lintas Samudera, Surabaya.',
      en: 'Reliable land transport fleet. Trucking, haulage, GPS tracking, inter-island delivery. PT Gama Lintas Samudera, Surabaya.',
    },
    keywords: {
      id: ['transportasi darat', 'land transport', 'truk kontainer', 'pengiriman darat', 'logistik Jawa'],
      en: ['land transport', 'trucking', 'container haulage', 'overland logistics', 'Java transport'],
    },
  },
  'project-cargo': {
    title: {
      id: 'Kargo Proyek (Project Cargo) — GLS',
      en: 'Project Cargo Services — GLS',
    },
    description: {
      id: 'Penanganan kargo berat & over-dimension. Survei rute, heavy lift, multi-moda, asuransi all-risk. PT Gama Lintas Samudera.',
      en: 'Heavy-lift and oversized cargo handling. Route surveys, multi-modal coordination, all-risk insurance. PT Gama Lintas Samudera.',
    },
    keywords: {
      id: ['kargo proyek', 'project cargo', 'heavy lift', 'over-dimension', 'logistik proyek Indonesia'],
      en: ['project cargo', 'heavy lift', 'oversized cargo', 'project logistics', 'Indonesia freight'],
    },
  },
}

export const serviceStats: Record<ServiceSlug, ServiceStat[]> = {
  'ocean-freight': [
    { value: 50, suffix: '+', label: { id: 'Negara Tujuan', en: 'Countries Served' } },
    { value: 20, suffix: '+', label: { id: 'Mitra Pelayaran', en: 'Shipping Partners' } },
    { value: 10000, suffix: '+', label: { id: 'TEU per Tahun', en: 'TEUs per Year' } },
  ],
  'air-freight': [
    { value: 48, suffix: 'h', label: { id: 'Transit Tercepat', en: 'Fastest Transit' } },
    { value: 30, suffix: '+', label: { id: 'Bandara Tujuan', en: 'Destination Airports' } },
    { value: 99, suffix: '%', label: { id: 'Tingkat Ketepatan', en: 'On-Time Rate' } },
  ],
  'customs-brokerage': [
    { value: 5000, suffix: '+', label: { id: 'Dokumen per Tahun', en: 'Documents per Year' } },
    { value: 98, suffix: '%', label: { id: 'Tingkat Keberhasilan', en: 'Clearance Rate' } },
    { value: 24, suffix: 'h', label: { id: 'Rata-rata Proses', en: 'Average Clearance' } },
  ],
  warehousing: [
    { value: 5000, suffix: 'm²', label: { id: 'Luas Gudang', en: 'Warehouse Space' } },
    { value: 99, suffix: '%', label: { id: 'Akurasi Inventaris', en: 'Inventory Accuracy' } },
    { value: 24, suffix: '/7', label: { id: 'Keamanan', en: 'Security' } },
  ],
  'land-transport': [
    { value: 50, suffix: '+', label: { id: 'Armada Tersedia', en: 'Fleet Size' } },
    { value: 100, suffix: '%', label: { id: 'GPS Tracking', en: 'GPS Tracked' } },
    { value: 34, suffix: '', label: { id: 'Provinsi Terjangkau', en: 'Provinces Covered' } },
  ],
  'project-cargo': [
    { value: 500, suffix: 'T', label: { id: 'Kapasitas Angkat', en: 'Lift Capacity' } },
    { value: 100, suffix: '+', label: { id: 'Proyek Selesai', en: 'Projects Completed' } },
    { value: 0, suffix: '', label: { id: 'Zero Incident Record', en: 'Zero Incident Record' } },
  ],
}

export const serviceFAQs: Record<ServiceSlug, ServiceFAQ[]> = {
  'ocean-freight': [
    {
      question: { id: 'Apa perbedaan FCL dan LCL?', en: 'What is the difference between FCL and LCL?' },
      answer: {
        id: 'FCL (Full Container Load) berarti Anda menyewa satu kontainer penuh, sementara LCL (Less than Container Load) memungkinkan Anda berbagi ruang kontainer dengan pengirim lain. FCL lebih ekonomis untuk volume besar, sedangkan LCL cocok untuk kargo bervolume kecil.',
        en: 'FCL (Full Container Load) means you rent an entire container, while LCL (Less than Container Load) allows you to share container space with other shippers. FCL is more economical for large volumes, while LCL is suitable for smaller cargo.',
      },
    },
    {
      question: { id: 'Berapa lama waktu transit pengiriman laut?', en: 'How long does ocean freight transit take?' },
      answer: {
        id: 'Waktu transit bervariasi tergantung tujuan. Asia Tenggara: 3-7 hari, Asia Timur: 7-14 hari, Eropa: 21-30 hari, Amerika: 25-35 hari. Kami menyediakan jadwal reguler dengan berbagai pilihan shipping line.',
        en: 'Transit times vary by destination. Southeast Asia: 3-7 days, East Asia: 7-14 days, Europe: 21-30 days, Americas: 25-35 days. We provide regular schedules with multiple shipping line options.',
      },
    },
    {
      question: { id: 'Apakah bisa mengirim barang berbahaya (dangerous goods)?', en: 'Can you ship dangerous goods?' },
      answer: {
        id: 'Ya, kami memiliki sertifikasi dan pengalaman dalam menangani pengiriman barang berbahaya (DG) sesuai regulasi IMDG Code. Tim kami akan membantu mengurus dokumentasi dan pemilihan kontainer yang sesuai.',
        en: 'Yes, we are certified and experienced in handling dangerous goods (DG) shipments in compliance with IMDG Code regulations. Our team will assist with documentation and proper container selection.',
      },
    },
    {
      question: { id: 'Bagaimana cara melacak kontainer saya?', en: 'How can I track my container?' },
      answer: {
        id: 'Anda dapat melacak kontainer melalui halaman Track di website kami, atau menghubungi tim customer service kami. Kami menyediakan update status real-time dari booking hingga pengiriman selesai.',
        en: 'You can track your container through the Track page on our website, or contact our customer service team. We provide real-time status updates from booking to delivery completion.',
      },
    },
  ],
  'air-freight': [
    {
      question: { id: 'Kapan sebaiknya memilih pengiriman udara?', en: 'When should I choose air freight?' },
      answer: {
        id: 'Pengiriman udara ideal untuk kargo yang sensitif waktu, bernilai tinggi, atau bervolume kecil. Contohnya: suku cadang darurat, sampel produk, dokumen penting, atau barang yang mudah rusak.',
        en: 'Air freight is ideal for time-sensitive, high-value, or small-volume cargo. Examples include: emergency spare parts, product samples, important documents, or perishable goods.',
      },
    },
    {
      question: { id: 'Apakah tersedia layanan charter pesawat?', en: 'Is aircraft charter available?' },
      answer: {
        id: 'Ya, kami menyediakan layanan charter untuk kargo berukuran besar, berat berlebih, atau pengiriman mendesak yang memerlukan pesawat khusus. Hubungi tim kami untuk konsultasi dan penawaran.',
        en: 'Yes, we offer charter services for oversized, heavy, or urgent cargo that requires a dedicated aircraft. Contact our team for consultation and pricing.',
      },
    },
    {
      question: { id: 'Berapa batas berat dan dimensi kargo udara?', en: 'What are the weight and dimension limits for air cargo?' },
      answer: {
        id: 'Batas bervariasi tergantung maskapai dan jenis pesawat. Umumnya untuk kargo standar, berat maksimal per koli adalah 150 kg dengan dimensi sesuai ULD. Untuk kargo lebih besar, kami menyediakan solusi charter.',
        en: 'Limits vary by airline and aircraft type. Typically for standard cargo, maximum weight per piece is 150 kg with dimensions matching ULD requirements. For larger cargo, we provide charter solutions.',
      },
    },
    {
      question: { id: 'Bagaimana penanganan barang mudah rusak (perishable)?', en: 'How are perishable goods handled?' },
      answer: {
        id: 'Kami memiliki prosedur khusus untuk barang perishable termasuk cold chain handling, priority loading, dan monitoring suhu. Kargo dipastikan transit dalam waktu sesingkat mungkin untuk menjaga kualitas.',
        en: 'We have specialized procedures for perishable goods including cold chain handling, priority loading, and temperature monitoring. Cargo is ensured minimum transit time to maintain quality.',
      },
    },
  ],
  'customs-brokerage': [
    {
      question: { id: 'Apa itu PPJK dan mengapa penting?', en: 'What is PPJK and why is it important?' },
      answer: {
        id: 'PPJK (Pengusaha Pengurusan Jasa Kepabeanan) adalah lisensi resmi dari Direktorat Jenderal Bea & Cukai untuk menangani urusan kepabeanan. GLS adalah PPJK terdaftar yang menjamin proses customs clearance Anda sesuai regulasi.',
        en: 'PPJK is an official license from Indonesia\'s Directorate General of Customs and Excise for handling customs matters. GLS is a registered PPJK ensuring your customs clearance complies with all regulations.',
      },
    },
    {
      question: { id: 'Berapa lama proses customs clearance?', en: 'How long does customs clearance take?' },
      answer: {
        id: 'Untuk jalur hijau (green channel), proses bisa selesai dalam 1-2 hari kerja. Jalur merah memerlukan 3-5 hari kerja. Kami membantu memastikan kelengkapan dokumen untuk meminimalkan waktu proses.',
        en: 'For green channel, clearance can be completed in 1-2 business days. Red channel requires 3-5 business days. We ensure complete documentation to minimize processing time.',
      },
    },
    {
      question: { id: 'Izin khusus apa saja yang bisa diurus?', en: 'What special permits can you handle?' },
      answer: {
        id: 'Kami mengurus berbagai perizinan termasuk: izin BPOM (obat & makanan), SNI (standar nasional), Kemendag (perdagangan), Kementan (pertanian), dan izin khusus lainnya sesuai jenis barang yang diimpor.',
        en: 'We handle various permits including: BPOM (food & drug), SNI (national standards), Ministry of Trade, Ministry of Agriculture, and other special licenses based on imported goods type.',
      },
    },
    {
      question: { id: 'Apakah bisa membantu konsultasi klasifikasi HS Code?', en: 'Can you help with HS Code classification?' },
      answer: {
        id: 'Ya, tim kepabeanan kami berpengalaman dalam klasifikasi HS Code yang tepat untuk meminimalkan bea masuk dan menghindari potensi masalah regulasi. Kami juga membantu mengajukan tarif preferensi jika berlaku.',
        en: 'Yes, our customs team has extensive experience in accurate HS Code classification to minimize duties and avoid regulatory issues. We also assist with preferential tariff applications where applicable.',
      },
    },
  ],
  warehousing: [
    {
      question: { id: 'Apakah tersedia gudang berikat (bonded warehouse)?', en: 'Is bonded warehouse available?' },
      answer: {
        id: 'Ya, kami memiliki fasilitas gudang berikat berlisensi yang memungkinkan penyimpanan barang impor tanpa membayar bea masuk terlebih dahulu hingga barang siap didistribusikan atau diekspor kembali.',
        en: 'Yes, we have licensed bonded warehouse facilities that allow storage of imported goods without paying duties upfront until goods are ready for distribution or re-export.',
      },
    },
    {
      question: { id: 'Bagaimana sistem manajemen gudang?', en: 'What warehouse management system do you use?' },
      answer: {
        id: 'Kami menggunakan Warehouse Management System (WMS) berbasis digital yang menyediakan visibilitas inventaris real-time, pelaporan otomatis, dan integrasi dengan sistem pelacakan pengiriman.',
        en: 'We use a digital Warehouse Management System (WMS) providing real-time inventory visibility, automated reporting, and integration with shipment tracking systems.',
      },
    },
    {
      question: { id: 'Apakah ada layanan stuffing dan unstuffing?', en: 'Do you offer stuffing and unstuffing services?' },
      answer: {
        id: 'Ya, kami menyediakan layanan stuffing (pemuatan) dan unstuffing (pembongkaran) kontainer di gudang kami dengan tim berpengalaman dan peralatan yang memadai untuk memastikan keamanan kargo Anda.',
        en: 'Yes, we provide container stuffing and unstuffing services at our warehouse with experienced teams and proper equipment to ensure your cargo\'s safety.',
      },
    },
    {
      question: { id: 'Apakah bisa menyimpan barang dengan suhu terkontrol?', en: 'Can you store temperature-controlled goods?' },
      answer: {
        id: 'Ya, kami memiliki area penyimpanan dengan pengaturan suhu untuk barang yang memerlukan penanganan khusus seperti bahan kimia, farmasi, dan produk sensitif suhu lainnya.',
        en: 'Yes, we have temperature-controlled storage areas for goods requiring special handling such as chemicals, pharmaceuticals, and other temperature-sensitive products.',
      },
    },
  ],
  'land-transport': [
    {
      question: { id: 'Jenis armada apa saja yang tersedia?', en: 'What types of vehicles are available?' },
      answer: {
        id: 'Kami memiliki armada yang beragam termasuk truk tronton, trailer 20ft dan 40ft, low-bed untuk kargo berat, serta kendaraan khusus lainnya. Semua dilengkapi GPS tracking.',
        en: 'We have a diverse fleet including semi-trailers, 20ft and 40ft chassis trailers, low-bed for heavy cargo, and other specialized vehicles. All equipped with GPS tracking.',
      },
    },
    {
      question: { id: 'Apakah melayani pengiriman antar pulau?', en: 'Do you provide inter-island delivery?' },
      answer: {
        id: 'Ya, kami melayani pengiriman antar pulau di Indonesia melalui kombinasi transportasi darat dan kapal ro-ro atau feeder vessel, mencakup Jawa, Sumatera, Kalimantan, Sulawesi, dan wilayah lainnya.',
        en: 'Yes, we provide inter-island delivery across Indonesia through combined land transport and ro-ro ships or feeder vessels, covering Java, Sumatra, Kalimantan, Sulawesi, and other regions.',
      },
    },
    {
      question: { id: 'Bagaimana cara memantau posisi armada?', en: 'How can I track fleet positions?' },
      answer: {
        id: 'Seluruh armada dilengkapi sistem GPS tracking yang memungkinkan pemantauan posisi real-time. Anda dapat menghubungi tim kami untuk mendapatkan update lokasi pengiriman Anda.',
        en: 'All vehicles are equipped with GPS tracking systems for real-time position monitoring. You can contact our team for location updates on your delivery.',
      },
    },
    {
      question: { id: 'Berapa waktu pengiriman dari Surabaya ke Jakarta?', en: 'How long is delivery from Surabaya to Jakarta?' },
      answer: {
        id: 'Waktu pengiriman Surabaya-Jakarta via darat biasanya 2-3 hari untuk muatan kontainer penuh. Jadwal dapat disesuaikan dengan kebutuhan Anda, termasuk opsi ekspres.',
        en: 'Surabaya-Jakarta land delivery typically takes 2-3 days for full container loads. Schedules can be customized to your needs, including express options.',
      },
    },
  ],
  'project-cargo': [
    {
      question: { id: 'Apa yang termasuk layanan project cargo?', en: 'What does project cargo service include?' },
      answer: {
        id: 'Layanan kami mencakup survei lokasi, perencanaan rute, pengadaan alat berat, koordinasi multi-moda (laut, darat, udara), pengurusan perizinan khusus, dan supervisi on-site hingga instalasi.',
        en: 'Our services include site surveys, route planning, heavy equipment sourcing, multi-modal coordination (sea, land, air), special permit handling, and on-site supervision through installation.',
      },
    },
    {
      question: { id: 'Berapa kapasitas angkat maksimal?', en: 'What is the maximum lift capacity?' },
      answer: {
        id: 'Melalui mitra dan peralatan khusus, kami mampu menangani kargo hingga 500 ton. Untuk proyek yang lebih besar, kami merancang solusi custom dengan crane dan peralatan spesialis.',
        en: 'Through our partners and specialized equipment, we can handle cargo up to 500 tons. For larger projects, we design custom solutions with cranes and specialist equipment.',
      },
    },
    {
      question: { id: 'Bagaimana dengan asuransi kargo proyek?', en: 'What about project cargo insurance?' },
      answer: {
        id: 'Kami menyediakan asuransi all-risk yang mencakup seluruh fase pengiriman, dari pemuatan di origin hingga instalasi di site. Nilai pertanggungan disesuaikan dengan nilai dan risiko proyek.',
        en: 'We provide all-risk insurance covering the entire shipping phase, from loading at origin to installation at site. Coverage is tailored to the project\'s value and risk profile.',
      },
    },
    {
      question: { id: 'Apakah pernah menangani proyek industri besar?', en: 'Have you handled large industrial projects?' },
      answer: {
        id: 'Ya, dengan dukungan pengalaman Gama Group, kami telah menangani berbagai proyek industri termasuk pengiriman mesin pabrik, peralatan pertambangan, komponen pembangkit listrik, dan infrastruktur skala besar.',
        en: 'Yes, backed by Gama Group\'s experience, we have handled various industrial projects including factory machinery, mining equipment, power plant components, and large-scale infrastructure.',
      },
    },
  ],
}
