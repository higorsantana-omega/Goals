'use server'

import { eq } from "drizzle-orm";
import db from "../../drizzle"
import * as schema from '../../drizzle/schema'
import { genSaltSync, hashSync } from 'bcrypt-ts'

type NewGoal = typeof schema.goals.$inferInsert;

export async function getGoals() {
  const goals = await db.query.goals.findMany()
  return goals
}

export async function createGoal(data: NewGoal) {
  const goal = await db.insert(schema.goals).values(data).returning()
  return goal
}

export async function getUser(email: string) {
  return await db.select().from(schema.users).where(eq(schema.users.email, email))
}

export async function createUser(email: string, password: string) {
  const salt = genSaltSync(10)
  const hash = hashSync(password, salt)

  return await db.insert(schema.users).values({ email, password: hash })
}