import { type NextRequest } from 'next/server';
import { supabaseMiddleware } from './lib/services/supabase/supabaseMiddleware';

export async function middleware(request: NextRequest) {
  return await supabaseMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
