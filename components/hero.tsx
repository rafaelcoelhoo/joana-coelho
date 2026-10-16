import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, whatsappLink } from "@/lib/site"
import { PrescriptionLabel } from "@/components/prescription-label"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Feito à mão em {site.city}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Receitas de farmacêutica.{" "}
            <span className="italic text-primary">Doçura sem contraindicações.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Bolos de todo o tipo e brigadeiros gourmet, pesados ao grama e feitos com o rigor de quem passa os dias
            atrás de um balcão de farmácia. Para aniversários, batizados, eventos ou só porque sim.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#encomendar">Montar a minha encomenda</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary bg-transparent px-6 text-primary hover:bg-primary/5">
              <a href="#menu">Ver menu e preços</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Prefere falar diretamente?{" "}
            <a
              href={whatsappLink("Olá! Gostava de saber mais sobre os vossos doces.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Mande mensagem no WhatsApp
            </a>
          </p>
        </div>

        <div className="reveal relative [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <Image
              src={site.heroImage || "/placeholder.svg"}
              alt="Bolo de chocolate artesanal coberto de brigadeiro"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 w-64 rotate-[-3deg] md:-left-10 md:w-72">
            <PrescriptionLabel
              code="BRG-TR"
              title="Brigadeiro tradicional"
              lines={[
                ["Composição", "Chocolate 54%, leite condensado, granulado belga"],
                ["Posologia", "1 a cada sorriso. Não exceder… ou sim."],
              ]}
            />
          </div>
          <div className="absolute -right-2 -top-4 hidden size-28 overflow-hidden rounded-full border-4 border-background shadow-lg sm:block md:size-32">
            <Image
              src={site.heroDetailImage || "/placeholder.svg"}
              alt="Taça com brigadeiros de chocolate"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
