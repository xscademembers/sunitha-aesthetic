"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { OPEN_APPOINTMENT_EVENT } from "@/components/BrandButtons";
import { CloseIcon } from "@/components/icons";

const AUTO_OPEN_DELAY_MS = 2500;

export function AppointmentPopup() {
  const [open, setOpen] = useState(false);
  const autoOpened = useRef(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener(OPEN_APPOINTMENT_EVENT, openHandler);
    const t = setTimeout(() => {
      if (!autoOpened.current) {
        autoOpened.current = true;
        setOpen(true);
      }
    }, AUTO_OPEN_DELAY_MS);
    return () => {
      window.removeEventListener(OPEN_APPOINTMENT_EVENT, openHandler);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment Form"
      onClick={close}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-[417px] max-w-[92vw] overflow-y-auto rounded-[24px] bg-white p-8 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.5)]"
      >
        <button
          type="button"
          aria-label="Back to site"
          onClick={close}
          className="absolute right-4 top-4 text-black transition-transform duration-300 hover:rotate-180"
        >
          <CloseIcon className="size-[18px]" />
        </button>
        <h2 className="font-serif text-[41px] leading-tight text-black">Book Appointment</h2>
        <div className="mt-6">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
