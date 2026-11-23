import { gallery } from '../data/content'
import { Reveal } from './Reveal'

export function Gallery() {
  return (
    <section id="atelier" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Ателье</p>
            <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-espresso">
              Пространство света и спокойствия
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Интерьер студии создан так, чтобы вы могли замедлиться ещё до начала процедуры.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {gallery.map((item, index) => {
            const span =
              item.span === 'tall'
                ? 'md:col-span-5 md:row-span-2 col-span-2 row-span-2'
                : item.span === 'wide'
                  ? 'md:col-span-7 col-span-2'
                  : 'md:col-span-4 col-span-1'

            return (
              <Reveal key={item.src} delay={index * 0.06} className={`${span} overflow-hidden group`}>
                <div className="h-full w-full overflow-hidden bg-cream">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
