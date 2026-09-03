import Link from "next/link";
import {
  HOME_COPY,
  NONSURGICAL_COUNT,
  NONSURGICAL_GROUPS,
  SURGICAL_COUNT,
  SURGICAL_GROUPS,
  TOTAL_TREATMENT_COUNT,
  type TreatmentGroup,
} from "@/data/homeContent";
import { FillImage } from "./FillImage";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function TreatmentLibrary() {
  return (
    <section id="treatments" className="home-wrap">
      <div className="mb-8 grid items-end gap-5 lg:mb-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <div className="mb-4">
            <span className="home-kicker font-ui">{HOME_COPY.treatmentsKicker}</span>
          </div>
          <h2 className="home-display m-0 text-[clamp(34px,7vw,64px)] font-extralight leading-none tracking-[-0.035em] text-black">
            {HOME_COPY.treatmentsTitle}
          </h2>
        </div>
        <p className="home-display m-0 max-w-[400px] text-[16px] font-light leading-[1.65] text-pretty text-black sm:text-[17px]">
          {TOTAL_TREATMENT_COUNT} procedures. {HOME_COPY.treatmentsBody}
        </p>
      </div>

      <LibraryBlock title="Surgical Treatments" count={SURGICAL_COUNT} groups={SURGICAL_GROUPS} />
      <div className="mt-10 lg:mt-14">
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
      <div className="mb-4 flex items-center justify-between gap-4 rounded-[22px] bg-maroon px-5 py-4 text-white sm:mb-5 sm:rounded-full sm:px-7">
        <h3 className="home-display m-0 text-[clamp(22px,4vw,32px)] font-light leading-none tracking-[-0.02em]">
          {title}
        </h3>
        <span className="shrink-0 font-ui text-[10px] uppercase tracking-[0.16em] text-white/80 sm:tracking-[0.2em]">
          {count} treatments
        </span>
      </div>
      <div className="flex flex-col gap-4 sm:gap-5">
        {groups.map((group) => (
          <ServiceCard key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}

function ServiceCard({ group }: { group: TreatmentGroup }) {
  return (
    <article id={group.id} className="neo overflow-hidden rounded-[24px] sm:rounded-[36px]">
      <div className="grid md:grid-cols-[minmax(240px,0.88fr)_minmax(0,1.12fr)] md:items-stretch">
        <div className="neo-media relative aspect-[5/4] min-h-[220px] overflow-hidden bg-maroon sm:aspect-[4/5] sm:min-h-[280px] md:aspect-auto md:h-full md:min-h-[320px]">
          <FillImage src={group.image} alt={group.imageAlt} className="object-[center_18%]" />
        </div>

        <div className="flex min-w-0 flex-col justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="mb-4">
            <h4 className="home-display mt-0 mb-1.5 text-[clamp(26px,5vw,36px)] font-light leading-none tracking-[-0.02em] text-maroon">
              {group.name}
            </h4>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">{group.countLabel}</span>
          </div>
          <ul className="m-0 grid list-none grid-cols-1 border-t border-black/10 p-0 sm:grid-cols-2">
            {group.items.map((item, index) => (
              <li key={item.href} className="border-b border-black/10">
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-3 py-3 pr-1 text-black transition-colors hover:text-maroon focus-visible:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                >
                  <span className="flex min-w-0 items-baseline gap-3">
                    <span className="w-6 shrink-0 font-ui text-[10px] tracking-[0.14em] text-maroon">
                      {pad(index)}
                    </span>
                    <span className="home-display text-[15px] font-light leading-snug sm:text-[16px]">{item.name}</span>
                  </span>
                  <span className="shrink-0 text-[14px] text-maroon transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
