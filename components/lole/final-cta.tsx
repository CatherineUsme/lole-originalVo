import { ArrowRight } from 'lucide-react'
import { ButtonLink, Logo } from './primitives'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-5 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-champagne/25 bg-profundo px-6 py-16 text-center md:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-champagne to-transparent" aria-hidden="true" />
        <div className="relative">
          <Logo className="text-3xl" />
          <h2 id="cta-title" className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-crema md:text-5xl">
            El centro está más cerca de lo que imaginas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Estamos construyendo una nueva forma de comprar en el Centro de Medellín. Queremos que hagas parte de ella.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#form-personas">
              Quiero conocer Lole
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#form-comercios" variant="secondary">
              Tengo un comercio
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
