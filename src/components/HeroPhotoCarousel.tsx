"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HeroPhoto {
  src: string;
  alt: string;
}

interface HeroPhotoCarouselProps {
  images: HeroPhoto[];
  className?: string;
}

/**
 * Mobile-only swipeable carousel for the hero doctor photo.
 * Uses native scroll-snap so it works with touch out of the box.
 * On desktop the sticky <Image> in HeroSection is shown instead.
 */
export function HeroPhotoCarousel({ images, className }: HeroPhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActive(index);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="relative aspect-[1440/1690] w-full shrink-0 snap-center"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                active === i ? "w-6 bg-maroon" : "w-2 bg-white/70",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
