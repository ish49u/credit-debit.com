import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const user_json_url = searchParams.get('url');

    if (!user_json_url) {
        return NextResponse.json({ error: "Missing user_json_url parameter" }, { status: 400 });
    }

    try {
        const response = await fetch(user_json_url);
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
