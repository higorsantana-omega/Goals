'use client'

import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'

import { Button } from '../ui/button'

export function SubmitLogin({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <Button type={pending ? 'button' : 'submit'} aria-disabled={pending} disabled={pending} className="w-full">
      {pending && (
        <>
          <ReloadIcon className="mr-2 size-4 animate-spin" />
          Please wait
        </>
      )}

      {!pending && children}
    </Button>
  )
}
