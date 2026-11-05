'use client'

import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { AlertCircle, Info, Loader2, Store, UserRound } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  MERCHANT_CATEGORIES,
  SERVICE_OPTIONS,
  submitLead,
  validateLead,
  type FieldErrors,
  type Lead,
} from '@/lib/leads'
import { SectionHeading } from './primitives'

export function InterestForms() {
  return (
    <section id="unete" aria-labelledby="unete-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          id="unete-title"
          eyebrow="Únete a lole"
          title="Haz parte de lo que viene."
          description="Cuéntanos quién eres y te avisaremos cuando Lole esté disponible."
        />

        <div
          role="note"
          className="mt-8 flex items-start gap-3 rounded-2xl border border-champagne/30 bg-champagne/[0.06] p-4 text-sm text-crema"
        >
          <Info className="mt-0.5 size-5 shrink-0 text-champagne" aria-hidden="true" />
          <p>
            <strong className="font-semibold">Modo demostración.</strong> Los formularios validan la información, pero
            todavía no están conectados a una base de datos: los datos que ingreses no se almacenan ni se envían.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <PersonForm />
          <MerchantForm />
        </div>
      </div>
    </section>
  )
}

function useLeadForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'demo' | 'stored'>('idle')

  async function handle(e: FormEvent<HTMLFormElement>, lead: Lead) {
    e.preventDefault()
    const found = validateLead(lead)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)
      first?.focus()
      setState('idle')
      return
    }
    setState('sending')
    const result = await submitLead(lead)
    setState(result.status)
  }

  return { errors, state, handle }
}

const read = (fd: FormData, k: string) => String(fd.get(k) ?? '')

function PersonForm() {
  const { errors, state, handle } = useLeadForm()
  return (
    <FormCard
      id="form-personas"
      icon={<UserRound className="size-5" aria-hidden="true" />}
      title="Personas interesadas en Lole"
      subtitle="Para quienes quieren comprar en el centro de una forma más fácil."
    >
      <form
        noValidate
        onSubmit={(e) => {
          const fd = new FormData(e.currentTarget)
          handle(e, {
            type: 'persona',
            nombre: read(fd, 'nombre'),
            email: read(fd, 'email'),
            whatsapp: read(fd, 'whatsapp'),
            servicio: read(fd, 'servicio'),
            consentimiento: fd.get('consentimiento') === 'on',
          })
        }}
        className="space-y-5"
      >
        <Field name="nombre" label="Nombre" autoComplete="name" error={errors.nombre} />
        <Field name="email" label="Correo electrónico" type="email" autoComplete="email" error={errors.email} />
        <Field name="whatsapp" label="WhatsApp" type="tel" autoComplete="tel" placeholder="300 123 4567" error={errors.whatsapp} />

        <fieldset aria-describedby={errors.servicio ? 'persona-servicio-error' : undefined}>
          <legend className="mb-2 text-sm font-medium text-crema">¿Qué servicio te interesa?</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {SERVICE_OPTIONS.map((o) => (
              <label
                key={o.value}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-input bg-noche/60 px-3 py-3 text-sm text-crema/90 transition-colors hover:border-bronce has-[:checked]:border-champagne has-[:checked]:bg-champagne/10 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-champagne"
              >
                <input type="radio" name="servicio" value={o.value} className="accent-dorado" />
                {o.label}
              </label>
            ))}
          </div>
          <ErrorText id="persona-servicio-error" error={errors.servicio} />
        </fieldset>

        <Consent error={errors.consentimiento} idPrefix="persona" />
        <Submit state={state}>Quiero ser parte de Lole</Submit>
      </form>
    </FormCard>
  )
}

function MerchantForm() {
  const { errors, state, handle } = useLeadForm()
  const selectId = useId()
  return (
    <FormCard
      id="form-comercios"
      icon={<Store className="size-5" aria-hidden="true" />}
      title="Comerciantes"
      subtitle="Para establecimientos del Centro de Medellín que quieren ser encontrados."
    >
      <form
        noValidate
        onSubmit={(e) => {
          const fd = new FormData(e.currentTarget)
          handle(e, {
            type: 'comercio',
            establecimiento: read(fd, 'establecimiento'),
            contacto: read(fd, 'contacto'),
            email: read(fd, 'email'),
            whatsapp: read(fd, 'whatsapp'),
            categoria: read(fd, 'categoria'),
            consentimiento: fd.get('consentimiento') === 'on',
          })
        }}
        className="space-y-5"
      >
        <Field name="establecimiento" label="Nombre del establecimiento" autoComplete="organization" error={errors.establecimiento} />
        <Field name="contacto" label="Nombre de contacto" autoComplete="name" error={errors.contacto} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field name="email" label="Correo electrónico" type="email" autoComplete="email" error={errors.email} />
          <Field name="whatsapp" label="WhatsApp" type="tel" autoComplete="tel" placeholder="300 123 4567" error={errors.whatsapp} />
        </div>
        <div>
          <label htmlFor={selectId} className="mb-2 block text-sm font-medium text-crema">
            Categoría comercial
          </label>
          <select
            id={selectId}
            name="categoria"
            defaultValue=""
            aria-invalid={!!errors.categoria}
            aria-describedby={errors.categoria ? `${selectId}-error` : undefined}
            className={inputClass(!!errors.categoria)}
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {MERCHANT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ErrorText id={`${selectId}-error`} error={errors.categoria} />
        </div>

        <Consent error={errors.consentimiento} idPrefix="comercio" />
        <Submit state={state}>Quiero vincular mi comercio</Submit>
      </form>
    </FormCard>
  )
}

function FormCard({
  id,
  icon,
  title,
  subtitle,
  children,
}: {
  id: string
  icon: ReactNode
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div id={id} className="scroll-mt-24 rounded-3xl border border-border bg-profundo p-6 md:p-9">
      <div className="mb-7 flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-bronce/40 text-champagne">
          {icon}
        </span>
        <div>
          <h3 className="text-xl font-bold text-crema">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

const inputClass = (invalid: boolean) =>
  cn(
    'h-12 w-full rounded-xl border bg-noche/60 px-4 text-base text-crema placeholder:text-crema/40 transition-colors focus:border-champagne focus:outline-none focus-visible:outline-2 focus-visible:outline-champagne md:text-sm',
    invalid ? 'border-destructive' : 'border-input hover:border-bronce/60',
  )

function Field({
  name,
  label,
  error,
  type = 'text',
  ...rest
}: {
  name: string
  label: string
  error?: string
  type?: string
  autoComplete?: string
  placeholder?: string
}) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-crema">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(!!error)}
        {...rest}
      />
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  )
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {error}
    </p>
  )
}

function Consent({ error, idPrefix }: { error?: string; idPrefix: string }) {
  const id = `${idPrefix}-consentimiento`
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          id={id}
          name="consentimiento"
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 size-4 shrink-0 accent-dorado"
        />
        <span>
          Autorizo de manera previa, expresa e informada el tratamiento de mis datos personales para recibir
          información sobre Lole, conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 y la{' '}
          <a href="#politica-privacidad" className="text-champagne underline underline-offset-2 hover:text-crema">
            Política de privacidad
          </a>
          . Puedo conocer, actualizar, rectificar y suprimir mis datos en cualquier momento.
        </span>
      </label>
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  )
}

function Submit({ state, children }: { state: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <button
        type="submit"
        disabled={state === 'sending'}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-dorado px-6 text-sm font-semibold text-noche transition-all hover:-translate-y-0.5 hover:bg-champagne disabled:opacity-60"
      >
        {state === 'sending' && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
      <div aria-live="polite">
        {state === 'demo' && (
          <p className="rounded-xl border border-champagne/30 bg-champagne/[0.06] p-3 text-sm text-crema">
            Datos validados correctamente. <strong className="font-semibold">Modo demostración:</strong> esta
            información no fue almacenada porque aún no hay un servidor conectado.
          </p>
        )}
        {state === 'stored' && (
          <p className="rounded-xl border border-champagne/30 bg-champagne/[0.06] p-3 text-sm text-crema">
            ¡Gracias! Recibimos tu información.
          </p>
        )}
      </div>
    </div>
  )
}
