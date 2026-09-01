import Link from "next/link";
import {
  NONSURGICAL_COUNT,
  NONSURGICAL_GROUPS,
  SURGICAL_COUNT,
  SURGICAL_GROUPS,
  TOTAL_TREATMENT_COUNT,
  type TreatmentGroup,
} from "@/data/homeContent";
import { FillImage } from "./FillImage";

export function TreatmentLibrary() {
  return (
    <section id="treatments" className="home-wrap">
      <div className="mb-9 grid items-end gap-6 lg:mb-[46px] lg:grid-cols-2 lg:gap-8">
        <div>
          <div className="mb-4 sm:mb-5">
            <span className="home-kicker font-ui">Treatments &amp; services</span>
          </div>
          <h2 className="home-display m-0 text-[clamp(34px,7vw,64px)] font-extralight leading-none tracking-[-0.035em] text-black">
            One library. <em className="italic text-maroon">Listed once.</em>
          </h2>
        </div>
        <p className="home-display m-0 max-w-[400px] text-[16px] font-light leading-[1.65] text-pretty text-black sm:text-[17px]">
          {TOTAL_TREATMENT_COUNT} procedures, every name on the page. Choose one to read what it
          involves, who it suits and how recovery works.
        </p>
      </div>

      <LibraryBlock title="Surgical Treatments" count={SURGICAL_COUNT} groups={SURGICAL_GROUPS} />
      <div className="mt-10 lg:mt-[52px]">
        <LibraryBlock title="Non-Surgical Treatments" count={NONSURGICAL_COUNT} groups={NONSURGICAL_GROUPS} />
      </div>
    </section>
  );
}

function LibraryBlock({
  title,
  count,
  groups,
}: {
  title: string;
  count: number;
  groups: TreatmentGroup[];
}) {
  return (
    <>
      <div className="neo mb-1 flex flex-wrap items-center justify-between gap-3 rounded-[28px] px-5 py-4 sm:rounded-full sm:gap-5 sm:px-7 sm:py-4">
        <h3 className="home-display m-0 text-[clamp(24px,4.2vw,36px)] font-light leading-none tracking-[-0.02em] text-maroon">
          {title}
        </h3>
        <span className="neo-chip shrink-0 px-4 py-2 font-ui text-[10px] uppercase tracking-[0.18em] text-maroon sm:px-5 sm:tracking-[0.24em]">
          {count} treatments
        </span>
      </div>
      {groups.map((group) => (
        <ServiceCard key={group.id} group={group} />
      ))}
    </>
  );
}

function ServiceCard({ group }: { group: TreatmentGroup }) {
  return (
    <article
      id={group.id}
      className="neo mt-4 grid grid-cols-1 items-stretch gap-4 rounded-[24px] p-3.5 sm:mt-6 sm:rounded-[36px] sm:gap-5 sm:p-5 md:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] md:gap-7 md:p-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 lg:p-7"
    >
      <div className="neo-media relative h-[200px] overflow-hidden rounded-[18px] sm:h-[280px] md:h-full md:min-h-[280px] lg:rounded-[28px]">
        <FillImage src={group.image} alt={group.imageAlt} className="object-top" />
      </div>
      <div className="flex min-w-0 flex-col justify-center py-1">
        <h4 className="home-display mt-0 mb-1.5 text-[clamp(24px,6vw,36px)] font-light leading-[1.12] tracking-[-0.02em] text-maroon">
          {group.name}
        </h4>
        <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-maroon">{group.countLabel}</span>
        <div className="mt-4 flex flex-wrap content-start gap-2 sm:mt-5 sm:gap-3">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="neo-chip px-3.5 py-2 font-ui text-[12px] leading-[1.2] tracking-[0.01em] sm:px-5 sm:py-[11px] sm:text-[13px]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
