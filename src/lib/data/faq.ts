export interface FAQItem {
  id: string
  category: 'general' | 'shipping' | 'customs' | 'pricing'
  questionId: string
  questionEn: string
  answerId: string
  answerEn: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    questionId: 'Apa itu freight forwarding?',
    questionEn: 'What is freight forwarding?',
    answerId: 'Freight forwarding adalah jasa pengaturan dan pengelolaan pengiriman barang dari satu tempat ke tempat lain, baik melalui jalur laut, udara, maupun darat. Kami bertindak sebagai perantara antara pengirim dan penyedia jasa transportasi.',
    answerEn: 'Freight forwarding is the service of arranging and managing the shipment of goods from one place to another, whether by sea, air, or land. We act as an intermediary between shippers and transportation service providers.',
  },
  {
    id: '2',
    category: 'general',
    questionId: 'Layanan apa saja yang ditawarkan GLS?',
    questionEn: 'What services does GLS offer?',
    answerId: 'GLS menawarkan layanan ocean freight, air freight, kepabeanan (customs brokerage), pergudangan, transportasi darat, dan project cargo. Kami menyediakan solusi logistik end-to-end untuk kebutuhan pengiriman internasional Anda.',
    answerEn: 'GLS offers ocean freight, air freight, customs brokerage, warehousing, land transport, and project cargo services. We provide end-to-end logistics solutions for your international shipping needs.',
  },
  {
    id: '3',
    category: 'shipping',
    questionId: 'Berapa lama waktu pengiriman ocean freight?',
    questionEn: 'How long does ocean freight shipping take?',
    answerId: 'Waktu transit ocean freight bervariasi tergantung rute. Pengiriman intra-Asia biasanya memakan waktu 5-15 hari, sementara pengiriman ke Eropa atau Amerika membutuhkan 25-40 hari.',
    answerEn: 'Ocean freight transit times vary depending on the route. Intra-Asia shipments typically take 5-15 days, while shipments to Europe or the Americas require 25-40 days.',
  },
  {
    id: '4',
    category: 'shipping',
    questionId: 'Apakah GLS melayani pengiriman FCL dan LCL?',
    questionEn: 'Does GLS handle FCL and LCL shipments?',
    answerId: 'Ya, kami melayani pengiriman Full Container Load (FCL) maupun Less than Container Load (LCL). Tim kami akan membantu menentukan opsi terbaik sesuai volume dan jenis kargo Anda.',
    answerEn: 'Yes, we handle both Full Container Load (FCL) and Less than Container Load (LCL) shipments. Our team will help determine the best option based on your cargo volume and type.',
  },
  {
    id: '5',
    category: 'customs',
    questionId: 'Apakah GLS memiliki lisensi kepabeanan resmi?',
    questionEn: 'Does GLS have an official customs brokerage license?',
    answerId: 'Ya, GLS memiliki lisensi PPJK (Pengusaha Pengurusan Jasa Kepabeanan) resmi yang dikeluarkan oleh Direktorat Jenderal Bea dan Cukai. Kami juga merupakan anggota IATA dan FIATA.',
    answerEn: 'Yes, GLS holds an official PPJK (Customs Brokerage License) issued by the Directorate General of Customs and Excise. We are also members of IATA and FIATA.',
  },
  {
    id: '6',
    category: 'customs',
    questionId: 'Dokumen apa saja yang diperlukan untuk impor?',
    questionEn: 'What documents are required for import?',
    answerId: 'Dokumen dasar yang diperlukan meliputi: Invoice, Packing List, Bill of Lading/Airway Bill, API (Angka Pengenal Importir), NIK, dan dokumen perizinan khusus sesuai jenis barang. Tim kami akan memandu Anda dalam penyiapan semua dokumen.',
    answerEn: 'Basic required documents include: Invoice, Packing List, Bill of Lading/Airway Bill, Importer Identification Number (API), NIK, and special permits depending on the type of goods. Our team will guide you through the preparation of all documents.',
  },
  {
    id: '7',
    category: 'pricing',
    questionId: 'Bagaimana cara mendapatkan penawaran harga?',
    questionEn: 'How do I get a price quotation?',
    answerId: 'Anda dapat mengajukan permintaan penawaran melalui halaman Contact kami atau mengirim email ke quote@gls-id.com. Informasikan detail kargo (jenis, berat, volume, asal, tujuan) dan kami akan mengirimkan penawaran dalam 24 jam kerja.',
    answerEn: 'You can submit a quote request through our Contact page or email quote@gls-id.com. Provide cargo details (type, weight, volume, origin, destination) and we will send a quotation within 24 business hours.',
  },
  {
    id: '8',
    category: 'pricing',
    questionId: 'Apa saja komponen biaya freight forwarding?',
    questionEn: 'What are the components of freight forwarding costs?',
    answerId: 'Biaya freight forwarding umumnya meliputi: freight charges (biaya angkut), customs clearance fees, terminal handling charges, documentation fees, dan biaya tambahan sesuai layanan yang dipilih. Kami memberikan transparansi penuh dalam setiap penawaran.',
    answerEn: 'Freight forwarding costs typically include: freight charges, customs clearance fees, terminal handling charges, documentation fees, and additional charges based on selected services. We provide full transparency in every quotation.',
  },
]
