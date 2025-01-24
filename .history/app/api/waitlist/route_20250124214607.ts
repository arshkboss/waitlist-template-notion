import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        
        if (!email) {
            return NextResponse.json(
                { success: false, error: 'Email is required' },
                { status: 400 }
            );
        }

        if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
            console.error('Missing environment variables');
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const response = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28',
            },
            body: JSON.stringify({
                parent: { database_id: process.env.NOTION_DATABASE_ID },
                properties: {
                    Email: {
                        type: 'title',
                        title: [
                            {
                                type: 'text',
                                text: {
                                    content: email,
                                },
                            },
                        ],
                    },
                },
            }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error('Notion API error:', responseData);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Failed to submit to Notion',
                    details: responseData
                },
                { status: response.status }
            );
        }

        return NextResponse.json({ 
            success: true, 
            data: responseData 
        });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Internal server error',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
} 