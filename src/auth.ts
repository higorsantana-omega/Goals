import { compare } from 'bcrypt-ts'
import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getUser } from './app/actions'
import { authConfig } from './auth.config'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        const [user] = await getUser(credentials.email as string)
        if (!user) return null

        const passwordMatch = await compare(credentials.password as string, user.password!)
        if (!passwordMatch) return null

        return {
          id: user.id,
          email: user.email!
        } as unknown as User
      }
    })
  ]
})
