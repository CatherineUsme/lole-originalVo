import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-2xl font-extrabold lowercase tracking-[-0.06em] text-champagne',
        className,
      )}
    >
      lole<span className="text-dorado">.</span>
    </span>
  )
}

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-dorado text-noche hover:bg-champagne shadow-[0_8px_30px_-12px_rgb(239_173_77/0.6)]',
  secondary:
    'border border-bronce/40 text-crema hover:border-champagne hover:bg-crema/5',
  ghost: 'text-champagne hover:text-crema',
}

export function ButtonLink({
  variant = 'primary',
  className,
  ...props
}: ComponentProps<'a'> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
      <span className="h-px w-6 bg-bronce" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  id?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className="text-balance text-3xl font-bold leading-tight tracking-tight text-crema md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export function IllustrativeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-bronce/30 bg-noche/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur',
        className,
      )}
    >
      Vista ilustrativa · datos de ejemplo
    </span>
  )
}
