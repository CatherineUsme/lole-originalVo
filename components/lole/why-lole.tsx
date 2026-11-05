import { Compass, Scale, ShieldCheck, Sofa } from 'lucide-react'
import { SectionHeading } from './primitives'

const reasons = [
  { icon: Compass, title: 'Descubrimiento', text: 'Encuentra comercios que no conocías.' },
  { icon: Scale, title: 'Comparación', text: 'Analiza opciones antes de comprar.' },
  { icon: ShieldCheck, title: 'Confianza', text: 'Consulta reputación y calificaciones.' },
  { icon: Sofa, title: 'Comodidad', text: 'Compra en el centro sin necesidad de desplazarte.' },
]

export function WhyLole() {
  return (
    <section aria-labelledby="por-que-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading id="por-que-title" eyebrow="Por qué lole" title="¿Por qué Lole?" align="center" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-3xl border border-border p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-bronce/40 hover:bg-profundo/60"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-bronce/40 text-champagne transition-colors group-hover:border-champagne">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-crema">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
