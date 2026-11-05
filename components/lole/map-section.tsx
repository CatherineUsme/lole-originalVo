import { Laptop, Navigation, Shirt, Sofa, Star, Tv, Gem } from 'lucide-react'
import { IllustrativeBadge, SectionHeading } from './primitives'

const filters = [
  { icon: Tv, label: 'Electrodomésticos', color: '#EFAD4D', active: true },
  { icon: Shirt, label: 'Moda', color: '#E5BF85' },
  { icon: Laptop, label: 'Tecnología', color: '#F4F1EA' },
  { icon: Sofa, label: 'Hogar', color: '#C79E75' },
  { icon: Gem, label: 'Accesorios', color: '#E5BF85' },
]

const pins = [
  { x: 18, y: 30, color: '#E5BF85' },
  { x: 32, y: 62, color: '#F4F1EA' },
  { x: 47, y: 24, color: '#C79E75' },
  { x: 58, y: 70, color: '#E5BF85' },
  { x: 74, y: 40, color: '#EFAD4D', selected: true },
  { x: 84, y: 76, color: '#F4F1EA' },
  { x: 26, y: 82, color: '#C79E75' },
  { x: 64, y: 16, color: '#EFAD4D' },
]

export function MapSection() {
  return (
    <section aria-labelledby="mapa-title" className="relative border-y border-border bg-profundo/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            id="mapa-title"
            eyebrow="Mapa comercial"
            title="El Centro de Medellín, al alcance de un mapa."
            description="Ya no necesitas conocer el centro para saber dónde comprar. Lole te ayuda a descubrir los comercios, ubicarlos y encontrar la mejor alternativa."
          />
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Filtros por categoría (ilustrativos)">
            {filters.map(({ icon: Icon, label, color, active }) => (
              <li
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm ${
                  active ? 'border-champagne/60 bg-champagne/10 text-crema' : 'border-border text-crema/75'
                }`}
              >
                <span className="size-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-noche"
            role="img"
            aria-label="Mapa ilustrativo de la zona comercial del centro con pines por categoría y una ruta hacia un comercio seleccionado"
          >
            <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
              <rect width="100" height="75" fill="#06162F" />
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 12 + 4} y1="0" x2={i * 12 - 2} y2="75" stroke="#0C2448" strokeWidth="2.2" />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 11 + 5} x2="100" y2={i * 11 + 8} stroke="#0C2448" strokeWidth="2.2" />
              ))}
              <path d="M0 52 C 25 46, 45 60, 100 40" stroke="#C79E75" strokeOpacity="0.35" strokeWidth="3" fill="none" />
              <rect x="40" y="38" width="10" height="8" rx="1" fill="#0C2448" stroke="#C79E75" strokeOpacity="0.4" strokeWidth="0.3" />
              <path
                d="M26 61 L 40 52 L 55 47 L 66 38 L 74 30"
                stroke="#E5BF85"
                strokeWidth="0.8"
                strokeDasharray="2 1.6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {pins.map((p, i) => (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                aria-hidden="true"
              >
                {p.selected && (
                  <span className="absolute left-1/2 top-full size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dorado/50 animate-pin-pulse" />
                )}
                <svg width={p.selected ? 30 : 20} height={p.selected ? 38 : 26} viewBox="0 0 20 26" className="relative drop-shadow-lg">
                  <path d="M10 0C4.5 0 0 4.4 0 9.8 0 17 10 26 10 26s10-9 10-16.2C20 4.4 15.5 0 10 0z" fill={p.color} />
                  <circle cx="10" cy="9.8" r="3.6" fill="#06162F" />
                </svg>
              </span>
            ))}

            <span className="absolute left-[26%] top-[81%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-crema px-2 py-1 text-[10px] font-semibold text-noche" aria-hidden="true">
              <Navigation className="size-3" />
              Tú
            </span>

            <div className="absolute right-3 top-3 hidden w-56 rounded-2xl border border-border bg-profundo/95 p-4 shadow-2xl backdrop-blur sm:block md:right-5 md:top-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-champagne">Seleccionado</p>
              <p className="mt-1.5 font-display text-base font-bold text-crema">Comercio de ejemplo</p>
              <p className="text-xs text-muted-foreground">Electrodomésticos</p>
              <div className="mt-3 flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-3.5 ${i < 4 ? 'fill-dorado text-dorado' : 'text-bronce'}`} />
                ))}
                <span className="ml-1 text-xs text-crema">4,6</span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
                <span className="text-muted-foreground">Ruta a pie</span>
                <span className="font-semibold text-crema">6 min</span>
              </div>
            </div>

            <IllustrativeBadge className="absolute bottom-3 right-3" />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            Mapa ilustrativo. Las ubicaciones mostradas no corresponden a establecimientos reales.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
