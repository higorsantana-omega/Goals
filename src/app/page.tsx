'use client'

import { Button } from "@/components/ui/button"
import { CardContent, CardDate, CardDescription, CardFooter, CardIcon, CardRoot, CardTitle } from "@/components/Card"
import { PlusIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals</h2>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => router.push('/new-goal')}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add goal
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardRoot>
          <CardIcon />
        
          <CardContent>
            <CardTitle>Acme Inc</CardTitle>
            <CardDescription>Acme Inc is a company that specializes in widgets and gadgets.</CardDescription>
            <CardFooter />
            <CardDate />
          </CardContent>
        </CardRoot>
      </div>
    </>
  )
}