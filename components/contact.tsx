import { Instagram, Mail, MessageCircle, Phone } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink("Olá! Gostava de fazer uma encomenda."),
    external: true,
  },
  { icon: Phone, label: "Telemóvel", value: site.phoneDisplay, href: `tel:+${site.whatsappNumber}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: Instagram,
    label: "Instagram",
    value: `@${site.instagram}`,
    href: `https://instagram.com/${site.instagram}`,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contactos" className="bg-chocolate py-20 text-chocolate-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Contactos</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              {"Em Espinho, à beira-mar e à distância de uma mensagem"}
            </h2>
            <p className="text-pretty leading-relaxed opacity-80">
              Levantamentos em {site.city}. Entregas em Espinho, Silvalde, Paramos, Anta, Esmoriz e arredores.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 rounded-2xl border border-chocolate-foreground/15 p-4 transition-colors hover:bg-chocolate-foreground/10"
                >
                  <channel.icon className="size-5 shrink-0 text-secondary" aria-hidden="true" />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs uppercase tracking-[0.18em] opacity-70">{channel.label}</span>
                    <span className="truncate font-medium">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <dl className="flex flex-col divide-y divide-chocolate-foreground/15 border-y border-chocolate-foreground/15">
            {site.hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="opacity-75">{row.days}</dt>
                <dd className="font-medium">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-h-80 overflow-hidden rounded-[2rem] bg-chocolate-foreground/10">
          <iframe
            title="Mapa de Espinho, Portugal"
            src="https://www.google.com/maps?q=Espinho,Portugal&z=14&output=embed"
            className="h-full min-h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
