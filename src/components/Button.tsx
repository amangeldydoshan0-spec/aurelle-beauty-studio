import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'light'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
  href?: string
}

const styles: Record<Variant, string> = {
  primary:
    'bg-espresso text-milk hover:bg-ink border border-espresso',
  ghost:
    'bg-transparent text-espresso border border-espresso/25 hover:border-espresso hover:bg-espresso/5',
  light:
    'bg-milk/95 text-espresso hover:bg-milk border border-milk',
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
