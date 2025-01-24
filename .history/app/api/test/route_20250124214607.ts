import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        hasApiKey: !!process.env.NOTION_API_KEY,
        hasDbId: !!process.env.NOTION_DATABASE_ID,
        dbId: process.env.NOTION_DATABASE_ID?.slice(0, 4) + '...',
    });
} 