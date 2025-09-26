"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NeonButton({ className, ...props }: ButtonProps) {
  return <Button {...props} className={cn("neon-button", className)} />
}
