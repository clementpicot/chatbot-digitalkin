import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'app-locale'

export function middleware(request: NextRequest) {
  // Skip static files and API routes
  if (request.nextUrl.pathname.startsWith('/_next') || 
      request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  const localeCookie = request.cookies.get(COOKIE_NAME)
  const response = NextResponse.next()

  if (!localeCookie) {
    response.cookies.set(COOKIE_NAME, 'fr', {
      path: '/',
      maxAge: 31536000, // 1 year
      sameSite: 'lax'
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}