export interface EquipmentItem {
  name: string
  capacity: string
  quantity: number
}

export interface EquipmentCategory {
  name: string
  nameId: string
  items: EquipmentItem[]
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    name: 'Prime Movers & Head Trucks',
    nameId: 'Prime Mover & Head Truck',
    items: [
      { name: 'Scania Prime Mover', capacity: '60 ton', quantity: 8 },
      { name: 'Mercedes Head Truck', capacity: '45 ton', quantity: 5 },
    ],
  },
  {
    name: 'Hydraulic Jacks',
    nameId: 'Jack Hidrolik',
    items: [
      { name: 'Enerpac Hydraulic Jack', capacity: '200 ton', quantity: 4 },
      { name: 'Mammoet Hydraulic Jack', capacity: '500 ton', quantity: 2 },
    ],
  },
  {
    name: 'Multi-Axle Trailers',
    nameId: 'Trailer Multi-Axle',
    items: [
      { name: 'Goldhofer THP/SL', capacity: '120 ton', quantity: 3 },
      { name: 'Nicolas MDED', capacity: '200 ton', quantity: 2 },
    ],
  },
  {
    name: 'Cranes & Lifting',
    nameId: 'Crane & Alat Angkat',
    items: [
      { name: 'Liebherr Mobile Crane', capacity: '100 ton', quantity: 2 },
      { name: 'Tadano Mobile Crane', capacity: '50 ton', quantity: 3 },
    ],
  },
  {
    name: 'Gantry Systems',
    nameId: 'Sistem Gantry',
    items: [
      { name: 'Hydraulic Gantry', capacity: '400 ton', quantity: 1 },
    ],
  },
]
