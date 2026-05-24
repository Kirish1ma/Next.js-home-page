'use client'

import { useState } from 'react'
import { services } from '@/data/services'
import { Section } from '@/components/ui/Section'

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <Section id="services" eyebrow="Services" title="四個暫存的主題">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="w-full rounded-3xl border border-line p-6 text-left transition hover:bg-ink hover:text-paper data-[active=true]:bg-ink data-[active=true]:text-paper"
              data-active={activeIndex === index}
            >
              <span className="text-sm uppercase tracking-[0.25em] text-muted">{service.part}</span>
              <h3 className="mt-3 font-display text-4xl">{service.title}</h3>
            </button>
          ))}
        </div>
        <article className="rounded-[2rem] border border-line bg-paper/70 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-muted">{activeService.part}</p>
          <h3 className="mt-6 font-display text-5xl">{activeService.title}</h3>
          <p className="mt-8 text-xl leading-9 text-muted">{activeService.body}</p>
        </article>
      </div>
    </Section>
  )
}
