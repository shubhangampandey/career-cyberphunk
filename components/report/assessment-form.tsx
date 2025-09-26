"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { NeonButton } from "@/components/neon-button"
import { NeonCard } from "@/components/neon-card"

type Report = { text: string }

export function AssessmentForm() {
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState<Report | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    setReport(null)
    try {
      const res = await fetch("/api/generate-report", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Failed to generate report")
      const data = (await res.json()) as Report
      setReport(data)
    } catch (e: any) {
      setError(e.message ?? "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <NeonCard className="bg-white/7.5">
      <form action={onSubmit} className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="education">Education / Year</Label>
          <Input id="education" name="education" placeholder="e.g., B.Tech 2nd year / Class 12" required />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="interests">Interests</Label>
          <Input id="interests" name="interests" placeholder="e.g., programming, design, finance" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="strengths">Strengths</Label>
          <Input id="strengths" name="strengths" placeholder="e.g., math, writing, problem-solving" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="preferredCities">Preferred Cities</Label>
          <Input id="preferredCities" name="preferredCities" placeholder="e.g., Bengaluru, Hyderabad" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="constraints">Constraints</Label>
          <Input id="constraints" name="constraints" placeholder="e.g., budget, remote only, visa" />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" name="notes" placeholder="Anything else we should know?" />
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <NeonButton type="submit" disabled={loading}>
            {loading ? "Generating…" : "Generate Report"}
          </NeonButton>
          <span className="text-xs text-muted-foreground">AI-powered. Takes ~10–20s.</span>
        </div>
      </form>

      {error && <p className="mt-6 text-destructive">{error}</p>}

      {report?.text && (
        <div className="mt-8 rounded-lg border border-white/10 bg-black/40 p-4 md:p-6 max-h-[60vh] overflow-auto">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">{report.text}</pre>
        </div>
      )}
    </NeonCard>
  )
}
