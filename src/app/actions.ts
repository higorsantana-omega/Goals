'use server'

import db from "../../drizzle"

export async function getGoals() {
  const goals = await db.query.goals.findMany()
  return goals
}