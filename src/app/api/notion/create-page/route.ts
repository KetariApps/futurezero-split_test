import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Extract the necessary data from the request body
    const payload = await req.json();

    // Initialize the Notion client with your API key
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    });

    // Create a new page
    const response = await notion.pages.create(payload);

    // Return a success response with the created page data
    NextResponse.json(response);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error(error);
    // Return an error response if something goes wrong
    return new NextResponse("Error", { status: 400 });
  }
}
