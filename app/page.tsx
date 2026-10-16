import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { OrderBuilder } from "@/components/order-builder"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <OrderBuilder />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
