'use client'

import { useEffect } from "react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useFormState } from "react-dom";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";

const loginInitialState = {
	message: '',
	errors: {
		email: '',
		password: '',
		description: null
	},
};

export function FormLogin({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  const { toast } = useToast()
  const [formState, formAction] = useFormState(action, loginInitialState);

  const errorInEmail = formState.errors.email
  const errorInPassword = formState.errors.password

  useEffect(() => {
    const credentialsError = formState.message !== 'validation error'

    if (credentialsError) {
      toast({
        variant: "destructive",
        title: 'Error logging in',
        description: formState.errors.description || 'An unknown error occurred. Please try again.',
      })
    }
  }, [formState, toast])

  return (
    <form
      action={formAction}
      className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="m@example.com" required type="email" />
          {errorInEmail && (
            <small className="text-destructive">
              {errorInEmail}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" placeholder="******" required type="password" />
          {errorInPassword && (
            <small className="text-destructive">
              {errorInPassword}
            </small>
          )}
        </div>

        {children}

        <div className="flex items-center space-x-2">
          <hr className="grow border-zinc-200 dark:border-zinc-700" />
          <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
          <hr className="grow border-zinc-200 dark:border-zinc-700" />
        </div>
    
        <Button className="w-full bg-black text-white" variant="outline">
          <div className="flex items-center justify-center">
            <GitHubLogoIcon className="size-5 mr-2" />
            Login with GitHub
          </div>
        </Button>
      </div>
    </form>
  );
}
