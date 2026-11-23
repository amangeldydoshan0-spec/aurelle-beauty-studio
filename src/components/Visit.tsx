import { Clock3, MapPin, Phone } from 'lucide-react'
import { images } from '../data/content'
import { Reveal } from './Reveal'

export function Visit() {
  return (
    <section id="visit" className="pb-24 md:pb-32">
      <div className="container-page grid lg:grid-cols-2 gap-3 md:gap-4">
        <Reveal>
          <div className="relative min-h-[380px] md:min-h-[480px] overflow-hidden bg-cream">
            <img
              src={images.interior}
              alt="Зал ожидания AURELLE Beauty Studio"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-milk">
              <p className="eyebrow text-sand mb-3">Визит</p>
              <h2 className="display text-4xl md:text-5xl">Приходите без спешки</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-espresso text-milk h-full min-h-[380px] md:min-h-[480px] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-champagne mb-6">Контакты</p>
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin className="shrink-0 mt-1 text-champagne" size={18} strokeWidth={1.4} />
                  <div>
                    <p className="text-[0.68rem] tracking-[0.18em] uppercase text-sand/70 mb-1">
                      Адрес
                    </p>
                    <p className="leading-relaxed">Москва, Патриаршие пруды, ул. Малая Бронная, 12</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="shrink-0 mt-1 text-champagne" size={18} strokeWidth={1.4} />
                  <div>
                    <p className="text-[0.68rem] tracking-[0.18em] uppercase text-sand/70 mb-1">
                      Телефон
                    </p>
                    <a href="tel:+74951204567" className="hover:text-champagne transition-colors">
                      +7 (495) 120-45-67
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock3 className="shrink-0 mt-1 text-champagne" size={18} strokeWidth={1.4} />
                  <div>
                    <p className="text-[0.68rem] tracking-[0.18em] uppercase text-sand/70 mb-1">
                      Часы
                    </p>
                    <p>Ежедневно с 10:00 до 21:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <a
              href="#booking"
              className="mt-10 inline-flex w-fit text-[0.7rem] tracking-[0.2em] uppercase border-b border-champagne/50 pb-1 hover:border-champagne transition-colors"
            >
              Забронировать визит
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
