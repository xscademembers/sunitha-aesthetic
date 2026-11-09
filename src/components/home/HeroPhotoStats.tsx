import { HOME_STATS } from "@/data/homeContent";
import { cn } from "@/lib/utils";
import { FillImage } from "./FillImage";

type HeroPhotoStatsProps = {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
  imageClassName?: string;
  className?: string;
};

export function HeroPhotoStats({
  src,
  alt,
  priority = false,
  quality = 80,
  unoptimized = false,
  imageClassName,
  className,
}: HeroPhotoStatsProps) {
  return (
    <div
      className={cn(
        "neo neo-media relative isolate flex flex-col overflow-hidden rounded-[22px] bg-maroon sm:rounded-[32px] lg:h-full",
        className,
      )}
    >
      {/* Portrait on phones; shorter crop on tablets so content isn't pushed too far down */}
      <div className="relative aspect-[4/5] max-h-[560px] min-h-[280px] w-full overflow-hidden sm:aspect-[4/3] sm:min-h-[320px] lg:aspect-auto lg:max-h-none lg:min-h-[420px] lg:flex-1">
        <FillImage
          src={src}
          alt={alt}
          priority={priority}
          quality={quality}
          unoptimized={unoptimized}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={cn("object-cover object-center", imageClassName)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent lg:from-black/50" />

        {/* Large screens: 4-up overlay strip */}
        <div className="absolute inset-x-0 bottom-0 z-[1] hidden bg-maroon/95 text-white xl:grid xl:grid-cols-4">
          {HOME_STATS.map((stat, index) => (
            <StatCell key={stat.label} stat={stat} index={index} layout="row" />
          ))}
        </div>
      </div>

      {/* Phones + tablets + mid desktop: 2×2 under the photo so labels stay readable */}
      <div className="grid grid-cols-2 bg-maroon text-white xl:hidden">
        {HOME_STATS.map((stat, index) => (
          <StatCell key={stat.label} stat={stat} index={index} layout="grid" />
        ))}
      </div>
    </div>
  );
}

function StatCell({
  stat,
  index,
  layout,
}: {
  stat: (typeof HOME_STATS)[number];
  index: number;
  layout: "grid" | "row";
}) {
  return (
    <div
      className={cn(
        "px-3 py-3.5 sm:px-4 sm:py-4",
        layout === "row"
          ? cn(index > 0 && "border-l border-white/20")
          : cn(index % 2 === 1 && "border-l border-white/20", index >= 2 && "border-t border-white/20"),
      )}
    >
      <div
        className={cn(
          "home-display font-light leading-none",
          layout === "row" ? "text-[26px]" : "text-[24px] sm:text-[28px]",
        )}
      >
        {stat.value}
      </div>
      <div
        className={cn(
          "mt-1.5 font-ui uppercase leading-[1.35] text-white/85",
          layout === "row" ? "text-[10px] tracking-[0.14em]" : "text-[10px] tracking-[0.12em] sm:text-[11px]",
        )}
      >
        {stat.label}
      </div>
    </div>
  );
}
