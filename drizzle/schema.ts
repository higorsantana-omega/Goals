import { boolean, date, integer, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const categories = [
  'Health',
  'Fitness',
  'Finance',
  'Career',
  'Personal Growth',
  'Relationships',
  'Hobbies',
  'Other'
] as const

export type Category = (typeof categories)[number]

export const categoriesEnum = pgEnum('categories', [...categories])

export const priorities = ['High', 'Medium', 'Low'] as const

export const prioritiesEnum = pgEnum('priority', [...priorities])

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 })
})

export const goals = pgTable('goals', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  startDate: date('startDate').notNull(),
  expectedCompletionDate: date('expectedCompletionDate').notNull(),
  category: categoriesEnum('category').notNull(),
  priority: prioritiesEnum('priority').notNull(),
  resources: text('resources'),
  currentProgress: integer('currentProgress'),
  goal: integer('goal').notNull(),
  notification: boolean('notification').notNull(),
  tags: text('tags').notNull(),
  additionalNotes: text('additionalNotes').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull()
})
