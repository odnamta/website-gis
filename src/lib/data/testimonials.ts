export interface Testimonial {
  id: string
  quoteId: string
  quoteEn: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quoteId: 'Kami telah bekerja sama dengan Gama Group selama bertahun-tahun untuk pengiriman domestik. Dengan diluncurkannya GLS untuk jalur internasional, kami sangat antusias karena sudah mengenal kualitas layanan mereka.',
    quoteEn: 'We have worked with Gama Group for years on domestic shipments. With the launch of GLS for international routes, we are excited because we already know their service quality.',
    name: 'Budi Santoso',
    role: 'Supply Chain Director',
    company: 'PT Maju Bersama',
  },
  {
    id: '2',
    quoteId: 'Tim GLS sangat responsif dan profesional. Pemahaman mereka tentang regulasi kepabeanan Indonesia sangat membantu kelancaran proses impor kami.',
    quoteEn: 'The GLS team is highly responsive and professional. Their understanding of Indonesian customs regulations greatly supports our import processes.',
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'Oceanic Trading Co.',
  },
  {
    id: '3',
    quoteId: 'Pengalaman 30 tahun Gama Group di industri logistik memberi kami keyakinan penuh untuk mempercayakan pengiriman internasional kepada GLS.',
    quoteEn: 'Gama Group\'s 30 years of experience in the logistics industry gives us full confidence to entrust our international shipments to GLS.',
    name: 'Hendro Wibowo',
    role: 'Procurement Head',
    company: 'PT Pembangunan Jaya',
  },
]
