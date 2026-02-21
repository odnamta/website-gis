export type Locale = 'id' | 'en'

interface ServiceContent {
  title: string
  description: string
  features: string[]
  processSteps: { title: string; description: string }[]
  benefits: { title: string; description: string }[]
}

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    projects: string
    equipment: string
    team: string
    gallery: string
    news: string
    careers: string
    partners: string
    contact: string
    faq: string
    getQuote: string
  }
  hero: {
    title: string
    subtitle: string
    ctaQuote: string
    ctaServices: string
    stats: {
      yearsExperience: string
      totalStaff: string
      projectsCompleted: string
      coreServices: string
    }
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    viewAll: string
    freightForwarding: ServiceContent
    projectCargo: ServiceContent
    mechanicalErection: ServiceContent
    detailPage: {
      features: string
      process: string
      benefits: string
      faq: string
      relatedServices: string
      ctaTitle: string
      ctaSubtitle: string
      ctaButton: string
    }
  }
  whyChooseUs: {
    sectionTitle: string
    sectionSubtitle: string
    reasons: Array<{ title: string; description: string }>
  }
  partners: {
    pageTitle: string
    pageSubtitle: string
    sectionTitle: string
  }
  testimonials: {
    sectionTitle: string
    sectionSubtitle: string
  }
  latestNews: {
    sectionTitle: string
    sectionSubtitle: string
    readMore: string
    viewAll: string
  }
  ctaBanner: {
    title: string
    subtitle: string
    buttonText: string
  }
  about: {
    pageTitle: string
    pageSubtitle: string
    storyTitle: string
    story: string[]
    visionTitle: string
    vision: string
    missionTitle: string
    missions: string[]
    leadershipTitle: string
    leadershipSubtitle: string
    timelineTitle: string
    certificationsTitle: string
  }
  projects: {
    pageTitle: string
    pageSubtitle: string
    readMore: string
    challenge: string
    solution: string
    results: string
  }
  equipment: {
    pageTitle: string
    pageSubtitle: string
  }
  team: {
    pageTitle: string
    pageSubtitle: string
  }
  gallery: {
    pageTitle: string
    pageSubtitle: string
  }
  news: {
    pageTitle: string
    pageSubtitle: string
    readMore: string
  }
  careers: {
    pageTitle: string
    pageSubtitle: string
    cultureTitle: string
    cultureSubtitle: string
    positionsTitle: string
    applyButton: string
    noPositions: string
  }
  contact: {
    pageTitle: string
    pageSubtitle: string
    quoteForm: {
      title: string
      origin: string
      destination: string
      cargoType: string
      weight: string
      serviceType: string
      name: string
      email: string
      phone: string
      company: string
      message: string
      submit: string
      submitting: string
      success: string
      error: string
    }
    info: {
      title: string
      address: string
      phone: string
      email: string
      hours: string
    }
  }
  faq: {
    pageTitle: string
    pageSubtitle: string
    categories: {
      general: string
      'heavy-lift': string
      'project-cargo': string
      pricing: string
    }
  }
  footer: {
    companyDescription: string
    quickLinks: string
    services: string
    contact: string
    copyright: string
    newsletter: {
      title: string
      placeholder: string
      button: string
    }
  }
  common: {
    learnMore: string
    viewAll: string
    backToHome: string
    loading: string
    readMore: string
  }
  error: {
    title: string
    subtitle: string
    retry: string
  }
  notFound: {
    title: string
    subtitle: string
    backHome: string
  }
}
