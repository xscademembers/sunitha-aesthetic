"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export const HOME_PAGES = [
  { label: "Home 1", href: "/", description: "Ivory studio" },
  { label: "Home 2", href: "/home-2", description: "Editorial atelier" },
] as const;

export function HomeDropdown({
  triggerClassName,
  menuClassName,
  itemClassName,
}: {
  triggerClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onClickOutside = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-2 font-sans text-[15px] text-black transition-colors duration-200 hover:bg-maroon/10 xl:px-4 xl:text-[16px]",
          triggerClassName,
        )}
      >
        Home
        <ChevronDownIcon className={cn("size-2.5 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div
          role="menu"
          className={cn(
            "absolute top-full left-0 z-50 mt-2 min-w-[228px] overflow-hidden rounded-[16px] border border-black/8 bg-white py-2 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.25)]",
            menuClassName,
          )}
        >
          {HOME_PAGES.map((page) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex flex-col gap-0.5 px-4 py-2.5 transition-colors hover:bg-maroon/8",
                  active ? "text-maroon" : "text-black",
                  itemClassName,
                )}
              >
                <span className="text-[14px] font-medium">{page.label}</span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-black/45">{page.description}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function HomeMobileLinks({
  onNavigate,
  linkClassName,
}: {
  onNavigate?: () => void;
  linkClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {HOME_PAGES.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          onClick={onNavigate}
          className={cn(
            "flex min-h-11 items-center justify-between gap-3 px-2 py-2 text-[15px]",
            pathname === page.href ? "text-maroon" : "text-black/80",
            linkClassName,
          )}
        >
          <span>{page.label}</span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-maroon/70">{page.description}</span>
        </Link>
      ))}
    </div>
  );
}
