'use client'

import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ButtonNewGoal () {
  const router = useRouter()

  return (
    <Button size="sm" variant="outline" onClick={() => router.push('/new-goal')}>
      <PlusIcon className="mr-2 h-4 w-4" />
      Add goal
    </Button>
  )
}