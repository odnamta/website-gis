import { Translations } from '../types'

export const id: Translations = {
  nav: {
    home: 'Beranda',
    about: 'Tentang Kami',
    services: 'Layanan',
    projects: 'Proyek',
    equipment: 'Peralatan',
    team: 'Tim Kami',
    gallery: 'Galeri',
    news: 'Berita',
    careers: 'Karir',
    partners: 'Mitra',
    contact: 'Hubungi Kami',
    faq: 'FAQ',
    getQuote: 'Minta Penawaran',
  },
  hero: {
    title: 'Kami Mengantarkan Kepastian',
    subtitle:
      'Gama Intisamudera menghadirkan layanan project logistics dan transportasi heavy lift yang profesional di seluruh Indonesia.',
    ctaQuote: 'Hubungi Kami',
    ctaServices: 'Jelajahi Layanan Kami',
    stats: {
      yearsExperience: 'Tahun Pengalaman',
      totalStaff: 'Total Karyawan',
      projectsCompleted: 'Proyek Selesai',
      coreServices: 'Pilar Layanan',
    },
  },
  services: {
    sectionTitle: 'Layanan Kami',
    sectionSubtitle:
      'Tiga pilar layanan terintegrasi untuk mendukung proyek industri dan infrastruktur Anda dari pengiriman hingga pemasangan.',
    viewAll: 'Lihat Semua Layanan',
    freightForwarding: {
      title: 'Freight Forwarding',
      description:
        'Layanan custom clearance dan pengiriman intra-insular ke seluruh wilayah Indonesia, didukung jaringan logistik yang luas dan pengalaman lebih dari 30 tahun.',
      features: [
        'Custom clearance (kepabeanan) impor dan ekspor',
        'Pengiriman intra-insular ke seluruh Indonesia',
        'Koordinasi multi-moda (laut, darat)',
        'Pengurusan dokumen dan perizinan lengkap',
        'Armada transportasi darat terintegrasi',
      ],
      processSteps: [
        { title: 'Konsultasi & Penawaran', description: 'Analisis kebutuhan pengiriman Anda dan penyusunan penawaran terbaik sesuai rute dan jenis kargo.' },
        { title: 'Dokumentasi & Perizinan', description: 'Pengurusan seluruh dokumen kepabeanan, izin angkut, dan persyaratan administrasi.' },
        { title: 'Pengiriman & Koordinasi', description: 'Eksekusi pengiriman dengan koordinasi multi-moda dari titik asal ke tujuan.' },
        { title: 'Pemantauan & Pelaporan', description: 'Pemantauan status pengiriman dan pelaporan berkala kepada klien.' },
        { title: 'Serah Terima', description: 'Konfirmasi penerimaan kargo di tujuan dan dokumentasi selesai.' },
      ],
      benefits: [
        { title: 'Pengalaman 30+ Tahun', description: 'Jaringan logistik yang luas dan reputasi terpercaya di industri freight forwarding Indonesia.' },
        { title: 'Jangkauan Nasional', description: 'Pengiriman ke 34 provinsi di seluruh Indonesia termasuk daerah terpencil.' },
        { title: 'Custom Clearance Profesional', description: 'Tim kepabeanan berpengalaman memastikan proses yang cepat dan sesuai regulasi.' },
      ],
    },
    projectCargo: {
      title: 'Project Cargo',
      description:
        'Penanganan kargo proyek berdimensi besar dan berat berlebih, meliputi stevedoring, inland & heavy transport, heavy lifting, jacking & skidding, serta engineering.',
      features: [
        'Stevedoring — bongkar muat kargo proyek di pelabuhan',
        'Inland & heavy transport — pengangkutan darat kargo berat',
        'Heavy lifting — pengangkatan beban berat dengan crane',
        'Jacking & skidding — pemindahan horizontal presisi tinggi',
        'Engineering — perencanaan teknis dan analisis beban',
      ],
      processSteps: [
        { title: 'Survei & Konsultasi', description: 'Kunjungan lokasi untuk evaluasi dimensi, berat, akses jalan, dan kondisi lapangan.' },
        { title: 'Engineering & Perencanaan', description: 'Penyusunan method statement, analisis beban, dan rencana rigging detail.' },
        { title: 'Mobilisasi Peralatan', description: 'Persiapan dan pengiriman crane, trailer khusus, dan peralatan heavy lift ke lokasi.' },
        { title: 'Eksekusi Stevedoring', description: 'Bongkar muat kargo di pelabuhan dengan crane kapal atau crane darat.' },
        { title: 'Heavy Transport & Lifting', description: 'Pengangkutan darat dan pengangkatan kargo ke posisi akhir.' },
        { title: 'Dokumentasi & Laporan', description: 'Pelaporan lengkap termasuk foto, video, dan dokumentasi keselamatan.' },
      ],
      benefits: [
        { title: '100+ Proyek Sukses', description: 'Track record solid menangani proyek industri besar di berbagai sektor.' },
        { title: 'Zero Incident Record', description: 'Komitmen penuh terhadap keselamatan kerja di setiap operasi.' },
        { title: 'Solusi End-to-End', description: 'Dari pelabuhan hingga lokasi proyek, satu mitra untuk seluruh proses.' },
        { title: 'Kapasitas 500 Ton', description: 'Kemampuan menangani beban hingga 500 ton dengan peralatan spesialis.' },
      ],
    },
    mechanicalErection: {
      title: 'Mechanical Erection & Assembling',
      description:
        'Jasa erection, assembling, dan engineering untuk proyek industri besar. Instalasi peralatan pabrik, struktur baja, dan komponen mesin dengan presisi tinggi.',
      features: [
        'Erection — pemasangan struktur baja dan peralatan industri',
        'Assembling — perakitan komponen mesin dan peralatan',
        'Engineering — perencanaan teknis dan supervisi',
        'Commissioning support — dukungan uji coba peralatan',
        'Alignment & leveling — presisi pemasangan tinggi',
      ],
      processSteps: [
        { title: 'Review Teknis', description: 'Evaluasi gambar teknis, spesifikasi, dan kondisi area pemasangan.' },
        { title: 'Perencanaan Erection', description: 'Penyusunan sequence erection, method statement, dan jadwal pelaksanaan.' },
        { title: 'Mobilisasi Tim & Peralatan', description: 'Pengerahan tim erection dan peralatan ke lokasi proyek.' },
        { title: 'Pelaksanaan Erection', description: 'Pemasangan dan perakitan komponen sesuai spesifikasi teknis.' },
        { title: 'Inspeksi & Serah Terima', description: 'Pemeriksaan kualitas, alignment check, dan serah terima kepada klien.' },
      ],
      benefits: [
        { title: 'Tim Berpengalaman', description: 'Tenaga ahli erection dan assembling dengan pengalaman proyek industri 20+ tahun.' },
        { title: 'Presisi Tinggi', description: 'Standar alignment dan leveling yang ketat untuk memastikan performa peralatan optimal.' },
        { title: 'Multi-Sektor', description: 'Pengalaman di sektor petrokimia, pembangkit listrik, semen, dan infrastruktur pelabuhan.' },
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
        'Hubungi tim kami untuk konsultasi dan penawaran terbaik sesuai kebutuhan proyek Anda.',
      ctaButton: 'Hubungi Kami Sekarang',
    },
  },
  whyChooseUs: {
    sectionTitle: 'Mengapa Memilih Kami',
    sectionSubtitle:
      'Didukung pengalaman lebih dari 30 tahun di industri heavy lift dan project logistics, GIS hadir dengan solusi terintegrasi untuk proyek Anda.',
    reasons: [
      {
        title: 'Pengalaman 30+ Tahun',
        description:
          'Berdiri sejak 1995, PT. Gama Intisamudera telah membuktikan keandalan dan kompetensinya dalam menangani ratusan proyek heavy lift di berbagai sektor industri.',
      },
      {
        title: 'Zero Incident Record',
        description:
          'Keselamatan adalah prioritas utama. Kami bangga mempertahankan zero incident record sepanjang operasional, didukung prosedur keselamatan yang ketat di setiap proyek.',
      },
      {
        title: 'Solusi Terintegrasi',
        description:
          'Dari freight forwarding, project cargo, hingga mechanical erection — satu mitra untuk menangani seluruh kebutuhan logistik dan instalasi proyek Anda.',
      },
      {
        title: 'Tim Profesional',
        description:
          'Didukung 65+ tenaga profesional yang berpengalaman di bidang engineering, operasi heavy lift, dan manajemen proyek untuk memastikan setiap pekerjaan berjalan sempurna.',
      },
    ],
  },
  partners: {
    pageTitle: 'Mitra & Klien Kami',
    pageSubtitle:
      'PT. Gama Intisamudera telah dipercaya oleh berbagai perusahaan terkemuka di Indonesia dan internasional.',
    sectionTitle: 'Klien & Mitra Kami',
  },
  testimonials: {
    sectionTitle: 'Testimoni Klien',
    sectionSubtitle:
      'Dengarkan langsung dari klien kami tentang pengalaman mereka bekerja sama dengan PT. Gama Intisamudera.',
  },
  latestNews: {
    sectionTitle: 'Berita Terbaru',
    sectionSubtitle:
      'Informasi terkini seputar proyek, pencapaian, dan perkembangan perusahaan kami.',
    readMore: 'Baca Selengkapnya',
    viewAll: 'Lihat Semua Berita',
  },
  ctaBanner: {
    title: 'Punya Proyek yang Membutuhkan Heavy Lift?',
    subtitle:
      'Hubungi tim kami untuk konsultasi dan penawaran. Kami siap membantu proyek Anda dari perencanaan hingga pelaksanaan.',
    buttonText: 'Hubungi Kami Sekarang',
  },
  about: {
    pageTitle: 'Tentang Kami',
    pageSubtitle:
      'Mengenal lebih dekat PT. Gama Intisamudera — spesialis heavy lift dan project logistics sejak 1995.',
    storyTitle: 'Cerita Kami',
    story: [
      'PT. Gama Intisamudera didirikan pada tahun 1995 di Surabaya sebagai perusahaan yang bergerak di bidang heavy lift transportation dan project logistics. Sejak awal, perusahaan telah memfokuskan diri pada penanganan kargo proyek berdimensi besar dan berat berlebih untuk industri di seluruh Indonesia.',
      'Selama lebih dari tiga dekade, GIS telah membangun reputasi yang kuat melalui keberhasilan menangani lebih dari 100 proyek besar di berbagai sektor industri termasuk petrokimia, pembangkit listrik, semen, pertambangan, dan infrastruktur pelabuhan. Janji kami sederhana: Kami Mengantarkan Kepastian — tepat waktu, tepat spesifikasi, di setiap proyek.',
      'Berlokasi strategis di Surabaya dengan akses ke Pelabuhan Tanjung Perak, GIS didukung oleh 65+ tenaga profesional yang berpengalaman di bidang engineering, operasi heavy lift, dan manajemen proyek. Tiga pilar layanan kami — Freight Forwarding, Project Cargo, dan Mechanical Erection — memberikan solusi terintegrasi dari pengiriman hingga pemasangan.',
    ],
    visionTitle: 'Visi',
    vision:
      'Menjadi perusahaan heavy lift dan project logistics terdepan di Indonesia yang dikenal atas profesionalisme, keselamatan, dan keandalan.',
    missionTitle: 'Misi',
    missions: [
      'Menyediakan layanan heavy lift dan project cargo yang profesional, aman, dan tepat waktu sesuai standar internasional.',
      'Mengembangkan kompetensi engineering dan teknis untuk memberikan solusi inovatif dalam setiap proyek.',
      'Menjaga zero incident record melalui penerapan standar keselamatan kerja yang ketat di setiap operasi.',
      'Berkontribusi pada pembangunan industri Indonesia melalui layanan logistik proyek yang handal dan terpercaya.',
    ],
    leadershipTitle: 'Tim Kepemimpinan',
    leadershipSubtitle:
      'Dipimpin oleh para profesional berpengalaman di industri heavy lift dan project logistics.',
    timelineTitle: 'Perjalanan Kami',
    certificationsTitle: 'Sertifikasi & Keanggotaan',
  },
  projects: {
    pageTitle: 'Proyek Kami',
    pageSubtitle:
      'Lihat bagaimana GIS menangani berbagai proyek heavy lift dan project cargo di seluruh Indonesia.',
    readMore: 'Lihat Detail Proyek',
    challenge: 'Tantangan',
    solution: 'Solusi',
    results: 'Hasil',
  },
  equipment: {
    pageTitle: 'Peralatan Kami',
    pageSubtitle:
      'Armada peralatan heavy lift dan transportasi yang kami miliki untuk mendukung setiap proyek.',
  },
  team: {
    pageTitle: 'Tim Kami',
    pageSubtitle:
      'Kenali tim profesional di balik keberhasilan setiap proyek PT. Gama Intisamudera.',
  },
  gallery: {
    pageTitle: 'Galeri',
    pageSubtitle:
      'Dokumentasi visual dari berbagai proyek heavy lift dan project cargo yang telah kami tangani.',
  },
  news: {
    pageTitle: 'Berita & Artikel',
    pageSubtitle:
      'Informasi terkini seputar proyek, industri, dan kegiatan perusahaan kami.',
    readMore: 'Baca Selengkapnya',
  },
  careers: {
    pageTitle: 'Karir',
    pageSubtitle:
      'Bergabunglah dengan tim profesional kami dan bangun karir di industri heavy lift dan project logistics.',
    cultureTitle: 'Budaya Perusahaan',
    cultureSubtitle:
      'Di GIS, kami mengedepankan profesionalisme, keselamatan kerja, dan pengembangan kompetensi setiap anggota tim.',
    positionsTitle: 'Posisi Tersedia',
    applyButton: 'Lamar Sekarang',
    noPositions:
      'Saat ini belum ada posisi yang tersedia. Silakan kirimkan CV Anda ke email kami untuk dipertimbangkan di kesempatan mendatang.',
  },
  contact: {
    pageTitle: 'Hubungi Kami',
    pageSubtitle:
      'Kami siap membantu kebutuhan proyek Anda. Kirimkan pertanyaan atau permintaan penawaran melalui formulir berikut.',
    quoteForm: {
      title: 'Formulir Permintaan Penawaran',
      origin: 'Lokasi Asal',
      destination: 'Lokasi Tujuan',
      cargoType: 'Jenis Kargo',
      weight: 'Berat Perkiraan (ton)',
      serviceType: 'Jenis Layanan',
      serviceOptions: {
        freightForwarding: 'Freight Forwarding',
        projectCargo: 'Project Cargo',
        mechanicalErection: 'Mechanical Erection',
      },
      cargoDimensions: 'Dimensi Kargo',
      length: 'Panjang (m)',
      width: 'Lebar (m)',
      height: 'Tinggi (m)',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      company: 'Nama Perusahaan',
      message: 'Detail Proyek',
      submit: 'Kirim Permintaan',
      submitting: 'Mengirim...',
      success:
        'Permintaan penawaran Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam kerja.',
      error:
        'Terjadi kesalahan saat mengirim permintaan. Silakan coba lagi atau hubungi kami melalui telepon.',
    },
    info: {
      title: 'Informasi Kontak',
      address: 'Alamat',
      phone: 'Telepon',
      fax: 'Faks',
      email: 'Email',
      hours: 'Senin - Jumat: 08.00 - 17.00 WIB | Sabtu: 08.00 - 12.00 WIB',
    },
  },
  faq: {
    pageTitle: 'Pertanyaan yang Sering Diajukan',
    pageSubtitle:
      'Temukan jawaban atas pertanyaan umum seputar layanan heavy lift, project cargo, dan logistik proyek kami.',
    categories: {
      general: 'Umum',
      'heavy-lift': 'Heavy Lift',
      'project-cargo': 'Project Cargo',
      pricing: 'Harga & Biaya',
    },
  },
  footer: {
    companyDescription:
      'PT. Gama Intisamudera adalah perusahaan heavy lift dan project logistics yang berbasis di Surabaya, beroperasi sejak 1995. Spesialis freight forwarding, project cargo handling, dan mechanical erection untuk proyek industri di seluruh Indonesia.',
    quickLinks: 'Tautan Cepat',
    services: 'Layanan',
    info: 'Informasi',
    contact: 'Kontak',
    copyright:
      '\u00A9 {year} PT. Gama Intisamudera. Seluruh hak cipta dilindungi undang-undang.',
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
