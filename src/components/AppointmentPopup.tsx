"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AppointmentForm } from "@/components/AppointmentForm";
import { OPEN_APPOINTMENT_EVENT } from "@/components/BrandButtons";
import { CloseIcon } from "@/components/icons";

const BOTTOM_THRESHOLD_PX = 160;
const MIN_SCROLL_PX = 80;

export function AppointmentPopup() {
  const [open, setOpen] = useState(false);
  const autoOpened = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    autoOpened.current = false;
    setOpen(false);

    const openHandler = () => setOpen(true);
    window.addEventListener(OPEN_APPOINTMENT_EVENT, openHandler);

    const tryOpenFromBottom = () => {
      if (autoOpened.current) return;
      if (window.scrollY < MIN_SCROLL_PX) return;
      const viewportBottom = window.scrollY + window.innerHeight;
      const pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (viewportBottom < pageHeight - BOTTOM_THRESHOLD_PX) return;
      autoOpened.current = true;
      setOpen(true);
    };

    const tryOpenFromSentinel = () => {
      if (autoOpened.current) return;
      if (window.scrollY < MIN_SCROLL_PX) return;
      autoOpened.current = true;
      setOpen(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) tryOpenFromSentinel();
      },
      { root: null, threshold: 0, rootMargin: `${BOTTOM_THRESHOLD_PX}px 0px` },
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    window.addEventListener("scroll", tryOpenFromBottom, { passive: true });
    document.addEventListener("scroll", tryOpenFromBottom, { passive: true, capture: true });
    window.addEventListener("resize", tryOpenFromBottom);

    return () => {
      window.removeEventListener(OPEN_APPOINTMENT_EVENT, openHandler);
      window.removeEventListener("scroll", tryOpenFromBottom);
      document.removeEventListener("scroll", tryOpenFromBottom, { capture: true });
      window.removeEventListener("resize", tryOpenFromBottom);
      observer.disconnect();
    };
  }, [pathname]);

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

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none h-1 w-full shrink-0"
      />
      {open ? (
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
      ) : null}
    </>
  );
}
