import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

/**
 * Global Authentication & Session Middleware.
 * 
 * @standards
 * - Renamed to `middleware` per Next.js 15/16 standards.
 * - Updates Supabase sessions and handles protected route redirects.
 */
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Protected routes matcher.
     * Excludes static assets and legacy public routes.
     */
    "/((?!_next/static|_next/image|favicon.ico|checkin|research-page|av-fisica|admin|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
