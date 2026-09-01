"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { OPEN_APPOINTMENT_EVENT } from "@/components/BrandButtons";

type BookContextValue = {
  open: boolean;
  sent: boolean;
  openBook: () => void;
  closeBook: () => void;
  markSent: () => void;
};

const BookContext = createContext<BookContextValue | null>(null);

export function BookProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openBook = useCallback(() => {
    setSent(false);
    setOpen(true);
  }, []);

  const closeBook = useCallback(() => setOpen(false), []);
  const markSent = useCallback(() => setSent(true), []);

  useEffect(() => {
    const onOpen = () => openBook();
    window.addEventListener(OPEN_APPOINTMENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_APPOINTMENT_EVENT, onOpen);
  }, [openBook]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBook();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeBook]);

  return (
    <BookContext.Provider value={{ open, sent, openBook, closeBook, markSent }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProvider");
  return context;
}
