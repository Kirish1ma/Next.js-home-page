type TickerProps = {
  items: readonly string[]
}

export function Ticker({ items }: TickerProps) {
  const text = items.join(' // ')

  return (
    <div className="overflow-hidden border-y border-line py-4">
      <div className="flex w-max animate-[ticker_28s_linear_infinite] gap-8 whitespace-nowrap text-2xl font-display text-muted sm:text-4xl">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
