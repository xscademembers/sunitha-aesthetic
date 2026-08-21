import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProcedureCard, ProcedureSectionData } from "@/types/content";

function CardArrowChip({
  title,
  slug,
  compact,
}: {
  title: string;
  slug?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={slug ? `/services/${slug}` : "#contact"}
      aria-label={`Learn more about ${title}`}
      className={cn(
        "group ml-auto flex shrink-0 items-center justify-center rounded-full border border-transparent bg-maroon shadow-[0_8px_16px_-8px_rgba(161,83,78,0.5)] transition-all duration-300 hover:border-black hover:bg-white",
        compact ? "mr-3 size-8" : "mr-4 size-9 lg:mr-[39px] lg:size-[42px]",
      )}
    >
      <svg
        viewBox="0 0 12 21"
        className={cn(
          "fill-white transition-all duration-300 group-hover:rotate-180 group-hover:fill-black",
          compact ? "h-[14px] w-[8px]" : "h-[17px] w-[10px]",
        )}
      >
        <path d="M1.5.94.44 2l8.06 8-8.06 8L1.5 19.06 10.62 10Z" />
      </svg>
    </Link>
  );
}

function Card({ card, compact }: { card: ProcedureCard; compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full items-center rounded-[18px] border border-maroon/10 bg-white shadow-[0_8px_24px_-16px_rgba(161,83,78,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-18px_rgba(161,83,78,0.45)]",
        compact
          ? "min-h-[92px] py-3"
          : "min-h-[120px] max-w-[626px] py-4 lg:h-[155px] lg:py-0",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.icon}
        alt=""
        className={cn(
          "ml-4 shrink-0",
          compact ? "size-10" : "size-12 lg:ml-[30px] lg:size-[65px]",
        )}
      />
      <div className={cn("ml-3 min-w-0 flex-1 pr-2", !compact && "ml-4 max-w-[330px] lg:ml-[28px]")}>
        <h3
          className={cn(
            "font-sans font-bold text-maroon",
            compact ? "text-[14px] leading-snug lg:text-[15px]" : "text-[16px] lg:text-[18px]",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mt-1 font-sans text-gray-text",
            compact
              ? "line-clamp-2 text-[12px] leading-[17px]"
              : "text-[13px] leading-[19px] lg:text-[15px] lg:leading-[21px]",
          )}
        >
          {card.description}
        </p>
      </div>
      <CardArrowChip title={card.title} slug={card.slug} compact={compact} />
    </div>
  );
}

/** Matches the shadow baked into the composite (non-circleCrop) artwork. */
const CIRCLE_SHADOW = "shadow-[0_10px_28px_-4px_rgba(0,0,0,0.22)]";

export function ProcedureSection({ data }: { data: ProcedureSectionData }) {
  const [imgW, imgH] = data.imageSize;
  const imageFirst = data.imageSide === "left";
  const compact = data.cards.length > 4;

  return (
    <section id={data.id} className="bg-belt py-10 lg:py-[72px]">
      <div className="grid grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-[43px]">
        {/* Image column (desktop only, sticky) */}
        <div className={cn("relative hidden lg:block", imageFirst ? "lg:order-1" : "lg:order-2")}>
          <div className="lg:sticky lg:top-[72px]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              width={imgW}
              height={imgH}
              sizes="50vw"
              loading="eager"
              className={cn(
                "mx-auto h-auto object-cover",
                data.circleCrop && ["aspect-square rounded-full", CIRCLE_SHADOW],
              )}
              style={{ maxWidth: `min(100%, ${imgW}px)` }}
            />
          </div>
        </div>

        {/* Cards column */}
        <div className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}>
          <p className="font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            {data.eyebrow}
          </p>
          <h2 className="mt-1 font-serif text-[28px] font-bold leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
            {data.title}
          </h2>
          {/* Mobile: image between title and cards */}
          <Image
            src={data.image}
            alt={data.imageAlt}
            width={imgW}
            height={imgH}
            sizes="100vw"
            loading="eager"
            className={cn(
              "mx-auto mt-6 h-auto w-full max-w-[420px] object-cover lg:hidden",
              data.circleCrop && ["aspect-square rounded-full", CIRCLE_SHADOW],
            )}
          />
          <div
            className={cn(
              "mt-6 lg:mt-[38px]",
              compact
                ? "grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-4"
                : "flex flex-col gap-[22px]",
            )}
          >
            {data.cards.map((card) => (
              <Card key={card.slug ?? card.title} card={card} compact={compact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
