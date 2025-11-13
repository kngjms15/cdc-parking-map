/** 
 * Route.js: API Route
 * 
 * Handles POST requests to update legend.json file in public/_data folders
 * 
 * Note:
 * Wil probably not work when hosted, may require an actual backend/database or hard code
 * 
 * */
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
// import fs, { readFile } from 'fs';

const filePath = path.join(process.cwd(), 'public', '_data', 'legend.json');

export async function GET() {
    try {
        const fileData = await readFile(filePath, 'utf8');
        const json = JSON.parse(fileData);
        return NextResponse.json(json);
    }   catch(error) {
        console.error("Error reading legend: ", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

export async function POST(req) {
    console.log("Received POST /api request");
    try {
        const legend = await req.json();

        // const filePath = path.join(process.cwd(), 'public/_data/legend.json');
        // const filePath = path.join(process.cwd(), "public", "_data", "legend.json");
        await writeFile(filePath, JSON.stringify(legend, null, 2), 'utf8');
        // fs.writeFileSync(filePath, JSON.stringify(legend, null, 2), 'utf8');
        console.log("update successful");
        return NextResponse.json({ success: true });
    } catch(error) {
        console.error("Error Updating Legend: ", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}


