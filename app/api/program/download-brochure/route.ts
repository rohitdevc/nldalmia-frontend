import { NextRequest, NextResponse } from "next/server";
import { submitProgramDownloadBrochure } from "@/lib/program";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await submitProgramDownloadBrochure(body);

    return NextResponse.json(
      { success: true, result },
      { status: 200 }
    );
  } catch (error: any) {
    const { status, message } = JSON.parse(error.message);
    
    return NextResponse.json({ error: message }, { status });
  }
}