"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { galleryImages, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex === null ? null : galleryImages[activeIndex]

  const step = (delta: number) =>
    setActiveIndex((index) =>
      index === null ? index : (index + delta + galleryImages.length) % galleryImages.length,
    )

  return (
    <section id="galeria" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Galeria</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">Saído do forno</h2>
          </div>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            Mais no Instagram @{site.instagram}
          </a>
        </div>

        <ul className="columns-2 gap-4 md:columns-3 [&>li]:mb-4">
          {galleryImages.map((image, index) => (
            <li key={image.src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={`Ampliar: ${image.alt}`}
              >
                <div className={cn("relative w-full", image.tall ? "aspect-[3/4]" : "aspect-square")}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden border-none bg-chocolate p-0 text-chocolate-foreground sm:max-w-3xl">
          {active && (
            <>
              <div className="relative aspect-[4/3] w-full">
                <Image src={active.src || "/placeholder.svg"} alt={active.alt} fill sizes="768px" className="object-contain" />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <div>
                  <DialogTitle className="font-sans text-base font-medium">{active.alt}</DialogTitle>
                  <DialogDescription className="text-chocolate-foreground/70">
                    {(activeIndex ?? 0) + 1} de {galleryImages.length}
                  </DialogDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="icon" onClick={() => step(-1)} aria-label="Foto anterior">
                    <ChevronLeft className="size-5" />
                  </Button>
                  <Button variant="secondary" size="icon" onClick={() => step(1)} aria-label="Foto seguinte">
                    <ChevronRight className="size-5" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
