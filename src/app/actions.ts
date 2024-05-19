'use server'

import db from "../../drizzle"
import * as schema from '../../drizzle/schema'

type NewGoal = typeof schema.goals.$inferInsert;

export async function getGoals() {
  const goals = await db.query.goals.findMany()
  return goals
}

export async function createGoal(data: NewGoal) {
  const goal = await db.insert(schema.goals).values(data).returning()
  return goal
}