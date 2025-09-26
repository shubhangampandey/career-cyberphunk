import { NeonButton } from "@/components/neon-button"
import { NeonCard } from "@/components/neon-card"
import Link from "next/link"
import { AssessmentForm } from "@/components/report/assessment-form"

export default async function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-pretty text-4xl md:text-6xl font-semibold tracking-tight headline-wrap">
            {"Guide your career with AI—tailored for India."}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            {"From streams and exams to city choices and salaries—get a personalized, action-ready roadmap."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NeonButton asChild>
              <Link href="/#assessments">Get your free report</Link>
            </NeonButton>
            <NeonButton variant="outline" asChild className="glow-outline">
              <Link href="/#solutions">Explore solutions</Link>
            </NeonButton>
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section id="trusted" className="py-8 md:py-12 border-y border-white/10 bg-black/30 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Trusted by learners and teams</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 opacity-80">
            <img src="/company-a-logo.png" alt="Company A" className="h-7 w-auto" />
            <img src="/company-b-logo.png" alt="Company B" className="h-7 w-auto" />
            <img src="/company-c-logo.png" alt="Company C" className="h-7 w-auto" />
            <img src="/company-d-logo.png" alt="Company D" className="h-7 w-auto" />
            <img src="/company-e-logo.png" alt="Company E" className="h-7 w-auto" />
            <img src="/company-f-logo.png" alt="Company F" className="h-7 w-auto" />
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section id="solutions" className="py-14 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Student Pathways", desc: "Class 10–12 subject combos, boards, and entrance prep" },
              { title: "College & Exams", desc: "Engineering, Medical, UPSC, SSC, Banking, CAT, GATE" },
              { title: "Career Switch", desc: "Tech, Design, Analytics, Product, Finance" },
              { title: "City Insights", desc: "Compare Bengaluru, Hyderabad, Pune, NCR, Mumbai" },
              { title: "Salary Benchmarks", desc: "CTC breakdowns, PF, tax-ready numbers" },
              { title: "Skills & Courses", desc: "Roadmaps with Indian platforms and costs" },
            ].map((c) => (
              <NeonCard key={c.title}>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.desc}</p>
                <div className="mt-4">
                  <Link href="/solutions" className="text-primary hover:neon-text glow-link">
                    Learn more →
                  </Link>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-14 md:py-20 bg-white/[0.03] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty headline-wrap">Platform</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            AI-powered assessment, India-specific datasets, city insights, and exam-roadmaps in one place.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "AI Assessment", d: "Personalized report built from your interests, strengths, and constraints." },
              { t: "India Data Graph", d: "Exams, colleges, cities, salaries and roles curated for India." },
              { t: "Action Plans", d: "Step-by-step tasks, courses, and timelines that fit your path." },
            ].map((c) => (
              <NeonCard key={c.t}>
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-14 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold headline-wrap">Case Studies</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "From 12th to B.Tech CSE",
                d: "Boards → JEE prep → Tier-1 colleges shortlist → Bengaluru internships.",
              },
              { t: "Non-CS to Data", d: "Analyst track with projects, courses (INR budgets), and city move plan." },
              {
                t: "UPSC to Product",
                d: "Leverage prep discipline, switch to PM via certifications and case portfolios.",
              },
            ].map((c) => (
              <NeonCard key={c.t}>
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
                <div className="mt-4">
                  <Link href="/#assessments" className="text-primary glow-link">
                    Get a similar plan →
                  </Link>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-14 md:py-20 bg-white/[0.03] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <NeonCard key={i}>
                <p className="text-pretty">
                  {
                    "“The report mapped exams, colleges, and a Bengaluru move plan. I landed an internship in 3 months.”"
                  }
                </p>
                <div className="mt-4 text-sm text-muted-foreground">Learner #{i}</div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-14 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold headline-wrap">Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { n: "Aarav Sharma", r: "Head of Data", bl: "Ex-FAANG, built India salary graph" },
              { n: "Meera Iyer", r: "Career Strategist", bl: "UPSC mentor turned PM coach" },
              { n: "Kabir Rao", r: "City Insights", bl: "Bengaluru, Hyd, Pune ecosystems" },
            ].map((m) => (
              <NeonCard key={m.n}>
                <div className="flex items-center gap-4">
                  <img src="/placeholder-user.jpg" alt={m.n} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{m.n}</div>
                    <div className="text-sm text-muted-foreground">{m.r}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bl}</p>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-14 md:py-20 bg-white/[0.03] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold headline-wrap">Blog</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "2025 Tech Salaries in India", d: "CTC, in-hand, PF & tax demystified across cities." },
              { t: "Design Career in India", d: "From Figma to UX, roadmap and portfolios that work." },
              { t: "UPSC vs MBA", d: "Trade-offs, timelines, and alternative pathways." },
            ].map((p) => (
              <NeonCard key={p.t}>
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
                <div className="mt-4">
                  <Link href="/#assessments" className="text-primary glow-link">
                    Read insights in your report →
                  </Link>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-14 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold headline-wrap">Careers</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Career Strategist (Remote)", d: "Mentor learners, craft action plans, 3+ yrs experience." },
              { t: "Data Analyst (Bengaluru)", d: "Own salary/city datasets. SQL, Python, viz." },
              { t: "Frontend Engineer", d: "Build neon UI and interactions. React/Next." },
            ].map((r) => (
              <NeonCard key={r.t}>
                <h3 className="text-lg font-semibold">{r.t}</h3>
                <p className="mt-2 text-muted-foreground">{r.d}</p>
                <div className="mt-4">
                  <Link href="/#contact" className="text-primary glow-link">
                    Apply →
                  </Link>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </section>

      <section id="assessments" className="py-14 md:py-20 bg-white/[0.03] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty headline-wrap">Career Assessment</h2>
          <p className="mt-2 text-muted-foreground">
            Answer a few questions to generate a personalized career report for India.
          </p>
          <div className="mt-8">
            <AssessmentForm />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty headline-wrap">Let’s plan your next move</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Talk to us about teams, cohorts, or partnerships. We’ll tailor a plan for your goals.
          </p>
          <div className="mt-6 flex justify-center">
            <NeonButton asChild>
              <Link href="/#assessments">Start assessment</Link>
            </NeonButton>
          </div>
        </div>
      </section>
    </div>
  )
}
