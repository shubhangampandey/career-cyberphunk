import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function NeonCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_0_var(--color-primary)/40]",
        "hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  )
}
