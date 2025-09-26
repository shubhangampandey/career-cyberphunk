import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const name = String(form.get("name") || "")
  const education = String(form.get("education") || "")
  const interests = String(form.get("interests") || "")
  const strengths = String(form.get("strengths") || "")
  const preferredCities = String(form.get("preferredCities") || "")
  const constraints = String(form.get("constraints") || "")
  const notes = String(form.get("notes") || "")

  const { text } = await generateText({
    // Next.js uses the AI Gateway; no extra setup required
    model: "openai/gpt-5-mini",
    prompt: `
You are a seasoned Indian career counselor. Create a detailed, actionable career plan for the following candidate:

Name: ${name}
Education: ${education}
Interests: ${interests}
Strengths: ${strengths}
Preferred Cities: ${preferredCities}
Constraints: ${constraints}
Notes: ${notes}

Output a structured report with sections:
1) Summary (2-3 sentences)
2) Recommended Career Tracks (3-5 options) – why fit, skills needed
3) Step-by-step 90-day learning plan – Indian platforms (NPTEL, SWAYAM, Coursera, Udemy India), free vs paid, hours/week
4) Exams & Certifications – India-specific (e.g., GATE, CAT, UPSC optional if relevant), private certs (AWS, Google), prep tips
5) Colleges & Programs (if applicable) – tiered list in target cities with fees, entrance exams, cutoffs (approximate)
6) City Insights – cost of living and role density for ${preferredCities || "major Indian tech hubs"}
7) Projects & Portfolio – 3 project ideas with outcomes and evaluation rubric
8) Internships & Job Search – timelines, portals (Naukri, LinkedIn, Internshala), resume/LinkedIn checklist
9) Salary Benchmarks – fresher, 2–3 years, and 5 years; include CTC vs in-hand, typical deductions
10) Risks & Alternatives – what to avoid, backup routes
11) Weekly schedule template – 6 days/week with study, practice, projects, and rest

Keep language concise, use bullet points, and include links only when essential.
    `.trim(),
  })

  return NextResponse.json({ text })
}
