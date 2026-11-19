"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { WIX_CONTACT_FORM, isValidWixEmail, isValidWixPhone } from "@/data/wixFormFields";
import { cn } from "@/lib/utils";

const fieldClass =
  "neo-inset w-full min-w-0 rounded-full px-5 py-[15px] font-ui text-[16px] text-black outline-none sm:text-[15px]";

const labelClass = "mb-2 block font-ui text-[10px] uppercase tracking-[0.22em] text-maroon";

/** Contact-page form — matches Wix "Contact us" fields exactly. */
export function BookForm() {
  const pathname = usePathname();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!email || !isValidWixEmail(email)) {
      setError("Enter a valid email address.");
      setSubmitting(false);
      return;
    }
    if (!message) {
      setError(`${WIX_CONTACT_FORM.fields.message.label} is required.`);
      setSubmitting(false);
      return;
    }
    if (!phone || !isValidWixPhone(phone)) {
      setError("Enter a valid phone number.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact_us",
          page: pathname || "/contact",
          firstName,
          lastName,
          email,
          message,
          phone,
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message || "Failed to save");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or call the clinic.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="px-0 py-8 text-center sm:py-10">
        <div className="home-display mb-[18px] text-[clamp(28px,5vw,42px)] font-extralight leading-[1.1] text-black">
          Thank you — <em className="italic text-maroon">message received.</em>
        </div>
        <p className="home-display mx-auto max-w-[340px] text-[16px] font-light leading-[1.7] text-black">
          The clinic will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3.5 font-ui text-[10px] uppercase tracking-[0.3em] text-maroon">Contact us</div>
      <h2 className="home-display mb-2 pr-10 text-[clamp(26px,5vw,38px)] font-extralight leading-[1.08] tracking-[-0.02em] text-black">
        Send a <em className="italic text-maroon">message.</em>
      </h2>
      <p className="home-display mb-6 text-[15px] font-light leading-[1.6] text-black sm:mb-[26px]">
        Same fields as the clinic’s Wix contact form — we will reply by phone or email.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className={labelClass}>
            {WIX_CONTACT_FORM.fields.firstName.label}
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className={labelClass}>
            {WIX_CONTACT_FORM.fields.lastName.label}
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="contact-email" className={labelClass}>
          {WIX_CONTACT_FORM.fields.email.label} *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="contact-phone" className={labelClass}>
          {WIX_CONTACT_FORM.fields.phone.label} *
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 985633 7799"
          className={fieldClass}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="contact-message" className={labelClass}>
          {WIX_CONTACT_FORM.fields.message.label} *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={cn(fieldClass, "resize-none rounded-[26px] px-[22px] py-[18px]")}
        />
      </div>

      {error ? (
        <p className="mt-3 mb-0 text-center font-ui text-[12px] text-maroon">{error}</p>
      ) : null}

      <button type="submit" disabled={submitting} className="neo-btn mt-[18px] disabled:opacity-60">
        {submitting ? "Sending…" : "Submit"}
      </button>
      <p className="mt-4 mb-0 text-center font-ui text-[11px] leading-[1.6] tracking-[0.04em] text-black">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
