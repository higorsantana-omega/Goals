import { getGoals } from '@/app/actions'

import {
  CardBadge,
  CardContent,
  CardDate,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardRoot,
  CardTitle
} from '../Card'

export async function Goals() {
  const goalsData = await getGoals()

  return (
    <>
      {goalsData.map((goal) => (
        <CardRoot key={goal.id}>
          <CardIcon />

          <CardContent>
            <CardHeader>
              <CardTitle>{goal.title}</CardTitle>
              <div className="flex gap-1">
                <CardBadge>{goal.category}</CardBadge>
                <CardBadge>{goal.priority}</CardBadge>
              </div>
            </CardHeader>
            <CardDescription>{goal.description?.length ? goal.description : 'None description'}</CardDescription>
            <CardFooter currentProgress={goal.currentProgress} goal={goal.goal} />
            <CardDate startDate={goal.startDate} endDate={goal.expectedCompletionDate} />
          </CardContent>
        </CardRoot>
      ))}
    </>
  )
}
