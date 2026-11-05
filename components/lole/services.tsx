import Image from 'next/image'
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardList,
  Laptop,
  Search,
  Shirt,
  Sofa,
  Star,
  Truck,
  Tv,
  Award,
} from 'lucide-react'
import { ButtonLink, IllustrativeBadge, SectionHeading } from './primitives'

const categories = [
  { icon: Tv, label: 'Electrodomésticos', active: true },
  { icon: Shirt, label: 'Ropa' },
  { icon: Laptop, label: 'Tecnología' },
  { icon: Sofa, label: 'Hogar' },
]

const exactResults = [
  { name: 'Comercio A', price: '$ 289.000', rating: '4,8', best: true, warranty: 'Garantía 12 meses' },
  { name: 'Comercio B', price: '$ 305.000', rating: '4,5', warranty: 'Garantía 6 meses' },
]

const similarResults = [{ name: 'Comercio C', price: '$ 249.000', rating: '4,3', note: 'Modelo alternativo' }]

export function Services() {
  return (
    <section aria-labelledby="servicios-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="servicios-title"
          eyebrow="Dos servicios"
          title="El centro tiene todo. Nosotros te ayudamos a encontrarlo."
          description="Dos maneras de comprar. Una forma más fácil de llegar a lo que necesitas."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article
            id="encuentra"
            aria-labelledby="encuentra-title"
            className="group flex flex-col rounded-3xl border border-border bg-profundo p-6 transition-colors hover:border-bronce/40 md:p-10"
          >
            <span className="font-display text-sm font-semibold text-champagne">01 · Encuentra y compara</span>
            <h3 id="encuentra-title" className="mt-3 text-balance text-2xl font-bold text-crema md:text-3xl">
              Encuentra el mejor lugar para comprar.
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ¿Buscas un electrodoméstico, ropa, tecnología o cualquier otro producto? Descubre qué comercios lo
              ofrecen, compara precios y encuentra la mejor relación precio-calidad.
            </p>

            <SearchMockup />

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              El ranking de lole considerará precio, calidad, reputación, garantía y opiniones de compradores.
            </p>

            <ButtonLink href="#form-personas" className="mt-8 self-start">
              Quiero encontrar lo que busco
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </article>

          <article
            id="personal-shopper"
            aria-labelledby="shopper-title"
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-profundo transition-colors hover:border-bronce/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/personal-shopper.png"
                alt="Personal Shopper tomando una foto de un producto en un comercio del centro para enviarla a su cliente"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-profundo via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <Chip icon={Camera}>3 opciones enviadas</Chip>
                <Chip icon={CheckCircle2}>Esperando tu aprobación</Chip>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-10 md:pt-8">
              <span className="font-display text-sm font-semibold text-champagne">02 · Personal Shopper</span>
              <h3 id="shopper-title" className="mt-3 text-balance text-2xl font-bold text-crema md:text-3xl">
                El centro tiene lo que necesitas. Alguien puede traerlo por ti.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Si te gusta comprar en el centro, pero no tienes tiempo de ir, conecta con personas que pueden
                encontrar, comprar y llevarte lo que necesitas.
              </p>

              <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: ClipboardList, label: 'Publicas tu solicitud' },
                  { icon: Search, label: 'Explora comercios' },
                  { icon: CheckCircle2, label: 'Tú apruebas' },
                  { icon: Truck, label: 'Recibes tu compra' },
                ].map(({ icon: Icon, label }, i) => (
                  <li key={label} className="rounded-2xl border border-border bg-noche/60 p-3">
                    <Icon className="size-5 text-champagne" aria-hidden="true" />
                    <p className="mt-3 text-xs leading-snug text-crema/90">
                      <span className="sr-only">Paso {i + 1}: </span>
                      {label}
                    </p>
                  </li>
                ))}
              </ol>

              <ButtonLink href="#como-funciona" variant="secondary" className="mt-8 self-start">
                Conoce cómo funciona
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Chip({ icon: Icon, children }: { icon: typeof Camera; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-noche/85 px-3 py-1.5 text-xs text-crema backdrop-blur">
      <Icon className="size-3.5 text-champagne" aria-hidden="true" />
      {children}
    </span>
  )
}

function SearchMockup() {
  return (
    <div className="relative mt-8 rounded-2xl border border-border bg-noche/70 p-4 md:p-5" aria-label="Ejemplo ilustrativo de resultados de búsqueda" role="img">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-profundo px-3 py-2.5">
          <Search className="size-4 text-champagne" aria-hidden="true" />
          <span className="truncate text-sm text-crema/90">Licuadora 600 W</span>
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {categories.map(({ icon: Icon, label, active }) => (
          <span
            key={label}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
              active ? 'border-champagne/60 bg-champagne/10 text-champagne' : 'border-border text-crema/70'
            }`}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-crema/60">Coincidencias exactas</p>
      <ul className="mt-2 space-y-2">
        {exactResults.map((r) => (
          <ResultRow key={r.name} {...r} meta={r.warranty} />
        ))}
      </ul>

      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-crema/60">Similares o alternativas</p>
      <ul className="mt-2 space-y-2">
        {similarResults.map((r) => (
          <ResultRow key={r.name} {...r} meta={r.note} muted />
        ))}
      </ul>

      <div className="mt-4 flex justify-end">
        <IllustrativeBadge />
      </div>
    </div>
  )
}

function ResultRow({
  name,
  price,
  rating,
  meta,
  best,
  muted,
}: {
  name: string
  price: string
  rating: string
  meta: string
  best?: boolean
  muted?: boolean
}) {
  return (
    <li
      className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-3 ${
        best ? 'border-dorado/50 bg-dorado/[0.06]' : 'border-border bg-profundo/60'
      } ${muted ? 'opacity-85' : ''}`}
    >
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-sm font-semibold text-crema">
          {name}
          {best && (
            <span className="inline-flex items-center gap-1 rounded-full bg-dorado px-2 py-0.5 text-[10px] font-bold text-noche">
              <Award className="size-3" aria-hidden="true" />
              Mejor precio-calidad
            </span>
          )}
        </p>
        <p className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
          <Star className="size-3 fill-champagne text-champagne" aria-hidden="true" />
          {rating} · {meta}
        </p>
      </div>
      <span className="shrink-0 font-display text-sm font-bold text-crema">{price}</span>
    </li>
  )
}
