import { site } from "@/lib/site"
import { BrandMark } from "@/components/brand-mark"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2 text-foreground">
          <BrandMark className="size-6" />
          <span className="font-serif text-lg font-semibold">{site.brand}</span>
        </div>
        <p>
          {"© "}
          {new Date().getFullYear()} {site.brand} · Pastelaria artesanal por encomenda · {site.region}
        </p>
        <a href="#inicio" className="underline underline-offset-4 hover:text-foreground">
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}
