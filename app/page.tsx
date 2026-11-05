import { SiteHeader } from '@/components/lole/site-header'
import { Hero } from '@/components/lole/hero'
import { Services } from '@/components/lole/services'
import { MapSection } from '@/components/lole/map-section'
import { ShopperSteps } from '@/components/lole/shopper-steps'
import { Merchants } from '@/components/lole/merchants'
import { WhyLole } from '@/components/lole/why-lole'
import { FinalCta } from '@/components/lole/final-cta'
import { InterestForms } from '@/components/lole/interest-forms'
import { SiteFooter } from '@/components/lole/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-dorado focus:px-4 focus:py-2 focus:text-noche"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <MapSection />
        <ShopperSteps />
        <Merchants />
        <WhyLole />
        <FinalCta />
        <InterestForms />
      </main>
      <SiteFooter />
    </>
  )
}
