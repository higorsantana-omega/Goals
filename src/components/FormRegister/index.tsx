'use client'

import { useEffect } from 'react'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { useFormState } from 'react-dom'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useToast } from '../ui/use-toast'

const registerInitialState = {
  message: '',
  errors: {
    name: '',
    email: '',
    password: '',
    description: null
  }
}

export function FormRegister({ action, children }: { action: any; children: React.ReactNode }) {
  const { toast } = useToast()
  const [formState, formAction] = useFormState(action, registerInitialState)

  const errorInName = formState.errors.name
  const errorInEmail = formState.errors.email
  const errorInPassword = formState.errors.password

  useEffect(() => {
    const credentialsError = formState.message !== 'validation error'

    if (credentialsError) {
      toast({
        variant: 'destructive',
        title: 'Error registering',
        description: formState.errors.description || 'An unknown error occurred. Please try again.'
      })
    }
  }, [formState, toast])

  return (
    <form action={formAction} className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16">
      <div className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="name">Username</Label>
          <Input id="name" name="name" placeholder="lorem ipsum" required type="text" />
          {errorInName && <small className="text-destructive">{errorInName}</small>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="m@example.com" required type="email" />
          {errorInEmail && <small className="text-destructive">{errorInEmail}</small>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="******" required type="password" />
          {errorInPassword && <small className="text-destructive">{errorInPassword}</small>}
        </div>

        {children}

        <div className="flex items-center space-x-2">
          <hr className="grow border-zinc-200 dark:border-zinc-700" />
          <span className="text-sm text-zinc-400 dark:text-zinc-300">OR</span>
          <hr className="grow border-zinc-200 dark:border-zinc-700" />
        </div>

        <Button className="w-full bg-black text-white" variant="outline">
          <div className="flex items-center justify-center">
            <GitHubLogoIcon className="mr-2 size-5" />
            Register with GitHub
          </div>
        </Button>
      </div>
    </form>
  )
}
