import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
    
    if (pathname.includes('.php')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('.env')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('.htm')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('.shtml')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('wp-config')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('wp-admin')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('wp-content')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('wp-includes')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.endsWith('.xml') && pathname !== '/sitemap.xml') {
        return NextResponse.redirect(new URL('/sitemap.xml', request.url), 308);
    } else if (pathname.includes('sitemap') && pathname !== '/sitemap.xml') {
        return NextResponse.redirect(new URL('/sitemap.xml', request.url), 308);
    } else if (pathname.includes('backup')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('.PhP7')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('azure')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if (pathname.includes('sendgrid')) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    } else if(years.includes(Number(pathname.replace('/', '')))) {
        return NextResponse.redirect(new URL('/', request.url), 308);
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};