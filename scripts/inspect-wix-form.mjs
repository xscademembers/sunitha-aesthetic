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
const formId = process.argv[2] || "8da20f6c-159d-4ffb-9df3-27107c1e3a2a";

const res = await fetch(`https://www.wixapis.com/form-schema-service/v4/forms/${formId}`, {
  headers: { Authorization: apiKey, "wix-site-id": siteId },
});
const j = await res.json();
if (!res.ok) {
  console.error(j);
  process.exit(1);
}

const fields = j.form?.formFields || [];
for (const f of fields) {
  const target = f.inputOptions?.target;
  if (!target) continue;

  const enumVals =
    f.inputOptions?.stringOptions?.validation?.enum ||
    f.stringOptions?.validation?.enum ||
    f.inputOptions?.arrayOptions?.validation?.items?.stringOptions?.enum ||
    null;

  // Also dig options from component configs if present
  const optionLabels =
    f.dropdownOptions?.options?.map((o) => o.value || o.label) ||
    f.selectionOptions?.options?.map((o) => o.value || o.label) ||
    f.options?.map((o) => o.value || o.label) ||
    null;

  console.log("---");
  console.log("target:", target);
  console.log("fieldType:", f.fieldType);
  console.log("inputType:", f.inputOptions?.inputType);
  console.log("placeholder:", f.inputOptions?.placeholder || "");
  if (enumVals) console.log("enum:", JSON.stringify(enumVals));
  if (optionLabels) console.log("options:", JSON.stringify(optionLabels));
}
