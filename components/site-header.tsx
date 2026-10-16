"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { site } from "@/lib/site"
import { BrandMark } from "@/components/brand-mark"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#menu", label: "Menu e preços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#encomendar", label: "Encomendar" },
  { href: "#perguntas", label: "Perguntas" },
  { href: "#contactos", label: "Contactos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2" aria-label={`${site.brand}, ir para o início`}>
          <BrandMark />
          <span className="font-serif text-xl font-semibold tracking-tight">{site.brand}</span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href="#encomendar">Fazer encomenda</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">{site.brand}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Móvel" className="px-4">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-3 text-lg hover:bg-muted"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
