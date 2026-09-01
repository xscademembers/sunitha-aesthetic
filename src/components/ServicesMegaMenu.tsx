"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CloseIcon } from "@/components/icons";
import {
  SERVICE_CATEGORIES,
  type CatalogCategory,
  type ServiceKind,
} from "@/data/serviceCatalog";

export const AI_DIAGNOSIS_URL = "https://ai.drsunitaesthetics.com/";

const SURGICAL = SERVICE_CATEGORIES.filter((c) => c.kind === "surgical");
const NONSURGICAL = SERVICE_CATEGORIES.filter((c) => c.kind === "nonsurgical");

function KindLabel({ kind }: { kind: ServiceKind }) {
  return (
    <p className="px-2 pb-1.5 pt-1 font-marcellus text-[11px] uppercase tracking-[0.16em] text-maroon/70">
      {kind === "surgical" ? "Surgical Services" : "Non-Surgical Services"}
    </p>
  );
}

function CategoryIcon({ category, className }: { category: CatalogCategory; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (category.id) {
    case "hair-surgery":
    case "hair-treatments":
      return (
        <svg {...common}>
          <path d="M5 21c0-9 3.5-15 7-15s7 6 7 15" />
          <path d="M9 21c0-6 1.3-10 3-10s3 4 3 10" />
        </svg>
      );
    case "face-surgery":
    case "injectables":
    case "anti-aging-aesthetic":
      return (
        <svg {...common}>
          <path d="M16 3.5A7 7 0 0 0 8 10c0 2 .8 3.2 1.5 4.2.6.8.5 1.6.5 2.3V21h5" />
          <path d="M11.5 10h.01" />
        </svg>
      );
    case "breast-surgery":
      return (
        <svg {...common}>
          <path d="M10 21c-2.5-4-4-7-4-10a6 6 0 0 1 12 0c0 3-1.5 6-4 10" />
          <path d="M9 8c1.5 2 4.5 2 6 0" />
        </svg>
      );
    case "mens-cosmetic-surgery":
      return (
        <svg {...common}>
          <path d="M4 20c1.5-3 4-4.5 8-4.5s6.5 1.5 8 4.5" />
          <circle cx="10" cy="8.5" r="3" />
          <path d="M13 6.5 17 3m0 0h-3.2M17 3v3.2" />
        </svg>
      );
    case "body-contouring-surgery":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 7v8M12 9l-4 2M12 9l4 2M12 15l-3 6M12 15l3 6" />
        </svg>
      );
    case "skin-rejuvenation":
    case "laser-treatments":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
          <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
          <path d="M12 8.5v4M10 10.5h4" />
        </svg>
      );
  }
}

function AiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3z" />
      <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
    </svg>
  );
}

function AiDiagnosisLink({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href={AI_DIAGNOSIS_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "group flex items-center gap-4 rounded-[16px] bg-maroon px-5 py-4 text-white transition-colors hover:bg-maroon-btn",
        className,
      )}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15">
        <AiIcon className="size-6 text-white" />
      </span>
      <span className="flex-1">
        <span className="flex items-center gap-2 font-marcellus text-[17px]">
          AI Diagnosis
          <span className="rounded-full bg-white px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wide text-maroon">
            New
          </span>
        </span>
        <span className="mt-0.5 block font-sans text-[13px] leading-[18px] text-light-text">
          Get an instant AI skin &amp; procedure assessment.
        </span>
      </span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-hover:translate-x-1">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

function FolderIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {open ? (
        <path d="M3.5 7.5h6l2-2h3l2 2h4a1.5 1.5 0 0 1 1.4 2l-2.1 8a1.5 1.5 0 0 1-1.45 1.1H5.65a1.5 1.5 0 0 1-1.45-1.1l-2.1-8a1.5 1.5 0 0 1 1.4-2Z" />
      ) : (
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h5l2 2h8A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      )}
    </svg>
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M6.5 3.5h7l4 4v13h-11v-17Z" />
      <path d="M13.5 3.5v4h4" />
    </svg>
  );
}

function CategoryNavButton({
  category,
  active,
  onSelect,
}: {
  category: CatalogCategory;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-2 rounded-[10px] px-2 py-2 text-left font-sans text-[14px] transition-colors",
        active ? "bg-maroon/10 font-medium text-maroon" : "text-black/75 hover:bg-maroon/5 hover:text-maroon",
      )}
    >
      <CategoryIcon category={category} className="size-4 shrink-0 text-maroon/70" />
      <span className="flex-1">{category.menuLabel}</span>
      <span className="text-[11px] text-gray-text">{category.items.length}</span>
    </button>
  );
}

function ServiceLinks({
  category,
  onNavigate,
}: {
  category: CatalogCategory;
  onNavigate: () => void;
}) {
  return (
    <div className="min-h-[280px]">
      <h3 className="flex items-center gap-2 border-b border-maroon/15 pb-2.5 font-marcellus text-[13px] uppercase tracking-[0.12em] text-maroon">
        <CategoryIcon category={category} className="size-4 text-maroon/70" />
        {category.title}
      </h3>
      <ul className="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/services/${item.slug}`}
              onClick={onNavigate}
              className="block rounded-[8px] px-1.5 py-1.5 font-sans text-[14px] leading-[19px] text-black/80 transition-colors hover:bg-maroon/5 hover:text-maroon"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------- Desktop -------------------------------- */

export function ServicesMegaMenu({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(SERVICE_CATEGORIES[0].id);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = SERVICE_CATEGORIES.find((c) => c.id === activeId) ?? SERVICE_CATEGORIES[0];

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      close();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="static">
      <div ref={triggerRef} className="relative z-50">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-[16px] text-black transition-colors duration-200 hover:bg-maroon/10",
            triggerClassName,
          )}
        >
          Our Services
          <ChevronDownIcon className={cn("size-2.5 transition-transform duration-200", open && "rotate-180")} />
        </button>
      </div>

      {open && (
        <>
          {createPortal(
            <button
              type="button"
              tabIndex={-1}
              aria-label="Close services menu"
              className="fixed inset-0 z-40 cursor-default bg-black/20"
              onClick={close}
            />,
            document.body,
          )}
          <div className="pointer-events-none absolute inset-x-0 top-full z-50 px-6 lg:px-[88px]">
            <div
              ref={panelRef}
              role="dialog"
              aria-label="Our services"
              className="pointer-events-auto relative mt-2 overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5 md:px-5">
                <p className="font-marcellus text-[13px] uppercase tracking-[0.14em] text-maroon">
                  Our Services
                </p>
                <button
                  type="button"
                  aria-label="Close services menu"
                  onClick={close}
                  className="flex size-9 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-maroon/10 hover:text-maroon"
                >
                  <CloseIcon className="size-[18px]" />
                </button>
              </div>
              <div className="grid md:grid-cols-[240px_1fr]">
                <nav className="border-b border-black/5 bg-maroon/[0.03] px-3 py-4 md:border-b-0 md:border-r">
                  <KindLabel kind="surgical" />
                  {SURGICAL.map((category) => (
                    <CategoryNavButton
                      key={category.id}
                      category={category}
                      active={activeId === category.id}
                      onSelect={() => setActiveId(category.id)}
                    />
                  ))}
                  <div className="my-2 border-t border-maroon/10" />
                  <KindLabel kind="nonsurgical" />
                  {NONSURGICAL.map((category) => (
                    <CategoryNavButton
                      key={category.id}
                      category={category}
                      active={activeId === category.id}
                      onSelect={() => setActiveId(category.id)}
                    />
                  ))}
                </nav>
                <div className="max-h-[min(70vh,560px)] overflow-y-auto px-6 py-6">
                  <ServiceLinks category={active} onNavigate={close} />
                </div>
              </div>
              <div className="border-t border-black/5 bg-maroon/5 px-8 py-4">
                <AiDiagnosisLink onClick={close} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* --------------------------------- Mobile -------------------------------- */

export function ServicesMobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [openKinds, setOpenKinds] = useState<Set<ServiceKind>>(() => new Set());
  const [openCategories, setOpenCategories] = useState<Set<string>>(() => new Set());

  const toggleKind = (kind: ServiceKind) => {
    setOpenKinds((current) => {
      const next = new Set(current);
      if (next.has(kind)) next.delete(kind);
      else next.add(kind);
      return next;
    });
  };

  const toggleCategory = (id: string) => {
    setOpenCategories((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const kindBlocks: { kind: ServiceKind; label: string; categories: CatalogCategory[] }[] = [
    { kind: "surgical", label: "Surgical Services", categories: SURGICAL },
    { kind: "nonsurgical", label: "Non-Surgical Services", categories: NONSURGICAL },
  ];

  return (
    <div className="w-full">
      <div className="space-y-1 py-1">
        {kindBlocks.map(({ kind, label, categories }) => {
          const kindOpen = openKinds.has(kind);
          const kindId = `mobile-services-${kind}`;
          const count = categories.reduce((n, c) => n + c.items.length, 0);

          return (
            <div key={kind}>
              <button
                type="button"
                aria-expanded={kindOpen}
                aria-controls={kindId}
                onClick={() => toggleKind(kind)}
                className="flex min-h-11 w-full items-center gap-2 rounded-[10px] px-2 text-left font-sans text-[15px] font-medium text-black/85 transition-colors hover:bg-maroon/10"
              >
                <ChevronDownIcon
                  className={cn(
                    "size-2.5 shrink-0 -rotate-90 transition-transform duration-200",
                    kindOpen && "rotate-0",
                  )}
                />
                <FolderIcon open={kindOpen} className="size-[19px] shrink-0 text-maroon" />
                <span className="flex-1">{label}</span>
                <span className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[11px] text-gray-text">
                  {count}
                </span>
              </button>

              {kindOpen && (
                <div id={kindId} className="ml-[18px] border-l border-maroon/20 py-1 pl-[14px]">
                  {categories.map((category) => {
                    const open = openCategories.has(category.id);
                    const panelId = `mobile-services-${category.id}`;

                    return (
                      <div key={category.id}>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => toggleCategory(category.id)}
                          className="flex min-h-10 w-full items-center gap-2 rounded-[10px] px-2 text-left font-sans text-[14px] font-medium text-black/80 transition-colors hover:bg-maroon/10"
                        >
                          <ChevronDownIcon
                            className={cn(
                              "size-2.5 shrink-0 -rotate-90 transition-transform duration-200",
                              open && "rotate-0",
                            )}
                          />
                          <FolderIcon open={open} className="size-[17px] shrink-0 text-maroon/80" />
                          <span className="flex-1">{category.menuLabel}</span>
                          <span className="rounded-md bg-black/[0.05] px-1.5 py-0.5 text-[11px] text-gray-text">
                            {category.items.length}
                          </span>
                        </button>

                        {open && (
                          <ul
                            id={panelId}
                            className="ml-[18px] border-l border-maroon/20 py-1 pl-[22px]"
                          >
                            {category.items.map((item) => (
                              <li
                                key={item.slug}
                                className="relative before:absolute before:-left-[22px] before:top-1/2 before:h-px before:w-4 before:bg-maroon/20"
                              >
                                <Link
                                  href={`/services/${item.slug}`}
                                  onClick={onNavigate}
                                  className="flex min-h-10 items-center gap-2.5 rounded-[9px] px-2 font-sans text-[14px] leading-[19px] text-black/75 transition-colors hover:bg-maroon/10 hover:text-maroon"
                                >
                                  <FileIcon className="size-4 shrink-0 text-maroon/60" />
                                  <span>{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <AiDiagnosisLink onClick={onNavigate} className="mt-5" />
    </div>
  );
}
