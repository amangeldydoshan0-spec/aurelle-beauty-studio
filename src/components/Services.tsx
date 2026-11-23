import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { services } from '../data/content'
import { Reveal } from './Reveal'

type ServiceId = (typeof services)[number]['id']

export function Services() {
  const [active, setActive] = useState<ServiceId>(services[0].id)
  const current = services.find((s) => s.id === active) ?? services[0]

  return (
    <section id="services" className="py-24 md:py-32 bg-cream/50">
      <div className="container-page">
        <Reveal className="mb-14 md:mb-20 max-w-xl">
          <p className="eyebrow mb-4">Услуги</p>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-espresso">
            Ритуалы, которые чувствуются
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-0">
            {services.map((service, index) => {
              const isActive = service.id === active
              return (
                <Reveal key={service.id} delay={index * 0.05}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(service.id)}
                    onFocus={() => setActive(service.id)}
                    onClick={() => setActive(service.id)}
                    className={`group w-full text-left border-t border-line py-6 transition-colors ${
                      isActive ? 'border-espresso' : 'hover:border-taupe'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-5">
                        <span className="text-[0.7rem] tracking-[0.18em] text-taupe pt-2">
                          {service.number}
                        </span>
                        <div>
                          <h3
                            className={`display text-3xl md:text-4xl transition-colors ${
                              isActive ? 'text-espresso' : 'text-espresso/55 group-hover:text-espresso'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35 }}
                                className="text-muted text-sm leading-relaxed mt-3 max-w-md overflow-hidden"
                              >
                                {service.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      <div className="text-right shrink-0 pt-2">
                        <p className="text-[0.72rem] tracking-[0.12em] uppercase text-espresso">
                          {service.price}
                        </p>
                        <p className="text-[0.68rem] text-taupe mt-1">{service.duration}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              )
            })}
            <div className="border-t border-line" />
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/50 to-transparent">
                <p className="text-milk display text-2xl">{current.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
