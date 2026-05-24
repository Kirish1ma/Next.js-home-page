import { navigationItems } from '@/data/navigation'

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-line/80 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="font-display text-2xl tracking-tight">
          KI
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contacts" className="rounded-full border border-ink px-4 py-2 text-sm transition hover:bg-ink hover:text-paper">
          Contact
        </a>
      </div>
    </header>
  )
}
