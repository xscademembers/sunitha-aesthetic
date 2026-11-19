import { readFileSync, existsSync, writeFileSync } from "node:fs";

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
const formId = process.argv[2];

const res = await fetch(`https://www.wixapis.com/form-schema-service/v4/forms/${formId}`, {
  headers: { Authorization: apiKey, "wix-site-id": siteId },
});
const j = await res.json();
if (!res.ok) {
  console.error(j);
  process.exit(1);
}

writeFileSync(`scripts/wix-form-${formId}.json`, JSON.stringify(j, null, 2));

const fields = j.form?.formFields || [];
for (const f of fields) {
  const target = f.inputOptions?.target;
  if (!target) {
    console.log("NON-INPUT", f.fieldType, f.id);
    continue;
  }
  console.log("\n====", target, "====");
  console.log("fieldType:", f.fieldType);
  console.log("inputType:", f.inputOptions?.inputType);
  console.log("required:", f.inputOptions?.required ?? f.required);
  console.log(
    "validation:",
    JSON.stringify(
      f.inputOptions?.stringOptions?.validation ||
        f.inputOptions?.validation ||
        f.stringOptions?.validation ||
        null,
      null,
      2,
    ),
  );
  console.log(
    "enum:",
    JSON.stringify(f.inputOptions?.stringOptions?.validation?.enum || null),
  );
  // dump useful nested keys
  const keys = Object.keys(f);
  console.log("topKeys:", keys.join(", "));
  if (f.dropdownOptions) console.log("dropdownOptions:", JSON.stringify(f.dropdownOptions));
  if (f.phoneOptions) console.log("phoneOptions:", JSON.stringify(f.phoneOptions));
  if (f.emailOptions) console.log("emailOptions:", JSON.stringify(f.emailOptions));
  if (f.dateOptions) console.log("dateOptions:", JSON.stringify(f.dateOptions));
}
