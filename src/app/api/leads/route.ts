import { NextResponse } from "next/server";
import {
  getTreatmentCategory,
  isValidWixEmail,
  isValidWixPhone,
} from "@/data/wixFormFields";
import { getDb, WEBSITE_LEADS_COLLECTION } from "@/lib/mongodb";
import { submitLeadToWix } from "@/lib/wixForms";

export const runtime = "nodejs";

type LeadBody = {
  formType?: string;
  page?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  treatmentOption?: string;
  specificTreatment?: string;
  specificTreatmentTarget?: string;
  // legacy fields (ignored for new validation)
  treatment?: string;
  notes?: string;
  date?: string;
  countryCode?: string;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadBody;
    const formType = asTrimmedString(body.formType) || "contact_us";
    const page = asTrimmedString(body.page) || "/";

    const firstName = asTrimmedString(body.firstName);
    const lastName = asTrimmedString(body.lastName);
    const phone = asTrimmedString(body.phone);
    const email = asTrimmedString(body.email);
    const message = asTrimmedString(body.message);
    const treatmentOption = asTrimmedString(body.treatmentOption);
    const specificTreatment = asTrimmedString(body.specificTreatment);
    const specificTreatmentTarget = asTrimmedString(body.specificTreatmentTarget);

    const name =
      [firstName, lastName].filter(Boolean).join(" ") || asTrimmedString(body.name);

    const isBooking =
      formType === "book_appointment" ||
      formType === "appointment_popup" ||
      formType === "book_modal";

    if (isBooking) {
      if (!firstName) {
        return NextResponse.json({ message: "First name is required" }, { status: 400 });
      }
      if (!phone || !isValidWixPhone(phone)) {
        return NextResponse.json({ message: "Enter a valid phone number" }, { status: 400 });
      }
      if (!treatmentOption || !getTreatmentCategory(treatmentOption)) {
        return NextResponse.json(
          { message: "Select a valid treatment option" },
          { status: 400 },
        );
      }
      const cat = getTreatmentCategory(treatmentOption);
      if (
        specificTreatment &&
        cat &&
        !(cat.options as readonly string[]).includes(specificTreatment)
      ) {
        return NextResponse.json(
          { message: "Select a valid specific treatment" },
          { status: 400 },
        );
      }
    } else {
      if (!email || !isValidWixEmail(email)) {
        return NextResponse.json({ message: "Enter a valid email address" }, { status: 400 });
      }
      if (!message) {
        return NextResponse.json({ message: "Message is required" }, { status: 400 });
      }
      if (!phone || !isValidWixPhone(phone)) {
        return NextResponse.json({ message: "Enter a valid phone number" }, { status: 400 });
      }
    }

    const lead = {
      formType,
      page,
      name: name || undefined,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phone,
      email: email || undefined,
      message: message || undefined,
      treatmentOption: treatmentOption || undefined,
      specificTreatment: specificTreatment || undefined,
      specificTreatmentTarget:
        specificTreatmentTarget ||
        (treatmentOption ? getTreatmentCategory(treatmentOption)?.target : undefined),
      treatment: treatmentOption || specificTreatment || undefined,
      filledAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection(WEBSITE_LEADS_COLLECTION).insertOne(lead);

    const wix = await submitLeadToWix({
      formType,
      page,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phone,
      email: email || undefined,
      message: message || undefined,
      treatmentOption: treatmentOption || undefined,
      specificTreatment: specificTreatment || undefined,
      specificTreatmentTarget: lead.specificTreatmentTarget,
    }).catch((error: unknown) => {
      const msg = error instanceof Error ? error.message : "Unknown Wix error";
      console.error("Wix form submission failed:", msg);
      return { ok: false as const, error: msg };
    });

    if (!wix.ok) {
      console.error("Wix form submission failed:", wix.error);
    } else if (wix.skipped) {
      console.info("Wix form submission skipped:", wix.reason);
    }

    await db.collection(WEBSITE_LEADS_COLLECTION).updateOne(
      { _id: result.insertedId },
      {
        $set: {
          wixSynced: wix.ok && !("skipped" in wix && wix.skipped),
          wixSubmissionId: wix.ok && !wix.skipped ? wix.submissionId : undefined,
          wixError: wix.ok ? undefined : wix.error,
          wixSkippedReason: wix.ok && wix.skipped ? wix.reason : undefined,
        },
      },
    );

    return NextResponse.json(
      {
        ok: true,
        id: result.insertedId,
        wixSynced: wix.ok && !("skipped" in wix && wix.skipped),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to save website lead:", error);
    return NextResponse.json({ message: "Could not save lead" }, { status: 500 });
  }
}
