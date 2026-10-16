"use client"

import { useMemo, useState } from "react"
import { Minus, Plus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldDescription } from "@/components/ui/field"
import { brigadeiros, formatPrice, orderableItems, site, steps, whatsappLink } from "@/lib/site"

const minQuantity: Record<string, number> = { "event-50": 50, cupcakes: 6 }

export function OrderBuilder() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [delivery, setDelivery] = useState("levantamento")
  const [notes, setNotes] = useState("")

  const selected = orderableItems.filter((item) => (quantities[item.id] ?? 0) > 0)
  const total = selected.reduce((sum, item) => sum + item.price * quantities[item.id], 0)
  const hasFromPrice = selected.some((item) => item.from)

  const changeQuantity = (id: string, delta: number) =>
    setQuantities((current) => {
      const min = minQuantity[id] ?? 1
      const value = current[id] ?? 0
      let next = value + delta
      if (delta > 0 && value === 0) next = min
      if (delta < 0 && next < min) next = 0
      return { ...current, [id]: next }
    })

  const message = useMemo(() => {
    const lines = [
      `Olá ${site.owner}! Gostava de fazer uma encomenda:`,
      "",
      ...selected.map((item) => `• ${quantities[item.id]} × ${item.name} (${item.detail})`),
      "",
      `Total estimado: ${hasFromPrice ? "desde " : ""}${formatPrice(total)}`,
      date ? `Data pretendida: ${date.split("-").reverse().join("/")}` : "",
      `Entrega: ${delivery === "entrega" ? "entrega ao domicílio" : `levantamento em ${site.city}`}`,
      notes ? `Notas: ${notes}` : "",
      name ? `\nNome: ${name}` : "",
    ]
    return lines.filter((line, i, arr) => line !== "" || arr[i - 1] !== "").join("\n")
  }, [selected, quantities, total, hasFromPrice, date, delivery, notes, name])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selected.length === 0) return
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="encomendar" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Encomendar</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Monte o seu pedido em dois minutos
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Escolha o que quer, indique a data e o pedido segue já formatado para o meu WhatsApp. Respondo no próprio
              dia.
            </p>
          </div>
          <ol className="flex flex-col gap-5">
            {steps.map((stepItem, index) => (
              <li key={stepItem.title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-chocolate font-serif text-chocolate-foreground">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">{stepItem.title}</span>
                  <span className="leading-relaxed text-muted-foreground">{stepItem.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 rounded-[2rem] border border-border bg-card p-5 md:p-8">
          <FieldSet>
            <FieldLegend className="font-serif data-[variant=legend]:text-xl">O que vai levar?</FieldLegend>
            <FieldDescription>Sabores de brigadeiro: {brigadeiros.map((b) => b.name).join(", ")}.</FieldDescription>
            <ul className="divide-y divide-border">
              {orderableItems.map((item) => {
                const qty = quantities[item.id] ?? 0
                return (
                  <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="flex min-w-0 flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.from ? "desde " : ""}
                        {formatPrice(item.price)} / {item.unit}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-2" role="group" aria-label={`Quantidade de ${item.name}`}>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-full bg-transparent"
                        onClick={() => changeQuantity(item.id, item.id === "event-50" ? -10 : -1)}
                        disabled={qty === 0}
                        aria-label={`Menos ${item.name}`}
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="w-8 text-center tabular-nums" aria-live="polite">
                        {qty}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-full bg-transparent"
                        onClick={() => changeQuantity(item.id, item.id === "event-50" ? 10 : 1)}
                        aria-label={`Mais ${item.name}`}
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </FieldSet>

          <FieldGroup className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="order-name">O seu nome</FieldLabel>
              <Input id="order-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="order-date">Para que dia?</FieldLabel>
              <Input id="order-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Field>
          </FieldGroup>

          <FieldSet>
            <FieldLegend variant="label">Como prefere receber?</FieldLegend>
            <RadioGroup value={delivery} onValueChange={setDelivery} className="grid gap-3 sm:grid-cols-2">
              <Field orientation="horizontal">
                <RadioGroupItem value="levantamento" id="delivery-pickup" />
                <FieldLabel htmlFor="delivery-pickup" className="font-normal">
                  Levantar em {site.city}
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="entrega" id="delivery-home" />
                <FieldLabel htmlFor="delivery-home" className="font-normal">
                  Entrega ao domicílio
                </FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>

          <Field>
            <FieldLabel htmlFor="order-notes">Sabores, tema ou alergias</FieldLabel>
            <Textarea
              id="order-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: 12 brigadeiros, metade pistácio e metade tradicional. Sem frutos secos para uma criança."
              rows={3}
            />
          </Field>

          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total estimado</p>
              <p className="font-serif text-3xl font-semibold tabular-nums" aria-live="polite">
                {hasFromPrice && <span className="mr-1 text-base font-normal text-muted-foreground">desde</span>}
                {formatPrice(total)}
              </p>
            </div>
            <Button type="submit" size="lg" className="rounded-full px-6" disabled={selected.length === 0}>
              <Send className="size-4" aria-hidden="true" />
              Enviar pelo WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
