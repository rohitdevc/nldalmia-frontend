import { NextRequest, NextResponse } from "next/server";
import { submitAdmissionDownloadBrochure } from "@/lib/admission";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const blocked = await checkRateLimit(req, "admission");

  if (blocked) return blocked;

  try {
    const body = await req.json();

    const result = await submitAdmissionDownloadBrochure(body);

    return NextResponse.json(
      { success: true, result },
      { status: 200 }
    );
  } catch (error: any) {
    const { status, message } = JSON.parse(error.message);
    
    return NextResponse.json({ error: message }, { status });
  }
}