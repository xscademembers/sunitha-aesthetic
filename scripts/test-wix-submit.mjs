import { readFileSync, existsSync } from "node:fs";

function load(f) {
  if (!existsSync(f)) return;
  for (const line of readFileSync(f, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

load(".env.local");

const apiKey = process.env.WIX_API_KEY.trim();
const siteId = process.env.WIX_SITE_ID.trim();
const formId = process.env.WIX_BOOK_FORM_ID.trim();

const body = {
  submission: {
    formId,
    submissions: {
      first_name_e338: "Test",
      last_name_5cb2: "Website",
      phone_0157: "+91 9999999999",
      select_treatment_option: "Face Surgeries",
    },
  },
};

const res = await fetch("https://www.wixapis.com/form-submission-service/v4/submissions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: apiKey,
    "wix-site-id": siteId,
  },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log("status:", res.status);
console.log(text);
