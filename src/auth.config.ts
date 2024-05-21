import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
  pages: {
    error: '/',
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    authorized({ auth }) {
    const isAuthenticated = !!auth?.user
    return isAuthenticated
    },
  },
  providers: [],
} satisfies NextAuthConfig