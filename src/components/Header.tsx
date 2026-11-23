import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-milk/90 backdrop-blur-md border-b border-line/70'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-[4.5rem]">
        <a href="#top" className="group relative z-10" aria-label="AURELLE Beauty Studio">
          <span
            className={`display text-[1.55rem] tracking-[0.18em] transition-colors ${
              scrolled || open ? 'text-espresso' : 'text-milk'
            }`}
          >
            AURELLE
          </span>
          <span
            className={`block text-[0.58rem] tracking-[0.32em] uppercase mt-0.5 transition-colors ${
              scrolled || open
                ? 'text-taupe group-hover:text-espresso'
                : 'text-milk/70 group-hover:text-milk'
            }`}
          >
            Beauty Studio
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[0.68rem] tracking-[0.2em] uppercase transition-colors ${
                scrolled
                  ? 'text-muted hover:text-espresso'
                  : 'text-milk/75 hover:text-milk'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className={`hidden lg:inline-flex text-[0.68rem] tracking-[0.2em] uppercase pb-0.5 transition-colors border-b ${
            scrolled
              ? 'text-espresso border-espresso/30 hover:border-espresso'
              : 'text-milk border-milk/40 hover:border-milk'
          }`}
        >
          Записаться
        </a>

        <button
          type="button"
          className={`lg:hidden relative z-10 p-2 transition-colors ${
            scrolled || open ? 'text-espresso' : 'text-milk'
          }`}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[4.5rem] bg-milk"
          >
            <nav className="container-page flex flex-col gap-1 pt-10" aria-label="Мобильная навигация">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                  className="display text-4xl py-3 text-espresso border-b border-line/80"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
