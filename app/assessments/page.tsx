import { AssessmentForm } from "@/components/report/assessment-form"

export default function AssessmentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Career Assessment</h1>
      <p className="mt-2 text-muted-foreground">
        Answer a few questions to generate a personalized career report for India with exams, skills, cities, and salary
        paths.
      </p>
      <div className="mt-8">
        <AssessmentForm />
      </div>
    </div>
  )
}
