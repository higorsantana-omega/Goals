'use client'

import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export function ButtonNewGoal () {
  const router = useRouter()

  return (
    <Button size="sm" variant="outline" onClick={() => router.push('/new-goal')}>
      <PlusIcon className="mr-2 size-4" />
      Add goal
    </Button>
  )
}