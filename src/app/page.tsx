/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D5VQwkeGYFk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { CardContent, CardDate, CardDescription, CardFooter, CardIcon, CardRoot, CardTitle } from "@/components/Card"
import { Header } from "@/components/Header"
import { PlusIcon } from "@radix-ui/react-icons"

export default function Component() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals</h2>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
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