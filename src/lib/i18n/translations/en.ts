import { Translations } from '../types'

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    routes: 'Trade Routes',
    track: 'Track Shipment',
    caseStudies: 'Case Studies',
    news: 'News',
    careers: 'Careers',
    partners: 'Partners',
    contact: 'Contact',
    faq: 'FAQ',
    getQuote: 'Get a Quote',
  },
  hero: {
    title: 'Your Trusted Partner in International Freight Forwarding',
    subtitle:
      'PT Gama Lintas Samudera — the international arm of Gama Group — connects Indonesian businesses to the world with reliable ocean freight, air freight, and integrated logistics solutions, backed by 30+ years of logistics heritage.',
    ctaQuote: 'Request a Quote',
    ctaServices: 'Explore Our Services',
    stats: {
      yearsExperience: 'Years Group Heritage',
      countriesServed: 'Countries Served',
      shippingPartners: 'Shipping Partners',
      clientSatisfaction: 'Service Commitment',
    },
  },
  services: {
    sectionTitle: 'Our Services',
    sectionSubtitle:
      'End-to-end freight forwarding and logistics solutions tailored to your international trade needs.',
    viewAll: 'View All Services',
    ocean: {
      title: 'Ocean Freight',
      description:
        'Full Container Load (FCL) and Less than Container Load (LCL) shipping across major global trade lanes. We negotiate competitive rates with leading shipping lines to ensure your cargo reaches its destination safely and on schedule.',
      features: [
        'FCL and LCL shipping worldwide',
        'Competitive rates from major shipping lines',
        'Door-to-door and port-to-port options',
        'Reefer and special container handling',
        'Real-time shipment tracking and visibility',
      ],
      processSteps: [
        { title: 'Consultation & Quote', description: 'Analyze your shipping needs and prepare the best rates from multiple shipping lines.' },
        { title: 'Booking & Documentation', description: 'Book vessel space and prepare export/import documents including Bill of Lading, Packing List, and Invoice.' },
        { title: 'Stuffing & Shipment', description: 'Professional cargo loading into containers and delivery to the port of origin.' },
        { title: 'Transit Monitoring', description: 'Real-time tracking throughout the ocean voyage until arrival at the destination port.' },
        { title: 'Customs & Last Mile', description: 'Customs clearance at destination and final delivery to the consignee\'s location.' },
      ],
      benefits: [
        { title: 'Cost Efficient', description: 'Competitive rates through direct partnerships with 20+ leading global shipping lines.' },
        { title: 'Regular Schedules', description: 'Scheduled departures to 50+ countries ensure accurate supply chain planning.' },
        { title: 'Full Visibility', description: 'Real-time container tracking from loading to final delivery.' },
      ],
    },
    air: {
      title: 'Air Freight',
      description:
        'Time-critical cargo demands speed and precision. Our air freight services provide express, consolidated, and charter solutions through established partnerships with international airlines and cargo carriers.',
      features: [
        'Express and consolidated air cargo',
        'Airport-to-airport and door-to-door delivery',
        'Dangerous goods and perishable handling',
        'Charter services for oversized cargo',
        'Priority booking for urgent shipments',
      ],
      processSteps: [
        { title: 'Request & Consultation', description: 'Evaluate cargo type, weight, dimensions, and urgency to determine the best shipping option.' },
        { title: 'Airline Booking', description: 'Book cargo space with partner airlines on optimal routes and schedules.' },
        { title: 'Packing & Labeling', description: 'Package according to IATA standards and label cargo for flight safety.' },
        { title: 'Shipment & Tracking', description: 'Hand over cargo at the airport and monitor in real-time until arrival.' },
      ],
      benefits: [
        { title: 'Speed of Transit', description: 'Delivery in hours to days, ideal for time-sensitive cargo.' },
        { title: 'High Security', description: 'Professional handling for high-value and sensitive goods.' },
        { title: 'Flexibility', description: 'Express, standard, and charter options to match your urgency and budget.' },
      ],
    },
    customs: {
      title: 'Customs Brokerage',
      description:
        'Navigate the complexities of Indonesian import and export regulations with confidence. Our licensed customs brokers ensure smooth clearance, full regulatory compliance, and minimal delays at every port of entry.',
      features: [
        'Import and export customs clearance',
        'Tariff classification and duty optimization',
        'Regulatory compliance and documentation',
        'Bonded warehouse and free trade zone facilitation',
        'Government permits and special licensing',
      ],
      processSteps: [
        { title: 'Document Review', description: 'Verify completeness and accuracy of all import/export documentation.' },
        { title: 'Classification & Tariff', description: 'Determine correct HS Code and calculate applicable duties and taxes.' },
        { title: 'Declaration Submission', description: 'Submit documents electronically through the CEISA Customs system.' },
        { title: 'Physical Inspection', description: 'Assist with physical examination if required by Customs authorities.' },
        { title: 'Release & Delivery', description: 'Cargo release from port/airport and coordinate delivery to final destination.' },
      ],
      benefits: [
        { title: 'Regulatory Compliance', description: 'Licensed PPJK team ensures every process meets current Customs regulations.' },
        { title: 'Fast Processing', description: 'Average 24-hour customs clearance for green channel shipments.' },
        { title: 'Expert Guidance', description: 'Professional advice on HS Code classification and duty optimization.' },
      ],
    },
    warehousing: {
      title: 'Warehousing & Distribution',
      description:
        'Strategically located warehousing facilities in Surabaya provide secure storage, inventory management, and efficient distribution services to support your supply chain from arrival to final delivery.',
      features: [
        'Bonded and general warehousing',
        'Inventory management and reporting',
        'Pick, pack, and distribution services',
        'Cross-docking for rapid turnaround',
        'Temperature-controlled storage available',
      ],
      processSteps: [
        { title: 'Goods Receipt', description: 'Inspect and record incoming goods against shipping documentation.' },
        { title: 'Storage & Inventory', description: 'Place in appropriate storage areas and register in the WMS system.' },
        { title: 'Stock Management', description: 'Real-time inventory monitoring, periodic stock counts, and automated reporting.' },
        { title: 'Pick-Pack & Distribute', description: 'Process pick-pack orders and dispatch to final destination per client instructions.' },
      ],
      benefits: [
        { title: 'Strategic Location', description: 'Located in Surabaya with direct access to major port and airport.' },
        { title: 'Licensed Facility', description: 'Official bonded warehouse for deferred duty payments.' },
        { title: 'Digital System', description: 'Cloud-based WMS for 24/7 real-time inventory visibility.' },
      ],
    },
    land: {
      title: 'Land Transport',
      description:
        'Comprehensive overland logistics across Java and the Indonesian archipelago. From container haulage to last-mile delivery, our fleet and trusted transport partners ensure your goods move efficiently over land.',
      features: [
        'Container trucking and haulage',
        'Inter-island multimodal transport',
        'Last-mile delivery services',
        'GPS-tracked fleet management',
        'Flatbed and specialized vehicle options',
      ],
      processSteps: [
        { title: 'Route Planning', description: 'Analyze optimal routes based on location, cargo type, and delivery schedule.' },
        { title: 'Fleet Scheduling', description: 'Assign the appropriate vehicle and coordinate with drivers.' },
        { title: 'Loading & Departure', description: 'Supervised cargo loading and on-time departure.' },
        { title: 'Tracking & Delivery', description: 'Real-time GPS monitoring until cargo arrives safely at destination.' },
      ],
      benefits: [
        { title: 'Diverse Fleet', description: 'Full range of vehicles from semi-trailers to low-bed for special cargo.' },
        { title: 'Wide Coverage', description: 'Delivery to all 34 provinces in Indonesia including inter-island service.' },
        { title: 'Real-time Monitoring', description: 'Entire fleet GPS-equipped for 24/7 cargo position visibility.' },
      ],
    },
    project: {
      title: 'Project Cargo',
      description:
        'Heavy-lift, oversized, and complex project cargo require meticulous planning and execution. Our project logistics team manages every aspect, from route surveys and engineering to transport and installation support.',
      features: [
        'Heavy-lift and out-of-gauge cargo',
        'Route surveys and feasibility studies',
        'Specialized equipment and rigging',
        'Multi-modal project logistics coordination',
        'On-site supervision and installation support',
      ],
      processSteps: [
        { title: 'Survey & Consultation', description: 'On-site visit to evaluate dimensions, weight, and road access.' },
        { title: 'Logistics Planning', description: 'Develop detailed transport plan including routes, permits, and schedules.' },
        { title: 'Equipment Sourcing', description: 'Arrange cranes, special trailers, and heavy-lift equipment as needed.' },
        { title: 'Transport Execution', description: 'Execute delivery with on-site supervision at every stage.' },
        { title: 'Installation & Handover', description: 'Support installation and complete handover at project site.' },
        { title: 'Documentation & Report', description: 'Complete reporting including photos, videos, and insurance documentation.' },
      ],
      benefits: [
        { title: 'Project Experience', description: '100+ successful industrial projects backed by Gama Group\'s heritage.' },
        { title: 'End-to-End Solution', description: 'From site survey to installation, one partner for the entire process.' },
        { title: 'Safety Assured', description: 'All-risk insurance and zero incident record for your peace of mind.' },
        { title: 'Expert Team', description: 'Seasoned professionals experienced in heavy-lift and oversized cargo.' },
      ],
    },
    detailPage: {
      features: 'Key Features',
      process: 'Our Process',
      benefits: 'Why Choose This Service',
      faq: 'Frequently Asked Questions',
      relatedServices: 'Related Services',
      ctaTitle: 'Ready to Ship?',
      ctaSubtitle:
        'Contact our team today for a customized freight solution that fits your business needs.',
      ctaButton: 'Get a Free Quote',
    },
  },
  whyChooseUs: {
    sectionTitle: 'Why Choose Gama Lintas Samudera',
    sectionSubtitle:
      'Backed by Gama Group\'s 30+ years in Indonesian logistics, GLS brings proven expertise and deep industry connections to your international freight forwarding needs.',
    reasons: [
      {
        title: 'Gama Group Heritage',
        description:
          'Built on the foundation of Gama Group\'s 30+ years of logistics experience in Indonesia, offering the reliability and industry knowledge that only decades of proven performance can provide.',
      },
      {
        title: 'Global Network',
        description:
          'Partnerships with 20+ leading shipping lines and agents across 50+ countries ensure seamless door-to-door logistics, no matter where your cargo needs to go.',
      },
      {
        title: 'Customs Expertise',
        description:
          'Our PPJK-licensed customs brokers have deep knowledge of Indonesian trade regulations, ensuring fast clearance and full compliance for every shipment.',
      },
      {
        title: 'Tailored Solutions',
        description:
          'Every business is unique. We design flexible, cost-effective logistics solutions that adapt to your specific cargo requirements and trade routes.',
      },
    ],
  },
  clients: {
    sectionTitle: 'Our Shipping Line Partners',
  },
  testimonials: {
    sectionTitle: 'What Our Clients Say',
    sectionSubtitle:
      'Hear from the businesses that rely on Gama Lintas Samudera for their international freight forwarding needs.',
  },
  latestNews: {
    sectionTitle: 'Latest News & Insights',
    sectionSubtitle:
      'Stay up to date with the latest developments in international shipping, trade regulations, and company updates.',
    readMore: 'Read More',
    viewAll: 'View All News',
  },
  ctaBanner: {
    title: 'Ready to Move Your Cargo Across the Globe?',
    subtitle:
      'Get a free, no-obligation quote from our freight forwarding experts. We will find the most efficient and cost-effective route for your shipment.',
    buttonText: 'Request a Free Quote',
  },
  about: {
    pageTitle: 'About Gama Lintas Samudera',
    pageSubtitle:
      'The international arm of Gama Group — connecting Indonesia to the world through reliable and professional freight forwarding.',
    storyTitle: 'Our Story',
    story: [
      'Gama Group has been a trusted name in Indonesian logistics since 1995. For over three decades, our group has built a strong reputation in domestic shipping, customs brokerage, warehousing, and land transport — serving thousands of clients across diverse industries throughout the Indonesian archipelago.',
      'In 2026, PT Gama Lintas Samudera (GLS) was established as Gama Group\'s dedicated international freight forwarding division, created to meet the growing global needs of our clients. With a foundation of 30+ years of logistics expertise, an extensive operational network, and a team of proven professionals, GLS is purpose-built to connect Indonesian businesses with international markets through reliable, comprehensive freight forwarding services.',
      'Strategically located in Surabaya — one of Indonesia\'s largest trade hubs — GLS has direct access to Tanjung Perak Port and Juanda International Airport. Supported by partnerships with 20+ leading shipping lines and an agent network spanning 50+ countries, we are ready to be the bridge that connects your business to the world.',
    ],
    visionTitle: 'Our Vision',
    vision:
      'To be Indonesia\'s leading international freight forwarding company, recognized for operational excellence, innovation, and the trust of our clients and partners worldwide.',
    missionTitle: 'Our Mission',
    missions: [
      'Deliver reliable, efficient, and cost-effective international freight forwarding services that exceed client expectations.',
      'Leverage Gama Group\'s 30+ years of logistics heritage and networks to provide trusted international shipping solutions.',
      'Build and maintain a global network of trusted carriers, agents, and partners to ensure seamless connectivity across all trade lanes.',
      'Invest in our people and technology to continuously improve service quality and adapt to the evolving needs of global trade.',
    ],
    leadershipTitle: 'Our Leadership',
    leadershipSubtitle:
      'Led by seasoned professionals with decades of combined experience in international logistics and freight forwarding.',
    timelineTitle: 'Our Journey',
    certificationsTitle: 'Certifications & Memberships',
  },
  routes: {
    pageTitle: 'Trade Routes & Coverage',
    pageSubtitle:
      'Comprehensive global coverage connecting Indonesia to major trade destinations across Asia, Europe, the Americas, Africa, and Oceania.',
    coverageTitle: 'Global Coverage',
    tradelanesTitle: 'Key Trade Lanes',
    portsTitle: 'Port & Airport Connections',
  },
  track: {
    pageTitle: 'Track Your Shipment',
    pageSubtitle:
      'Enter your tracking number or booking reference below to get real-time status updates on your cargo.',
    formTitle: 'Shipment Tracking',
    trackingNumber: 'Tracking Number / Booking Reference',
    trackButton: 'Track Shipment',
    inquiryTitle: 'Need Help Tracking Your Cargo?',
    inquirySubtitle:
      'If you are unable to locate your shipment or need additional information, our customer service team is here to assist you.',
    inquiryButton: 'Contact Customer Service',
  },
  caseStudies: {
    pageTitle: 'Case Studies',
    pageSubtitle:
      'See how Gama Lintas Samudera has solved complex logistics challenges for businesses across diverse industries.',
    readMore: 'Read Full Case Study',
    challenge: 'The Challenge',
    solution: 'Our Solution',
    results: 'The Results',
  },
  news: {
    pageTitle: 'News & Updates',
    pageSubtitle:
      'The latest from Gama Lintas Samudera — industry insights, regulatory updates, and company announcements.',
    readMore: 'Read More',
  },
  careers: {
    pageTitle: 'Careers at Gama Lintas Samudera',
    pageSubtitle:
      'Join a dynamic team of logistics professionals and build your career in international freight forwarding.',
    cultureTitle: 'Our Culture',
    cultureSubtitle:
      'We foster a collaborative, growth-oriented workplace where every team member plays a vital role in connecting Indonesia to the global marketplace.',
    positionsTitle: 'Open Positions',
    applyButton: 'Apply Now',
    noPositions:
      'There are no open positions at this time. Please check back soon or send your resume to our HR team for future opportunities.',
  },
  partners: {
    pageTitle: 'Our Partners',
    pageSubtitle:
      'Gama Lintas Samudera collaborates with a trusted network of shipping lines, airlines, agents, and industry associations worldwide.',
    shippingLinesTitle: 'Shipping Line Partners',
    agentNetworkTitle: 'Global Agent Network',
    associationsTitle: 'Industry Associations',
  },
  contact: {
    pageTitle: 'Contact Us',
    pageSubtitle:
      'Have a question or need a freight quote? Reach out to our team — we are ready to help you move your cargo worldwide.',
    quoteForm: {
      title: 'Request a Quote',
      origin: 'Origin (City / Port)',
      destination: 'Destination (City / Port)',
      cargoType: 'Cargo Type',
      weight: 'Estimated Weight (kg)',
      serviceType: 'Service Type',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company Name',
      message: 'Additional Details',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      success:
        'Thank you! Your quote request has been submitted. Our team will get back to you within 1 business day.',
      error:
        'Something went wrong. Please try again or contact us directly by phone or email.',
    },
    info: {
      title: 'Contact Information',
      address:
        'Jl. Laksda M. Nasir 12 A, Surabaya, East Java, Indonesia',
      phone: '+6282233181811',
      email: 'info@gls-id.com',
      hours: 'Monday - Friday: 08:00 - 17:00 WIB | Saturday: 08:00 - 12:00 WIB',
    },
  },
  faq: {
    pageTitle: 'Frequently Asked Questions',
    pageSubtitle:
      'Find answers to common questions about our freight forwarding services, shipping processes, and customs procedures.',
    categories: {
      general: 'General',
      shipping: 'Shipping & Delivery',
      customs: 'Customs & Documentation',
      pricing: 'Pricing & Payment',
    },
  },
  footer: {
    companyDescription:
      'PT Gama Lintas Samudera is the international freight forwarding arm of Gama Group, based in Surabaya, Indonesia. Backed by 30+ years of logistics heritage, we provide reliable ocean freight, air freight, customs brokerage, and integrated logistics solutions.',
    quickLinks: 'Quick Links',
    services: 'Services',
    contact: 'Contact Us',
    copyright:
      '\u00A9 {year} PT Gama Lintas Samudera. All rights reserved.',
    newsletter: {
      title: 'Stay Informed',
      placeholder: 'Enter your email address',
      button: 'Subscribe',
    },
  },
  common: {
    learnMore: 'Learn More',
    viewAll: 'View All',
    backToHome: 'Back to Home',
    loading: 'Loading...',
    readMore: 'Read More',
  },
  error: {
    title: 'Something Went Wrong',
    subtitle: 'An unexpected error occurred. Please try again.',
    retry: 'Try Again',
  },
  notFound: {
    title: 'Page Not Found',
    subtitle:
      'The page you are looking for does not exist or may have been moved. Please check the URL or return to the homepage.',
    backHome: 'Back to Home',
  },
}
