import { profile } from '@/data/profile'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="關於我">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Card>
          <p className="font-display text-6xl">18</p>
          <p className="mt-2 text-muted">years old</p>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.about.map((paragraph) => (
            <Card key={paragraph}>
              <p className="text-lg leading-8 text-muted">{paragraph}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
