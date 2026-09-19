"use client";

import { createPortal } from "react-dom";
import { BookForm } from "./BookForm";
import { useBook } from "./BookProvider";

export function BookModal() {
  const { open, sent, closeBook, markSent } = useBook();

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="home-ivory font-ui fixed inset-0 z-[1100] flex items-end justify-center overflow-auto bg-black/50 p-4 home-fade sm:items-center sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Appointment request"
    >
      <button type="button" className="absolute inset-0 cursor-default" onClick={closeBook} aria-label="Close" />
      <div className="neo relative z-10 w-full max-w-[600px] rounded-[28px] p-6 home-rise sm:rounded-[40px] sm:p-10">
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
          <BookForm variant="modal" onSuccess={markSent} />
        )}
      </div>
    </div>,
    document.body,
  );
}
