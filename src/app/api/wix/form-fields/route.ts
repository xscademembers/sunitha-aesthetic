import { NextResponse } from "next/server";
import { listWixFormFields } from "@/lib/wixForms";

export const runtime = "nodejs";

/**
 * Setup helper: lists Wix forms / field targets so you can fill .env.
 * Protect with WIX_SETUP_SECRET (send header x-wix-setup-secret).
 *
 * GET /api/wix/form-fields
 * GET /api/wix/form-fields?formId=<guid>
 */
export async function GET(request: Request) {
  const setupSecret = process.env.WIX_SETUP_SECRET?.trim();
  if (!setupSecret) {
    return NextResponse.json(
      { message: "Set WIX_SETUP_SECRET to enable this setup endpoint" },
      { status: 403 },
    );
  }

  const provided = request.headers.get("x-wix-setup-secret")?.trim();
  if (provided !== setupSecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const formId = searchParams.get("formId")?.trim() || undefined;
    const data = await listWixFormFields(formId);
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to list Wix forms";
    console.error(message);
    return NextResponse.json({ message }, { status: 500 });
  }
}
