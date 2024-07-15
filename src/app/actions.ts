'use server'

import { genSaltSync, hashSync } from 'bcrypt-ts'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { AuthError } from 'next-auth'

import { auth, signIn, signOut } from '@/auth'
import { loginSchema, registerSchema } from '@/types/schema'

import db from '../../drizzle'
import * as schema from '../../drizzle/schema'

type NewGoal = typeof schema.goals.$inferInsert

export async function getGoals() {
  const session = await auth()
  const [user] = await getUser(session?.user?.email as string)
  const goals = await db.select().from(schema.goals).where(eq(schema.goals.userId, Number(user.id)))
  return goals
}

export async function createGoal(data: NewGoal) {
  const sessin = await auth()
  const [user] = await getUser(sessin?.user?.email as string)
  const insert = {
    ...data,
    userId: user.id
  }
  const goal = await db.insert(schema.goals).values(insert).returning()
  return goal
}

export async function getUser(email: string) {
  return await db.select().from(schema.users).where(eq(schema.users.email, email))
}

export async function createUser(name: string, email: string, password: string) {
  const salt = genSaltSync(10)
  const hash = hashSync(password, salt)

  return await db.insert(schema.users).values({ name, email, password: hash })
}

const defaultValues = {
  email: '',
  password: ''
}

export async function register(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const validatedFields = registerSchema.safeParse({
    name: name,
    email: email,
    password: password
  })

  if (!validatedFields.success) {
    return {
      message: 'validation error',
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  const [user] = await getUser(email)
  if (user) {
    return {
      message: 'user exists',
      errors: {
        ...defaultValues,
        description: 'User already exists'
      }
    }
  }

  await createUser(name, email, password)

  redirect('/login')
}

export async function login(prevState: any, formData: FormData) {
  try {
    const email = formData.get('email')
    const password = formData.get('password')

    const validatedFields = loginSchema.safeParse({
      email: email,
      password: password
    })

    if (!validatedFields.success) {
      return {
        message: 'validation error',
        errors: validatedFields.error.flatten().fieldErrors
      }
    }

    await signIn('credentials', {
      redirectTo: '/goals',
      email: formData.get('email') as string,
      password: formData.get('password') as string
    })

    return {
      message: 'success',
      errors: {}
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'credentials error',
            errors: {
              ...defaultValues,
              description: 'Invalid email or password. Please try again.'
            }
          }
        default:
          return {
            message: 'unknown error',
            errors: {
              ...defaultValues,
              description: error.message
            }
          }
      }
    }
    throw error
  }
}

export async function logout() {
  await signOut()
}
