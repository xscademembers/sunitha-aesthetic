/**
 * Push form leads into the same Wix Forms inbox (dashboard + Wix email notifications).
 */

import {
  WIX_BOOK_FORM,
  WIX_CONTACT_FORM,
  getTreatmentCategory,
} from "@/data/wixFormFields";

export type WixLeadPayload = {
  formType: string;
  page: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  email?: string;
  message?: string;
  treatmentOption?: string;
  specificTreatment?: string;
  specificTreatmentTarget?: string;
};

export type WixSubmitResult =
  | { ok: true; submissionId?: string; skipped: false }
  | { ok: true; skipped: true; reason: string }
  | { ok: false; error: string };

function env(name: string): string {
  return process.env[name]?.trim() ?? "";
}

function isBooking(formType: string): boolean {
  return formType === "book_appointment" || formType === "appointment_popup" || formType === "book_modal";
}

function isContact(formType: string): boolean {
  return formType === "contact_us" || formType === "contact";
}

export function isWixFormsConfigured(): boolean {
  return Boolean(env("WIX_API_KEY") && env("WIX_SITE_ID"));
}

function buildBookingSubmissions(lead: WixLeadPayload): Record<string, string> {
  const f = WIX_BOOK_FORM.fields;
  const submissions: Record<string, string> = {};

  if (lead.firstName) submissions[f.firstName.target] = lead.firstName;
  if (lead.lastName) submissions[f.lastName.target] = lead.lastName;
  if (lead.phone) submissions[f.phone.target] = lead.phone;
  if (lead.treatmentOption) submissions[f.treatmentOption.target] = lead.treatmentOption;

  if (lead.specificTreatment) {
    const target =
      lead.specificTreatmentTarget ||
      getTreatmentCategory(lead.treatmentOption || "")?.target;
    if (target) submissions[target] = lead.specificTreatment;
  }

  return submissions;
}

function buildContactSubmissions(lead: WixLeadPayload): Record<string, string> {
  const f = WIX_CONTACT_FORM.fields;
  const submissions: Record<string, string> = {};

  if (lead.firstName) submissions[f.firstName.target] = lead.firstName;
  if (lead.lastName) submissions[f.lastName.target] = lead.lastName;
  if (lead.email) submissions[f.email.target] = lead.email;
  if (lead.phone) submissions[f.phone.target] = lead.phone;
  if (lead.message) {
    const withSource = [
      lead.message,
      `Source: custom website (${lead.formType})`,
      `Page: ${lead.page}`,
    ].join("\n");
    submissions[f.message.target] = withSource;
  }

  return submissions;
}

async function createSubmission(
  formId: string,
  submissions: Record<string, string>,
): Promise<WixSubmitResult> {
  if (Object.keys(submissions).length === 0) {
    return { ok: false, error: "No Wix field values to submit" };
  }

  const response = await fetch("https://www.wixapis.com/form-submission-service/v4/submissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: env("WIX_API_KEY"),
      "wix-site-id": env("WIX_SITE_ID"),
    },
    body: JSON.stringify({
      submission: {
        formId,
        submissions,
      },
    }),
  });

  const text = await response.text();
  let body: {
    submission?: { id?: string; status?: string };
    message?: string;
  } = {};
  try {
    body = text ? (JSON.parse(text) as typeof body) : {};
  } catch {
    // non-JSON
  }

  if (!response.ok) {
    return { ok: false, error: `Wix ${response.status}: ${body.message || text || response.statusText}` };
  }

  const submissionId = body.submission?.id;
  if (submissionId && body.submission?.status === "PENDING") {
    const confirmRes = await fetch(
      `https://www.wixapis.com/form-submission-service/v4/submissions/${submissionId}/confirm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: env("WIX_API_KEY"),
          "wix-site-id": env("WIX_SITE_ID"),
        },
        body: "{}",
      },
    );
    if (!confirmRes.ok) {
      const confirmText = await confirmRes.text();
      return {
        ok: false,
        error: `Wix created submission but confirm failed (${confirmRes.status}): ${confirmText}`,
      };
    }
  }

  return { ok: true, skipped: false, submissionId };
}

export async function submitLeadToWix(lead: WixLeadPayload): Promise<WixSubmitResult> {
  if (!isWixFormsConfigured()) {
    return { ok: true, skipped: true, reason: "Wix env vars not set" };
  }

  if (isBooking(lead.formType)) {
    const formId = env("WIX_BOOK_FORM_ID") || WIX_BOOK_FORM.formId;
    return createSubmission(formId, buildBookingSubmissions(lead));
  }

  if (isContact(lead.formType)) {
    const formId = env("WIX_CONTACT_FORM_ID") || WIX_CONTACT_FORM.formId;
    return createSubmission(formId, buildContactSubmissions(lead));
  }

  return { ok: true, skipped: true, reason: `Unknown formType: ${lead.formType}` };
}

export async function listWixFormFields(formId?: string): Promise<unknown> {
  if (!env("WIX_API_KEY") || !env("WIX_SITE_ID")) {
    throw new Error("Set WIX_API_KEY and WIX_SITE_ID first");
  }

  const id = formId || env("WIX_BOOK_FORM_ID") || WIX_BOOK_FORM.formId;
  const url = id
    ? `https://www.wixapis.com/form-schema-service/v4/forms/${id}`
    : "https://www.wixapis.com/form-schema-service/v4/forms?namespace=wix.form_app.form";

  const response = await fetch(url, {
    headers: {
      Authorization: env("WIX_API_KEY"),
      "wix-site-id": env("WIX_SITE_ID"),
    },
  });

  const text = await response.text();
  if (!response.ok) throw new Error(`Wix ${response.status}: ${text}`);
  return JSON.parse(text) as unknown;
}
