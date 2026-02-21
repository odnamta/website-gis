export interface TeamMember {
  id: string
  name: string
  roleId: string
  roleEn: string
  bioId: string
  bioEn: string
}

// TODO: Replace with real team members when ready
// Each member needs: name, roleId (Indonesian), roleEn (English), bioId, bioEn
export const team: TeamMember[] = [
  {
    id: 'director',
    name: '[Nama Direktur Utama]',
    roleId: 'Direktur Utama',
    roleEn: 'President Director',
    bioId: 'Lebih dari 30 tahun pengalaman di industri logistik dan freight forwarding.',
    bioEn: 'Over 30 years of experience in the logistics and freight forwarding industry.',
  },
  {
    id: 'operations',
    name: '[Nama Direktur Operasional]',
    roleId: 'Direktur Operasional',
    roleEn: 'Director of Operations',
    bioId: 'Memimpin operasional harian dan memastikan standar layanan tertinggi untuk setiap pengiriman.',
    bioEn: 'Leads daily operations and ensures the highest service standards for every shipment.',
  },
  {
    id: 'commercial',
    name: '[Nama Manajer Komersial]',
    roleId: 'Manajer Komersial',
    roleEn: 'Commercial Manager',
    bioId: 'Mengelola hubungan klien dan pengembangan bisnis di seluruh Asia Tenggara.',
    bioEn: 'Manages client relationships and business development across Southeast Asia.',
  },
  {
    id: 'customs',
    name: '[Nama Manajer Kepabeanan]',
    roleId: 'Manajer Kepabeanan',
    roleEn: 'Customs Manager',
    bioId: 'Ahli kepabeanan bersertifikasi dengan keahlian mendalam dalam impor dan ekspor.',
    bioEn: 'Certified customs specialist with deep expertise in import and export operations.',
  },
]
