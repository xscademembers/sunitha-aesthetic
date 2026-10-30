import { NextResponse } from "next/server";
import { getDb, WEBSITE_LEADS_COLLECTION } from "@/lib/mongodb";

export const runtime = "nodejs";

type LeadBody = {
  formType?: string;
  page?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  countryCode?: string;
  email?: string;
  date?: string;
  treatment?: string;
  notes?: string;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadBody;

    const formType = asTrimmedString(body.formType) || "contact";
    const page = asTrimmedString(body.page) || "/";
    const phone = asTrimmedString(body.phone);
    const treatment = asTrimmedString(body.treatment);

    const name =
      asTrimmedString(body.name) ||
      [asTrimmedString(body.firstName), asTrimmedString(body.lastName)].filter(Boolean).join(" ");

    if (!name || !phone || !treatment) {
      return NextResponse.json(
        { message: "Name, phone, and treatment are required" },
        { status: 400 },
      );
    }

    const lead = {
      formType,
      page,
      name,
      firstName: asTrimmedString(body.firstName) || undefined,
      lastName: asTrimmedString(body.lastName) || undefined,
      phone,
      countryCode: asTrimmedString(body.countryCode) || undefined,
      email: asTrimmedString(body.email) || undefined,
      preferredDate: asTrimmedString(body.date) || undefined,
      treatment,
      notes: asTrimmedString(body.notes) || undefined,
      filledAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection(WEBSITE_LEADS_COLLECTION).insertOne(lead);

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Failed to save website lead:", error);
    return NextResponse.json({ message: "Could not save lead" }, { status: 500 });
  }
}
