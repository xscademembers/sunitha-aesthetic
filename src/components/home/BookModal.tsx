"use client";

import { createPortal } from "react-dom";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useBook } from "./BookProvider";

export function BookModal() {
  const { open, sent, closeBook, markSent } = useBook();

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="home-ivory font-ui fixed inset-0 z-[1100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/50 p-4 home-fade sm:items-center sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment"
    >
      <button type="button" className="fixed inset-0 cursor-default" onClick={closeBook} aria-label="Close" />
      <div className="neo relative z-10 my-auto w-full max-w-[600px] rounded-[28px] p-5 home-rise sm:rounded-[40px] sm:p-10 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={closeBook}
          aria-label="Close appointment form"
          className="neo neo-press absolute top-3 right-3 flex size-11 items-center justify-center rounded-full font-ui text-[18px] text-maroon sm:top-6 sm:right-6"
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
          <>
            <div className="mb-3.5 font-ui text-[10px] uppercase tracking-[0.3em] text-maroon">
              Book Appointment
            </div>
            <h2 className="home-display mb-6 pr-10 text-[clamp(26px,5vw,38px)] font-extralight leading-[1.08] tracking-[-0.02em] text-black">
              Book a <em className="italic text-maroon">consultation.</em>
            </h2>
            <AppointmentForm idPrefix="book-modal" variant="ivory" onSuccess={markSent} />
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
