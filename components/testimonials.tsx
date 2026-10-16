import { testimonials } from "@/lib/site"

export function Testimonials() {
  return (
    <section aria-labelledby="testemunhos-titulo" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <h2 id="testemunhos-titulo" className="max-w-2xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
          Efeitos secundários relatados
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-background p-6">
                <blockquote className="font-serif text-xl leading-snug">
                  <p>{`“${item.quote}”`}</p>
                </blockquote>
                <figcaption className="flex flex-col text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-muted-foreground">{item.context}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
