import { cn } from "@/lib/utils"

type PrescriptionLabelProps = {
  code: string
  title: string
  lines: [string, string][]
  footer?: React.ReactNode
  className?: string
}

export function PrescriptionLabel({ code, title, lines, footer, className }: PrescriptionLabelProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl", className)}>
      <div className="flex items-center justify-between bg-primary px-4 py-2 text-primary-foreground">
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">Doce Fórmula</span>
        <span className="text-xs font-medium tabular-nums tracking-wider">{code}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="font-serif text-xl font-semibold leading-tight">{title}</p>
        <dl className="flex flex-col gap-2 text-sm">
          {lines.map(([term, value]) => (
            <div key={term} className="flex flex-col">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{term}</dt>
              <dd className="leading-snug">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto">{footer}</div>
      </div>
      <div className="label-perforation h-3 bg-muted" aria-hidden="true" />
    </div>
  )
}
