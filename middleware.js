import { NextResponse } from "next/server";

// Supported locales
const locales = ["id", "en"];
const defaultLocale = "id";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  console.log(`[Middleware] Processing: ${pathname}`);

  // Skip middleware for static files and api routes
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/static/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    console.log(`[Middleware] Skipping static/api: ${pathname}`);
    return;
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in pathname, redirect to default locale
  if (!pathnameHasLocale) {
    const locale = defaultLocale;

    console.log(
      `[Middleware] No locale found, redirecting ${pathname} to /${locale}${
        pathname === "/" ? "" : pathname
      }`
    );

    // Build new URL
    const newUrl = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    console.log(`[Middleware] Redirecting to: ${newUrl}`);
    return NextResponse.redirect(new URL(newUrl, request.url));
  }

  // Continue with request and add pathname header
  console.log(`[Middleware] Continuing with: ${pathname}`);
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
