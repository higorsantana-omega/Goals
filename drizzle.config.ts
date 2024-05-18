import 'dotenv/config'

import type { Config } from 'drizzle-kit'

export default {
  schema: './drizzle/schema.ts',
  out: './database',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
} satisfies Config
