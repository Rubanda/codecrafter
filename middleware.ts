import createMiddleware from 'next-intl/middleware';
// import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    localePrefix: 'always'
  });

  const response = await handleI18nRouting(request);

  // Get the locale from the URL
  const locale = request.nextUrl.pathname.split('/')[1];
  
  // Store the locale in a cookie
  response.cookies.set('NEXT_LOCALE', locale);

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 