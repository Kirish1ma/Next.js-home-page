import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('section-shell', className)}>
      <div className="section-inner">
        {(eyebrow || title) && (
          <div className="mb-12 flex flex-col gap-3">
            {eyebrow && <p className="text-sm uppercase tracking-[0.35em] text-muted">{eyebrow}</p>}
            {title && <h2 className="display-title max-w-5xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
