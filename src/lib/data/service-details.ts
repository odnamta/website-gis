import type { Locale } from '@/lib/i18n/types'

type ServiceSlug = 'freight-forwarding' | 'project-cargo' | 'mechanical-erection'

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
  'freight-forwarding': {
    title: {
      id: 'Freight Forwarding — GIS',
      en: 'Freight Forwarding — GIS',
    },
    description: {
      id: 'Layanan custom clearance dan pengiriman intra-insular di seluruh Indonesia. PT Gama Intisamudera, Surabaya.',
      en: 'Custom clearance and intra-insular shipping services across Indonesia. PT Gama Intisamudera, Surabaya.',
    },
    keywords: {
      id: ['freight forwarding', 'custom clearance', 'pengiriman domestik', 'intra-insular', 'logistik Surabaya'],
      en: ['freight forwarding', 'custom clearance', 'domestic shipping', 'intra-insular', 'Surabaya logistics'],
    },
  },
  'project-cargo': {
    title: {
      id: 'Project Cargo & Heavy Transport — GIS',
      en: 'Project Cargo & Heavy Transport — GIS',
    },
    description: {
      id: 'Stevedoring, inland & heavy transport, heavy lifting, jacking & skidding, engineering. PT Gama Intisamudera, spesialis project cargo sejak 1995.',
      en: 'Stevedoring, inland & heavy transport, heavy lifting, jacking & skidding, engineering. PT Gama Intisamudera, project cargo specialist since 1995.',
    },
    keywords: {
      id: ['project cargo', 'heavy transport', 'heavy lifting', 'stevedoring', 'jacking skidding', 'logistik proyek Indonesia'],
      en: ['project cargo', 'heavy transport', 'heavy lifting', 'stevedoring', 'jacking skidding', 'project logistics Indonesia'],
    },
  },
  'mechanical-erection': {
    title: {
      id: 'Mechanical Erection & Assembling — GIS',
      en: 'Mechanical Erection & Assembling — GIS',
    },
    description: {
      id: 'Erection, assembling, dan engineering untuk proyek industri besar. PT Gama Intisamudera, Surabaya.',
      en: 'Erection, assembling, and engineering for large industrial projects. PT Gama Intisamudera, Surabaya.',
    },
    keywords: {
      id: ['mechanical erection', 'assembling', 'engineering', 'instalasi mesin', 'erection industri'],
      en: ['mechanical erection', 'assembling', 'engineering', 'machine installation', 'industrial erection'],
    },
  },
}

export const serviceStats: Record<ServiceSlug, ServiceStat[]> = {
  'freight-forwarding': [
    { value: 30, suffix: '+', label: { id: 'Tahun Pengalaman', en: 'Years Experience' } },
    { value: 34, suffix: '', label: { id: 'Provinsi Terjangkau', en: 'Provinces Covered' } },
    { value: 500, suffix: '+', label: { id: 'Pengiriman per Tahun', en: 'Shipments per Year' } },
  ],
  'project-cargo': [
    { value: 500, suffix: 'T', label: { id: 'Kapasitas Angkat', en: 'Lift Capacity' } },
    { value: 100, suffix: '+', label: { id: 'Proyek Selesai', en: 'Projects Completed' } },
    { value: 0, suffix: '', label: { id: 'Zero Incident Record', en: 'Zero Incident Record' } },
  ],
  'mechanical-erection': [
    { value: 50, suffix: '+', label: { id: 'Proyek Erection', en: 'Erection Projects' } },
    { value: 100, suffix: '%', label: { id: 'Tingkat Keberhasilan', en: 'Success Rate' } },
    { value: 20, suffix: '+', label: { id: 'Tahun Pengalaman', en: 'Years Experience' } },
  ],
}

export const serviceFAQs: Record<ServiceSlug, ServiceFAQ[]> = {
  'freight-forwarding': [
    {
      question: { id: 'Apa saja layanan freight forwarding yang ditawarkan GIS?', en: 'What freight forwarding services does GIS offer?' },
      answer: {
        id: 'GIS menawarkan layanan custom clearance (kepabeanan), pengiriman intra-insular ke seluruh wilayah Indonesia, koordinasi pengiriman multi-moda, serta pengurusan dokumen ekspor dan impor secara lengkap.',
        en: 'GIS offers custom clearance, intra-insular shipping across all regions of Indonesia, multi-modal shipping coordination, and comprehensive export-import documentation services.',
      },
    },
    {
      question: { id: 'Apakah GIS melayani pengiriman antar pulau?', en: 'Does GIS provide inter-island shipping?' },
      answer: {
        id: 'Ya, GIS melayani pengiriman antar pulau (intra-insular) ke seluruh Indonesia termasuk Jawa, Sumatera, Kalimantan, Sulawesi, Papua, dan pulau-pulau lainnya menggunakan jaringan kapal dan transportasi darat.',
        en: 'Yes, GIS provides inter-island (intra-insular) shipping to all of Indonesia including Java, Sumatra, Kalimantan, Sulawesi, Papua, and other islands using a network of vessels and land transport.',
      },
    },
    {
      question: { id: 'Berapa lama proses custom clearance?', en: 'How long does custom clearance take?' },
      answer: {
        id: 'Waktu proses custom clearance bervariasi tergantung jenis barang dan jalur pemeriksaan. Untuk jalur hijau biasanya 1-2 hari kerja, sedangkan jalur merah memerlukan 3-5 hari kerja.',
        en: 'Custom clearance processing time varies depending on the type of goods and inspection channel. Green channel typically takes 1-2 business days, while red channel requires 3-5 business days.',
      },
    },
    {
      question: { id: 'Bagaimana cara mendapatkan penawaran harga?', en: 'How do I get a price quotation?' },
      answer: {
        id: 'Anda dapat menghubungi kami melalui halaman Contact di website atau telepon ke 031-3296003. Informasikan detail kargo (jenis, berat, volume, asal, tujuan) dan kami akan mengirimkan penawaran.',
        en: 'You can contact us through the Contact page on our website or call 031-3296003. Provide cargo details (type, weight, volume, origin, destination) and we will send you a quotation.',
      },
    },
  ],
  'project-cargo': [
    {
      question: { id: 'Apa yang dimaksud project cargo?', en: 'What is project cargo?' },
      answer: {
        id: 'Project cargo adalah pengiriman kargo khusus yang melibatkan barang berdimensi besar, berat berlebih, atau proyek industri yang memerlukan perencanaan logistik detail. Ini termasuk stevedoring, heavy transport, heavy lifting, dan jacking & skidding.',
        en: 'Project cargo involves specialized shipping of oversized, overweight goods or industrial projects requiring detailed logistics planning. This includes stevedoring, heavy transport, heavy lifting, and jacking & skidding.',
      },
    },
    {
      question: { id: 'Berapa kapasitas angkat maksimal GIS?', en: 'What is GIS maximum lift capacity?' },
      answer: {
        id: 'Dengan peralatan dan mitra kami, GIS mampu menangani kargo hingga 500 ton. Untuk proyek yang lebih besar, kami merancang solusi custom menggunakan multi-crane tandem lift dan peralatan spesialis.',
        en: 'With our equipment and partners, GIS can handle cargo up to 500 tons. For larger projects, we design custom solutions using multi-crane tandem lifts and specialist equipment.',
      },
    },
    {
      question: { id: 'Apa itu jacking & skidding?', en: 'What is jacking & skidding?' },
      answer: {
        id: 'Jacking & skidding adalah teknik memindahkan beban berat secara horizontal menggunakan sistem hydraulic jack dan skid track. Teknik ini digunakan ketika crane tidak dapat mengakses lokasi pemasangan atau ketika benda harus dipindahkan dengan presisi tinggi.',
        en: 'Jacking & skidding is a technique for moving heavy loads horizontally using hydraulic jack systems and skid tracks. This technique is used when cranes cannot access the installation site or when objects need to be moved with high precision.',
      },
    },
    {
      question: { id: 'Bagaimana GIS menjamin keselamatan proyek?', en: 'How does GIS ensure project safety?' },
      answer: {
        id: 'GIS menerapkan standar keselamatan kerja yang ketat di setiap proyek. Setiap operasi didahului dengan risk assessment, method statement, dan safety briefing. Kami bangga mempertahankan zero incident record sepanjang operasional.',
        en: 'GIS applies strict safety standards in every project. Each operation is preceded by risk assessment, method statement, and safety briefing. We are proud to maintain a zero incident record throughout our operations.',
      },
    },
  ],
  'mechanical-erection': [
    {
      question: { id: 'Apa saja lingkup layanan mechanical erection?', en: 'What does mechanical erection service cover?' },
      answer: {
        id: 'Layanan mechanical erection GIS mencakup erection (pemasangan struktur baja dan peralatan), assembling (perakitan komponen mesin dan peralatan industri), serta engineering (perencanaan teknis dan supervisi).',
        en: 'GIS mechanical erection services cover erection (installation of steel structures and equipment), assembling (assembly of machine components and industrial equipment), and engineering (technical planning and supervision).',
      },
    },
    {
      question: { id: 'Proyek industri apa saja yang pernah ditangani?', en: 'What types of industrial projects have been handled?' },
      answer: {
        id: 'GIS telah menangani proyek erection di berbagai sektor industri termasuk pembangkit listrik (PLTU, PLTMG), petrokimia, semen, pertambangan, dan infrastruktur pelabuhan.',
        en: 'GIS has handled erection projects across various industrial sectors including power plants (coal, gas), petrochemicals, cement, mining, and port infrastructure.',
      },
    },
    {
      question: { id: 'Apakah GIS memiliki tim engineering sendiri?', en: 'Does GIS have its own engineering team?' },
      answer: {
        id: 'Ya, GIS memiliki divisi engineering yang berpengalaman dalam perencanaan teknis, pembuatan method statement, dan supervisi pelaksanaan erection. Tim kami bekerja sama dengan klien untuk memastikan setiap proyek berjalan sesuai spesifikasi teknis.',
        en: 'Yes, GIS has an experienced engineering division for technical planning, method statement preparation, and erection execution supervision. Our team works with clients to ensure every project meets technical specifications.',
      },
    },
    {
      question: { id: 'Berapa lama waktu pengerjaan proyek erection?', en: 'How long does an erection project take?' },
      answer: {
        id: 'Durasi proyek sangat bervariasi tergantung kompleksitas dan skala pekerjaan. Proyek kecil bisa diselesaikan dalam beberapa minggu, sementara proyek besar seperti pembangkit listrik bisa memakan waktu beberapa bulan. Kami selalu memberikan timeline detail sebelum proyek dimulai.',
        en: 'Project duration varies greatly depending on complexity and scale. Small projects can be completed in weeks, while large projects like power plants can take several months. We always provide a detailed timeline before the project begins.',
      },
    },
  ],
}
