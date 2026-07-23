import type { Stat } from "@/types/content";

const STATS: Stat[] = [
  { label: "Happy Patients", value: "2,478+" },
  { label: "Years of Experience", value: "17+" },
  { label: "Surgeries per year", value: "200+" },
  { label: "No of Staff", value: "24+" },
];

export function StatsBar() {
  return (
    <section className="bg-white pb-[106px] pt-[58px]">
      <div className="mx-6 grid max-w-[1296px] grid-cols-1 items-center rounded-[28px] bg-maroon py-8 shadow-[0_20px_40px_-20px_rgba(161,83,78,0.45)] sm:grid-cols-2 lg:mx-[72px] lg:h-[225px] lg:grid-cols-4 lg:py-0 xl:mx-auto">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={
              "flex h-full flex-col items-center justify-center py-4 text-center lg:py-0" +
              (i > 0 ? " lg:border-l lg:border-white/25" : "")
            }
          >
            <p className="font-sans text-[18px] font-bold leading-[25.2px] text-white/90">
              {s.label}
            </p>
            <p className="mt-[10px] font-serif text-[38px] leading-[53.2px] text-light-text">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
