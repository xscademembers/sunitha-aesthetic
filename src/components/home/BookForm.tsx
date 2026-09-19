"use client";

import { FormEvent, useState } from "react";
import { ALL_TREATMENT_GROUPS } from "@/data/homeContent";
import { cn } from "@/lib/utils";

const fieldClass = "neo-inset w-full rounded-full px-5 py-[15px] font-ui text-[14px] text-black outline-none";

export function BookForm({
  onSuccess,
  variant = "page",
}: {
  onSuccess?: () => void;
  variant?: "page" | "modal";
}) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSuccess?.();
    if (!onSuccess) setSent(true);
  };

  if (sent) {
    return (
      <div className="px-0 py-8 text-center sm:py-10">
        <div className="home-display mb-[18px] text-[clamp(28px,5vw,42px)] font-extralight leading-[1.1] text-black">
          Thank you — <em className="italic text-maroon">request received.</em>
        </div>
        <p className="home-display mx-auto max-w-[340px] text-[16px] font-light leading-[1.7] text-black">
          The clinic will call you within one working day to confirm your appointment time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3.5 font-ui text-[10px] uppercase tracking-[0.3em] text-maroon">
        Appointment request
      </div>
      <h2 className="home-display mb-2 pr-10 text-[clamp(26px,5vw,38px)] font-extralight leading-[1.08] tracking-[-0.02em] text-black">
        {variant === "modal" ? (
          <>
            Book a <em className="italic text-maroon">consultation.</em>
          </>
        ) : (
          <>
            Send an <em className="italic text-maroon">enquiry.</em>
          </>
        )}
      </h2>
      <p className="home-display mb-6 text-[15px] font-light leading-[1.6] text-black sm:mb-[26px]">
        Share a few details and the clinic will confirm a time that suits you.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input name="name" placeholder="Full name" required className={fieldClass} />
        <input name="phone" type="tel" placeholder="Phone number" required className={fieldClass} />
        <input name="email" type="email" placeholder="Email address" required className={fieldClass} />
        <input name="date" type="date" required className={fieldClass} />
      </div>
      <select name="treatment" required defaultValue="" className={cn(fieldClass, "mt-3 appearance-none")}>
        <option value="" disabled>
          Interested in — select a category
        </option>
        {ALL_TREATMENT_GROUPS.map((group) => (
          <option key={group.id} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
      <textarea
        name="notes"
        rows={3}
        placeholder="Anything you would like Dr. Sunita to know (optional)"
        className={cn(fieldClass, "mt-3 resize-none rounded-[26px] px-[22px] py-[18px]")}
      />
      <button type="submit" className="neo-btn mt-[18px]">
        Request appointment
      </button>
      <p className="mt-4 mb-0 text-center font-ui text-[11px] leading-[1.6] tracking-[0.04em] text-black">
        Your details are used only to arrange this appointment.
      </p>
    </form>
  );
}
