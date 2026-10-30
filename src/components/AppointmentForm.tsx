"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@/components/icons";
import { TREATMENT_OPTIONS } from "@/types/content";

const FIELD_CLASSES =
  "h-[42px] w-full rounded-[14px] border border-maroon/25 bg-white px-4 font-sans text-[15px] text-black transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/15";

const LABEL_CLASSES = "mb-1.5 block font-sans text-[14px] text-black";

const COUNTRY_CODES = ["+91", "+1", "+44", "+971"];

export function AppointmentForm({ idPrefix = "appt" }: { idPrefix?: string }) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "appointment_popup",
          page: pathname || "/",
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          countryCode: data.get("countryCode"),
          phone: data.get("phone"),
          treatment: data.get("treatment"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or call the clinic.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className="py-8 text-center font-sans text-[16px] text-black">
        Thank you! We will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-first-name`} className={LABEL_CLASSES}>
            First name *
          </label>
          <input
            id={`${idPrefix}-first-name`}
            name="firstName"
            type="text"
            required
            className={FIELD_CLASSES}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-last-name`} className={LABEL_CLASSES}>
            Last name
          </label>
          <input id={`${idPrefix}-last-name`} name="lastName" type="text" className={FIELD_CLASSES} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor={`${idPrefix}-phone`} className={LABEL_CLASSES}>
          Phone *
        </label>
        <div className="flex gap-2">
          <div className="relative w-[88px] shrink-0">
            <select
              name="countryCode"
              aria-label="Select a country code"
              defaultValue="+91"
              className={`${FIELD_CLASSES} appearance-none pr-7`}
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-2.5 -translate-y-1/2 text-black" />
          </div>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" required className={FIELD_CLASSES} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor={`${idPrefix}-treatment`} className={LABEL_CLASSES}>
          Select Treatment Option *
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}-treatment`}
            name="treatment"
            required
            defaultValue=""
            className={`${FIELD_CLASSES} appearance-none pr-8`}
          >
            <option value="" disabled hidden />
            {TREATMENT_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-black" />
        </div>
      </div>
      {error ? (
        <p className="mt-3 mb-0 text-center font-sans text-[13px] text-maroon">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 h-[46px] w-full rounded-[14px] bg-maroon font-sans text-[16px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(161,83,78,0.5)] transition-all hover:-translate-y-0.5 hover:bg-maroon-btn active:translate-y-0 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
