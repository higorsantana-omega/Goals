import { getGoals } from "@/app/actions"
import { CardContent, CardDate, CardDescription, CardFooter, CardIcon, CardRoot, CardTitle } from "../Card"

export async function Goals () {
  const goalsData = await getGoals()
  console.log(goalsData)
  
  return (
    <>
      {goalsData.map(goal => (
        <CardRoot key={goal.id}>
          <CardIcon />
      
          <CardContent>
            <CardTitle>{goal.title}</CardTitle>
            <CardDescription>{goal.description}</CardDescription>
            <CardFooter
              currentProgress={goal.currentProgress}
              goal={goal.goal}
            />
            <CardDate
              startDate={goal.startDate}
              endDate={goal.expectedCompletionDate}
            />
          </CardContent>
        </CardRoot>
      ))}
    </>
  )
}