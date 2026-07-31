import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProcedureCard, ProcedureSectionData } from "@/types/content";

function CardArrowChip({ title, slug }: { title: string; slug?: string }) {
  return (
    <Link
      href={slug ? `/services/${slug}` : "#contact"}
      aria-label={`Learn more about ${title}`}
      className="group ml-auto mr-4 flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-maroon shadow-[0_8px_16px_-8px_rgba(161,83,78,0.5)] transition-all duration-300 hover:border-black hover:bg-white lg:mr-[39px] lg:size-[42px]"
    >
      <svg
        viewBox="0 0 12 21"
        className="h-[17px] w-[10px] fill-white transition-all duration-300 group-hover:rotate-180 group-hover:fill-black"
      >
        <path d="M1.5.94.44 2l8.06 8-8.06 8L1.5 19.06 10.62 10Z" />
      </svg>
    </Link>
  );
}

function Card({ card }: { card: ProcedureCard }) {
  return (
    <div className="flex min-h-[120px] w-full max-w-[626px] items-center rounded-[18px] border border-maroon/10 bg-white py-4 shadow-[0_8px_24px_-16px_rgba(161,83,78,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_-18px_rgba(161,83,78,0.45)] lg:h-[155px] lg:py-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={card.icon} alt="" className="ml-4 size-12 shrink-0 lg:ml-[30px] lg:size-[65px]" />
      <div className="ml-4 max-w-[330px] lg:ml-[28px]">
        <h3 className="font-sans text-[16px] font-bold text-maroon lg:text-[18px]">{card.title}</h3>
        <p className="mt-[6px] font-sans text-[13px] leading-[19px] text-gray-text lg:text-[15px] lg:leading-[21px]">
          {card.description}
        </p>
      </div>
      <CardArrowChip title={card.title} slug={card.slug} />
    </div>
  );
}

/** Matches the shadow baked into the composite (non-circleCrop) artwork. */
const CIRCLE_SHADOW = "shadow-[0_10px_28px_-4px_rgba(0,0,0,0.22)]";

export function ProcedureSection({ data }: { data: ProcedureSectionData }) {
  const [imgW, imgH] = data.imageSize;
  const imageFirst = data.imageSide === "left";

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
          <div className="mt-6 flex flex-col gap-[22px] lg:mt-[38px]">
            {data.cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
