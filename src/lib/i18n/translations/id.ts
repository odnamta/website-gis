import { Translations } from '../types'

export const id: Translations = {
  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    services: 'Layanan',
    routes: 'Rute & Jaringan',
    track: 'Lacak Kiriman',
    caseStudies: 'Studi Kasus',
    news: 'Berita',
    careers: 'Karir',
    partners: 'Mitra',
    contact: 'Hubungi Kami',
    faq: 'FAQ',
    getQuote: 'Minta Penawaran',
  },
  hero: {
    title: 'Solusi Pengiriman Internasional Terpercaya',
    subtitle:
      'PT Gama Lintas Samudera — divisi internasional Gama Group — menghubungkan bisnis Anda ke seluruh dunia melalui layanan freight forwarding yang andal, efisien, dan profesional, didukung pengalaman 30+ tahun di industri logistik.',
    ctaQuote: 'Dapatkan Penawaran Gratis',
    ctaServices: 'Jelajahi Layanan Kami',
    stats: {
      yearsExperience: 'Tahun Pengalaman Grup',
      countriesServed: 'Negara Tujuan',
      shippingPartners: 'Mitra Pelayaran',
      clientSatisfaction: 'Komitmen Layanan',
    },
  },
  services: {
    sectionTitle: 'Layanan Kami',
    sectionSubtitle:
      'Kami menyediakan solusi logistik menyeluruh untuk memenuhi kebutuhan pengiriman internasional Anda, dari laut hingga darat.',
    viewAll: 'Lihat Semua Layanan',
    ocean: {
      title: 'Pengiriman Laut (Ocean Freight)',
      description:
        'Layanan pengiriman laut FCL dan LCL ke berbagai pelabuhan utama di seluruh dunia dengan harga kompetitif dan jadwal keberangkatan rutin.',
      features: [
        'Full Container Load (FCL) dan Less Container Load (LCL)',
        'Jadwal keberangkatan reguler ke 50+ negara',
        'Penanganan kargo berbahaya (dangerous goods) bersertifikasi',
        'Pelacakan kontainer secara real-time',
        'Konsolidasi kargo untuk efisiensi biaya',
      ],
      processSteps: [
        { title: 'Konsultasi & Penawaran', description: 'Analisis kebutuhan pengiriman Anda dan penyusunan penawaran harga terbaik dari berbagai shipping line.' },
        { title: 'Booking & Dokumentasi', description: 'Pemesanan ruang kapal dan penyiapan dokumen ekspor/impor seperti Bill of Lading, Packing List, dan Invoice.' },
        { title: 'Stuffing & Pengiriman', description: 'Pemuatan kargo ke kontainer dengan supervisi profesional dan pengiriman ke pelabuhan asal.' },
        { title: 'Pemantauan Transit', description: 'Pelacakan real-time selama perjalanan laut hingga tiba di pelabuhan tujuan.' },
        { title: 'Customs & Pengiriman Akhir', description: 'Proses kepabeanan di negara tujuan dan pengiriman kargo hingga ke lokasi penerima.' },
      ],
      benefits: [
        { title: 'Biaya Efisien', description: 'Tarif kompetitif melalui kemitraan langsung dengan 20+ shipping line terkemuka dunia.' },
        { title: 'Jadwal Reguler', description: 'Keberangkatan terjadwal ke 50+ negara memastikan perencanaan supply chain yang akurat.' },
        { title: 'Visibilitas Penuh', description: 'Pelacakan kontainer real-time dari pemuatan hingga pengiriman akhir.' },
      ],
    },
    air: {
      title: 'Pengiriman Udara (Air Freight)',
      description:
        'Solusi pengiriman udara cepat dan aman untuk kargo yang memerlukan waktu transit singkat, didukung jaringan maskapai global.',
      features: [
        'Layanan ekspres dan standar sesuai kebutuhan',
        'Charter pesawat untuk kargo khusus dan proyek besar',
        'Penanganan kargo bernilai tinggi dan sensitif waktu',
        'Konsolidasi udara untuk optimalisasi biaya',
        'Door-to-door dan airport-to-airport service',
      ],
      processSteps: [
        { title: 'Permintaan & Konsultasi', description: 'Evaluasi jenis kargo, berat, dimensi, dan urgensi untuk menentukan opsi pengiriman terbaik.' },
        { title: 'Booking Maskapai', description: 'Pemesanan ruang kargo pada maskapai partner dengan rute dan jadwal optimal.' },
        { title: 'Pengepakan & Labeling', description: 'Pengemasan sesuai standar IATA dan pelabelan kargo untuk keamanan selama penerbangan.' },
        { title: 'Pengiriman & Tracking', description: 'Penyerahan kargo ke bandara dan pemantauan real-time hingga tiba di tujuan.' },
      ],
      benefits: [
        { title: 'Kecepatan Transit', description: 'Pengiriman dalam hitungan jam hingga hari, ideal untuk kargo sensitif waktu.' },
        { title: 'Keamanan Tinggi', description: 'Penanganan profesional untuk kargo bernilai tinggi dan barang sensitif.' },
        { title: 'Fleksibilitas', description: 'Pilihan ekspres, standar, dan charter sesuai urgensi dan anggaran Anda.' },
      ],
    },
    customs: {
      title: 'Kepabeanan (Customs Brokerage)',
      description:
        'Layanan kepabeanan profesional untuk memastikan proses impor dan ekspor berjalan lancar sesuai regulasi yang berlaku di Indonesia.',
      features: [
        'Pengurusan dokumen impor dan ekspor',
        'Konsultasi tarif bea masuk dan klasifikasi HS code',
        'Pengurusan izin dan perizinan khusus (BPOM, SNI, Kemendag)',
        'Audit kepabeanan dan kepatuhan regulasi',
        'Layanan under name import dan PPJK terdaftar',
      ],
      processSteps: [
        { title: 'Review Dokumen', description: 'Pemeriksaan kelengkapan dan kesesuaian seluruh dokumen impor/ekspor.' },
        { title: 'Klasifikasi & Tarif', description: 'Penentuan HS Code yang tepat dan perhitungan bea masuk serta pajak terkait.' },
        { title: 'Pengajuan Deklarasi', description: 'Penyerahan dokumen ke sistem CEISA Bea Cukai secara elektronik.' },
        { title: 'Pemeriksaan Fisik', description: 'Pendampingan jika diperlukan pemeriksaan fisik oleh petugas Bea Cukai.' },
        { title: 'Release & Pengiriman', description: 'Pengeluaran barang dari pelabuhan/bandara dan koordinasi pengiriman ke tujuan akhir.' },
      ],
      benefits: [
        { title: 'Kepatuhan Regulasi', description: 'Tim PPJK berlisensi memastikan setiap proses sesuai regulasi Bea Cukai terkini.' },
        { title: 'Proses Cepat', description: 'Rata-rata waktu customs clearance 24 jam untuk jalur hijau.' },
        { title: 'Konsultasi Ahli', description: 'Panduan profesional untuk klasifikasi HS Code dan optimalisasi tarif bea masuk.' },
      ],
    },
    warehousing: {
      title: 'Pergudangan (Warehousing)',
      description:
        'Fasilitas pergudangan modern di kawasan strategis Surabaya dengan sistem manajemen inventaris terintegrasi.',
      features: [
        'Gudang berikat (bonded warehouse) berlisensi',
        'Sistem manajemen gudang (WMS) berbasis digital',
        'Penanganan kargo khusus: suhu terkontrol, barang berbahaya',
        'Layanan stuffing dan unstuffing kontainer',
        'Distribusi lokal dan regional',
      ],
      processSteps: [
        { title: 'Penerimaan Barang', description: 'Pemeriksaan dan pencatatan barang masuk sesuai dokumen pengiriman.' },
        { title: 'Penyimpanan & Inventaris', description: 'Penempatan di area penyimpanan yang sesuai dan registrasi ke sistem WMS.' },
        { title: 'Manajemen Stok', description: 'Pemantauan inventaris real-time, stock opname berkala, dan pelaporan otomatis.' },
        { title: 'Pengambilan & Distribusi', description: 'Proses pick-pack dan pengiriman ke tujuan akhir sesuai instruksi klien.' },
      ],
      benefits: [
        { title: 'Lokasi Strategis', description: 'Terletak di Surabaya dengan akses langsung ke pelabuhan dan bandara utama.' },
        { title: 'Fasilitas Berlisensi', description: 'Gudang berikat resmi untuk penundaan pembayaran bea masuk.' },
        { title: 'Sistem Digital', description: 'WMS berbasis cloud untuk visibilitas inventaris real-time 24/7.' },
      ],
    },
    land: {
      title: 'Transportasi Darat (Land Transport)',
      description:
        'Armada transportasi darat yang handal untuk distribusi kargo di seluruh wilayah Jawa dan Indonesia, terintegrasi dengan layanan laut dan udara.',
      features: [
        'Armada truk tronton, trailer, dan low-bed tersedia',
        'Layanan door-to-port dan port-to-door',
        'GPS tracking untuk pemantauan armada real-time',
        'Pengiriman antar pulau melalui kapal ro-ro',
        'Jadwal pengiriman fleksibel sesuai kebutuhan',
      ],
      processSteps: [
        { title: 'Perencanaan Rute', description: 'Analisis rute optimal berdasarkan lokasi, jenis kargo, dan jadwal pengiriman.' },
        { title: 'Penjadwalan Armada', description: 'Penugasan kendaraan yang sesuai dan koordinasi dengan pengemudi.' },
        { title: 'Pemuatan & Berangkat', description: 'Loading kargo dengan supervisi dan keberangkatan sesuai jadwal.' },
        { title: 'Tracking & Pengiriman', description: 'Pemantauan GPS real-time hingga kargo tiba di tujuan dengan aman.' },
      ],
      benefits: [
        { title: 'Armada Beragam', description: 'Pilihan kendaraan lengkap dari truk tronton hingga low-bed untuk kargo spesial.' },
        { title: 'Jangkauan Luas', description: 'Pengiriman ke 34 provinsi di Indonesia termasuk layanan antar pulau.' },
        { title: 'Pemantauan Real-time', description: 'Seluruh armada dilengkapi GPS untuk visibilitas posisi kargo 24/7.' },
      ],
    },
    project: {
      title: 'Kargo Proyek (Project Cargo)',
      description:
        'Penanganan khusus untuk pengiriman kargo berdimensi besar, berat berlebih, atau proyek industri yang memerlukan perencanaan logistik menyeluruh.',
      features: [
        'Survei lokasi dan perencanaan rute pengiriman',
        'Heavy lift dan penanganan kargo over-dimension',
        'Koordinasi multi-moda (laut, darat, udara)',
        'Perizinan pengiriman kargo khusus',
        'Asuransi kargo all-risk untuk proyek besar',
      ],
      processSteps: [
        { title: 'Survei & Konsultasi', description: 'Kunjungan ke lokasi untuk evaluasi dimensi, berat, dan akses jalan.' },
        { title: 'Perencanaan Logistik', description: 'Penyusunan rencana transportasi detail termasuk rute, izin, dan jadwal.' },
        { title: 'Pengadaan Peralatan', description: 'Persiapan crane, trailer khusus, dan peralatan heavy lift yang diperlukan.' },
        { title: 'Eksekusi Transport', description: 'Pelaksanaan pengiriman dengan tim supervisi on-site di setiap tahap.' },
        { title: 'Instalasi & Serah Terima', description: 'Pendampingan pemasangan dan serah terima di lokasi proyek.' },
        { title: 'Dokumentasi & Laporan', description: 'Pelaporan lengkap termasuk foto, video, dan dokumentasi asuransi.' },
      ],
      benefits: [
        { title: 'Pengalaman Proyek', description: '100+ proyek industri sukses ditangani dengan dukungan Gama Group.' },
        { title: 'Solusi End-to-End', description: 'Dari survei lokasi hingga instalasi, satu mitra untuk seluruh proses.' },
        { title: 'Keamanan Terjamin', description: 'Asuransi all-risk dan zero incident record untuk ketenangan pikiran Anda.' },
        { title: 'Tim Ahli', description: 'Tenaga profesional berpengalaman dalam heavy lift dan kargo over-dimension.' },
      ],
    },
    detailPage: {
      features: 'Fitur Layanan',
      process: 'Proses Kerja',
      benefits: 'Keunggulan Layanan',
      faq: 'Pertanyaan Umum',
      relatedServices: 'Layanan Terkait',
      ctaTitle: 'Butuh Layanan Ini?',
      ctaSubtitle:
        'Hubungi tim kami untuk konsultasi gratis dan penawaran terbaik sesuai kebutuhan pengiriman Anda.',
      ctaButton: 'Hubungi Kami Sekarang',
    },
  },
  whyChooseUs: {
    sectionTitle: 'Mengapa Memilih Kami',
    sectionSubtitle:
      'Didukung pengalaman Gama Group selama 30+ tahun di industri logistik, GLS hadir dengan fondasi yang kuat untuk melayani kebutuhan pengiriman internasional Anda.',
    reasons: [
      {
        title: 'Warisan Gama Group',
        description:
          'Dibangun di atas fondasi Gama Group yang telah berpengalaman lebih dari 30 tahun di industri logistik Indonesia, memberikan kepercayaan dan keandalan yang sudah teruji waktu.',
      },
      {
        title: 'Jaringan Global',
        description:
          'Didukung oleh kemitraan dengan lebih dari 20 shipping line dan agen di 50+ negara, kami mampu menjangkau hampir seluruh pelabuhan dan bandara utama dunia.',
      },
      {
        title: 'Keahlian Kepabeanan',
        description:
          'Tim kepabeanan berlisensi PPJK dengan keahlian mendalam tentang regulasi perdagangan Indonesia memastikan proses customs clearance berjalan cepat dan sesuai regulasi.',
      },
      {
        title: 'Solusi Terukur',
        description:
          'Setiap klien memiliki kebutuhan unik. Kami merancang solusi logistik yang disesuaikan dengan jenis kargo, anggaran, dan jadwal Anda untuk hasil yang optimal.',
      },
    ],
  },
  clients: {
    sectionTitle: 'Mitra Pelayaran Kami',
  },
  testimonials: {
    sectionTitle: 'Testimoni Klien',
    sectionSubtitle:
      'Dengarkan langsung dari klien kami tentang pengalaman mereka bekerja sama dengan PT Gama Lintas Samudera.',
  },
  latestNews: {
    sectionTitle: 'Berita Terbaru',
    sectionSubtitle:
      'Informasi terkini seputar industri logistik, regulasi perdagangan, dan perkembangan perusahaan kami.',
    readMore: 'Baca Selengkapnya',
    viewAll: 'Lihat Semua Berita',
  },
  ctaBanner: {
    title: 'Siap Mengirim Kargo Anda ke Seluruh Dunia?',
    subtitle:
      'Dapatkan penawaran terbaik dari tim kami. Konsultasi gratis, tanpa kewajiban.',
    buttonText: 'Minta Penawaran Sekarang',
  },
  about: {
    pageTitle: 'Tentang Kami',
    pageSubtitle:
      'Mengenal lebih dekat PT Gama Lintas Samudera — divisi internasional Gama Group, mitra terpercaya untuk solusi logistik internasional Anda.',
    storyTitle: 'Cerita Kami',
    story: [
      'Gama Group telah menjadi nama yang dipercaya di industri logistik Indonesia sejak tahun 1995. Selama lebih dari tiga dekade, grup kami telah membangun reputasi yang kuat dalam pengiriman domestik, kepabeanan, pergudangan, dan transportasi darat — melayani ribuan klien dari berbagai sektor industri di seluruh Nusantara.',
      'Pada tahun 2026, PT Gama Lintas Samudera (GLS) resmi didirikan sebagai divisi internasional Gama Group untuk menjawab kebutuhan klien yang semakin global. Dengan fondasi pengalaman 30+ tahun, jaringan operasional yang luas, serta tim profesional yang sudah teruji, GLS hadir untuk menghubungkan bisnis Indonesia dengan pasar internasional melalui layanan freight forwarding yang andal dan komprehensif.',
      'Berlokasi strategis di Surabaya — salah satu pusat perdagangan terbesar di Indonesia — GLS memiliki akses langsung ke Pelabuhan Tanjung Perak dan Bandara Internasional Juanda. Didukung kemitraan dengan lebih dari 20 shipping line dan jaringan agen di 50+ negara, kami siap menjadi jembatan yang menghubungkan bisnis Anda ke seluruh dunia.',
    ],
    visionTitle: 'Visi',
    vision:
      'Menjadi perusahaan freight forwarding internasional terdepan di Indonesia yang dikenal atas keandalan, inovasi, dan komitmen terhadap kepuasan pelanggan.',
    missionTitle: 'Misi',
    missions: [
      'Menyediakan layanan logistik internasional yang profesional, efisien, dan tepat waktu dengan standar kualitas tertinggi.',
      'Memanfaatkan pengalaman dan jaringan Gama Group untuk memberikan solusi pengiriman internasional yang terpercaya.',
      'Membangun dan memperluas jaringan mitra global yang kuat untuk menjamin konektivitas ke seluruh penjuru dunia.',
      'Menerapkan teknologi terkini dalam operasional untuk meningkatkan transparansi, efisiensi, dan pengalaman pelanggan.',
    ],
    leadershipTitle: 'Tim Kepemimpinan',
    leadershipSubtitle:
      'Dipimpin oleh para profesional berpengalaman di industri logistik dan perdagangan internasional.',
    timelineTitle: 'Perjalanan Kami',
    certificationsTitle: 'Sertifikasi & Keanggotaan',
  },
  routes: {
    pageTitle: 'Rute & Jaringan',
    pageSubtitle:
      'Jangkauan global kami mencakup rute-rute perdagangan utama dunia, menghubungkan Indonesia dengan lebih dari 50 negara.',
    coverageTitle: 'Cakupan Wilayah',
    tradelanesTitle: 'Jalur Perdagangan Utama',
    portsTitle: 'Pelabuhan & Bandara Mitra',
  },
  track: {
    pageTitle: 'Lacak Kiriman',
    pageSubtitle:
      'Pantau status pengiriman Anda secara real-time dengan memasukkan nomor resi atau nomor kontainer.',
    formTitle: 'Masukkan Detail Pengiriman',
    trackingNumber: 'Nomor Resi / Nomor Kontainer',
    trackButton: 'Lacak Sekarang',
    inquiryTitle: 'Butuh Bantuan?',
    inquirySubtitle:
      'Jika Anda mengalami kendala dalam melacak kiriman atau membutuhkan informasi lebih lanjut, tim customer service kami siap membantu.',
    inquiryButton: 'Hubungi Customer Service',
  },
  caseStudies: {
    pageTitle: 'Studi Kasus',
    pageSubtitle:
      'Pelajari bagaimana kami membantu klien mengatasi tantangan logistik mereka dengan solusi yang tepat dan efektif.',
    readMore: 'Baca Selengkapnya',
    challenge: 'Tantangan',
    solution: 'Solusi',
    results: 'Hasil',
  },
  news: {
    pageTitle: 'Berita & Artikel',
    pageSubtitle:
      'Tetap terinformasi dengan berita terbaru seputar industri logistik, regulasi perdagangan, dan kegiatan perusahaan kami.',
    readMore: 'Baca Selengkapnya',
  },
  careers: {
    pageTitle: 'Karir',
    pageSubtitle:
      'Bergabunglah dengan tim profesional kami dan bangun karir yang bermakna di industri logistik internasional.',
    cultureTitle: 'Budaya Perusahaan',
    cultureSubtitle:
      'Kami percaya bahwa karyawan adalah aset terpenting. Di GLS, Anda akan menemukan lingkungan kerja yang kolaboratif, peluang pengembangan diri, dan tantangan yang mendorong pertumbuhan profesional.',
    positionsTitle: 'Posisi Tersedia',
    applyButton: 'Lamar Sekarang',
    noPositions:
      'Saat ini belum ada posisi yang tersedia. Silakan kirimkan CV Anda ke email kami untuk dipertimbangkan di kesempatan mendatang.',
  },
  partners: {
    pageTitle: 'Mitra Kami',
    pageSubtitle:
      'Kemitraan strategis dengan shipping lines terkemuka dan jaringan agen global menjadi fondasi layanan kami yang andal.',
    shippingLinesTitle: 'Shipping Lines',
    agentNetworkTitle: 'Jaringan Agen Global',
    associationsTitle: 'Asosiasi & Keanggotaan',
  },
  contact: {
    pageTitle: 'Hubungi Kami',
    pageSubtitle:
      'Kami siap membantu kebutuhan logistik Anda. Kirimkan pertanyaan atau permintaan penawaran melalui formulir berikut.',
    quoteForm: {
      title: 'Formulir Permintaan Penawaran',
      origin: 'Asal Pengiriman',
      destination: 'Tujuan Pengiriman',
      cargoType: 'Jenis Kargo',
      weight: 'Berat Perkiraan (kg)',
      serviceType: 'Jenis Layanan',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      company: 'Nama Perusahaan',
      message: 'Pesan Tambahan',
      submit: 'Kirim Permintaan',
      submitting: 'Mengirim...',
      success:
        'Permintaan penawaran Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam kerja.',
      error:
        'Terjadi kesalahan saat mengirim permintaan. Silakan coba lagi atau hubungi kami melalui telepon.',
    },
    info: {
      title: 'Informasi Kontak',
      address:
        'Jl. Laksda M. Nasir 12 A, Surabaya, Jawa Timur, Indonesia',
      phone: '+6282233181811',
      email: 'info@gls-id.com',
      hours: 'Senin - Jumat: 08.00 - 17.00 WIB | Sabtu: 08.00 - 12.00 WIB',
    },
  },
  faq: {
    pageTitle: 'Pertanyaan yang Sering Diajukan',
    pageSubtitle:
      'Temukan jawaban atas pertanyaan umum seputar layanan freight forwarding, kepabeanan, dan pengiriman internasional.',
    categories: {
      general: 'Umum',
      shipping: 'Pengiriman',
      customs: 'Kepabeanan',
      pricing: 'Harga & Biaya',
    },
  },
  footer: {
    companyDescription:
      'PT Gama Lintas Samudera adalah divisi internasional Gama Group yang berbasis di Surabaya, menyediakan solusi logistik terpadu untuk mendukung kelancaran perdagangan global Anda. Didukung pengalaman 30+ tahun di industri logistik.',
    quickLinks: 'Tautan Cepat',
    services: 'Layanan',
    contact: 'Kontak',
    copyright:
      '\u00A9 {year} PT Gama Lintas Samudera. Seluruh hak cipta dilindungi undang-undang.',
    newsletter: {
      title: 'Berlangganan Newsletter',
      placeholder: 'Masukkan alamat email Anda',
      button: 'Berlangganan',
    },
  },
  common: {
    learnMore: 'Pelajari Lebih Lanjut',
    viewAll: 'Lihat Semua',
    backToHome: 'Kembali ke Beranda',
    loading: 'Memuat...',
    readMore: 'Baca Selengkapnya',
  },
  error: {
    title: 'Terjadi Kesalahan',
    subtitle: 'Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.',
    retry: 'Coba Lagi',
  },
  notFound: {
    title: 'Halaman Tidak Ditemukan',
    subtitle:
      'Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda.',
    backHome: 'Kembali ke Beranda',
  },
}
