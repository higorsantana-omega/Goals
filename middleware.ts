import NextAuth from 'next-auth'
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from '@/lib/routes'
import { authConfig } from './src/auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl, auth } = req

  const isAuthenticated = !!auth
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)

  if (isPublicRoute && isAuthenticated) {
    return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
  }

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(ROOT, nextUrl))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}