import { TargetIcon } from "@radix-ui/react-icons"

import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Progress } from "../ui/progress"

export function CardIcon () {
  return (
    <div className="flex size-10 p-2 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
      <TargetIcon className="size-5 text-gray-500 dark:text-gray-400" />
    </div>
  )
}

export function CardContent ({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  )
}

export function CardHeader ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      {children}
    </div>
  )
}

export function CardTitle ({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold">{children}</h3>
  )
}

export function CardBadge ({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="px-2 py-1 rounded-md text-xs font-medium" variant="outline">
      {children}
    </Badge>
  )
}

export function CardDescription ({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
  )
}

interface CardFooterProps {
  currentProgress?: number | null
  goal: number
}

export function CardFooter ({ currentProgress, goal }: CardFooterProps) {
  const diffInPercentage = ((currentProgress ?? 0) / goal) * 100

  return (
    <div className="mt-2 flex items-center justify-between gap-4">
      <Progress value={diffInPercentage} />
      <div className="flex gap-1">
        <Button size="sm" variant="outline">
          {diffInPercentage.toFixed(2)}%
        </Button>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </div>
    </div>
  )
}

interface CardDateProps {
  startDate: string
  endDate: string
}

export function CardDate ({ startDate, endDate}: CardDateProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      <span>Start Date: {startDate}</span>
      <span>End Date: {endDate}</span>
    </div>
  )
} 

export function CardRoot ({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 max-w-[500px]">
      <div className="flex items-start gap-4">
        {children}
      </div>
    </div>
  )
}