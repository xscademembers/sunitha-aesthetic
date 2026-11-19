"use client";

import { useMemo, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@/components/icons";
import {
  WIX_BOOK_FORM,
  WIX_TREATMENT_CATEGORIES,
  getTreatmentCategory,
  isValidWixPhone,
} from "@/data/wixFormFields";
import { cn } from "@/lib/utils";

const POPUP_FIELD =
  "h-[42px] w-full rounded-[14px] border border-maroon/25 bg-white px-4 font-sans text-[15px] text-black transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/15";
const POPUP_LABEL = "mb-1.5 block font-sans text-[14px] text-black";

const IVORY_FIELD =
  "neo-inset w-full min-w-0 rounded-full px-5 py-[15px] font-ui text-[16px] text-black outline-none sm:text-[15px]";
const IVORY_LABEL = "mb-2 block font-ui text-[10px] uppercase tracking-[0.22em] text-maroon";

type Props = {
  idPrefix?: string;
  variant?: "popup" | "ivory";
  onSuccess?: () => void;
};

export function AppointmentForm({ idPrefix = "appt", variant = "popup", onSuccess }: Props) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [treatmentOption, setTreatmentOption] = useState("");
  const [specificTreatment, setSpecificTreatment] = useState("");

  const isIvory = variant === "ivory";
  const fieldClass = isIvory ? IVORY_FIELD : POPUP_FIELD;
  const labelClass = isIvory ? IVORY_LABEL : POPUP_LABEL;

  const category = useMemo(
    () => (treatmentOption ? getTreatmentCategory(treatmentOption) : undefined),
    [treatmentOption],
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const option = String(data.get("treatmentOption") || "").trim();
    const specific = String(data.get("specificTreatment") || "").trim();

    if (!firstName) {
      setError(`${WIX_BOOK_FORM.fields.firstName.label} is required.`);
      setSubmitting(false);
      return;
    }
    if (!phone || !isValidWixPhone(phone)) {
      setError("Enter a valid phone number.");
      setSubmitting(false);
      return;
    }
    if (!option || !getTreatmentCategory(option)) {
      setError(`${WIX_BOOK_FORM.fields.treatmentOption.label} is required.`);
      setSubmitting(false);
      return;
    }
    const cat = getTreatmentCategory(option);
    if (specific && cat && !(cat.options as readonly string[]).includes(specific)) {
      setError("Select a valid treatment from the list.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "book_appointment",
          page: pathname || "/",
          firstName,
          lastName,
          phone,
          treatmentOption: option,
          specificTreatment: specific || undefined,
          specificTreatmentTarget: cat?.target,
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message || "Failed to save");
      }

      onSuccess?.();
      if (!onSuccess) setSubmitted(true);
      form.reset();
      setTreatmentOption("");
      setSpecificTreatment("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or call the clinic.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className={cn("py-8 text-center text-black", isIvory ? "home-display text-[16px] font-light" : "font-sans text-[16px]")}>
        Thank you! We will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={cn("grid grid-cols-2 gap-4", isIvory && "gap-3")}>
        <div>
          <label htmlFor={`${idPrefix}-first-name`} className={labelClass}>
            {WIX_BOOK_FORM.fields.firstName.label} *
          </label>
          <input
            id={`${idPrefix}-first-name`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-last-name`} className={labelClass}>
            {WIX_BOOK_FORM.fields.lastName.label}
          </label>
          <input
            id={`${idPrefix}-last-name`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            className={fieldClass}
          />
        </div>
      </div>

      <div className={cn("mt-4", isIvory && "mt-3")}>
        <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
          {WIX_BOOK_FORM.fields.phone.label} *
        </label>
        <input
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 985633 7799"
          className={fieldClass}
        />
      </div>

      <div className={cn("mt-4", isIvory && "mt-3")}>
        <label htmlFor={`${idPrefix}-treatment`} className={labelClass}>
          {WIX_BOOK_FORM.fields.treatmentOption.label} *
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}-treatment`}
            name="treatmentOption"
            required
            value={treatmentOption}
            onChange={(e) => {
              setTreatmentOption(e.target.value);
              setSpecificTreatment("");
            }}
            className={cn(fieldClass, "appearance-none pr-8")}
          >
            <option value="" disabled>
              Select…
            </option>
            {WIX_TREATMENT_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-black" />
        </div>
      </div>

      {category ? (
        <div className={cn("mt-4", isIvory && "mt-3")}>
          <label htmlFor={`${idPrefix}-specific`} className={labelClass}>
            {category.label}
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-specific`}
              name="specificTreatment"
              value={specificTreatment}
              onChange={(e) => setSpecificTreatment(e.target.value)}
              className={cn(fieldClass, "appearance-none pr-8")}
            >
              <option value="">Select…</option>
              {category.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-black" />
          </div>
        </div>
      ) : null}

      {error ? (
        <p className={cn("mt-3 mb-0 text-center text-maroon", isIvory ? "font-ui text-[12px]" : "font-sans text-[13px]")}>
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className={
          isIvory
            ? "neo-btn mt-[18px] disabled:opacity-60"
            : "mt-6 h-[46px] w-full rounded-[14px] bg-maroon font-sans text-[16px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(161,83,78,0.5)] transition-all hover:-translate-y-0.5 hover:bg-maroon-btn active:translate-y-0 disabled:opacity-60"
        }
      >
        {submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
