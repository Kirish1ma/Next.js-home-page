import { writers } from '@/data/writers'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function WritersSection() {
  return (
    <Section id="writers" eyebrow="Writers" title="我喜歡的作家">
      <div className="grid gap-6 lg:grid-cols-3">
        {writers.map((writer) => (
          <Card key={writer.name} className="flex min-h-80 flex-col justify-between">
            <div>
              <h3 className="font-display text-4xl">{writer.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted">{writer.role}</p>
            </div>
            <p className="mt-12 text-lg leading-8 text-muted">{writer.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
