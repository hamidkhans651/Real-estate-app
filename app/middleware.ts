import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('Request URL:', req.url);
  return NextResponse.next();
}
