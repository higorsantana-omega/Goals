import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProfileName(name: string) {
  const [firstName, lastName] = name.split(' ')

  if (firstName && lastName) {
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`
  }

  return `${name[0].toUpperCase()}${name[1].toUpperCase()}`
}
