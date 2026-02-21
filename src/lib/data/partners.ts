export interface Partner {
  name: string
  category: 'shipping-line' | 'agent' | 'association'
  descriptionId?: string
  descriptionEn?: string
}

export const shippingLines: Partner[] = [
  { name: 'Maersk', category: 'shipping-line' },
  { name: 'MSC', category: 'shipping-line' },
  { name: 'CMA CGM', category: 'shipping-line' },
  { name: 'Hapag-Lloyd', category: 'shipping-line' },
  { name: 'ONE (Ocean Network Express)', category: 'shipping-line' },
  { name: 'Evergreen', category: 'shipping-line' },
  { name: 'Yang Ming', category: 'shipping-line' },
  { name: 'COSCO Shipping', category: 'shipping-line' },
]

export const agentNetwork: Partner[] = [
  { name: 'Singapore Agent Network', category: 'agent', descriptionId: 'Mitra agen di Singapura', descriptionEn: 'Partner agents in Singapore' },
  { name: 'China Freight Partners', category: 'agent', descriptionId: 'Jaringan agen di seluruh Tiongkok', descriptionEn: 'Agent network across China' },
  { name: 'Japan Logistics Alliance', category: 'agent', descriptionId: 'Aliansi logistik di Jepang', descriptionEn: 'Logistics alliance in Japan' },
  { name: 'India Forwarding Group', category: 'agent', descriptionId: 'Grup freight forwarding di India', descriptionEn: 'Freight forwarding group in India' },
  { name: 'European Freight Network', category: 'agent', descriptionId: 'Jaringan freight di Eropa', descriptionEn: 'Freight network in Europe' },
]

export const associations: Partner[] = [
  { name: 'FIATA', category: 'association', descriptionId: 'Federasi Internasional Asosiasi Freight Forwarder', descriptionEn: 'International Federation of Freight Forwarders Associations' },
  { name: 'IATA', category: 'association', descriptionId: 'Asosiasi Transportasi Udara Internasional', descriptionEn: 'International Air Transport Association' },
  { name: 'INSA', category: 'association', descriptionId: 'Asosiasi Pemilik Kapal Indonesia', descriptionEn: 'Indonesian National Shipowners Association' },
  { name: 'GAFEKSI', category: 'association', descriptionId: 'Gabungan Forwarder dan Ekspedisi Indonesia', descriptionEn: 'Indonesian Forwarders and Expeditors Association' },
]
