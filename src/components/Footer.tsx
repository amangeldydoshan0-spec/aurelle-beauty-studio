import { navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream/50">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="display text-3xl tracking-[0.16em] text-espresso">AURELLE</p>
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-taupe mt-1">
              Beauty Studio
            </p>
            <p className="text-sm text-muted mt-5 max-w-xs leading-relaxed">
              Премиальный салон красоты. Демонстрационный проект для портфолио веб-разработчика.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Навигация в подвале">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.68rem] tracking-[0.18em] uppercase text-muted hover:text-espresso transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[0.72rem] text-taupe">
          <p>© {new Date().getFullYear()} AURELLE Beauty Studio</p>
          <p>Демо-сайт · не является реальным салоном</p>
        </div>
      </div>
    </footer>
  )
}
