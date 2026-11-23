import { masters } from '../data/content'
import { Reveal } from './Reveal'

export function Masters() {
  return (
    <section id="masters" className="py-24 md:py-32 bg-cream/40">
      <div className="container-page">
        <Reveal className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">Мастера</p>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-espresso">
            Люди, которые чувствуют детали
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {masters.map((master, index) => (
            <Reveal key={master.name} delay={index * 0.1}>
              <article className="group">
                <div className="aspect-[3/4] overflow-hidden bg-sand/30 mb-5">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h3 className="display text-3xl text-espresso">{master.name}</h3>
                <p className="text-[0.72rem] tracking-[0.16em] uppercase text-taupe mt-2">
                  {master.role}
                </p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{master.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
