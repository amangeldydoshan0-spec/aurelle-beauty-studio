export const navLinks = [
  { href: '#top', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#philosophy', label: 'Философия' },
  { href: '#atelier', label: 'Ателье' },
  { href: '#masters', label: 'Мастера' },
  { href: '#booking', label: 'Запись' },
] as const

export const images = {
  hero:
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2400&q=85',
  philosophy:
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80',
  facial:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  hair:
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
  nails:
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
  spa:
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  interior:
    'https://images.unsplash.com/photo-1633681926022-db1b6b8ace4d?auto=format&fit=crop&w=1400&q=80',
  makeup:
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  detail:
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
} as const

export const services = [
  {
    id: 'skin',
    number: '01',
    title: 'Уход за кожей',
    description:
      'Индивидуальные протоколы очищения, увлажнения и восстановления с акцентом на естественное сияние.',
    duration: '60–90 мин',
    price: 'от 6 500 ₽',
    image: images.facial,
  },
  {
    id: 'hair',
    number: '02',
    title: 'Волосы и цвет',
    description:
      'Мягкая колористика, реконструкция и укладки, которые подчёркивают форму лица и характер.',
    duration: '90–180 мин',
    price: 'от 8 900 ₽',
    image: images.hair,
  },
  {
    id: 'nails',
    number: '03',
    title: 'Маникюр и педикюр',
    description:
      'Чистая эстетика формы, аккуратные покрытия и уход, который выглядит дорого без излишней декоративности.',
    duration: '60–120 мин',
    price: 'от 3 800 ₽',
    image: images.nails,
  },
  {
    id: 'makeup',
    number: '04',
    title: 'Макияж',
    description:
      'Естественные и вечерние образы с акцентом на кожу, свет и индивидуальность.',
    duration: '45–90 мин',
    price: 'от 5 200 ₽',
    image: images.makeup,
  },
  {
    id: 'body',
    number: '05',
    title: 'Тело и ритуалы',
    description:
      'Спа-ритуалы, массаж и ритуалы восстановления, создающие ощущение тишины и заботы.',
    duration: '75–120 мин',
    price: 'от 7 400 ₽',
    image: images.spa,
  },
] as const

export const gallery = [
  { src: images.interior, alt: 'Интерьер студии AURELLE', span: 'tall' },
  { src: images.facial, alt: 'Уход за лицом', span: 'wide' },
  { src: images.detail, alt: 'Атмосфера ритуала', span: 'square' },
  { src: images.hair, alt: 'Работа с волосами', span: 'square' },
  { src: images.nails, alt: 'Маникюр в студии', span: 'wide' },
] as const

export const masters = [
  {
    name: 'Елена Аврель',
    role: 'Арт-директор · косметолог',
    focus: 'Кожа и антивозрастные протоколы',
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Мария Солнева',
    role: 'Колорист',
    focus: 'Мягкий цвет и восстановление',
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Анна Верн',
    role: 'Визажист',
    focus: 'Естественный свет и текстура',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
] as const

export const rituals = [
  'Сияние кожи',
  'Мягкий цвет',
  'Чистая форма',
  'Тишина ритуала',
  'Светлая эстетика',
  'Индивидуальный уход',
] as const
