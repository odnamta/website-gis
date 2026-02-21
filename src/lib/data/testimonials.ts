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
    quoteId: 'GIS menangani pengiriman turbin kami dari pelabuhan Surabaya ke lokasi proyek di pedalaman Kalimantan dengan sangat profesional. Perencanaan logistik mereka luar biasa detail dan eksekusinya tepat waktu.',
    quoteEn: 'GIS handled the delivery of our turbines from Surabaya port to the project site deep in Kalimantan with outstanding professionalism. Their logistics planning was incredibly detailed and execution was right on time.',
    name: 'Ir. Bambang Wijayanto',
    role: 'Project Manager',
    company: 'PT Rekayasa Industri',
  },
  {
    id: '2',
    quoteId: 'Kami telah bekerja sama dengan Gama Intisamudera selama bertahun-tahun untuk proyek heavy lift di area pembangkit listrik. Komitmen mereka terhadap keselamatan dan zero incident record memberikan kami ketenangan penuh.',
    quoteEn: 'We have worked with Gama Intisamudera for years on heavy lift projects at power plant sites. Their commitment to safety and zero incident record gives us complete peace of mind.',
    name: 'Ahmad Fauzi',
    role: 'Site Director',
    company: 'PT Pembangunan Perumahan',
  },
  {
    id: '3',
    quoteId: 'Untuk pengiriman mesin Wartsila seberat 140 ton per unit ke Sorong, GIS memberikan solusi transportasi yang inovatif dan efisien. Tim engineering mereka sangat kompeten dan berpengalaman.',
    quoteEn: 'For the delivery of 140-ton Wartsila engines to Sorong, GIS provided innovative and efficient transportation solutions. Their engineering team is highly competent and experienced.',
    name: 'Erik Johansen',
    role: 'Logistics Coordinator',
    company: 'Wartsila Indonesia',
  },
]
