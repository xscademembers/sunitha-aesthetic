"use client";

import { FormEvent } from "react";
import { ALL_TREATMENT_GROUPS } from "@/data/homeContent";
import { cn } from "@/lib/utils";
import { useBook } from "./BookProvider";

export function BookModal() {
  const { open, sent, closeBook, markSent } = useBook();

  if (!open) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markSent();
  };

  const fieldClass = "neo-inset w-full rounded-full px-5 py-[15px] font-ui text-[14px] text-black outline-none";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-auto bg-black/40 p-4 home-fade sm:items-center sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Appointment request"
    >
      <button type="button" className="absolute inset-0 cursor-default" onClick={closeBook} aria-label="Close" />
      <div className="neo relative w-full max-w-[600px] rounded-[28px] p-6 home-rise sm:rounded-[40px] sm:p-10">
        <button
          type="button"
          onClick={closeBook}
          aria-label="Close appointment form"
          className="neo neo-press absolute top-4 right-4 flex size-[38px] items-center justify-center rounded-full font-ui text-[16px] text-maroon sm:top-6 sm:right-6"
        >
          ×
        </button>

        {sent ? (
          <div className="px-0 py-10 text-center">
            <div className="home-display mb-[18px] text-[clamp(28px,5vw,42px)] font-extralight leading-[1.1] text-black">
              Thank you — <em className="italic text-maroon">request received.</em>
            </div>
            <p className="home-display mx-auto max-w-[340px] text-[16px] font-light leading-[1.7] text-black">
              The clinic will call you within one working day to confirm your appointment time.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3.5 font-ui text-[10px] uppercase tracking-[0.3em] text-maroon">
              Appointment request
            </div>
            <h3 className="home-display mb-2 pr-10 text-[clamp(26px,5vw,38px)] font-extralight leading-[1.08] tracking-[-0.02em] text-black">
              Book a <em className="italic text-maroon">consultation.</em>
            </h3>
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
        )}
      </div>
    </div>
  );
}
