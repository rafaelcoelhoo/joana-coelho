import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { brigadeiroBoxes, brigadeiros, cakes, formatPrice, type PriceItem } from "@/lib/site"
import { PrescriptionLabel } from "@/components/prescription-label"

function PriceList({ items }: { items: PriceItem[] }) {
  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item) => (
        <li key={item.id} className="flex items-baseline justify-between gap-4 px-5 py-4">
          <div className="flex flex-col">
            <span className="font-medium">{item.name}</span>
            <span className="text-sm text-muted-foreground">{item.detail}</span>
          </div>
          <span className="shrink-0 text-right">
            {item.from && <span className="mr-1 text-sm text-muted-foreground">desde</span>}
            <span className="font-serif text-xl font-semibold tabular-nums">{formatPrice(item.price)}</span>
            <span className="text-sm text-muted-foreground"> / {item.unit}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Menu e preços</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
            O formulário dos doces
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada sabor tem a sua fórmula. Os preços são indicativos. Para bolos personalizados e eventos, peça
            orçamento.
          </p>
        </div>

        <Tabs defaultValue="brigadeiros" className="gap-8">
          <TabsList className="h-auto w-fit rounded-full p-1">
            <TabsTrigger value="brigadeiros" className="rounded-full px-5 py-2">
              Brigadeiros
            </TabsTrigger>
            <TabsTrigger value="bolos" className="rounded-full px-5 py-2">
              Bolos e cupcakes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="brigadeiros" className="flex flex-col gap-10">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {brigadeiros.map((item) => (
                <li key={item.code}>
                  <PrescriptionLabel
                    code={item.code}
                    title={item.name}
                    lines={[["Composição", item.composition]]}
                    className="h-full shadow-none transition-transform hover:-translate-y-1"
                    footer={
                      item.note ? (
                        <span className="w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                          {item.note}
                        </span>
                      ) : null
                    }
                  />
                </li>
              ))}
            </ul>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Caixas e quantidades</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Brigadeiros de 20 g, em forminhas de papel e caixa de oferta. Perfeitos para levar à farmácia, ao
                  escritório ou a casa de alguém especial.
                </p>
              </div>
              <PriceList items={brigadeiroBoxes} />
            </div>
          </TabsContent>

          <TabsContent value="bolos" className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Bolos de todo o tipo</h3>
              <p className="leading-relaxed text-muted-foreground">
                Do bolo de cenoura para o lanche ao bolo de dois andares para o batizado. Os bolos personalizados
                são desenhados consigo: tema, cores, sabores e número de pessoas.
              </p>
            </div>
            <PriceList items={cakes} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
