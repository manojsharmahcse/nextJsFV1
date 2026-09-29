import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: replace with your real session cookie name
  // Enable this once real login works:
  // const hasSession = request.cookies.has("session");
  // if (!hasSession && request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
