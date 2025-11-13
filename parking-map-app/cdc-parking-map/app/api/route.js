/** 
 * Route.js: API Route
 * 
 * Handles POST requests to update legend.json file in public/_data folders
 * 
 * Note:
 * Wil probably not work when hosted, may require an actual backend/database or hard code
 * 
 * */


import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { readFile } from 'fs';

export async function POST(req) {
    try {
        const legend = await req.json()

        const filePath = path.join(process.cwd(), 'public/_data/legend.json');
        await writeFile(filePath, JSON.stringify(legend, null, 2), 'utf8');

        return NextResponse.json({ success: true });
    } catch(error) {
        console.error("Error Updating Legend: ", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
