import Image from "next/image"
import { Camera, FlaskConical, HeartHandshake, ShieldCheck } from "lucide-react"
import { site, withBasePath } from "@/lib/site"

const values = [
  {
    icon: FlaskConical,
    title: "Rigor de laboratório",
    text: "Receitas testadas e pesadas ao grama. O brigadeiro de hoje sabe igual ao da semana passada.",
  },
  {
    icon: ShieldCheck,
    title: "Alergénios levados a sério",
    text: "Cada encomenda leva a lista de ingredientes. Pergunte por opções sem lactose ou sem glúten.",
  },
  {
    icon: HeartHandshake,
    title: "Feito por encomenda",
    text: "Nada fica na montra. Tudo é preparado para o seu dia, com ingredientes frescos.",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-chocolate py-20 text-chocolate-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <figure className="flex flex-col gap-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-chocolate-foreground/10">
            {site.ownerPhoto ? (
              <Image
                src={withBasePath(site.ownerPhoto) || "/placeholder.svg"}
                alt={`${site.owner}, farmacêutica e criadora da ${site.brand}`}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-chocolate-foreground/30 p-8 text-center">
                <Camera className="size-10 opacity-70" aria-hidden="true" />
                <p className="font-serif text-2xl">A foto da {site.owner} vai aqui</p>
                <p className="max-w-xs text-sm leading-relaxed opacity-70">
                  Sugestão: na cozinha, de avental sobre a bata, com um tabuleiro de brigadeiros na mão.
                </p>
              </div>
            )}
          </div>
          <figcaption className="text-sm opacity-70">
            {site.owner} · {site.role}
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Quem está por trás</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
              De dia na farmácia, à noite entre tachos e forminhas.
            </h2>
            <div className="flex flex-col gap-4 text-pretty text-lg leading-relaxed opacity-85">
              <p>
                Olá, sou a {site.owner}. Sou farmacêutica em {site.city} e há anos que os bolos são a minha forma de
                cuidar das pessoas fora do balcão. Começou com brigadeiros levados para os colegas e, de pedido em
                pedido, tornou-se a {site.brand}.
              </p>
              <p>
                Trago da profissão aquilo que faz a diferença na pastelaria: precisão nas medidas, higiene
                irrepreensível e muita atenção a quem tem alergias. O resto é paixão e muito chocolate.
              </p>
            </div>
          </div>

          <ul className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="flex flex-col gap-2">
                <value.icon className="size-6 text-secondary" aria-hidden="true" />
                <h3 className="font-sans text-base font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
