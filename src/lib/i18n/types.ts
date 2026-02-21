export type Locale = 'id' | 'en'

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    routes: string
    track: string
    caseStudies: string
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
      countriesServed: string
      shippingPartners: string
      clientSatisfaction: string
    }
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    viewAll: string
    ocean: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
    air: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
    customs: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
    warehousing: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
    land: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
    project: { title: string; description: string; features: string[]; processSteps: { title: string; description: string }[]; benefits: { title: string; description: string }[] }
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
  clients: {
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
  routes: {
    pageTitle: string
    pageSubtitle: string
    coverageTitle: string
    tradelanesTitle: string
    portsTitle: string
  }
  track: {
    pageTitle: string
    pageSubtitle: string
    formTitle: string
    trackingNumber: string
    trackButton: string
    inquiryTitle: string
    inquirySubtitle: string
    inquiryButton: string
  }
  caseStudies: {
    pageTitle: string
    pageSubtitle: string
    readMore: string
    challenge: string
    solution: string
    results: string
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
  partners: {
    pageTitle: string
    pageSubtitle: string
    shippingLinesTitle: string
    agentNetworkTitle: string
    associationsTitle: string
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
      shipping: string
      customs: string
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
