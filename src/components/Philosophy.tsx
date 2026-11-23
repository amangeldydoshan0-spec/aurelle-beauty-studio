import { images } from '../data/content'
import { Reveal } from './Reveal'

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <p className="eyebrow mb-5">Философия</p>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-espresso mb-6">
            Не больше процедур — больше внимания
          </h2>
          <p className="text-muted leading-relaxed mb-6 max-w-md">
            AURELLE — это тишина кабинета, точный свет и мастера, которые работают с вашей
            индивидуальностью, а не с шаблоном. Мы создаём ощущение, что о вас позаботились
            по-настоящему.
          </p>
          <p className="text-muted leading-relaxed max-w-md mb-10">
            Каждая встреча начинается с диалога: состояния кожи, ритма жизни и желаемого
            результата. Отсюда рождается спокойная, дорогая эстетика без лишнего шума.
          </p>
          <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8">
            {[
              { value: '12', label: 'лет опыта' },
              { value: '40+', label: 'ритуалов' },
              { value: '1:1', label: 'внимание' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="display text-3xl text-espresso">{item.value}</dt>
                <dd className="text-[0.68rem] tracking-[0.14em] uppercase text-taupe mt-1">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7 order-1 lg:order-2" delay={0.12}>
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-cream">
              <img
                src={images.philosophy}
                alt="Атмосфера ухода в AURELLE Beauty Studio"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <blockquote className="hidden md:block absolute -left-6 bottom-10 max-w-xs bg-milk/95 p-6 border border-line">
              <p className="display text-2xl italic text-espresso leading-snug">
                «Красота — это когда вам спокойно смотреть в зеркало.»
              </p>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
