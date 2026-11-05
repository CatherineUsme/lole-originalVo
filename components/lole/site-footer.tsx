import { Mail, MessageCircle } from 'lucide-react'
import { navLinks } from '@/lib/nav'
import { Logo } from './primitives'

/** Set real URLs/handles here once the official channels exist. Empty values render as "próximamente". */
const contact = { email: '', whatsapp: '' }
const socials = [
  { label: 'Instagram', short: 'IG', href: '' },
  { label: 'Facebook', short: 'FB', href: '' },
  { label: 'LinkedIn', short: 'IN', href: '' },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="text-4xl" />
          <p className="mt-3 font-display text-lg text-crema">El centro, más cerca de ti.</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Comercios del Centro de Medellín y Personal Shoppers, en una sola plataforma.
          </p>
        </div>

        <FooterCol title="Navegación">
          {navLinks.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Servicios">
          <FooterLink href="#encuentra">Encuentra y compara</FooterLink>
          <FooterLink href="#personal-shopper">Personal Shopper</FooterLink>
          <FooterLink href="#comerciantes">Para comerciantes</FooterLink>
          <FooterLink href="#unete">Únete a Lole</FooterLink>
        </FooterCol>

        <FooterCol title="Contacto">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4 text-champagne" aria-hidden="true" />
            {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : 'Correo: próximamente'}
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="size-4 text-champagne" aria-hidden="true" />
            {contact.whatsapp ? contact.whatsapp : 'WhatsApp: próximamente'}
          </li>
          <li className="flex gap-2 pt-2">
            {socials.map(({ label, short, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-crema hover:border-champagne"
                >
                  {short}
                </a>
              ) : (
                <span
                  key={label}
                  title={`${label}: próximamente`}
                  className="flex size-10 items-center justify-center rounded-full border border-dashed border-border text-xs font-semibold text-crema/50"
                >
                  <span aria-hidden="true">{short}</span>
                  <span className="sr-only">{label}: próximamente</span>
                </span>
              ),
            )}
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} lole. Todos los derechos reservados.</p>
          <ul className="flex gap-6">
            <li>
              <a id="politica-privacidad" href="#politica-privacidad" className="hover:text-crema">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#terminos" id="terminos" className="hover:text-crema">
                Términos y condiciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-muted-foreground transition-colors hover:text-crema">
        {children}
      </a>
    </li>
  )
}
