import Image from 'next/image'
import { ArrowRight, MapPin, Search, ShoppingBag, Star } from 'lucide-react'
import { ButtonLink, IllustrativeBadge } from './primitives'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-bronce/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-profundo/60 px-4 py-1.5 text-xs text-crema/80">
            <MapPin className="size-3.5 text-champagne" aria-hidden="true" />
            Centro de Medellín · Próximamente
          </p>
          <h1
            id="hero-title"
            className="text-balance text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-crema sm:text-6xl lg:text-7xl"
          >
            El centro, <span className="text-champagne">más cerca</span> de ti.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Todo lo que buscas en el Centro de Medellín, en un solo lugar. Encuentra comercios, compara opciones
            y compra sin tener que desplazarte.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm font-semibold text-crema" aria-label="Lo que puedes hacer con lole">
            {['Encuentra.', 'Compara.', 'Compra.'].map((w) => (
              <li key={w}>{w}</li>
            ))}
            <li className="text-champagne">O deja que alguien lo haga por ti.</li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#encuentra">
              Explorar comercios
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#personal-shopper" variant="secondary">
              Quiero comprar sin ir al centro
            </ButtonLink>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border lg:ml-auto lg:w-[86%]">
        <Image
          src="/images/centro-medellin.png"
          alt="Calle peatonal comercial del Centro de Medellín al anochecer, con vitrinas iluminadas y personas comprando"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/20 to-transparent" aria-hidden="true" />

        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 400 500"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M70 420 C 140 360, 120 300, 210 270 S 300 170, 320 120"
            stroke="#E5BF85"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
        <Pin className="left-[16%] top-[82%]" />
        <Pin className="left-[50%] top-[52%]" />
        <Pin className="left-[78%] top-[22%]" active />

        <IllustrativeBadge className="absolute bottom-4 left-4" />
      </div>

      <div className="animate-float-soft absolute -left-2 top-8 w-60 rounded-2xl border border-border bg-profundo/90 p-4 shadow-2xl backdrop-blur-md sm:-left-6 lg:left-0">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-noche/70 px-3 py-2.5">
          <Search className="size-4 text-champagne" aria-hidden="true" />
          <span className="text-sm text-crema/80">Licuadora de vaso de vidrio</span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Resultados en comercios del centro</p>
      </div>

      <div
        className="animate-float-soft absolute -right-2 bottom-16 w-64 rounded-2xl border border-border bg-profundo/95 p-4 shadow-2xl backdrop-blur-md [animation-delay:1.5s] sm:-right-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-bronce/15 text-champagne">
            <ShoppingBag className="size-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-crema">Comercio de ejemplo</p>
            <p className="text-xs text-muted-foreground">Electrodomésticos · a 3 cuadras</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="flex items-center gap-1 text-xs text-crema">
            <Star className="size-3.5 fill-dorado text-dorado" aria-hidden="true" />
            4,8
          </span>
          <span className="rounded-full bg-dorado/15 px-2 py-0.5 text-[11px] font-semibold text-dorado">
            Mejor precio-calidad
          </span>
        </div>
      </div>
    </div>
  )
}

function Pin({ className, active }: { className: string; active?: boolean }) {
  return (
    <span className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`} aria-hidden="true">
      <span className="absolute inset-0 rounded-full bg-champagne animate-pin-pulse" />
      <span
        className={`relative flex size-4 items-center justify-center rounded-full border-2 ${
          active ? 'border-crema bg-dorado' : 'border-champagne bg-noche'
        }`}
      />
    </span>
  )
}
