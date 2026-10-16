import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex size-8 items-center justify-center rounded-full bg-chocolate text-chocolate-foreground",
        className,
      )}
    >
      <span className="absolute h-3.5 w-1 rounded-sm bg-primary-foreground" />
      <span className="absolute h-1 w-3.5 rounded-sm bg-primary-foreground" />
    </span>
  )
}
