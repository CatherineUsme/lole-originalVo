import { Camera, CheckCircle2, FileText, Handshake, PackageCheck, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './primitives'

const steps = [
  {
    icon: FileText,
    title: 'Publica lo que necesitas.',
    text: 'Describe el producto, adjunta referencias y define tu presupuesto.',
  },
  {
    icon: Handshake,
    title: 'Un Personal Shopper acepta tu solicitud.',
    text: 'Las personas disponibles reciben tu solicitud y un comprador acepta realizar la búsqueda.',
  },
  {
    icon: Camera,
    title: 'Encuentra las mejores opciones.',
    text: 'El Personal Shopper visita los comercios, encuentra alternativas y te envía fotografías y precios.',
  },
  {
    icon: CheckCircle2,
    title: 'Aprueba tu compra.',
    text: 'Revisa las opciones y autoriza la compra antes de que se realice.',
    highlight: true,
  },
  {
    icon: PackageCheck,
    title: 'Recibe tu producto.',
    text: 'El Personal Shopper realiza la compra y coordina la entrega.',
  },
]

export function ShopperSteps() {
  return (
    <section id="como-funciona" aria-labelledby="pasos-title" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="pasos-title"
            eyebrow="Personal Shopper · Así funciona"
            title="Comprar en el centro, sin salir de casa."
          />
          <div className="flex max-w-sm items-start gap-3 rounded-2xl border border-champagne/30 bg-champagne/[0.06] p-5">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-champagne" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-crema">
              <strong className="font-semibold">Tú conservas el control.</strong> Ningún producto se compra sin tu
              aprobación.
            </p>
          </div>
        </div>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-5">
          <span
            className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-bronce/0 via-bronce/50 to-bronce/0 md:block"
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, text, highlight }, i) => (
            <li
              key={title}
              className={`relative flex gap-5 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 md:flex-col md:gap-0 ${
                highlight ? 'border-champagne/50 bg-profundo' : 'border-border bg-profundo/60 hover:border-bronce/40'
              }`}
            >
              <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-noche">
                <Icon className={`size-5 ${highlight ? 'text-dorado' : 'text-champagne'}`} aria-hidden="true" />
              </div>
              <div className="md:mt-6">
                <span className="font-display text-sm font-bold text-champagne">0{i + 1}</span>
                <h3 className="mt-1 text-lg font-bold leading-snug text-crema">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                {highlight && (
                  <span className="mt-4 inline-block rounded-full bg-dorado/15 px-2.5 py-1 text-[11px] font-semibold text-dorado">
                    Tu decisión
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
