export const SERVICE_OPTIONS = [
  { value: 'busqueda', label: 'Buscar comercios y productos' },
  { value: 'personal-shopper', label: 'Personal Shopper' },
  { value: 'ambos', label: 'Ambos' },
] as const

export const MERCHANT_CATEGORIES = [
  'Electrodomésticos',
  'Moda y calzado',
  'Tecnología y celulares',
  'Hogar y decoración',
  'Accesorios y joyería',
  'Papelería y oficina',
  'Ferretería',
  'Salud y belleza',
  'Otra',
] as const

export type PersonLead = {
  type: 'persona'
  nombre: string
  email: string
  whatsapp: string
  servicio: string
  consentimiento: boolean
}

export type MerchantLead = {
  type: 'comercio'
  establecimiento: string
  contacto: string
  email: string
  whatsapp: string
  categoria: string
  consentimiento: boolean
}

export type Lead = PersonLead | MerchantLead
export type FieldErrors = Partial<Record<string, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const WHATSAPP_RE = /^(\+?57)?\s?3\d{2}\s?\d{3}\s?\d{4}$/

const required = (v: string, label: string, min = 2) =>
  v.trim().length < min ? `Ingresa ${label}.` : undefined

function validateShared(lead: Lead, errors: FieldErrors) {
  if (!EMAIL_RE.test(lead.email.trim())) errors.email = 'Ingresa un correo electrónico válido.'
  if (!WHATSAPP_RE.test(lead.whatsapp.replace(/[-()]/g, '').trim()))
    errors.whatsapp = 'Ingresa un número celular colombiano válido (ej. 300 123 4567).'
  if (!lead.consentimiento) errors.consentimiento = 'Debes autorizar el tratamiento de tus datos personales.'
}

export function validateLead(lead: Lead): FieldErrors {
  const errors: FieldErrors = {}
  if (lead.type === 'persona') {
    errors.nombre = required(lead.nombre, 'tu nombre')
    if (!SERVICE_OPTIONS.some((o) => o.value === lead.servicio)) errors.servicio = 'Selecciona un servicio.'
  } else {
    errors.establecimiento = required(lead.establecimiento, 'el nombre del establecimiento')
    errors.contacto = required(lead.contacto, 'el nombre de contacto')
    if (!MERCHANT_CATEGORIES.includes(lead.categoria as (typeof MERCHANT_CATEGORIES)[number]))
      errors.categoria = 'Selecciona una categoría.'
  }
  validateShared(lead, errors)
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => v)) as FieldErrors
}

export type SubmitResult = { status: 'stored' } | { status: 'demo' }

/**
 * Single integration point for a future backend (database, CRM or email list).
 * Until one is connected, nothing is persisted and the UI must say so.
 */
export async function submitLead(_lead: Lead): Promise<SubmitResult> {
  return { status: 'demo' }
}
