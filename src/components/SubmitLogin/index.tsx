'use client'

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export function SubmitLogin ({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <Button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      disabled={pending}
      className="w-full"
    >
      {pending && <>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>}

      {!pending && children}
    </Button>
  )
}