import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/lib/site"

export function Faq() {
  return (
    <section id="perguntas" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Perguntas frequentes</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">Leia o folheto informativo</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Antes de encomendar, aqui estão as dúvidas que mais me chegam.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
