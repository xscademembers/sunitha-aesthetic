import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function FillImage({
  src,
  alt,
  priority = false,
  quality = 80,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  unoptimized = false,
  className,
  style,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={quality}
      sizes={sizes}
      unoptimized={unoptimized}
      style={style}
      className={cn("object-cover", className)}
    />
  );
}
