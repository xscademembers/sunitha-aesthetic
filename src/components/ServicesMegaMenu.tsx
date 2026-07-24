"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";
import { SERVICES } from "@/data/services";

export const AI_DIAGNOSIS_URL = "https://ai.drsunitaesthetics.com/";

type Group =
  | "Body"
  | "Breast"
  | "Gynecomastia"
  | "Reconstructive"
  | "Face"
  | "Skin"
  | "Hair";
const GROUP_ORDER: Group[] = [
  "Body",
  "Breast",
  "Gynecomastia",
  "Reconstructive",
  "Face",
  "Skin",
  "Hair",
];

/** Menu category per service slug. Unmapped services fall into "Body". */
const GROUP_OF: Record<string, Group> = {
  "hair-treatments": "Hair",
  "laser-hair-reduction": "Hair",

  "nose-surgery": "Face",
  "eyelid-surgery": "Face",
  "ear-surgery": "Face",
  "lip-surgery": "Face",
  "face-lift": "Face",
  "double-chin-correction": "Face",
  "non-surgical-rhinoplasty": "Face",
  "lip-enhancement": "Face",
  microblading: "Face",

  "breast-augmentation": "Breast",
  "breast-reduction": "Breast",

  // Gynecomastia — the male chest ("men's breast") is medically called
  // gynecomastia, so it lives in its own category, not under Breast.
  "gynecomastia-treatment-in-visakhapatnam": "Gynecomastia",
  "puffy-nipple-correction": "Gynecomastia",
  "glandular-gynecomastia-correction": "Gynecomastia",
  "male-chest-liposuction": "Gynecomastia",

  liposuction: "Body",
  "tummy-tuck": "Body",
  "mommy-makeover": "Body",
  "lower-body-sculpting": "Body",

  "laser-toning": "Skin",
  "laser-for-pigmentation": "Skin",
  "co2-laser": "Skin",
  "vampire-facelift": "Skin",
  morpheus8: "Skin",
  "anti-wrinkle-injections": "Skin",
  "dermal-fillers": "Skin",
  "power-shots": "Skin",
  forma: "Skin",

  "chest-reconstruction": "Reconstructive",
  "cleft-lip-palate-surgery": "Reconstructive",
  "scar-revision": "Reconstructive",
  "post-burn-reconstruction": "Reconstructive",
};

interface Item {
  slug: string;
  title: string;
}

/** All services grouped into the six menu categories, in fixed order. */
const COLUMNS: [Group, Item[]][] = (() => {
  const map = new Map<Group, Item[]>(GROUP_ORDER.map((g) => [g, []]));
  for (const s of SERVICES) {
    map.get(GROUP_OF[s.slug] ?? "Body")!.push({ slug: s.slug, title: s.title });
  }
  return GROUP_ORDER.map((g) => [g, map.get(g)!] as [Group, Item[]]).filter(
    ([, items]) => items.length,
  );
})();

function GroupIcon({ group, className }: { group: Group; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (group) {
    case "Hair":
      return (
        <svg {...common}>
          <path d="M5 21c0-9 3.5-15 7-15s7 6 7 15" />
          <path d="M9 21c0-6 1.3-10 3-10s3 4 3 10" />
        </svg>
      );
    case "Face":
      return (
        <svg {...common}>
          <path d="M16 3.5A7 7 0 0 0 8 10c0 2 .8 3.2 1.5 4.2.6.8.5 1.6.5 2.3V21h5" />
          <path d="M11.5 10h.01" />
        </svg>
      );
    case "Breast":
      // Awareness ribbon
      return (
        <svg {...common}>
          <path d="M10 21c-2.5-4-4-7-4-10a6 6 0 0 1 12 0c0 3-1.5 6-4 10" />
          <path d="M9 8c1.5 2 4.5 2 6 0" />
        </svg>
      );
    case "Gynecomastia":
      // Male symbol over a chest contour — men's chest sculpting
      return (
        <svg {...common}>
          <path d="M4 20c1.5-3 4-4.5 8-4.5s6.5 1.5 8 4.5" />
          <circle cx="10" cy="8.5" r="3" />
          <path d="M13 6.5 17 3m0 0h-3.2M17 3v3.2" />
        </svg>
      );
    case "Body":
      return (
        <svg {...common}>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 7v8M12 9l-4 2M12 9l4 2M12 15l-3 6M12 15l3 6" />
        </svg>
      );
    case "Skin":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
          <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
        </svg>
      );
    case "Reconstructive":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
          <path d="M12 8.5v4M10 10.5h4" />
        </svg>
      );
  }
}

function Column({ group, items, onNavigate }: { group: Group; items: Item[]; onNavigate: () => void }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 border-b border-maroon/15 pb-2.5 font-marcellus text-[13px] uppercase tracking-[0.12em] text-maroon">
        <GroupIcon group={group} className="size-4 text-maroon/70" />
        {group}
      </h3>
      <ul className="mt-3.5 space-y-2.5">
        {items.map((it) => (
          <li key={it.slug}>
            <Link
              href={`/services/${it.slug}`}
              onClick={onNavigate}
              className="block font-sans text-[14px] leading-[19px] text-black/80 transition-colors hover:text-maroon"
            >
              {it.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
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

/* -------------------------------- Desktop -------------------------------- */

export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={wrapRef} className="static">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-[16px] text-black transition-colors duration-200 hover:bg-maroon/10"
      >
        Our Services
        <ChevronDownIcon className={cn("size-2.5 transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 px-6 lg:px-[88px]">
          <div className="mt-2 overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.28)]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-8 py-8 md:grid-cols-4 xl:grid-cols-7">
              {COLUMNS.map(([group, items]) => (
                <Column key={group} group={group} items={items} onNavigate={close} />
              ))}
            </div>
            <div className="border-t border-black/5 bg-maroon/5 px-8 py-4">
              <AiDiagnosisLink onClick={close} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------------------- Mobile -------------------------------- */

export function ServicesMobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [openGroups, setOpenGroups] = useState<Set<Group>>(() => new Set());

  const toggleGroup = (group: Group) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  };

  return (
    <div className="w-full">
      <div className="space-y-1 py-1">
        {COLUMNS.map(([group, items]) => {
          const open = openGroups.has(group);
          const panelId = `mobile-services-${group.toLowerCase()}`;

          return (
            <div key={group}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggleGroup(group)}
                className="flex min-h-11 w-full items-center gap-2 rounded-[10px] px-2 text-left font-sans text-[15px] font-medium text-black/85 transition-colors hover:bg-maroon/10"
              >
                <ChevronDownIcon
                  className={cn(
                    "size-2.5 shrink-0 -rotate-90 transition-transform duration-200",
                    open && "rotate-0",
                  )}
                />
                <FolderIcon open={open} className="size-[19px] shrink-0 text-maroon" />
                <span className="flex-1">{group}</span>
                <span className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[11px] text-gray-text">
                  {items.length}
                </span>
              </button>

              {open && (
                <ul
                  id={panelId}
                  className="ml-[18px] border-l border-maroon/20 py-1 pl-[22px]"
                >
                  {items.map((item) => (
                    <li key={item.slug} className="relative before:absolute before:-left-[22px] before:top-1/2 before:h-px before:w-4 before:bg-maroon/20">
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
      <AiDiagnosisLink onClick={onNavigate} className="mt-5" />
    </div>
  );
}
