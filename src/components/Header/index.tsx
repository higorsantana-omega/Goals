import Link from 'next/link'

import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { getProfileName } from '@/lib/utils'

import { Logo } from '../Logo'

export async function Header() {
  const session = await auth()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 md:px-6">
      <div className="flex items-center gap-6">
        <Link className="flex items-center justify-center" href="/">
          <Logo className="size-6" />
          <span className="sr-only">Goals</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-medium underline-offset-4 hover:underline" href="/">
            Goals
          </Link>
          <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#">
            About
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="outline">
              {getProfileName(session?.user?.name || 'Unknown')}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <form
                action={async () => {
                  'use server'
                  await signOut()
                }}
              >
                <button type='submit'>Logout</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
