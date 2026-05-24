import { profile } from '@/data/profile'
import { Ticker } from '@/components/ui/Ticker'

export function HomeSection() {
  return (
    <section id="home" className="flex min-h-screen flex-col justify-between px-5 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-muted">Personal Homepage</p>
          <h1 className="display-title max-w-5xl">{profile.headline}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">{profile.description}</p>
        </div>
        <div className="min-h-[24rem] rounded-[2.5rem] border border-line bg-ink p-6 text-paper shadow-sm">
          <div className="flex h-full min-h-[20rem] flex-col justify-between rounded-[2rem] border border-paper/20 p-6">
            <span className="text-sm uppercase tracking-[0.35em] text-paper/60">Now</span>
            <p className="font-display text-4xl leading-tight">Reading, writing, and rebuilding this site.</p>
          </div>
        </div>
      </div>
      <Ticker items={profile.ticker} />
    </section>
  )
}
