'use client'

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function FormLogin({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <Label
          htmlFor="email"
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="user@mail.com"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <Label
          htmlFor="password"
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
        />
      </div>
      {children}
    </form>
  );
}