import { pgTable, serial, text, date, boolean } from "drizzle-orm/pg-core";
import { start } from "repl";

export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  startDate: date("startDate").notNull(),
  expectedCompletionDate: date("expectedCompletionDate").notNull(),
  category: text("category").notNull(),
  priority: text("priority").notNull(),
  resources: text("resources").notNull(),
  progress: text("progress").notNull(),
  notification: boolean("notification").notNull(),
  tags: text("tags").notNull(),
  additionalNotes: text("additionalNotes").notNull()
})
