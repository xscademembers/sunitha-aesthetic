"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GalleryChevronIcon } from "@/components/icons";

export interface AutoGalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface AutoGalleryProps {
  images: AutoGalleryImage[];
  /** Square cell size in px at desktop (129 hero, 187 strip, 207 services). */
  cell: number;
  /** Gap between cells in px (site uses 32). */
  gap?: number;
  /** Cell corner radius in px (site uses ~10). */
  radius?: number;
  /** Auto-scroll speed in px/s (site pro-gallery drifts slowly). */
  speed?: number;
  arrows?: "both" | "right" | "none";
  className?: string;
}

/**
 * Continuous auto-scrolling image strip replicating the Wix pro-gallery slider:
 * drifts left forever; arrow clicks nudge one cell with easing; loops seamlessly.
 */
export function AutoGallery({
  images,
  cell,
  gap = 32,
  radius = 10,
  speed = 25,
  arrows = "both",
  className,
}: AutoGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const nudgeRef = useRef(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const unit = cell + gap;
  const loopWidth = images.length * unit;

  useEffect(() => {
    let rafId: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      // constant drift + ease out any pending arrow nudge
      offsetRef.current += speed * dt;
      if (Math.abs(nudgeRef.current) > 0.5) {
        const step = nudgeRef.current * Math.min(1, dt * 6);
        offsetRef.current += step;
        nudgeRef.current -= step;
      } else {
        nudgeRef.current = 0;
      }
      // wrap into [0, loopWidth)
      offsetRef.current = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [loopWidth, speed]);

  const doubled = [...images, ...images];

  return (
    <div className={cn("relative overflow-hidden", className)} style={{ height: cell }}>
      <div ref={trackRef} className="flex will-change-transform" style={{ gap }}>
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden"
            style={{ width: cell, height: cell, borderRadius: radius }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={cell}
              height={cell}
              sizes={`${cell}px`}
              loading="eager"
              className="h-full w-full object-cover"
            />
            {img.label && (
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center bg-black/50 px-2 text-center text-white transition-opacity duration-300",
                  hovered === i ? "opacity-100" : "opacity-0",
                )}
              >
                <span className="font-sans text-[15px] font-medium">{img.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {arrows !== "none" && (
        <>
          {arrows === "both" && (
            <button
              type="button"
              aria-label="Previous Item"
              onClick={() => (nudgeRef.current -= unit)}
              className="absolute left-3 top-1/2 flex size-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.15)]"
            >
              <GalleryChevronIcon className="h-[21px] w-[12px] -scale-x-100" />
            </button>
          )}
          <button
            type="button"
            aria-label="Next Item"
            onClick={() => (nudgeRef.current += unit)}
            className="absolute right-3 top-1/2 flex size-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.15)]"
          >
            <GalleryChevronIcon className="h-[21px] w-[12px]" />
          </button>
        </>
      )}
    </div>
  );
}
