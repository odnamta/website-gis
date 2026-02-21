export interface Partner {
  name: string
  category: 'client' | 'partner'
  descriptionId?: string
  descriptionEn?: string
}

export const partners: Partner[] = [
  { name: 'COSCO', category: 'partner', descriptionId: 'Perusahaan pelayaran dan logistik global', descriptionEn: 'Global shipping and logistics company' },
  { name: 'Pelindo', category: 'client', descriptionId: 'Pengelola pelabuhan Indonesia', descriptionEn: 'Indonesian port authority' },
  { name: 'Schlumberger', category: 'client', descriptionId: 'Perusahaan jasa ladang minyak', descriptionEn: 'Oilfield services company' },
  { name: 'Pertamina', category: 'client', descriptionId: 'Perusahaan energi nasional Indonesia', descriptionEn: 'Indonesian national energy company' },
  { name: 'Bollore', category: 'partner', descriptionId: 'Grup logistik dan transportasi internasional', descriptionEn: 'International logistics and transportation group' },
  { name: 'PP (Pembangunan Perumahan)', category: 'client', descriptionId: 'Perusahaan konstruksi BUMN', descriptionEn: 'State-owned construction company' },
  { name: 'Rekayasa Industri', category: 'client', descriptionId: 'Perusahaan EPC nasional', descriptionEn: 'National EPC company' },
  { name: 'INKA', category: 'client', descriptionId: 'Industri kereta api Indonesia', descriptionEn: 'Indonesian railway industry' },
  { name: 'Krakatau Steel', category: 'client', descriptionId: 'Produsen baja terbesar di Indonesia', descriptionEn: 'Largest steel producer in Indonesia' },
  { name: 'Wartsila', category: 'client', descriptionId: 'Perusahaan teknologi kelautan dan energi', descriptionEn: 'Marine and energy technology company' },
]
