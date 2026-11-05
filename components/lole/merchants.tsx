import { ArrowRight, Eye, LayoutGrid, MapPin, Settings2, Sparkles, Users } from 'lucide-react'
import { ButtonLink, SectionHeading } from './primitives'

const benefits = [
  { icon: Eye, title: 'Mayor visibilidad', text: 'Aparece cuando las personas buscan lo que vendes.' },
  { icon: Users, title: 'Nuevos clientes', text: 'Llega a compradores que hoy no visitan el centro.' },
  { icon: LayoutGrid, title: 'Exhibición de productos', text: 'Muestra tu catálogo con fotos, precios y garantías.' },
  { icon: MapPin, title: 'Presencia en el mapa', text: 'Que te ubiquen fácilmente en el mapa comercial.' },
  { icon: Sparkles, title: 'Destaca tu establecimiento', text: 'Opciones para ganar protagonismo en tu categoría.' },
  { icon: Settings2, title: 'Información en tus manos', text: 'Tú administras directamente los datos de tu comercio.' },
]

export function Merchants() {
  return (
    <section id="comerciantes" aria-labelledby="comerciantes-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-profundo to-noche p-6 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col">
              <SectionHeading
                id="comerciantes-title"
                eyebrow="Para comerciantes"
                title="Tu negocio merece ser encontrado."
                description="Lleva tu comercio a más personas. Con Lole podrás mostrar tus productos, llegar a nuevos compradores y aprovechar las oportunidades del comercio digital."
              />
              <p className="mt-6 rounded-2xl border border-border bg-noche/50 p-4 text-sm leading-relaxed text-crema/85">
                Lole tendrá <strong className="font-semibold text-champagne">planes de suscripción para comercios</strong>,
                pensados para negocios de todos los tamaños.
              </p>
              <ButtonLink href="#form-comercios" className="mt-8 self-start">
                Quiero registrar mi comercio
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => (
                <li key={title} className="bg-profundo p-6 transition-colors hover:bg-[#0f2a52]">
                  <Icon className="size-5 text-champagne" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold text-crema">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
