import { Goals } from '@/components/Goals'
import { ButtonNewGoal } from '@/components/Redirect/ButtonNewGoal'

export default function PageGoals() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals</h2>
        <div className="flex items-center gap-2">
          <ButtonNewGoal />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Goals />
      </div>
    </>
  )
}
