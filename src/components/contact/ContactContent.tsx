'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/lib/i18n/context'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'
import { Button } from '@/components/shared/Button'
import { company } from '@/lib/data/company'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export function ContactContent() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (!formId) {
        setStatus('success')
        return
      }
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-green-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow text-sm'

  const dimensionLabel = t.contact.quoteForm.cargoDimensions
  const lengthLabel = t.contact.quoteForm.length
  const widthLabel = t.contact.quoteForm.width
  const heightLabel = t.contact.quoteForm.height

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              {t.contact.pageTitle}
            </h1>
            <p className="text-lg text-green-300">{t.contact.pageSubtitle}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <div className="p-8 rounded-2xl border border-slate-200 bg-white">
                  <h2 className="text-2xl font-heading font-bold text-green-900 mb-6">
                    {t.contact.quoteForm.title}
                  </h2>
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <p className="text-lg font-medium text-green-900">{t.contact.quoteForm.success}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Personal info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="sr-only">{t.contact.quoteForm.name}</label>
                          <input id="name" name="name" required placeholder={t.contact.quoteForm.name} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="email" className="sr-only">{t.contact.quoteForm.email}</label>
                          <input id="email" name="email" type="email" required placeholder={t.contact.quoteForm.email} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="phone" className="sr-only">{t.contact.quoteForm.phone}</label>
                          <input id="phone" name="phone" type="tel" placeholder={t.contact.quoteForm.phone} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="company" className="sr-only">{t.contact.quoteForm.company}</label>
                          <input id="company" name="company" placeholder={t.contact.quoteForm.company} className={inputClasses} />
                        </div>
                      </div>

                      {/* Origin / Destination */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="origin" className="sr-only">{t.contact.quoteForm.origin}</label>
                          <input id="origin" name="origin" required placeholder={t.contact.quoteForm.origin} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="destination" className="sr-only">{t.contact.quoteForm.destination}</label>
                          <input id="destination" name="destination" required placeholder={t.contact.quoteForm.destination} className={inputClasses} />
                        </div>
                      </div>

                      {/* Cargo type, weight, service type */}
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="cargoType" className="sr-only">{t.contact.quoteForm.cargoType}</label>
                          <input id="cargoType" name="cargoType" placeholder={t.contact.quoteForm.cargoType} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="weight" className="sr-only">{t.contact.quoteForm.weight}</label>
                          <input id="weight" name="weight" placeholder={t.contact.quoteForm.weight} className={inputClasses} />
                        </div>
                        <div>
                          <label htmlFor="serviceType" className="sr-only">{t.contact.quoteForm.serviceType}</label>
                          <select id="serviceType" name="serviceType" className={inputClasses} defaultValue="">
                            <option value="" disabled>{t.contact.quoteForm.serviceType}</option>
                            <option value="freight-forwarding">{t.contact.quoteForm.serviceOptions.freightForwarding}</option>
                            <option value="project-cargo">{t.contact.quoteForm.serviceOptions.projectCargo}</option>
                            <option value="mechanical-erection">{t.contact.quoteForm.serviceOptions.mechanicalErection}</option>
                          </select>
                        </div>
                      </div>

                      {/* Cargo dimensions — heavy-lift specific */}
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-2">{dimensionLabel}</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="cargoLength" className="sr-only">{lengthLabel}</label>
                            <input id="cargoLength" name="cargoLength" type="number" min="0" step="0.01" placeholder={lengthLabel} className={inputClasses} />
                          </div>
                          <div>
                            <label htmlFor="cargoWidth" className="sr-only">{widthLabel}</label>
                            <input id="cargoWidth" name="cargoWidth" type="number" min="0" step="0.01" placeholder={widthLabel} className={inputClasses} />
                          </div>
                          <div>
                            <label htmlFor="cargoHeight" className="sr-only">{heightLabel}</label>
                            <input id="cargoHeight" name="cargoHeight" type="number" min="0" step="0.01" placeholder={heightLabel} className={inputClasses} />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="sr-only">{t.contact.quoteForm.message}</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder={t.contact.quoteForm.message}
                          className={inputClasses}
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-sm text-red-600">{t.contact.quoteForm.error}</p>
                      )}
                      <Button variant="accent" type="submit" disabled={status === 'submitting'}>
                        <Send className="w-4 h-4" />
                        {status === 'submitting' ? t.contact.quoteForm.submitting : t.contact.quoteForm.submit}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Info */}
            <div>
              <AnimateOnScroll delay={0.1}>
                <div className="p-6 rounded-2xl bg-green-900 text-white">
                  <h3 className="text-xl font-heading font-bold mb-6">{t.contact.info.title}</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{t.contact.info.address}</p>
                        <p className="text-green-300 text-sm mt-1">{company.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{t.contact.info.phone}</p>
                        <a href={`tel:${company.phone}`} className="text-green-300 text-sm hover:text-white transition-colors">
                          {company.phone}
                        </a>
                        <br />
                        <span className="text-green-400 text-xs">{t.contact.info.fax}: {company.fax}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{t.contact.info.email}</p>
                        <a href={`mailto:${company.email}`} className="text-green-300 text-sm hover:text-white transition-colors">
                          {company.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{t.contact.info.hours}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
