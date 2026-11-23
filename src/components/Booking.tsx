import { CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { services } from '../data/content'
import { Button } from './Button'
import { Reveal } from './Reveal'

type FormState = {
  name: string
  phone: string
  service: string
  date: string
  comment: string
}

const initial: FormState = {
  name: '',
  phone: '',
  service: services[0].title,
  date: '',
  comment: '',
}

export function Booking() {
  const [form, setForm] = useState<FormState>(initial)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="booking" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">Запись</p>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] text-espresso mb-6">
            Запишитесь на процедуру
          </h2>
          <p className="text-muted leading-relaxed max-w-md mb-8">
            Оставьте заявку — администратор свяжется с вами, чтобы подтвердить время и подобрать
            мастера. Это демонстрационная форма для портфолио: данные никуда не отправляются.
          </p>
          <div className="space-y-4 text-sm text-muted">
            <p>
              <span className="text-espresso">Телефон:</span> +7 (495) 120-45-67
            </p>
            <p>
              <span className="text-espresso">Часы работы:</span> ежедневно 10:00–21:00
            </p>
            <p>
              <span className="text-espresso">Адрес:</span> Москва, Патриаршие пруды, 12
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="bg-cream/70 border border-line p-6 md:p-10">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle2 className="text-champagne" size={36} strokeWidth={1.4} />
                <h3 className="display text-3xl text-espresso">Заявка принята</h3>
                <p className="text-muted max-w-md leading-relaxed">
                  Спасибо, {form.name || 'мы получили вашу заявку'}. В реальном проекте здесь
                  появилось бы подтверждение записи.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSent(false)
                    setForm(initial)
                  }}
                >
                  Отправить ещё раз
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                <label className="block md:col-span-1">
                  <span className="eyebrow mb-2 block">Имя</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full bg-milk border border-line px-4 py-3 text-sm text-espresso outline-none focus:border-taupe transition-colors"
                    placeholder="Как к вам обращаться"
                  />
                </label>
                <label className="block md:col-span-1">
                  <span className="eyebrow mb-2 block">Телефон</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-milk border border-line px-4 py-3 text-sm text-espresso outline-none focus:border-taupe transition-colors"
                    placeholder="+7"
                  />
                </label>
                <label className="block md:col-span-1">
                  <span className="eyebrow mb-2 block">Услуга</span>
                  <select
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="w-full bg-milk border border-line px-4 py-3 text-sm text-espresso outline-none focus:border-taupe transition-colors"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-1">
                  <span className="eyebrow mb-2 block">Желаемая дата</span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full bg-milk border border-line px-4 py-3 text-sm text-espresso outline-none focus:border-taupe transition-colors"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="eyebrow mb-2 block">Комментарий</span>
                  <textarea
                    rows={4}
                    value={form.comment}
                    onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                    className="w-full bg-milk border border-line px-4 py-3 text-sm text-espresso outline-none focus:border-taupe transition-colors resize-none"
                    placeholder="Пожелания к процедуре или мастеру"
                  />
                </label>
                <div className="md:col-span-2 pt-2">
                  <Button type="submit" variant="primary">
                    Отправить заявку
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
