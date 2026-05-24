import { experienceItems } from '@/data/experience'
import { Section } from '@/components/ui/Section'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="正在運行的時間線">
      <div className="divide-y divide-line rounded-3xl border border-line">
        {experienceItems.map((item) => (
          <div key={item.title} className="grid gap-4 p-6 transition hover:bg-ink hover:text-paper md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-display text-4xl">{item.title}</h3>
              <p className="mt-2 text-muted">{item.status}</p>
            </div>
            <p className="self-end text-sm uppercase tracking-[0.25em] text-muted">{item.date}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
