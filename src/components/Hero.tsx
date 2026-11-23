import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { images } from '../data/content'
import { Button } from './Button'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={images.hero}
          alt="Интерьер премиального салона красоты AURELLE"
          className="h-full w-full object-cover object-[center_30%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/30" />
      </motion.div>

      <div className="relative container-page min-h-svh flex flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-milk"
        >
          <p className="display text-[clamp(2.8rem,8vw,5.6rem)] tracking-[0.12em] text-milk mb-6">
            AURELLE
          </p>
          <h1 className="display text-[clamp(1.85rem,4.2vw,3.15rem)] text-milk/95 max-w-xl mb-5">
            Красота начинается с внимания к себе
          </h1>
          <p className="text-[0.95rem] md:text-base font-light leading-relaxed text-milk/80 max-w-md mb-10">
            Пространство эстетики, ухода и профессиональной заботы о вашей красоте.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#booking" variant="light">
              Записаться на процедуру
            </Button>
            <Button
              href="#services"
              variant="ghost"
              className="!text-milk !border-milk/35 hover:!border-milk hover:!bg-milk/10"
            >
              Наши услуги
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#philosophy"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute right-6 bottom-10 md:right-10 md:bottom-16 hidden sm:flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-milk/70 hover:text-milk transition-colors"
        >
          Исследовать
          <ArrowDownRight size={16} strokeWidth={1.4} />
        </motion.a>
      </div>
    </section>
  )
}
