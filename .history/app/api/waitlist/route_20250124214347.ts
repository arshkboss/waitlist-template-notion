import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        
        const response = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28',
            },
            body: JSON.stringify({
                parent: { database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID },
                properties: {
                    Email: {
                        title: [
                            {
                                text: {
                                    content: email,
                                },
                            },
                        ],
                    },
                },
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit to Notion');
        }

        const data = await response.json();
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit to waitlist' },
            { status: 500 }
        );
    }
} 