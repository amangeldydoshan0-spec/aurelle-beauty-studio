import { rituals } from '../data/content'

export function RitualStrip() {
  const items = [...rituals, ...rituals]

  return (
    <div className="border-y border-line bg-cream/60 overflow-hidden py-4" aria-hidden="true">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display text-2xl md:text-3xl text-espresso/70 whitespace-nowrap"
          >
            {item}
            <span className="mx-10 text-taupe/50">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
