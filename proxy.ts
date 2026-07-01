import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    if (request.nextUrl.pathname.includes('.php')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('.env')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('.htm')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('wp-config')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('wp-admin')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('wp-content')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (request.nextUrl.pathname.includes('wp-includes')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};