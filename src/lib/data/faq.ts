export interface FAQItem {
  id: string
  category: 'general' | 'heavy-lift' | 'project-cargo' | 'pricing'
  questionId: string
  questionEn: string
  answerId: string
  answerEn: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    questionId: 'Apa saja layanan utama PT Gama Intisamudera?',
    questionEn: 'What are the main services of PT Gama Intisamudera?',
    answerId: 'PT Gama Intisamudera memiliki 3 pilar layanan utama: (1) Freight Forwarding — meliputi custom clearance dan pengiriman intra-insular, (2) Project Cargo — meliputi stevedoring, heavy transport, heavy lifting, jacking & skidding, dan engineering, (3) Mechanical Erection — meliputi erection, assembling, dan engineering untuk proyek industri.',
    answerEn: 'PT Gama Intisamudera has 3 main service pillars: (1) Freight Forwarding — covering custom clearance and intra-insular shipping, (2) Project Cargo — covering stevedoring, heavy transport, heavy lifting, jacking & skidding, and engineering, (3) Mechanical Erection — covering erection, assembling, and engineering for industrial projects.',
  },
  {
    id: '2',
    category: 'general',
    questionId: 'Berapa lama GIS sudah beroperasi?',
    questionEn: 'How long has GIS been in operation?',
    answerId: 'PT Gama Intisamudera telah beroperasi sejak tahun 1995, menjadikan kami memiliki pengalaman lebih dari 30 tahun di industri heavy lift dan project logistics Indonesia. Kami telah menyelesaikan lebih dari 100 proyek besar di berbagai sektor industri.',
    answerEn: 'PT Gama Intisamudera has been in operation since 1995, giving us over 30 years of experience in Indonesia\'s heavy lift and project logistics industry. We have completed over 100 major projects across various industrial sectors.',
  },
  {
    id: '3',
    category: 'heavy-lift',
    questionId: 'Berapa kapasitas angkat maksimal yang bisa ditangani GIS?',
    questionEn: 'What is the maximum lift capacity GIS can handle?',
    answerId: 'Dengan armada crane dan peralatan heavy lift yang kami miliki, GIS mampu menangani beban hingga 500 ton. Untuk proyek yang memerlukan kapasitas lebih besar, kami merancang solusi khusus menggunakan tandem lift, hydraulic gantry, atau SPMT (Self-Propelled Modular Transporter).',
    answerEn: 'With our fleet of cranes and heavy lift equipment, GIS can handle loads up to 500 tons. For projects requiring greater capacity, we design specialized solutions using tandem lifts, hydraulic gantries, or SPMT (Self-Propelled Modular Transporters).',
  },
  {
    id: '4',
    category: 'heavy-lift',
    questionId: 'Bagaimana GIS menjamin keselamatan dalam operasi heavy lift?',
    questionEn: 'How does GIS ensure safety in heavy lift operations?',
    answerId: 'Keselamatan adalah prioritas utama GIS. Setiap operasi didahului dengan risk assessment mendetail, method statement yang disetujui klien, safety briefing untuk seluruh personel, dan inspeksi peralatan secara berkala. Kami bangga mempertahankan zero incident record sepanjang operasional.',
    answerEn: 'Safety is GIS\'s top priority. Every operation is preceded by a detailed risk assessment, client-approved method statement, safety briefing for all personnel, and regular equipment inspections. We are proud to maintain a zero incident record throughout our operations.',
  },
  {
    id: '5',
    category: 'project-cargo',
    questionId: 'Apa yang termasuk dalam layanan stevedoring GIS?',
    questionEn: 'What does GIS stevedoring service include?',
    answerId: 'Layanan stevedoring GIS meliputi bongkar muat kargo dari kapal ke darat (atau sebaliknya) menggunakan crane kapal maupun crane darat, penanganan kargo project/heavy lift, koordinasi dengan pihak pelabuhan, dan penanganan kargo over-dimension yang memerlukan perencanaan khusus.',
    answerEn: 'GIS stevedoring services include cargo loading and unloading from ships to shore (or vice versa) using ship cranes or shore cranes, project/heavy lift cargo handling, coordination with port authorities, and handling over-dimension cargo requiring special planning.',
  },
  {
    id: '6',
    category: 'project-cargo',
    questionId: 'Apakah GIS melayani pengiriman ke seluruh Indonesia?',
    questionEn: 'Does GIS serve deliveries across all of Indonesia?',
    answerId: 'Ya, GIS melayani pengiriman project cargo dan heavy transport ke seluruh wilayah Indonesia. Kami memiliki pengalaman mengirimkan kargo proyek ke berbagai lokasi termasuk area terpencil di Kalimantan, Sulawesi, Papua, NTB, dan wilayah Indonesia Timur lainnya.',
    answerEn: 'Yes, GIS serves project cargo and heavy transport deliveries to all regions of Indonesia. We have experience delivering project cargo to various locations including remote areas in Kalimantan, Sulawesi, Papua, NTB, and other Eastern Indonesia regions.',
  },
  {
    id: '7',
    category: 'pricing',
    questionId: 'Bagaimana cara mendapatkan penawaran harga dari GIS?',
    questionEn: 'How do I get a quotation from GIS?',
    answerId: 'Anda dapat menghubungi kami melalui halaman Contact di website, telepon (031-3296003), atau email (info@gama-group.co). Untuk penawaran yang akurat, silakan informasikan detail proyek seperti jenis kargo, dimensi dan berat, lokasi asal dan tujuan, serta jadwal yang diharapkan.',
    answerEn: 'You can contact us through our website Contact page, phone (031-3296003), or email (info@gama-group.co). For an accurate quotation, please provide project details such as cargo type, dimensions and weight, origin and destination, and expected schedule.',
  },
  {
    id: '8',
    category: 'pricing',
    questionId: 'Apa saja faktor yang mempengaruhi biaya project cargo?',
    questionEn: 'What factors affect project cargo costs?',
    answerId: 'Biaya project cargo dipengaruhi oleh beberapa faktor: berat dan dimensi kargo, jarak dan aksesibilitas lokasi, jenis peralatan yang dibutuhkan (crane, trailer, dll), kompleksitas penanganan, kebutuhan engineering dan perizinan khusus, serta jadwal pelaksanaan. Kami memberikan transparansi penuh dalam setiap penawaran.',
    answerEn: 'Project cargo costs are influenced by several factors: cargo weight and dimensions, distance and location accessibility, type of equipment required (cranes, trailers, etc.), handling complexity, engineering and special permit requirements, and execution schedule. We provide full transparency in every quotation.',
  },
]
