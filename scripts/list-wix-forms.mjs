/**
 * One-time helper: finds correct Wix site ID, then prints form field targets.
 *
 * Usage:
 *   1. Put in .env.local:
 *        WIX_API_KEY=...
 *        WIX_SITE_ID=...          (optional until you know the right one)
 *        WIX_ACCOUNT_ID=...       (from API Keys Manager — needed to list sites)
 *   2. node scripts/list-wix-forms.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(fileName) {
  const path = resolve(process.cwd(), fileName);
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const apiKey = process.env.WIX_API_KEY?.trim();
const siteId = process.env.WIX_SITE_ID?.trim();
const accountId = process.env.WIX_ACCOUNT_ID?.trim();

if (!apiKey) {
  console.error("Missing WIX_API_KEY in .env.local");
  process.exit(1);
}

function fieldLabel(field) {
  return (
    field?.displayName ||
    field?.label ||
    field?.textOptions?.placeholder ||
    field?.inputOptions?.placeholder ||
    field?.fieldType ||
    "field"
  );
}

function fieldTarget(field) {
  return field?.inputOptions?.target || field?.target || null;
}

async function listAccountSites() {
  if (!accountId) {
    console.log("\nTo list all sites under your account, add this to .env.local:");
    console.log("WIX_ACCOUNT_ID=<from https://manage.wix.com/account/api-keys >");
    console.log("(Account ID is shown on the API Keys page.)\n");
    return null;
  }

  const res = await fetch("https://www.wixapis.com/site-list/v2/sites/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
      "wix-account-id": accountId,
    },
    body: JSON.stringify({ query: {} }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`Could not list sites (${res.status}):`);
    console.error(text);
    return null;
  }

  const json = JSON.parse(text);
  const sites = json.sites || [];
  console.log(`\nSites visible to this API key (${sites.length}):\n`);
  for (const site of sites) {
    console.log(`  • ${site.displayName || site.name || "(unnamed)"}`);
    console.log(`      WIX_SITE_ID=${site.id}`);
    console.log(`      published=${site.published} premium=${site.premium} editor=${site.editorType || "?"}`);
    if (site.viewUrl) console.log(`      url=${site.viewUrl}`);
    console.log("");
  }
  return sites;
}

async function listFormsForSite(id) {
  const listUrl =
    "https://www.wixapis.com/form-schema-service/v4/forms?namespace=wix.form_app.form";

  const listRes = await fetch(listUrl, {
    headers: {
      Authorization: apiKey,
      "wix-site-id": id,
    },
  });

  const listText = await listRes.text();
  if (!listRes.ok) {
    return { ok: false, status: listRes.status, body: listText };
  }

  return { ok: true, forms: JSON.parse(listText).forms || [] };
}

async function printFormFields(id, forms) {
  if (forms.length === 0) {
    console.log("No Wix Forms found on this site.");
    console.log("Open Wix Studio → add a Form (Wix Forms app) → save → run again.");
    return;
  }

  console.log(`Found ${forms.length} form(s) on site ${id}:\n`);

  for (const form of forms) {
    const formId = form.id;
    const name = form.name || "(unnamed)";
    console.log("=".repeat(60));
    console.log(`FORM NAME: ${name}`);
    console.log(`WIX_FORM_ID=${formId}`);
    console.log("-".repeat(60));

    const detailRes = await fetch(
      `https://www.wixapis.com/form-schema-service/v4/forms/${formId}`,
      {
        headers: {
          Authorization: apiKey,
          "wix-site-id": id,
        },
      },
    );
    const detailText = await detailRes.text();
    if (!detailRes.ok) {
      console.log(`Could not load fields (${detailRes.status}): ${detailText}`);
      continue;
    }

    const detail = JSON.parse(detailText);
    const fields = detail.form?.formFields || detail.formFields || [];
    const inputFields = fields.filter((f) => fieldTarget(f));

    if (inputFields.length === 0) {
      console.log("No input fields with targets found on this form.");
      continue;
    }

    console.log("FIELDS (label → target to put in .env):");
    for (const field of inputFields) {
      const target = fieldTarget(field);
      const type = field.fieldType || field.inputOptions?.inputType || "";
      console.log(`  • ${fieldLabel(field)}  [${type}]`);
      console.log(`      target: ${target}`);
    }

    console.log("\nCopy into .env.local:");
    console.log(`WIX_SITE_ID=${id}`);
    console.log(`WIX_FORM_ID=${formId}`);
    for (const field of inputFields) {
      const target = fieldTarget(field);
      const label = String(fieldLabel(field)).toLowerCase();
      if (label.includes("name") && !label.includes("last")) {
        console.log(`WIX_FIELD_NAME=${target}`);
      } else if (label.includes("phone") || label.includes("mobile")) {
        console.log(`WIX_FIELD_PHONE=${target}`);
      } else if (label.includes("email") || label.includes("e-mail")) {
        console.log(`WIX_FIELD_EMAIL=${target}`);
      } else if (label.includes("date")) {
        console.log(`WIX_FIELD_DATE=${target}`);
      } else if (label.includes("treatment") || label.includes("service")) {
        console.log(`WIX_FIELD_TREATMENT=${target}`);
      } else if (
        label.includes("note") ||
        label.includes("message") ||
        label.includes("comment") ||
        label.includes("additional")
      ) {
        console.log(`WIX_FIELD_NOTES=${target}`);
      }
    }
    console.log("");
  }
}

async function main() {
  console.log("=== Wix setup helper ===");

  if (siteId) {
    console.log(`\nTrying WIX_SITE_ID=${siteId} ...`);
    const result = await listFormsForSite(siteId);
    if (result.ok) {
      await printFormFields(siteId, result.forms);
      return;
    }

    console.error(`\nThat Site ID failed (${result.status}):`);
    console.error(result.body);
    console.error("\nThis usually means:");
    console.error("  1) You copied the wrong ID (editor siteId ≠ dashboard metaSiteId)");
    console.error("  2) The API key is from a different Wix account than the site");
    console.error("  3) The key cannot access that site");
  } else {
    console.log("\nNo WIX_SITE_ID set yet — listing account sites first.");
  }

  const sites = await listAccountSites();
  if (!sites?.length) {
    console.log("\nHow to get the CORRECT site ID manually:");
    console.log("  1. Open the Wix site DASHBOARD (not the Studio editor)");
    console.log("  2. Look at the browser URL:");
    console.log("       https://manage.wix.com/dashboard/THIS-IS-THE-SITE-ID/home");
    console.log("  3. Copy ONLY the GUID after /dashboard/");
    console.log("  4. Put it in .env.local as WIX_SITE_ID=...");
    console.log("  5. Run this script again");
    console.log("\nAlso add WIX_ACCOUNT_ID from the API Keys page so this script can list sites.");
    process.exit(1);
  }

  // Try each site until forms are found (or print all)
  for (const site of sites) {
    console.log(`\n--- Checking forms on: ${site.displayName || site.name} (${site.id}) ---`);
    const result = await listFormsForSite(site.id);
    if (!result.ok) {
      console.log(`Skipped (${result.status}): ${result.body}`);
      continue;
    }
    await printFormFields(site.id, result.forms);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
