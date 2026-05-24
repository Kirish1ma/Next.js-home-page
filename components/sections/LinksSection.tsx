import { links } from '@/data/links'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function LinksSection() {
  return (
    <Section id="links" eyebrow="Links" title="可以前往的地方">
      <div className="grid gap-6 md:grid-cols-2">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            <Card className="h-full transition hover:-translate-y-1 hover:bg-ink hover:text-paper">
              <h3 className="font-display text-4xl">{link.title}</h3>
              <p className="mt-4 text-muted">{link.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  )
}
