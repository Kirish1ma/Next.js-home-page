import { Section } from '@/components/ui/Section'

export function BlogSection() {
  return (
    <Section id="blog" eyebrow="Blog" title="Fragments and logs">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <p className="max-w-2xl text-xl leading-9 text-muted">
          博客部分暫時保留為外部入口。後續可以接入 Markdown、MDX，或者直接把現有博客作為獨立子域名維護。
        </p>
        <a
          href="https://blog.kirishima.dev/"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-64 items-end rounded-[2rem] border border-line bg-ink p-8 text-paper transition hover:-translate-y-1"
        >
          <span className="font-display text-5xl">Open Blog</span>
        </a>
      </div>
    </Section>
  )
}
