"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  NONSURGICAL_COUNT,
  NONSURGICAL_GROUPS,
  SURGICAL_COUNT,
  SURGICAL_GROUPS,
  TOTAL_TREATMENT_COUNT,
  type TreatmentGroup,
} from "@/data/homeContent";
import { cn } from "@/lib/utils";
import { FillImage } from "./FillImage";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function EditorialTreatments() {
  const groups = useMemo(() => [...SURGICAL_GROUPS, ...NONSURGICAL_GROUPS], []);
  const [activeId, setActiveId] = useState(SURGICAL_GROUPS[0]?.id ?? "");
  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (groups.some((group) => group.id === id)) setActiveId(id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [groups]);

  if (!active) return null;

  return (
    <section id="treatments" className="atelier-band-white py-10 lg:py-14">
      <div className="atelier-wrap">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="atelier-kicker mb-2">Treatments &amp; services</div>
            <h2 className="atelier-display m-0 text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.03em] text-black">
              The full <em className="italic text-maroon">library.</em>
            </h2>
          </div>
          <p className="m-0 max-w-[340px] text-[14px] leading-[1.55] text-black">
            {TOTAL_TREATMENT_COUNT} procedures. Choose a category, then open any treatment.
          </p>
        </div>

        <div className="mb-5 flex flex-col gap-3 border-y border-black/10 py-3">
          <CategoryRow
            label={`Surgical · ${SURGICAL_COUNT}`}
            groups={SURGICAL_GROUPS}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <CategoryRow
            label={`Non-surgical · ${NONSURGICAL_COUNT}`}
            groups={NONSURGICAL_GROUPS}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <article className="grid items-start gap-5 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8" aria-live="polite">
          <div className="atelier-media relative h-[200px] overflow-hidden sm:h-[240px] lg:h-[300px]">
            <FillImage src={active.image} alt={active.imageAlt} className="object-top" />
          </div>
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="atelier-display m-0 text-[clamp(24px,3vw,32px)] leading-none text-black">{active.name}</h3>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-maroon">{active.countLabel}</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {active.items.map((item, index) => (
                <li key={item.href} className="border-t border-black/10">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-3 py-2.5 pr-1 text-black transition-colors hover:text-maroon"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="w-6 shrink-0 text-[10px] tracking-[0.14em] text-maroon">{pad(index)}</span>
                      <span className="truncate text-[14px] leading-snug sm:text-[15px]">{item.name}</span>
                    </span>
                    <span className="shrink-0 text-[14px] transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function CategoryRow({
  label,
  groups,
  activeId,
  onSelect,
}: {
  label: string;
  groups: TreatmentGroup[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="w-[118px] shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-maroon">{label}</span>
      <div className="flex min-w-0 flex-wrap gap-1.5">
        {groups.map((group) => {
          const selected = group.id === activeId;
          return (
            <button
              key={group.id}
              id={group.id}
              type="button"
              onClick={() => onSelect(group.id)}
              aria-current={selected ? "true" : undefined}
              className={cn(
                "shrink-0 border px-3 py-2 text-[12px] tracking-[0.02em] transition-colors sm:py-1.5",
                selected
                  ? "border-maroon bg-maroon text-white"
                  : "border-black/15 bg-white text-black hover:border-maroon hover:text-maroon",
              )}
            >
              {group.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
