"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CloseIcon } from "@/components/icons";
import {
  SERVICE_CATEGORIES,
  type CatalogCategory,
  type ServiceKind,
} from "@/data/serviceCatalog";
import "@/components/home/home.css";

export const AI_DIAGNOSIS_URL = "https://ai.drsunitaesthetics.com/";

const SURGICAL = SERVICE_CATEGORIES.filter((c) => c.kind === "surgical");
const NONSURGICAL = SERVICE_CATEGORIES.filter((c) => c.kind === "nonsurgical");

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
        "group flex items-center gap-3 rounded-[22px] bg-maroon px-5 py-3.5 text-white transition-opacity hover:opacity-95 sm:rounded-full sm:px-7",
        className,
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <AiIcon className="size-5 text-white" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 font-ui text-[11px] font-medium uppercase tracking-[0.16em]">
          AI Diagnosis
          <span className="rounded-full bg-white px-2 py-0.5 font-ui text-[9px] font-semibold tracking-[0.12em] text-maroon">
            New
          </span>
        </span>
        <span className="mt-1 block font-ui text-[12px] font-normal tracking-normal text-white/85">
          Get an instant AI skin &amp; procedure assessment.
        </span>
      </span>
      <span className="shrink-0 text-[16px] transition-transform group-hover:translate-x-0.5">→</span>
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

function CategoryRow({
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
        "group flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left transition-all duration-200",
        active
          ? "bg-maroon text-white shadow-[0_10px_22px_rgba(161,83,78,0.28)]"
          : "text-black/80 hover:bg-white/70 hover:text-maroon",
      )}
    >
      <span className={cn("home-display flex-1 text-[15px] font-light leading-none tracking-[-0.01em]")}>
        {category.menuLabel}
      </span>
      <span
        className={cn(
          "font-ui text-[10px] tracking-[0.1em]",
          active ? "text-white/80" : "text-maroon/55 group-hover:text-maroon/80",
        )}
      >
        {String(category.items.length).padStart(2, "0")}
      </span>
    </button>
  );
}

function InnerServices({
  category,
  onNavigate,
}: {
  category: CatalogCategory;
  onNavigate: () => void;
}) {
  return (
    <div key={category.id} className="home-fade">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="mb-1.5 font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">
            {category.kind === "surgical" ? "Surgical care" : "Non-surgical care"}
          </p>
          <h3 className="home-display m-0 text-[clamp(22px,2.4vw,28px)] font-light leading-none tracking-[-0.025em] text-black">
            {category.title}
          </h3>
        </div>
        <span className="home-kicker !px-3 !py-1.5 font-ui">
          {category.items.length} treatments
        </span>
      </div>

      <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-1 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={`/services/${item.slug}`}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-full px-2.5 py-2 text-black transition-all duration-200 hover:bg-white/80 hover:text-maroon"
            >
              <span className="w-5 shrink-0 font-ui text-[10px] tracking-[0.12em] text-maroon/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="home-display min-w-0 flex-1 text-[14px] font-light leading-snug">
                {item.title}
              </span>
              <span className="shrink-0 text-[13px] text-maroon opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-1">
        <Link
          href={`/#${category.id}`}
          onClick={onNavigate}
          className="home-text-link inline-flex font-ui text-[11px] uppercase tracking-[0.14em] text-maroon"
        >
          View full {category.menuLabel.toLowerCase()} section
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------- Desktop -------------------------------- */

export function ServicesMegaMenu({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(SERVICE_CATEGORIES[0].id);
  const [panelBox, setPanelBox] = useState({ top: 88, left: 24, width: 640, overlayTop: 80 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = SERVICE_CATEGORIES.find((c) => c.id === activeId) ?? SERVICE_CATEGORIES[0];

  const close = () => setOpen(false);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const triggerRect = trigger.getBoundingClientRect();
    const header = trigger.closest("header");
    const headerRect = (header ?? trigger).getBoundingClientRect();
    const overlayTop = headerRect.bottom;
    const top = triggerRect.bottom + 12;

    const wrap = document.querySelector(".home-wrap");
    const wrapRect = wrap?.getBoundingClientRect();
    const gutter = window.innerWidth >= 1024 ? 72 : 18;
    const fullWidth = wrapRect?.width ?? Math.min(1120, window.innerWidth - gutter * 2);
    const width = Math.min(fullWidth * 0.8, window.innerWidth - 32);
    let left = wrapRect
      ? wrapRect.left + (wrapRect.width - width) / 2
      : (window.innerWidth - width) / 2;
    left = Math.max(16, Math.min(left, window.innerWidth - width - 16));

    setPanelBox({ top, left, width, overlayTop });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, updatePosition]);

  return (
    <div className="relative">
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

      {mounted &&
        open &&
        createPortal(
          <>
            <button
              type="button"
              tabIndex={-1}
              aria-label="Close services menu"
              className="fixed inset-0 z-[60] cursor-default bg-black/15"
              onClick={close}
            />
            <div
              ref={panelRef}
              role="dialog"
              aria-label="Our services"
              className="home-rise font-ui neo fixed z-[70] overflow-hidden rounded-[28px]"
              style={{
                top: panelBox.top,
                left: panelBox.left,
                width: panelBox.width,
                ["--ivory" as string]: "#f4eee7",
              }}
            >
              <div className="flex items-center justify-between gap-4 px-5 pt-4 pb-3 sm:px-6">
                <div>
                  <p className="home-kicker mb-2 !px-3 !py-1.5 font-ui">Treatment menu</p>
                  <p className="home-display text-[24px] font-light leading-none tracking-[-0.02em] text-black">
                    Our Services
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close services menu"
                  onClick={close}
                  className="neo flex size-9 items-center justify-center rounded-full text-maroon transition-transform hover:scale-[1.03]"
                >
                  <CloseIcon className="size-[17px]" />
                </button>
              </div>

              <div className="mx-4 mb-4 grid overflow-hidden rounded-[22px] md:mx-6 md:grid-cols-[240px_minmax(0,1fr)]">
                <nav className="neo-inset px-2.5 py-3 md:rounded-l-[22px] md:rounded-r-none">
                  <p className="px-3 pb-1.5 pt-1 font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">
                    Surgical
                  </p>
                  <div className="space-y-0.5">
                    {SURGICAL.map((category) => (
                      <CategoryRow
                        key={category.id}
                        category={category}
                        active={activeId === category.id}
                        onSelect={() => setActiveId(category.id)}
                      />
                    ))}
                  </div>
                  <div className="mx-2 my-2.5 border-t border-black/10" />
                  <p className="px-3 pb-1.5 pt-0.5 font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">
                    Non-surgical
                  </p>
                  <div className="space-y-0.5">
                    {NONSURGICAL.map((category) => (
                      <CategoryRow
                        key={category.id}
                        category={category}
                        active={activeId === category.id}
                        onSelect={() => setActiveId(category.id)}
                      />
                    ))}
                  </div>
                </nav>

                <div className="bg-white/45 px-5 py-4 md:rounded-r-[22px] md:rounded-l-none sm:px-7 sm:py-5">
                  <InnerServices category={active} onNavigate={close} />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 px-5 pb-4 sm:px-6">
                <Link
                  href="/#treatments"
                  onClick={close}
                  className="home-text-link font-ui text-[11px] uppercase tracking-[0.14em] text-black"
                >
                  Browse full library
                </Link>
                <a
                  href={AI_DIAGNOSIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="neo-btn neo-btn-solid !w-auto gap-2 !px-5 !py-2.5 text-[11px]"
                >
                  <AiIcon className="size-3.5" />
                  AI Diagnosis
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </>,
          document.body,
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
