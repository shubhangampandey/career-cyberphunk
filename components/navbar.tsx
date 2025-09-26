"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const links = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#platform", label: "Platform" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#team", label: "Team" },
  { href: "/#blog", label: "Blog" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
  { href: "/#assessments", label: "Assessments" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/50 bg-background/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-cyberpunk.jpg"
            alt="CyberPath logo"
            width={28}
            height={28}
            className="drop-shadow-[0_0_12px_var(--color-primary)]"
            priority
          />
          <span className="sr-only">CyberPath</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn("relative text-sm text-muted-foreground hover:text-primary transition-colors")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="neon-button">
            <Link href="/#assessments">Get Report</Link>
          </Button>
          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="i-lucide-menu h-5 w-5 block" />
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-white/10 px-4 pb-4"
        >
          <ul className="grid py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  )
}
